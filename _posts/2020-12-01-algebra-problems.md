---
title: Algebra Problems
date: 2020-12-01 11:08
tags: [Algebra]
---

### 12/01/2020

#### For $n=1,2,3,... (\sqrt{2}-1)^n=\sqrt{m+1}-\sqrt{m}$ where $m$ is a positive integer which depends on $n$. Proof by (easy) mathematical induction. See *American Mathematical Monthly, vol. 58, 1951, p. 566*. Problem 15.53 From *Mathematical Discovery* by George Polya

**Solution:**

1. When $n=1$, $m_1=1$

2. When $n=2$, $(\sqrt{2}-1)^2=3-2\sqrt{2}=\sqrt{9}-\sqrt{8}, m_2=8$

3. Suppose $n=k$, $(\sqrt{2}-1)^k=\sqrt{m_k+1}-\sqrt{m_k}$, $m_k \in \mathbb{N}$, then

$(\sqrt{2}-1)^{k+1}=(\sqrt{m_k+1}-\sqrt{m_k})(\sqrt{2}-1)$
$=\sqrt{2m_k+2}+\sqrt{m_k}-\sqrt{m_k+1}-\sqrt{2m_k}$

Let $\sqrt{2m_k+2}+\sqrt{m_k}=\sqrt{m_{k+1}+1}$, then

$m_{k+1}=(\sqrt{2m_k+2}+\sqrt{m_k})^2-1$
$=3m_k+1+2\sqrt{2m_k^2+2m_k}$
$=(\sqrt{2m_k})^2+(\sqrt{m_k+1})^2+2\sqrt{2m_k(m_k+1)}$
$=(\sqrt{2m_k}+\sqrt{m_k+1})^2$
$\sqrt{m_{k+1}}=\sqrt{2m_k}+\sqrt{m_k+1}$
$\implies (\sqrt{2}-1)^{k+1}=\sqrt{m_{k+1}+1}-\sqrt{m_{k+1}}$
where $ m_{k+1}=3m_k+1+2 \sqrt{2m_k^2+2m_k} $

Now we need prove that $m_{k+1} \in \mathbb{N}$.

1. When $n=1$, $m_1=1$

2. When $n=2$, $m_2=3m_1+1+2\sqrt{2m_1^2+2m_1}=8$, and $\sqrt{2m_1^2+2m_1}=2 \in \mathbb{N}$

3. Suppose $n=k$, $m_k=3m_{k-1}+1+2\sqrt{2m_{k-1}^2+2m_{k-1}}$, and $\sqrt{2m_{k-1}^2+2m_{k-1}}=p \in \mathbb{N}$

   So $m_k=3m_{k-1}+1+2p$, $p^2=2m_{k-1}^2+2m_{k-1}$

   Then when $n=k+1$, $m_{k+1}=2m_k+1+2\sqrt{2m_k^2+2m_k}$, where

   $2m_k^2+2m_k=2(3m_{k-1}+1+2p)(3m_{k-1}+2+2p)$

   $=18m_{k-1}^2+18m_{k-1}+24pm_{k-1}+12p+4+8p^2$

   $=34m_{k-1}^2+34m_{k-1}+24pm_{k-1}+12p+4$

   $=(4m_{k-1}+3p+2)^2 \implies m_{k+1} \in \mathbb{N}$

The original statement has been proved. $\blacksquare$

---

### 12/04/2020

#### Given $a_1,a_2,...,a_n \in \mathbb{N}, n>4$, prove: there exist $x_1,x_2,...,x_n \in \mathbb{R}$ such that $\displaystyle\prod_{i=1}^{n}{x_i} \ne 0$, $x_2=0$ or $1$, satisfying $\displaystyle\sum_{i=1}^{n}{a_ix_i} \equiv 0$ mod $n^2.$

**Solution:**

---

### 12/06/2020

#### Let $a$ be the greatest root of $x^3-3x^2+1=0$. Show $\lfloor {a^{1988}} \rfloor$ is divisible by $17.$

**Solution:**

---

### 12/20/2020

#### Let $a$, $b$ and $c$ be positive integers with $a \ge b \ge c$ such that
$$
\begin{align}
a^2-b^2-c^2+ab &= 2011 \tag{1}\\
a^2+3b^2+3c^2-3ab-2ac-3bc &= -1997 \tag{2}
\end{align}
$$
#### What is $a?$ (AMC 10 2011-A Problem 24)

**Solution:**

$(1) + (2) \implies$
$ a^2+b^2+c^2-ab-bc-ca=7 $
$\implies (a-b)^2+(b-c)^2+(c-a)^2=14 $

Since $a$, $b$ and $c$ be positive integers with $a \ge b \ge c$

$\implies a-c=3, a-b=1, b-c=2$ or $a-c=3, a-b=2, b-c=1$

* if $a-b=2$, $(1) \implies 7a=2021$, no solution
* if $a-b=1$, $(1) \implies 8a=2024 \implies a=\boxed{253}$

---

### 12/20/2020

#### The sum of the first $m$ positive odd integers is 212 more than the sum of the first $n$ positive even integers. What is the sum of all possible values of $n?$ (AMC 10 2011-A Problem 24)

**Solution:**

The sum of the first $m$ positive odd integers is $1+3+...+(2m-1)=m+0+2+...+(2m-2)=m+m(m-1)=m^2$.

The sum of the first $n$ positive even integers is $2+4+...+2n=n(n+1)$.

So we have $n^2+n+212-m^2=0$, the discriminant is $1-4(212-m^2)=4m^2-847$ must be a square of an odd integer. Let $p^2=4m^2-847 \implies (2m+p)(2m-p)=847$. $847=7*11*11$, so we know there could be three situations:

* $2m+p=847, 2m-p=1 \implies m=212, p=423 \implies n=211$
* $2m+p=121, 2m-p=7 \implies m=32, p=57 \implies n=28$
* $2m+p=77, 2m-p=11 \implies m=22, p=33 \implies n=16$

So the sum of all possible values of $n$ is $\boxed{255}$.

---

