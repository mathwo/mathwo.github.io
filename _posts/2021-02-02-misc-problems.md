---
date: 2021-02-02 07:57
category:
author:
tags: []
summary:
---

### 02/04/2021

#### $A=\dfrac{2}{3} \times \dfrac{5}{6} \times \dfrac{8}{9} \times \cdots \times \dfrac{995}{996} \times \dfrac{998}{999}$. Which is bigger, $A$ or $0.1?$

---

### 02/15/2021

#### Suppose for all $x, y \in \mathbb{R}$ we have $f(x+y)=f(x)+f(y)+xy$ and $f(4)=10$, find $f(2001)$ **(2001 Dutch Math Olympiad)**

**Solution 1:**

$f(4)=f(2)+f(2)+4=10 \implies f(2)=3$

$f(2)=f(1)+f(1)+1=3 \implies f(1)=1$

$f(8)=f(4)+f(4)+16=36$

$f(3)=f(1)+f(2)+2=6$

$f(5)=f(2)+f(3)+6=15$

Now we can see that $f(n)=\dfrac{n(n+1)}{2}$ for $n \in \mathbb{N}$ and this is easy to be proved since

$f(n+1)=f(1)+f(n)+n=\dfrac{n(n+1)}{2}+n+1=\dfrac{(n+1)(n+2)}{2}$

So it's easy to know that $f(2001)=\dfrac{2001 \times 2002}{2}=\boxed{2003001}$

**Solution 2:**

We have $f(n+1)=f(n)+f(1)+n \implies f(n+1)-f(n)=n+f(1) $

$\implies f(2001)-f(0)=\displaystyle\sum_{i=0}^{2000}{i} + 2001f(1) \implies f(2001)=\dfrac{2000 \times 2001}{2} + 2001 = \dfrac{2001 \times 2002}{2}=\boxed{2003001}$

