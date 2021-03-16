---
date: 2021-03-02 06:15
category:
tags: []
---

### 03/11/2021

#### Given $\triangle{ABC}$ and a point $P$ inside it, $\angle{BAP}=18^{\circ}, \angle{CAP}=30^{\circ}, \angle{ACP}=48^{\circ}, AP=BC$. Find $\angle{BCP}.$

**Solve:**

![image-20210311011354760](/assets/images/2021-03/image-20210311011354760.png){:class="image--xl"}

Make point $D$ on $AB$ so that $CD=AP=BC$, then
$\triangle{ADC} \cong \triangle{CPA} \implies \angle{ACD}=\angle{CAP}=30^{\circ}$
$\implies \angle{CDB}=18^{\circ}+30^{\circ}+30^{\circ}=78^{\circ}$
$\implies \angle{CBD}=78^{\circ} \implies \angle{BCP}=180^{\circ}-78^{\circ}-18^{\circ}-30^{\circ}-48^{\circ}=\boxed{6^{\circ}}$

---

### 03/14/2021

#### In the diagram below, $ABCD$ is a rectangle with side lengths $AB=3$ and $BC=11$, and $AECF$ is a rectangle with side lengths $AF=7$ and $FC=9,$ as shown. The area of the shaded region common to the interiors of both rectangles is $\dfrac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$. **(Problem 2 AIME I 2021)**

**Solve:**

![image-20210314035150540](E:\workspace\mwo\assets\images\2021-03\image-20210314035150540.png)

Easy to see that $\triangle{ABG} \sim \triangle{CFG} \implies AG=p, BG=q, CG=\dfrac{7p}{3}, FG=\dfrac{7q}{3}$

$BG+CG=q+\dfrac{7p}{3}=11, AG+FG=p+\dfrac{7q}{3}=9 \implies p+q=6$

$\implies \dfrac{4}{3}p=5 \implies p=\dfrac{15}{4} \implies S_{AGCD}=7p=\dfrac{105}{4} \implies m+n=\boxed{109}$

---

### 03/14/2021

#### Segments $\overline{AB}, \overline{AC},$ and $\overline{AD}$ are edges of a cube and $\overline{AG}$ is a diagonal through the center of the cube. Point $P$ satisfies $PB=60\sqrt{10}, PC=60\sqrt{5}, PD=120\sqrt{2},$ and $PG=36\sqrt{7}$. What is $PA$? **(Problem 6 AIME I 2021)**

**Solve:**

---

### 03/15/2021

#### In quadrilateral $ABCD$, $AB=CD$, and points $E, F$ are midpoints of $BC, AD$ respectively. Extend $EF, CD, BA$ and they intersect at point $M,N$ as shown in following figure. Prove: $AM=DN$

![image-20210315131705199](E:\workspace\mwo\assets\images\2021-03\image-20210315131705199.png)

**Prove:**

Connect $AC$. Mark $AC$ and $EF$ intersects at point $P$.

![image-20210315131625220](E:\workspace\mwo\assets\images\2021-03\image-20210315131625220.png)

Apply Menelaus' theorem to $\triangle{ACD}$

$\implies \dfrac{CP}{PA}\dfrac{AF}{FD}\dfrac{DN}{NC}=1 \implies \dfrac{CP}{PA}=\dfrac{CN}{DN}$

Apple Menelaus's theorem to $\triangle{ABC}$

$\implies \dfrac{CP}{PA}\dfrac{AM}{BM}\dfrac{BE}{CE}=1 \implies \dfrac{CP}{PA}=\dfrac{BM}{AM}$

So we know

$\dfrac{CN}{DN}=\dfrac{BM}{AM} \implies \dfrac{CD}{DN}=\dfrac{AB}{AM}\implies AM=DN \blacksquare$

---

