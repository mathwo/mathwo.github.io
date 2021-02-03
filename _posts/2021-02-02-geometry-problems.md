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

In Barycentic Coordinate system, we have the coordinates for points $H, I$ and $M$ as:

$M=(0, \dfrac{1}{2}, \dfrac{1}{2}), I=(a,b,c), H=(tanA, tanB, tanC)$

Now we calculate and normalize them:

$a=14, b=15, c=13 \implies$

$s=\dfrac{a+b+c}{2}=21$

$S_{\triangle{AVC}}=\sqrt{s(s-a)(s-b)(s-c)}=\sqrt{1` \times 8 \times 7 \times 6}=84$

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
\end{align*}
$$
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
       \dfrac{14}{13+14+!5} \\
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
