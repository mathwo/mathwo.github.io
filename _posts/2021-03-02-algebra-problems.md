---
date: 2021-03-02 06:14
category:
tags: []
---

### 03/10/2021

#### If the sum of the first $n$ positive integers equals to the sum of the next $k$ positive integers, where $n<20$, what is the largest possible value of $k$?

**Solve:**

$\dfrac{n(n+1)}{2}=n*k+\dfrac{k(k+1)}{2}$
$\implies n^2+n=2nk+k^2+k$
$\implies (n-k)^2+(n-k)=2k^2$
$\implies 4(n-k)^2+4(n-k)+1=8k^2+1$
$\implies (2n-2k+1)^2-8k^2=1$

Let $m=2n-2k+1$, so Pell's equation $m^2-8k^2=1$ has first solution $m=3, k=1$.

So we know the second solution has format $x+2\sqrt{2}y=(3+2\sqrt{2})^2 \implies x=17, y=6$

So $2n-2k+1=17, k=6 \implies n=14$.

The next larger value of $k$ would make $n>20$. So the answer is $k=\boxed{6}$.

---

### 03/31/2021

#### Solve for real values of $x$: $2\sqrt[3]{2x+1}=x^3-1$.

**Solve:**

Let $y^3=2x+1 \implies x=\dfrac{y^3-1}{2}$
$\implies 2y=x^3-1 \implies y=\dfrac{x^3-1}{2}$

This means the solutions of the original equation are the intersects of $y=x$ and $y=\dfrac{x^3-1}{2}$

$\implies x=\dfrac{x^3-1}{2} \implies x^3-2x-1=0$

Easy to see that $x=-1$ is one of the solutions, factorize $x^3-2x-1$ and get:

$(x+1)(x^2-x-1)=0 \implies x=\boxed{-1, \dfrac{1+\sqrt{5}}{2}, \dfrac{1-\sqrt{5}}{2}}$

---


