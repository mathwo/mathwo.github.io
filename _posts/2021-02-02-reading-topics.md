---
date: 2021-02-02 07:57
category:
author:
tags: []
summary:
---

### 02/09/2021

#### The Erdős–Szekeres Theorem

This is a [great proof](https://medium.com/cantors-paradise/monotonicity-will-prevail-finite-sequences-the-pigeonhole-principle-and-the-erd%C5%91s-szekeres-f5980f88d17) for The Erdős–Szekeres Theorem, and it introduces a subfield **extremal combinatorics** by the book **“Extremal Combinatorics with applications in Computer Science”** by Stasys Jukna.

### 02/26/2021

#### Trilinear coordinates and Barycentric coordinates

![image-20210226030930850](/assets/images/2021-02/image-20210226030930850.png){:class="image--lg"}

$a : b : c = sinA : sinB : sinC$

$(X : Y : Z)_{Trilinear}=(aX : bY : cZ)_{barycentric}$

$(X : Y : Z)\xrightarrow[\text{homogenize}]{\text{normalize}}\left(\dfrac{X}{X+Y+Z}:\dfrac{Y}{X+Y+Z}:\dfrac{Z}{X+Y+Z}\right)$

|                        | Trilinear Coordinates                                        | Barycentric Coordinates |
| ---------------------- | ------------------------------------------------------------ | ----------------------- |
| $A$                    | $1 : 0 : 0$                                                  | $a : 0 : 0$             |
| $B$                    | $0 : 1 : 0$                                                  | $0 : b : 0$             |
| $C$                    | $0 : 0 : 1$                                                  | $0 : 0 : c$             |
| $Incenter(I)$          | $1 : 1 : 1$                                                  | $a : b : c$             |
| $Centroid(G)$          | $\dfrac{1}{a} : \dfrac{1}{b} : \dfrac{1}{c}=bc : ac : ab=cscA : cscB : cscC$ | $1 : 1 : 1$         |
| $Circumcenter(O)$      | $cosA : cosB : cosC$                                         | $sin2A : sin2B : sin2C$ |
| $Orthocenter(H)$       | $secA : secB : secC$                                         | $tanA : tanB : tanC$    |
| $Nine-Point Center(N)$ | $cos(B-C) : cos(C-A) : cos(A-B)$                             |                         |
| $Symmedian Point(S)$   | $a : b : c = sinA : sinB : sinC$                             | $a^2 : b^2 : c^2$       |
| $A-Excenter(J_A)$      | $-1 : 1 : 1$                                                 | $-a : b : c$            |
| $B-Excenter(J_B)$      | $1 : -1 : 1$                                                 | $a : -b : c$            |
| $C-Excenter(J_C)$      | $1 : 1 : -1$                                                 | $a : b : -c$            |

* The equation of points on the line $P=(p : q : r)$ and $Q=(u : v : w)$ is:
  $$
  \begin{align*}
  \begin{vmatrix}
  p & q & r\\
  u & v & w\\
  x & y & z
  \end{vmatrix} = 0
  \end{align*}
  $$

* The point with trilinear coordinate $(p:q:r)$ has the value $p, q, r$ being the actual perpendicular distances to the sides $a, b, c$ satisfy

  $pa+qb+rc=2S_{\triangle{ABC}}$

* EFFT(Evan's Favorite Forgotten Trick): Consider displacement vectors $\overrightarrow{MN}=(x_1 : y_1 : z_1)$ and $\overrightarrow{PQ}=(x_2 : y_2 : z_2)$. Then $MN \perp PQ$ iff $0=a^2(y_1z_2+y_2z_1)+b^2(x_1z_2+x_2z_1)+c^2(x_1y_2+x_2y_1)$

*

