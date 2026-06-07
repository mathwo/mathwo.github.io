(function () {
  function initMonthlyProblemPreviews() {
    var previews = document.querySelectorAll('.monthly-problem-preview');
    if (!previews.length) {
      return;
    }

    var activePreview = null;
    var pinnedPreview = null;
    var hideTimer;
    var popup = document.createElement('div');
    var closeButton = document.createElement('button');
    var popupContent = document.createElement('div');
    popup.className = 'monthly-problem-preview-popup';
    closeButton.className = 'monthly-problem-preview-popup__close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close thumbnails');
    closeButton.textContent = '×';
    popupContent.className = 'monthly-problem-preview-popup__content';
    popup.appendChild(closeButton);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    function positionPopup(preview) {
      var previewRect = preview.getBoundingClientRect();
      var table = preview.closest('table');
      var tableRect = table ? table.getBoundingClientRect() : previewRect;
      var tableContentRect = previewRect;
      var gap = 12;
      var popupWidth = popup.offsetWidth || 608;
      var popupHeight = popup.offsetHeight || Math.min(window.innerHeight * 0.78, 520);
      if (table) {
        Array.prototype.forEach.call(table.querySelectorAll('th, td'), function (cell) {
          var cellRect = cell.getBoundingClientRect();
          tableContentRect = {
            left: Math.min(tableContentRect.left, cellRect.left),
            right: Math.max(tableContentRect.right, cellRect.right)
          };
        });
      }

      var left = tableContentRect.right + gap;
      if (left + popupWidth > window.innerWidth - gap) {
        left = tableContentRect.left - popupWidth - gap;
      }

      if (window.innerWidth <= 640 || left < gap) {
        popup.style.position = 'absolute';
        popup.style.left = Math.max(gap, tableContentRect.left + window.pageXOffset) + 'px';
        popup.style.top = (tableRect.bottom + window.pageYOffset + gap) + 'px';
        return;
      }

      popup.style.position = 'fixed';
      var top = previewRect.top + (previewRect.height / 2) - (popupHeight / 2);
      top = Math.max(gap, Math.min(top, window.innerHeight - popupHeight - gap));
      popup.style.left = left + 'px';
      popup.style.top = top + 'px';
    }

    function hide() {
      activePreview = null;
      pinnedPreview = null;
      window.clearTimeout(hideTimer);
      popup.classList.remove('is-open');
      popupContent.innerHTML = '';
    }

    function show(preview) {
      var panel = preview.querySelector('.monthly-problem-preview__panel');
      if (!panel) {
        return;
      }

      activePreview = preview;
      popupContent.innerHTML = panel.innerHTML;
      popup.classList.add('is-open');
      positionPopup(preview);
    }

    function scheduleHoverHide() {
      if (pinnedPreview) {
        return;
      }
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(function () {
        if (!pinnedPreview) {
          activePreview = null;
          popup.classList.remove('is-open');
          popupContent.innerHTML = '';
        }
      }, 350);
    }

    Array.prototype.forEach.call(previews, function (preview) {
      var panel = preview.querySelector('.monthly-problem-preview__panel');
      var monthLink = preview.querySelector('a');
      if (!panel) {
        return;
      }

      preview.addEventListener('mouseenter', function () {
        if (!pinnedPreview) {
          window.clearTimeout(hideTimer);
          show(preview);
        }
      });
      preview.addEventListener('mouseleave', scheduleHoverHide);
      preview.addEventListener('focusin', function () {
        if (!pinnedPreview) {
          window.clearTimeout(hideTimer);
          show(preview);
        }
      });
      preview.addEventListener('focusout', scheduleHoverHide);
      monthLink.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        window.clearTimeout(hideTimer);
        pinnedPreview = preview;
        show(preview);
      });
    });

    popup.addEventListener('mouseenter', function () {
      if (!pinnedPreview) {
        window.clearTimeout(hideTimer);
      }
    });
    popup.addEventListener('mouseleave', scheduleHoverHide);
    popup.addEventListener('click', function (event) {
      event.stopPropagation();
    });
    closeButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      hide();
    });
    document.addEventListener('click', hide);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        hide();
      }
    });
    window.addEventListener('scroll', function () {
      if (activePreview && popup.classList.contains('is-open')) {
        positionPopup(activePreview);
      }
    });
    window.addEventListener('resize', function () {
      if (activePreview && popup.classList.contains('is-open')) {
        positionPopup(activePreview);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMonthlyProblemPreviews);
  } else {
    initMonthlyProblemPreviews();
  }
})();
