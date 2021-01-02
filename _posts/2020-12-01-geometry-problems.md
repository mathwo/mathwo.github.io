---
title: Geometry Problems
date: 2020-12-01 10:11
tags: [Geometry]
---

### 12/04/2020

![image-20201204210659033](/assets/images/2020-12/image-20201204210659033.png){:class="image--xl"}

#### $\angle{BAD}=\angle{DAC}=60^{\circ}, \dfrac{AB}{AC}=2, AD=100$, solve $BC.$

Solution:

![image-20201204211344554](/assets/images/2020-12/image-20201204211344554.png){:class="image--xl"}

$AD$ bisects $\angle{BAC} \implies \dfrac{AB}{AC}=\dfrac{BD}{CD}=2$

Extend $AD$ to $E$ so that $\angle{AEB}=60^{\circ}$. Easy to know $\triangle{ABE}$ is equilateral and $\triangle{DBE} \sim \triangle{DAC}$

$\implies \dfrac{DE}{AD}=\dfrac{BE}{AC}=\dfrac{BD}{CD}=2$

$\implies DE=200 \implies AB=BE=AE=300 \implies AC=150$

$\implies BC^2=AB^2+AC^2-2AB \cdot AC \cdot cos\angle{BAC}$

$\implies BC^2=300^2+150^2+2\times 300 \times 150 \times \dfrac{1}{2}$

$ \implies BC=\boxed{150\sqrt{7}}$

---

### 12/04/2020

#### Points $O$ and $H$ are the circumcentre and orthocentre of acute triangle $ABC$, respectively. The perpendicular bisector of segment $AH$ meets sides $AB$ and $AC$ at $D$ and $E$, respectively. Prove that $\angle{DOA}=\angle{EOA}.$

![image-20201204223718064](/assets/images/2020-12/image-20201204223718064.png){:class="image--xl"}

**Proof:**

![image-20201210050859889](/assets/images/2020-12/image-20201210050859889.png){:class="image--xl"}

Since points $O$ and $H$ are the circumcentre and orthocentre of acute triangle $ABC$, they are isogonal conjugates.

That means, $\angle{BAO} = \angle{HAC} \implies \angle{BAH} = \angle{OAC}$

$AD=DH, AO=OC, \angle{BAH} = \angle{OAC} \implies \triangle{DAH} \sim \triangle{OAC}$

$\implies \dfrac{AD}{AH}=\dfrac{AO}{AC}$, and we know $\angle{BAO} = \angle{HAC}$

$\implies \triangle{ADO} \sim \triangle{AHC} \implies \angle{DOA}=\angle{HCA}$

$\implies \angle{HCA}=\angle{OCB}=\angle{OBC}=\angle{ABH}$

Similarly, $\triangle{AEO} \sim \triangle{AHB} \implies \angle{AOE}=\angle{ABH}$

So we know $\angle{DOA}=\angle{AOE} \blacksquare$

---

### 12/08/2020

#### Point $O$ and $I$ is circumcenter and incenter of $\triangle{ABC}$ respectively. Point $N$ bisects $\overset{\huge\frown}{BC}$ and point $M$ bisects segment $BC$. Extend $NI$ and intersect circle $O$ at point $T$. Extend $IO$ and intersect $BC$ at point $D$. Prove: $\angle{DTO}=\angle{DIM}.$

![image-20201208023009734](/assets/images/2020-12/image-20201208023009734.png){:class="image--x3l"}

---

### 12/10/2020

#### Let $A, B, C, D$ be points chosen on a circle, in that order. Line $BD$ is reflected over lines $AB$ and $DA$ to obtain lines $l_1$ and $l_2$ respectively. If lines $l_1, l_2$ and $AC$ meet at a common point and if $AB=4$, $BC=3$, $CD=2$, compute the length $DA.$



**Solution:**

![image-20201214172118662](/assets/images/2020-12/image-20201214172118662.png){:class="image--xl"}

Line $BD$ is reflected over lines $AB$ and $DA$ to obtain line $BD'$ and $DB'$, then we know $AB$ bisects $\angle{DBD'}$ and $AD$ bisects $\angle{BDB'}$. That means point $A$ is an excenter of $\triangle{BDE}$, then we know $AE$ bisects $\angle{BED}$ and since point $C$ is on line $AE$ and also on the excircle ${ABCD}$, $C$ is the incenter of $\triangle{BDE}$, and $AC$ is actually the diameter of the excircle. That is,

$AC^2=AB^2+BC^2=CD^2+AD^2$

$ \implies AD=\sqrt{AB^2+BC^2-CD^2}=\boxed{\sqrt{21}}$

To prove $C$ is the incenter of $\triangle{BDE}$ and $AC$ is the diameter of the excircle $ABCD$ of $\triangle{BDE}$, there are two references:

* [All About ExCircles!](https://www.awesomemath.org/wp-pdf-files/math-reflections/mr-2014-06/excircles.pdf)
* [A Beautiful Journey Through Olympiad Geometry](https://www.olympiadgeometry.com/the-book.html)

First, by the trigonometric form of Ceva's theorem, the internal angle bisector of $\angle{BED}$ must be concurrent with the external angle bisectors of $\angle{DBE}$ and $\angle{BDE}$. Thus we know AE bisects $\angle{BED}$.

Second, by angle chasing, we know

$\angle{D'BA}=\angle{ABD}=\angle{BEA}+\angle{BAE}$

$\angle{B'DA}=\angle{ADB}=\angle{AED}+\angle{EAD}$

Add above two we get

$180^{\circ}-\angle{BAD}=2\angle{BEA}+\angle{BAD}$

$\implies \angle{BEA}+\angle{BAD}=90^{\circ}$

$\angle{BEA}+\angle{BAE}+\angle{EAD}=90^{\circ}$

$\implies \angle{D'BA}=\angle{ABD}=\angle{ACD}=90^{\circ}-\angle{CAD}$

$\implies \angle{ADC}=\angle{ADB}+\angle{BDC}=90^{\circ}=\dfrac{2\angle{ADB}+\angle{BDE}}{2}=\angle{ADB}+\dfrac{\angle{BDE}}{2}$

$\implies \angle{BDC}=\dfrac{\angle{BDE}}{2}$

And similarly $\angle{DBC}=\dfrac{\angle{DBE}}{2}$, so $C$ is the incenter of $\triangle{BDE}$ and $AC$ is the diameter of circle $ABCD\blacksquare$.

---

### 12/17/2020

#### Tangents of the circumcircle of Acute $\triangle{ABC}$ at point $B$ and $C$ intersect at point $P$. Point $X$ and $Y$ are on extension of line $AB$ and $AC$ respectively, and $\angle{XPY}=2\angle{A}$. Reflect $A$ about line $XY$ and get $A'$. Prove: the circumcircle of $\triangle{A'XY}$ passes through a fixed point.

![image-20201217171036029](/assets/images/2020-12/image-20201217171036029.png){:class="image--xl"}

---

### 12/20/2020

#### $ABCD$ is a trapezoid. $AD \parallel BC$, $\triangle{ACE}=\triangle{BDE}=120$,  $\triangle{BFG}=60$. What is the area of $ABCD?$

![image-20201220175643449](/assets/images/2020-12/image-20201220175643449.png){:class="image--xl"}

**Solution:**

---

### 12/23/2020

#### Jesse cuts a circular paper disk of radius $12$ along two radii to form two sectors, the smaller having a central angle of $120$ degrees. He makes two circular cones, using each sector to form the lateral surface of a cone. What is the ratio of the volume of the smaller cone to that of the larger? (AMC 10 2011-B Problem 17)

**Solution:**

---

### 12/31/2020

#### Find $r$:

![image-20210101034356389](/assets/images/2020-12/image-20210101034356389.png){:class="image--xl"}

**Solution:**

![image-20210101085707085](/assets/images/2020-12/image-20210101085707085.png){:class="image--xl"}

Suppose the tangent line at point $Q(x_0, x_0^2)$ is $y=2x_0x+d_0$, then

$x_0^2=2x_0^2+d_0 \implies d_0=-x_0^2 \implies y=2x_0x-x_0^2$

So we get $D(0, -x_0^2) \implies OD=x_0^2, OM=\dfrac{x_0}{2}, QD^2=x_0^2+4x_0^4$

$\dfrac{OD}{OM}=\dfrac{PD}{PQ} \implies QD=\dfrac{2020 \cdot x_0^2}{x_0/2}=4040X_0$

$QD^2=x_0^2+4x_0^4=4040^2 \cdot x_0^2 \implies x_0^2=\dfrac{4040^2-1}{4}$

$PD^2=QD^2+PQ^2=4040^2 \cdot \dfrac{4040^2-1}{4}+2020^2 $

$\implies PD=\dfrac{4040^2}{2}=2 \times 2020^2$

Similarly, suppose the tangent line at $Q_1(x_1,x_1^2)$ is $y=2x_1x+d_1$, then

$y=2x_1x-x_1^2$, $x_1^2=\dfrac{4r^2-1}{4}$, $Q_1D_1^2=4r^4-r^2$, $P_1D_1=2r^2$

$P_1D_1=PD+2020+r+(x_1^2-x_0^2)=2r^2$

$\implies 2r^2-r - \dfrac{4r^2-1}{4} - 4041 \times 2020 + \dfrac{4040^2-1}{4} =0$

$\implies r^2-r-(2020+2020^2)=0 \implies r=\boxed{2021}$
