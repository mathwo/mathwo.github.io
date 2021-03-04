---
date: 2021-03-02 06:16
category:
tags: []
---

### 03/03/2021

#### For $\triangle{ABC}$ we know $2sinA +sinB = 2sinC$, find the minimum value for $\dfrac{5}{sinA} + \dfrac{9}{sinC}.$

**Solve:**

$2sinA + sinB = 2sinC \implies sinB = 2(sinC - sinA)=4cos\dfrac{A+C}{2}sin\dfrac{C-A}{2}$

$\implies sin(A+C)=2sin\dfrac{A+C}{2}cos\dfrac{A+C}{2}=4cos\dfrac{A+C}{2}sin\dfrac{C_A}{2}$

$\implies sin\dfrac{A+C}{2}=2sin\dfrac{C-A}{2}$

$\implies sin\dfrac{A}{2}cos\dfrac{C}{2} + cos\dr\frac{A}{2}sin\dfrac{C}{2}=2sin\dfrac{C}{2}cos\dfrac{A}{2}-cos\dfrac{C}{2}sin\dfrac{A}{2}$

$3sin\dfrac{A}{2}cos\dfrac{C}{2} = sin\dfrac{C}{2}cos\dfrac{A}{2} \implies 3 tan\dfrac{A}{2} = tan\dfrac{C}{2}$

$\implies \dfrac{5}{sinA} + \dfrac{9}{sinC} = \dfrac{5}{\dfrac{2t}{1+t^2}} + \dfrac{9}{\dfrac{6t}{1+9t^2}}=\dfrac{16t^2+4}{t}$ where $t=tan\dfrac{A}{2}$

$\implies \dfrac{16t^2+4}{t} \le \dfrac{2 \times 4t \times 2}{t} = \boxed{16}$
