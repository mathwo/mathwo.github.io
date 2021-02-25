---
date: 2021-02-02 07:56
category:
author:
tags: []
summary:
---

### 02/02/2021

#### Let $ABC$ be a triangle with $AB=13, BC=14, AC=15$. Let $H, I, M$ be the orthocenter of $▵{ABC}$, incenter of $▵{ABC}$, and midpoint of $BC$, respectively. What is the area of $▵{HIM}$?

**Solve:**

![image-20210203104841231](/assets/images/2021-02/image-20210203104841231.png){:class="image--x2l"}

In Barycentric Coordinate system, we have the coordinates for points $H, I$ and $M$ as:

$M=(0 : \dfrac{1}{2} : \dfrac{1}{2}), I=(a : b : c), H=(tanA : tanB : tanC)$

Now we calculate and normalize them:

$a=14, b=15, c=13 \implies s=\dfrac{a+b+c}{2}=21$

$S_{\triangle{AVC}}=\sqrt{s(s-a)(s-b)(s-c)}=\sqrt{21 \times 8 \times 7 \times 6}=84$

Here we can get $sinA, sinB, sinC$ from

$S_{\triangle{ABC}}=\dfrac{1}{2}bcsinA=\dfrac{1}{2}acsinB=\dfrac{1}{2}absinC$

Then get $tanA, tanB, tanC$ from $sinA, sinB, sinC$. Alternatively, we can use following approach:

$a^2+b^2-c^2=14^2+15^2-13^2=252$

$b^2+c^2-a^2=15^2+13^2-14^2=198$

$c^2+a^2-b^2=13^2+14^2-15^2=140$
$$
\begin{align*}
\begin{bmatrix}
       tan(A) \\
       tan(B) \\
       tan(C)
\end{bmatrix}&=\begin{bmatrix}
       (c^2+a^2-b^2)(a^2+b^2-c^2)\\
       (a^2+b^2-c^2)(b^2+c^2-a^2) \\
       (b^2+c^2-a^2)(c^2+a^2-b^2)
\end{bmatrix}=\begin{bmatrix}
       (13^2+14^2-15^2)(14^2+15^2-13^2)\\
       (14^2+15^2-13^2)(15^2+13^2-14^2) \\
       (15^2+13^2-14^2)(13^2+14^2-15^2)
\end{bmatrix}\\
&=\begin{bmatrix}
       \dfrac{140 \times 252}{140 \times 252+252 \times 198+198 \times 140}\\
       \dfrac{252 \times 198}{140 \times 252+252 \times 198+198 \times 140}\\
       \dfrac{140 \times 198}{140 \times 252+252 \times 198+198 \times 140}
\end{bmatrix}=\begin{bmatrix}
       \dfrac{5}{16}\\
       \dfrac{99}{224}\\
       \dfrac{55}{224}
\end{bmatrix}\\
\implies H &= \begin{bmatrix}
       tan(A) \\
       tan(B) \\
       tan(C)
\end{bmatrix}=\begin{bmatrix}
       \dfrac{5}{16}\\
       \dfrac{99}{224}\\
       \dfrac{55}{224}
\end{bmatrix}
\end{align*}
$$
$$\begin{align*}
I &=
\begin{bmatrix}
       a \\
       b \\
       c
\end{bmatrix}=\begin{bmatrix}
       14 \\
       15 \\
       13
\end{bmatrix}=\begin{bmatrix}
       \dfrac{14}{13+14+15} \\
       \dfrac{15}{13+14+15} \\
       \dfrac{13}{13+14+15}
\end{bmatrix}=\begin{bmatrix}
       \dfrac{1}{3} \\
       \dfrac{5}{14} \\
       \dfrac{13}{42}
\end{bmatrix}
\end{align*}$$

Then we know (three points in counter-clock wise order)
$$
\begin{align*}
\dfrac{S_{\triangle{HIM}}}{S_{\triangle{ABC}}}&=\begin{vmatrix}
0 & \dfrac{1}{2} & \dfrac{1}{2} \\
\dfrac{1}{3} & \dfrac{5}{14} & \dfrac{13}{42}\\
\dfrac{5}{16} & \dfrac{99}{224} & \dfrac{55}{224}
\end{vmatrix}=\dfrac{13 \times 5}{2 \times 16 \times 42} + \dfrac{99}{6 \times 224}-\dfrac{5 \times 5}{2 \times 14 \times 16}-\dfrac{55}{2 \times 3 \times 224}\\&=\dfrac{34}{6 \times 224} \implies S_{\triangle{HIM}}=84 \times \dfrac{34}{6 \times 224}=\boxed{\dfrac{17}{8}}
\end{align*}
$$

**MATLAB code**

```matlab
syms a b c
fc = a^2 + b^2 - c^2;
fb = a^2 + c^2 - b^2;
fa = b^2 + c^2 - a^2;
f = fa*fb + fb*fc + fc*fa;
s = a + b + c;
S = sqrt(s/2 * (s/2 - a) * (s/2 - b) * (s/2 - c));
SValue = subs(S);
A = [0 1/2 1/2; a/s b/s c/s; fb*fc/f fa*fc/f fa*fb/f];
B = det(A, 'Algorithm', 'minor-expansion');
pretty(B)
a = 14; b = 15; c = 13;
subs(B)
subs(B * SValue)
```

**Result:**
```
B = -(- a^3*b + a^3*c - a^2*b^2 + a^2*c^2 + a*b^3 + a*b^2*c - a*b*c^2 - a*c^3 + b^4 - 2*b^3*c + 2*b*c^3 - c^4)/(2*(a^4 - 2*a^2*b^2 - 2*a^2*c^2 + b^4 - 2*b^2*c^2 + c^4))
     3      3      2  2    2  2      3      2          2      3    4      3          3    4
  - a  b + a  c - a  b  + a  c  + a b  + a b  c - a b c  - a c  + b  - 2 b  c + 2 b c  - c
- -----------------------------------------------------------------------------------------
                          4      2  2      2  2    4      2  2    4
                        (a  - 2 a  b  - 2 a  c  + b  - 2 b  c  + c ) 2
ans =
17/672
ans =
17/8
```

**References:**

* [Barycentric Coordinates in Olympiad Geometry - Evan Chen](/assets/files/barycentric/barycentric_coordinates_in_olympiad_geometry.pdf)
* [Barycentric Coordinates for the impatient - Evan Chen](/assets/files/barycentric/barycentric_coordinates_for_the_impatient.pdf)
* [Barycentric Coordinates](/assets/files/barycentric/barycentric_coordinates.pdf)
* [Introduction to the Geometry of the Triangle](/assets/files/barycentric/introduction_to_the_geometry_of_the_triangle.pdf)

---

### 02/21/2021

#### Two distinct regular tetrahedra have all their vertices among the vertices of the same unit cube. What is the volume of the region formed by the intersection of the tetrahedra? **(AMC 10 2011 A problem 24)**

**Solve:**

![image-20210221234051710](/assets/images/2021-02/image-20210221234051710.png){:class="image--x2l"}

The tetrahedron $A'C'DB$ has faces $A'BC'$, $A'BD$, $BC'D$ and $A'C'D$

The tetrahedron $AB'CD'$ has faces $AB'D'$,$ACD'$, $B'CD'$ and $AB'C$

and here are their insect segments:

* $A'BC'$ intersects $B'CD'$ at $FG'$, intersects $AB'D'$ at $EG'$, intersects $AB'C$ at $EF$, and does not intersect $ACD'$

![image-20210222002937783](/assets/images/2021-02/image-20210222002937783.png){:class="image--lg"}

* $A'BD$ intersects $ACD'$ at $F'G$, intersects $AB'D'$ at $EF'$, intersects $AB'C$ at $EG$, and does not intersect $B'CD'$

  ![image-20210222003548320](/assets/images/2021-02/image-20210222003548320.png){:class="image--lg"}

* $BC'D$ intersects $ACD'$ at $E'G$, intersects $B'CD'$ at $E'F$, intersects $AB'C$ at $FG$, and does not intersect $AB'D'$

  ![image-20210222004318557](/assets/images/2021-02/image-20210222004318557.png){:class="image--lg"}

* $A'C'D$ intersects $ACD'$ at $E'F'$, intersects $B'CD'$ at $E'G'$, intersects $AB'D'$ at $F'G'$, and does not intersect $AB'C$:

  ![image-20210222005246588](/assets/images/2021-02/image-20210222005246588.png){:class="image--lg"}


|         | $ACD'$  | $B'CD'$ | $AB'D'$ | $AB'C$ |
| :-----: | :-----: | :-----: | :-----: | :----: |
| $A'BC'$ | N/A     | $FG'$   | $EG'$   | $EF$   |
| $A'BD$  | $F'G$   | N/A     | $EF'$   | $EG$   |
| $BC'D$  | $E'G$   | $E'F$   | N/A     | $FG$   |
| $A'C'D$ | $E'F'$  | $E'G'$  | $F'G'$  | N/A    |


![image-20210222142528946](/assets/images/2021-02/image-20210222142528946.png){:class="image--x2l"}

So the intersection part is $EFE'F'GG'$, and all the edges are equal in length which equals to $\dfrac{1}{\sqrt{2}}$, $EFFE'$ is a square, and $GG'=1$

So the volume of $EFE'F'GG'$ is $2 \times \dfrac{GG'}{2} \times \dfrac{1}{3} \times S_{EFE'F'}=\dfrac{1}{2} \times \dfrac{1}{3}=\boxed{\dfrac{1}{6}}$.

---

### 02/24/2021

#### As shown in the figure, in $\triangle{ABC}$, $BC=a, CA=b, AB=c$ and $a, b, c$ are all positive integers. The greatest common factor of $a$ and $b$ is $2$. $G$ and $I$ are the centroid and incenter of $\triangle{ABC}$, respectively. With $GI \perp CI$, find the perimeter of $\triangle{ABC}$.

![image-20210225040625577](/assets/images/2021-02/image-20210225040625577.png){:class="image--lg"}

**Solve 1:**

Using Barycentric coordinates, and try to normalize to the same common base:

$G=((a+b+c) : (a+b+c) : (a+b+c))$

$I = (3a : 3b : 3c)$

$C = (0 : 0 : 3(a+b+c))$

So

$GI=((2a-b-c) : (2b-a-c) : (2c-a-b))$

$CI = (3a : 3b : (-3a-3b))$

According to EFFT(Evan's Favorite Forgotten Trick), vector $MN=(x_1 : y_1 : z_1), PQ=(x_2 : y_2 : z_2), MN \perp PQ$ iff $0=a^2(y_2z_1 + y_1z_2) + b^2(x_1z_2+x_2z_1) + c^2(x_1y_2 + z_2y_1)$. So

$0=a^2(3b(2c-a-b)-3(a+b)(2b-a-c)) + b^2(3a(2c-a-b)-3(a+b)(2a-b-c)) + c^2(3a(2b-a-c)+3b(2a-b-c))$

$\implies 0=a^2(b(2c-a-b)-(a+b)(2b-a-c))+b^2(a(2c-a-b)-(a+b)(2a-b-c))+c^2(a(2b-a-c)+b(2a-b-c))$

This is a bit hard to do manual factorization but with [tools](https://www.wolframalpha.com/input/?i=factor+%5B%28a%5E2b%2Bab%5E2%29%282c-a-b%29%2Ba%28c%5E2-a%5E2-ab%29%282b-a-c%29%2Bb%28c%5E2-b%5E2-ab%29%282a-b-c%29%5D) we can:

$\implies (a + b - c) (a + b + c) (a^2 - 4 a b + b^2 + a c + b c) = 0$

Or, we can do MATLAB:

```matlab
syms a b c
G = [a+b+c a+b+c a+b+c];
I = [3*a 3*b 3*c];
C = [0 0 3*a+3*b+3*c];
GI = I - G;
CI = I - C;
P = a^2 * (GI(2) * CI(3) + GI(3) * CI(2)) + b^2 * (GI(1) * CI(3) + CI(1) * GI(3)) + c^2 * (GI(1) * CI(2) + GI(2) * CI(1));
factor(P)
```

$\implies a^2 - 4 a b + b^2 + a c + b c = 0 \implies (a+b)(a+b+c)=6ab \implies a+b+c=\dfrac{6ab}{a+b}$

$gcf(a,b)=2 \implies a=2m, b=2n, gcf(m,n)=1, m,n \in \mathbb{Z^+}$

$\implies a+b+c=\dfrac{12mn}{m+n} \in \mathbb{Z^+}, gcf(m,n)=1 \implies (m+n) \mid 12$

$\implies m+n=2, 3, 4, 6, 12 \text{, and } \lvert a-b \lvert \lt c=\dfrac{6ab}{a+b}-a-b \lt a+b $

* $m+n=2 \implies m=n=1 \implies a=b=2 \implies c=2 \implies GI \not\perp CI$
* $m+n=3 \implies m=1, n=2 \text{ or } m=2, n=1 \implies a+b=6, ab=8 \implies c=2= \lvert b-a \lvert $
* $m+n=4 \implies m=1, n=3 \text{ or } m=2, n=2 \text{ or } m=3, n=1 \implies a+b=8, ab=12 \text{ or } 16$
  $\implies c=1 \text{ or } 4 \implies GI \not\perp CI \text{ or } c= \lvert b-a \lvert $
* $m+n=6 \implies a+b=12, ab=20 \text{ or } 32 \text{ or } 36 \implies c=4 \text{ or } 6$
  $\implies GI \not\perp CI \text{ or } c= \lvert b-a \lvert $
* $m + n = 12 \implies a+b=24, ab=44 \text{ or } 80 \text{ or } 108 \text{ or } 128 \text{ or } 140$
  $\implies c=3 \text{ or } 8 \text{ or } 11 \implies c=11, a=14, b=10 \text{ or } c=11, a=10, b=14$
  $\implies a+b+c=\boxed{35}$

**Solve 2:** ([Ref](https://math.stackexchange.com/questions/1593075/how-to-prove-that-6ab-ababc-for-triangle))

Let $D$ and $E$ be the intersections of $GI$ with $CA$ and $BC$ respectively.

$GI \perp CI \implies CD=CE$

Using Trilinear coordinates:

$I=(1 : 1 : 1)$

$G=(\dfrac{1}{a} : \dfrac{1}{b} : \dfrac{1}{c})$

So the equation of $GI$ is:
$$
\begin{align*}
\begin{vmatrix}
       1 & 1 & 1 \\
       \dfrac{1}{a} & \dfrac{1}{b} & \dfrac{1}{c} \\
       x & y & z
\end{vmatrix}=0 \implies (\dfrac{1}{c}-\dfrac{1}{b})x+(\dfrac{1}{a}-\dfrac{1}{c})y+(\dfrac{1}{b}-\dfrac{1}{a})z=0
\end{align*}
$$
and $A=(1 : 0 : 0), C=(0 : 0 : 1)$, the equation of $AC$ is $y=0$, thus intersection $D$ is determined by

$(\dfrac{1}{c}-\dfrac{1}{b})x+(\dfrac{1}{b}-\dfrac{1}{a})z=0 \implies a(b-c)x + c(a-b)z=0$

$\implies D=(c(b-a) : 0 : a(b-c))$

Similarly, $B=(0 : 1 : 0)$, the equation of $BC$ is $x=0$, thus intersection $E$ is determined by

$(\dfrac{1}{a}-\dfrac{1}{c})y+(\dfrac{1}{b}-\dfrac{1}{a})z=0 \implies b(c-a)y + c(a-b)z=0$

$\implies E=(0 : c(a-b) : b(a-c))$

$CD=DE \implies d(D, BC) = d(E, AC)$

We know the actual distances of point with trilinear coordinate $(x:y:z)$ from the sides $BC, CA, AB$ are given by $a'=kx, b'=ky, c'=kz$ where $k=\dfrac{2S_{\triangle{ABC}}}{ax+by+cz}$, so

$d(D, BC)=c(b-a)k = c(b-a)\dfrac{2S_{\triangle{ABC}}}{ac(b-a) + ac(b-c)}$

$d(E, AC)=b(a-c)k = c(a-b)\dfrac{2S_{\triangle{ABC}}}{bc(a-b) + bc(a-c)}$

$d(D, BC)=d(E, AC) \implies ac(a+c-2b)=bc(2a-b-c) \implies (a+b)(a+b+c)=6ab$

**Solve 3:**

Let $D$ and $E$ be the intersections of $GI$ with $CA$ and $BC$ respectively. Suppose the distances from $G$ to $AC$ and $BC$ are $h_1$ and $h_2$ respectively.

$GI \perp CI \implies CD=CE$

$S_{\triangle{CDE}}=CQ \times r_{incenter}=\dfrac{1}{2}CQ(h_1+h_2)$

$S_{\triangle{ABC}}=p\times r_{incenter}=\dfrac{1}{2}a \times 3h_1=\dfrac{1}{2}b \times 3h_2$

$\implies h_1=\dfrac{2S_{\triangle{ABC}}}{3b}, h_2=\dfrac{2S_{\triangle{ABC}}}{3a}, r_{incenter}=\dfrac{2S_{\triangle{ABC}}}{a+b+c}$

$\implies \dfrac{4S_{\triangle{ABC}}}{a+b+c}=2r=h_1+h_2=\dfrac{2S_{\triangle{ABC}}}{3a}+\dfrac{2S_{\triangle{ABC}}}{3b}$

$\implies (a+b)(a+b+c)=6ab$

**References:**

* [Trilinear Coordinates - Wiki](/assets/files/trilinear_coordinates/trilinear_coordinates-wiki.pdf)
* [Trilinear Coordinates from a book](/assets/files/trilinear_coordinates/22_Trilinear_Coordinates.pdf)
