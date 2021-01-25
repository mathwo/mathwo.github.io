---
date: 2021-01-01 04:12
category:
author:
tags: []
summary:
---

### 01/24/2021

#### Point $I$ is the incenter of $\triangle{ABC}$. $DE \perp AI$. $DE$ and $AB$ intersect at $D$. $DE$ and $AC$ intersect at $E$. $FG$ is a tangent line of $\odot{I}$. $FG$ and $AB$ intersect at $F$. $FG$ and $AC$ intersect at $G$. Prove: $BD \cdot CE = DF \cdot EG$.

![image-20210124145825374](/assets/images/2021-01/image-20210124145825374.png){:class="image--x2l"}

**Prove 1:**

![image-20210124151546631](/assets/images/2021-01/image-20210124151546631.png){:class="image--x2l"}

Suppose the Tangent points of $\odot{I}$ with $AB, BC, CA$ are $M, K, N$ and easy to know the segment lengths as noted in above figure.

In $\triangle{ABC}$ we know the radius of inner circle is

$r_{in}=\sqrt{\dfrac{(s_{ABC}-AB)(s_{ABC}-BC)(s_{ABC}-CA)}{s_{ABC}}}$ where $s_{ABC}=\dfrac{AB+BC+CA}{2}$

Here we have $s_{ABC}=\dfrac{a+b+c+d+c+d+c+e+e+c+g+a+b-g}{2}=a+b+2c+d+e$

so $r_{in}=\sqrt{\dfrac{(c+e)(a+b)(c+d)}{a+b+2c+d+e}}$

Since $\triangle{ADI}$ and $\triangle{AMI}$ are both right angle triangles, we know $r_{in}^2=MI^2=(a+b)c$

In $\triangle{AFG}$ we know the radius of external circle $\odot{A}$ is

$r_{ex_A}=\sqrt{\dfrac{s_{AFG}(s_{AFG}-AF)(s_{AFG}-AG)}{s_{AFG}-FG}}$ where $s_{AFG}=\dfrac{AF+FG+GA}{2}$

Here we have $s_{AFG}=\dfrac{a+b+g+a+b-g}{2}=a+b$

so $r_{ex_A}=\sqrt{\dfrac{(a+b)bg}{a-g}}$, and we know $r_{ex_A}=r_{in} \implies r_{ex_A}^2=MI^2=(a+b)c$

$\implies \dfrac{(a+b)bg}{a-g}=(a+b)c \implies a=\dfrac{b+c}{c}g$

$r_{ex_A}=r_{in} \implies \dfrac{(c+e)(a+b)(c+d)}{a+b+2c+d+e}=\dfrac{(a+b)bg}{a-g}$

$\implies \dfrac{(c+e)(c+d)}{\dfrac{b+c}{c}g+b+2c+d+e}=\dfrac{bg}{\dfrac{b+c}{c}g-g}=c$

$\implies (c+e)(c+d)=(b+c)g+bc+2c^2+cd+ce$

$\implies de=(b+c)(c+g) \implies BD \cdot CE=DF \cdot EG \blacksquare$

**Prove 2:**

![image-20210124192210287](/assets/images/2021-01/image-20210124192210287.png){:class="image--x2l"}

$\angle{BAI}=\angle{IAC}=\dfrac{A}{2}, \angle{ABI}=\dfrac{B}{2}, AI \perp DE \implies DI=EI$

$ \implies \angle{ADI} = \angle{AEI} = 90^{\circ}-\dfrac{A}{2}$

$\implies \angle{DIB} = \angle{ADI} - \angle{ABI} = 90^{\circ}-\dfrac{A}{2}-\dfrac{B}{2}=\dfrac{C}{2}, \angle{EIC}=\dfrac{B}{2}$

$\implies \triangle{BDI}\sim\triangle{IEC} \implies \dfrac{BD}{DI}=\dfrac{EI}{CE} \implies BD \cdot CE=DI^2$

Let $\angle{AFG}=\beta \implies \angle{DFI}=\angle{GFI}=\dfrac{180^{\circ}-\beta}{2}=90^{\circ}-\dfrac{\beta}{2}$

Let $\angle{AGF}=\gamma \implies \angle{EGI}=90^{\circ}-\dfrac{\gamma}{2}$

So $A+\beta+\gamma = 180^{\circ}$

So $\angle{DIF}=180^{\circ}-(90^{\circ}-\dfrac{A}{2})-(90^{\circ}-\dfrac{\beta}{2})=90^{\circ}-\dfrac{\gamma}{2}$

and $\angle{GIE}=90^{\circ}-\dfrac{\beta}{2}$

So $\triangle{FDI}\sim \triangle{GEI} \implies \dfrac{DF}{DI}=\dfrac{EI}{EG} \implies DF \cdot EG=DI^2$

So we know $BD \cdot CE=DF \cdot EG \blacksquare$

---

### 01/25/2021

#### Inscribed quadrilateral $ABCD$ of $\odot{O}$ has $AB=AD$. Now extend $CD$ to  $F$, extend $CB$ to $E$ so that $DF=EF+BE$. Prove $\angle{BAD} = 2\angle{EAF}$.

![image-20210125031355059](/assets/images/2021-01/image-20210125031355059.png){:class="image--lg"}

**Prove:**

![image-20210125032312370](/assets/images/2021-01/image-20210125032312370.png){:class="image--lg"}

Make $G$ on $DF$ so that $GD=EB$

$DF=EF+EB=EF+GD \implies EF=FG$

Easy to see that $\angle{EBA}=\angle{GDA}, AB=AD \implies \triangle{EBA} \cong \triangle{GDA}$

$\implies EA=GA, \angle{EAB}=\angle{GAD} \implies \triangle{FEA} \cong \triangle{FGA} \implies \angle{EAF}=\angle{FAG}$

$\implies \angle{BAD}=\angle{BAF}+\angle{FAG}+\angle{GAD}=\angle{EAF}-\angle{EAB}+\angle{FAD}+\angle{EAB}$

$\implies \angle{BAD}=2\angle{EAF}\blacksquare$
