param([switch]$Apply)

$ErrorActionPreference = 'Stop'
$historyModuleVersion = '2.4.5'
$historyProfilePath = $PROFILE.CurrentUserCurrentHost
$historyDocumentsPath = [Environment]::GetFolderPath('MyDocuments')
$historyModulePath = Join-Path $historyDocumentsPath "WindowsPowerShell\Modules\PSReadLine\$historyModuleVersion"
$historyConfig = @'

# VS Code: suggest the most recent command matching what you type.
if ($env:TERM_PROGRAM -eq 'vscode') {
    Import-Module PSReadLine -MinimumVersion 2.4.5
    Set-PSReadLineOption -PredictionSource History -PredictionViewStyle InlineView
    Set-PSReadLineKeyHandler -Key RightArrow -Function ForwardChar
    Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
    Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward
}
'@

if (-not $Apply) {
    [pscustomobject]@{
        Source = "https://www.powershellgallery.com/api/v2/package/PSReadLine/$historyModuleVersion"
        InstallPath = $historyModulePath
        ProfilePath = $historyProfilePath
        ProfileAddition = $historyConfig
        Backup = 'Timestamped copy of the original profile before modifying it'
    } | ConvertTo-Json
    exit
}

if ($PSVersionTable.PSVersion.Major -ne 5) { throw 'Run this installer with Windows PowerShell 5.1.' }
if (Get-Module PSReadLine) { throw 'Run this installer with -NoProfile in a noninteractive PowerShell process.' }
if (-not (Test-Path -LiteralPath $historyModulePath)) {
    $historyStage = Join-Path $PSScriptRoot ('package-' + [guid]::NewGuid().ToString('N'))
    New-Item -ItemType Directory -Path $historyStage | Out-Null
    $historyPackage = Join-Path $historyStage 'PSReadLine.2.4.5.zip'
    [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -UseBasicParsing -Uri "https://www.powershellgallery.com/api/v2/package/PSReadLine/$historyModuleVersion" -OutFile $historyPackage
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $historyExpanded = Join-Path $historyStage 'expanded'
    [IO.Compression.ZipFile]::ExtractToDirectory($historyPackage, $historyExpanded)
    $historyManifest = Join-Path $historyExpanded 'PSReadLine.psd1'
    $historyManifestData = Import-PowerShellDataFile -LiteralPath $historyManifest
    if ($historyManifestData.ModuleVersion -ne $historyModuleVersion) { throw 'Unexpected downloaded module version.' }
    foreach ($historySignedFile in @('PSReadLine.psd1', 'PSReadLine.psm1', 'Microsoft.PowerShell.PSReadLine.dll')) {
        $historySignature = Get-AuthenticodeSignature -LiteralPath (Join-Path $historyExpanded $historySignedFile)
        if ($historySignature.Status -ne 'Valid' -or $historySignature.SignerCertificate.Subject -notmatch 'O=Microsoft Corporation') {
            throw "Microsoft signature validation failed for $historySignedFile`: $($historySignature.Status)"
        }
    }
    New-Item -ItemType Directory -Path $historyModulePath -Force | Out-Null
    Get-ChildItem -LiteralPath $historyExpanded -Force | Copy-Item -Destination $historyModulePath -Recurse
}

Import-Module (Join-Path $historyModulePath 'PSReadLine.psd1') -ErrorAction Stop
if (-not (Get-Command Set-PSReadLineOption).Parameters.ContainsKey('PredictionViewStyle')) {
    throw 'Installed PSReadLine does not support inline history predictions.'
}
$historyProfileText = if (Test-Path -LiteralPath $historyProfilePath) { [IO.File]::ReadAllText($historyProfilePath) } else { '' }
if ($historyProfileText -notmatch '# VS Code: suggest the most recent command matching what you type\.') {
    if (Test-Path -LiteralPath $historyProfilePath) {
        $historyBackup = $historyProfilePath + '.backup-' + (Get-Date -Format 'yyyyMMdd-HHmmss')
        Copy-Item -LiteralPath $historyProfilePath -Destination $historyBackup
        Write-Output "Profile backup: $historyBackup"
    } else {
        New-Item -ItemType Directory -Path (Split-Path -Parent $historyProfilePath) -Force | Out-Null
    }
    $historyNewProfile = $historyProfileText.TrimEnd("`r", "`n") + "`r`n" + ($historyConfig -replace "`r?`n", "`r`n") + "`r`n"
    $historyParseTokens = $null
    $historyParseErrors = $null
    [void][Management.Automation.Language.Parser]::ParseInput($historyNewProfile, [ref]$historyParseTokens, [ref]$historyParseErrors)
    if ($historyParseErrors.Count) { throw ($historyParseErrors | Out-String) }
    [IO.File]::WriteAllText($historyProfilePath, $historyNewProfile, (New-Object Text.UTF8Encoding($true)))
}
[pscustomobject]@{
    InstalledVersion = (Get-Module PSReadLine).Version.ToString()
    ModulePath = (Get-Module PSReadLine).Path
    UpdatedProfile = $historyProfilePath
    RestartRequired = 'Open a new VS Code PowerShell terminal to load the updated module.'
} | ConvertTo-Json
