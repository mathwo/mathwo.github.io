---
title: Geometry Problems
date: 2020-11-11 20:58
tags: Geometry
---

### 11/09/2020

![problem image](/assets/images/image-20201109101018448.png){:class="image--x2l"}

**The distance from a point D inside equilateral triangle $\triangle{ABC}$ to the vertices are a, b and c respectively. Solve the area for $S_{\triangle{ABC}}$**

#### Solution 1

![solution 1 image](/assets/images/image-20201109101623268.png){:class="image--x2l"}

Rotate $\triangle{BDC}$ by $60^{\circ}$ to $\triangle{AEC}$ so we have $AE=b$.

Then $cos{\angle{ADE}}=\dfrac{a^2+c^2-b^2}{2ac}$,

$sin{\angle{ADE}}=\sqrt{1-\dfrac{(a^2+c^2-b^2)^2}{4a^2c^2}}$

$ = \dfrac{ \sqrt{(2ac+a^2+c^2-b^2)(2ac-a^2-c^2+b^2)} }{2ac} $

$ = \dfrac{\sqrt{(a+c+b)(a+c-b)(b+a-c)(b-a+c)}}{2ac} $

Then we know

$cos{\angle{ADC}}=cos(\angle{ADE}+60^{\circ})=cos{\angle{ADE}} \cdot cos60^{\circ} - sin{\angle{ADE}} \cdot sin{60^{\circ}}$

$=\dfrac{a^2+c^2-b^2}{4ac}-\dfrac{\sqrt{3(a+b+c)(a+b-c)(b+c-a)(c+a-b)}}{4ac}$

$=\dfrac{a^2+c^2-AC^2}{2ac}$

$ \implies AC^2=\dfrac{a^2+b^2+c^2}{2}+\dfrac{\sqrt{3(a+b+c)(a+b-c)(b+c-a)(c+a-b)}}{2} $

$ \implies S_{\triangle{ABC}}=\dfrac{\sqrt{3}}{4}AC^2 $

$=\boxed{\dfrac{\sqrt{3}}{8}(a^2+b^2+c^2)+\dfrac{3}{8}\sqrt{(a+b+c)(a+b-c)(b+c-a)(c+a-b)}}$

#### Solution 2

![Solution 2 image](/assets/images/image-20201112142202515.png){:class="image--x2l"}

Rotate $\triangle{BDC}$ by $60^{\circ}$ to $\triangle{AEC}$ , $\triangle{CDA}$ by $60^{\circ}$ to $\triangle{BFA}$, $\triangle{ADB}$ by $60^{\circ}$ to $\triangle{CGB}$.

Easy to find that $CG=AF=a, AE=BG=b, BF=CE=c$.

So $S_{AFBGCE}=2 \cdot S_{\triangle{ABC}}=3 \cdot S_{\triangle{CDG}} + S_{\triangle{CDE}} + S_{\triangle{BDG}} + S_{\triangle{ADF}}$

According to [Heron's formula](https://en.wikipedia.org/wiki/Heron%27s_formula) :

$S_{\triangle{CDG}}=\dfrac{\sqrt{(a+b+c)(a+b-c)(b+c-a)(c+a-b)}}{4}$

And we know

$S_{\triangle{CDE}}=\dfrac{\sqrt{3}}{4} c^2$, $S_{\triangle{BDG}}=\dfrac{\sqrt{3}}{4} b^2$, $S_{\triangle{ADF}}=\dfrac{\sqrt{3}}{4} a^2$

So we have

$S_{\triangle{ABC}}=\boxed{\dfrac{\sqrt{3}}{8}(a^2+b^2+c^2)+\dfrac{3}{8}\sqrt{(a+b+c)(a+b-c)(b+c-a)(c+a-b)}}$

---

### 11/12/2020

![image-20201116221941530](/assets/images/image-20201116221941530.png){:class="image--x4l"}

#### A semicircle is constructed on line segment $AB$. Another  semicircle is constructed on chord $CD$, intersecting $AB$ at $P$ and $Q$. If $AP = 3$,$PQ = 7$, and $QB = 2$, then  find the length $CD$.

#### Solution 1

![image-20201116221408123](/assets/images/image-20201116221408123.png){:class="image--x4l"}

$ \triangle{POK} \sim \triangle{DOQ}, PO=3, DO=6, OQ=4 \implies KO = 2 \implies CD= \sqrt{6^2+8^2-2^2}=\boxed{\sqrt{96}} $

#### Solution 2

$OE=\dfrac{1}{2}, PE=\dfrac{7}{2},O_1E^2+OE^2=OO_1^2$, $O_1E^2 + PE^2 = PO_1^2 = CO_1^2=OO_1^2-\dfrac{1}{4}+\dfrac{49}{4}=OO_1^2 + 12$

$OO_1^2 + CO_1^2 = CO^2 = 6^2 \implies CO_1^2 = 24 \implies CD = \boxed{2\sqrt{24}=\sqrt{96}}$

---

### 11/15/2020

#### Let $\triangle{ABC}$ be an acute triangle with circumcircle $\omega$, and let $H$ be the intersection of the altitudes of $\triangle{ABC}$. Suppose the tangent to the circumcircle of $\triangle{HBC}$ at $H$ intersects $\omega$ at points $X$ and $Y$ with $HA=3$, $HX=2$, and $HY=6$. the area of $\triangle{ABC}$ can be written in the form $m\sqrt{n}$, where $m$ and $n$ are positive integers, and $n$ is not divisible by the square of any prime. Find $m+n$.

![image-20201116164550124](/assets/images/image-20201116164550124.png){:class="image--x2l"}

---

### 11/13/2020

![image-20201113073810590](/assets/images/image-20201113073810590.png){:class="image--x2l"}

**Point D is outside of circle O with diameter MN. From D make two lines DM and DB with points D, A and B on the circle O. Extend OD and NA to intersect at point C. Prove that $CD \perp DB$.**

---

### 11/09/2020

![image-20201116165041554](/assets/images/image-20201116165041554.png){:class="image--x2l"}

#### $\triangle{ABC}$ is equilateral. Point $D$ is outside $\triangle{ABC}$ and $\angle{DAC}=10^{\circ}$, $\angle{DCA}=20^{\circ}$. Prove $BC=BD$

Make circumcircle of $\triangle{ACD}$, suppose the center of the circle is $B'$. Then we know

1. Point $D$ and $B'$ cannot be on the same side of line $AC$, so $B'$ and $B$ are on the same side of line $AC$.

2. $$AB'=DB'=CB', \angle{AB'C}=\angle{AB'D} + \angle{DB'C}\\ = 2 \cdot \angle{ACD} + 2 \cdot \angle{DAC} = 40^{\circ} + 20^{\circ} = 60^{\circ}$$ So $\triangle{AB'C}$ is also equilateral.

From 1 and 2 we know $B$ is the same as $B'$, then $BC=BD$. $\blacksquare$

---

### 11/08/2020

![image-20201117003236412](/assets/images/image-20201117003236412.png){:class="image--x2l"}

Solution:

![image-20201117003450428](/assets/images/image-20201117003450428.png){:class="image--x2l"}

---

![image-20201117003321013](/assets/images/image-20201117003321013.png){:class="image--x2l"}

Solution:

$DE^2+BE^2=\dfrac{1}{4}$, $DE+BC=1$

$\dfrac{DE}{AC}=\dfrac{BE}{BC} \implies DE(1-DE)=BE^2$

$\implies DE=DE^2+BE^2=\dfrac{1}{4} \implies \angle{ABC}=\boxed{30^{\circ}}$

---

### 11/07/2020

![image-20201117005107051](/assets/images/image-20201117005107051.png){:class="image--x6l"}

Solution:

![image-20201117010801435](/assets/images/image-20201117010801435.png){:class="image--x6l"}

Let $O$ be the circumcenter of $ABP$. Then $\angle{AOP}=2 \angle{ABP}=20^{\circ}$ and

$\angle{BOP}=2 \angle{BAP}=40^{\circ} \implies \angle{AOB}=60^{\circ}$. This and $AO=BO$ shows that $\triangle{AOB}$ is equilateral.

So $\angle{OAB}=60^{\circ}$ and $AO=AB$. By assumption $AB=AC$, so $AO=AC$ and

$\angle{AOC}=90^{\circ}-\dfrac{1}{2} \angle{OAC}=90^{\circ}-\dfrac{1}{2} \cdot 140^{\circ}=20^{\circ}=\angle{AOP}$

Therefore, $O, P, C$ are collinear and we find

$\angle{APC}=\angle{OAP}+\angle{AOP}=80^{\circ}+20^{\circ}=\boxed{100^{\circ}}$

---
