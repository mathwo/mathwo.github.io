---
title: Algebra Problems
date: 2020-11-12 15:47
tags: [Algebra]
---

### 11/17/2020

#### How many sequences of integers $\\{a_1, a_2, ..., a_7\\}$ are there for which $-1 \le a_i \le 1$ for every $i$, and $a_1a_2+a_2a_3+a_3a_4+a_4a_5+a_5a_6+a_6a_7 = 4$?

---

### 11/30/2020

#### Solve over the integers: $615+x^2=2^y$

**Solution:**

Easy to see $x \equiv 1 \text{ mod 2}$. The last digit of $x^2$ could be $1,5,9$ thus the last digit of $615+x^2$ could be $0, 4, 6$, but the last digit of $2^y$  could be $2, 4, 6, 8$ so the common subset of the last digit of $2^y$ is $4, 6$, and this means $y \equiv 0 \text{ mod 2}$.

Suppose $y=2k$, then $615=2^{2k}-x^2=(2^k+x)(2^k-x)$. We know that $615=41 \times 5 \times 3$, so
$$
\begin{align*}
&\begin{cases}
2^k+x=41\\
2^k-x=15
\end{cases}
\implies 2^k=28 \implies \text{no integer solution},\\
&\begin{cases}
2^k+x=123\\
2^k-x=5
\end{cases}
\implies 2^k=64 \implies k=6, x=59, y=12
\end{align*}\\
\begin{cases}
2^k+x=205\\
2^k-x=3
\end{cases}
\implies 2^k=104 \implies \text{no integer solution}\\
\begin{cases}
2^k+x=615\\
2^k-x=1
\end{cases}
\implies 2^k=308 \implies \text{ no integer solution}
$$

So the answer is $\boxed{x=59, y=12}$
