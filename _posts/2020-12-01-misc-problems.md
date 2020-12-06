---
title: Misc Problems
date: 2020-12-01 10:08
tags: [Misc]
---

### 12/01/2020

![image-20201201104718123](/assets/images/2020-12/image-20201201104718123.png)

#### There are 10 stones in the pond as blue points in the figure. Frogs can jump from a stone to one of the adjacent stones only. Starting from a stone, how many different ways can a frog go for 4 jumps?

**Solution 1:**

Mark all stones with number 1 initially, then in each step, replace the number on each stone by the sum of numbers of its neighbors. Repeat this process for 4 steps as 4 jumps:

- Initial: 3 corners: 1; 6 sides: 1; 1 center: 1
- Step 1: 3 corners: 2; 6 sides: 4; 1 center: 6
- Step 2: 3 corners: 8; 6 sides: 16; 1 center: 24
- Step 3: 3 corners: 32; 6 sides: 64; 1 center: 96
- Step 4: 3 corners: 128; 6 sides: 256; 1 center: 384

So the answer is $3 \times 128 + 6 \times 256 + 384=\boxed{2304}$

**Solution 2:**

There are three types of stones in the figure: corner, side, center.

And there are 3 corners, 6 sides, 1 center. We mark this by a vector
$$
\begin{equation*}
\begin{bmatrix}
3 & 6 & 1
\end{bmatrix}
\end{equation*}
\text{.}
$$


Each number in the transfer matrix represents the number of ways of jump. The transfer matrix is designed as:
$$
\begin{equation*}
\begin{bmatrix}
\text{<corner neighbors to corner>} & \text{<side neighbors to corner>} & \text{<center neighbors to corner>} \\
\text{<corner neighbors to side>} & \text{<side neighbors to side>} & \text{<center neighbors to side>} \\
\text{<corner neighbors to center>} & \text{<side neighbors to center>} & \text{<center neighbors to center>}
\end{bmatrix}
\end{equation*}
$$

So the transfer matrix $A$ is:
$$
\begin{equation*}
A=
\begin{bmatrix}
0 & 2 & 0 \\
1 & 2 & 1 \\
0 & 6 & 0
\end{bmatrix}
\end{equation*}
\text{.}
$$

The number of different ways for a frog can go for $n$ jumps is:
$$
\begin{equation*}
\begin{bmatrix}
3 & 6 & 1
\end{bmatrix}
A^n
\end{equation*}
\text{.}
$$


This will get a vector of dimension $1 \times 3$ for three types, and we need sum them up by multipling vector
$$
\begin{equation*}
\begin{bmatrix}
1\\
1\\
1
\end{bmatrix}
\end{equation*}
\text{.}
$$
So the expression is
$$
\begin{equation*}
\begin{bmatrix}
3 & 6 & 1
\end{bmatrix}
A^n
\begin{bmatrix}
1\\
1\\
1
\end{bmatrix}
\end{equation*}
\text{.}
$$
When $n=4$, the answer is
$$
\begin{equation*}
\begin{bmatrix}
3 & 6 & 1
\end{bmatrix}
A^4
\begin{bmatrix}
1\\
1\\
1
\end{bmatrix}
\end{equation*}
=\boxed{2304}
\text{.}
$$

The calculation is given [here](https://www.wolframalpha.com/input/?i=%7B3%2C+6%2C+1%7D+.+MatrixPower%5B%7B%7B0%2C+2%2C+0%7D%2C+%7B1%2C+2%2C+1%7D%2C+%7B0%2C+6%2C+0%7D%7D%2C+4%5D+.+%7B%7B1%7D%2C+%7B1%7D%2C+%7B1%7D%7D).

---

### 12/02/2020

#### A 4-digit number divides each of its 4 digits will get 4 integers. And the sum of these 4 digits equals to the 4-digit number itself. How many numbers satisfy this requirement?

**Solution:**

Apparently there is no zero and one in digits.

---

### 12/02/2020

#### If $a,b \in \mathbb{N}$ such that $\dfrac{2019}{2020}<\dfrac{a}{b} < \dfrac{2020}{2021}$, what is the smallest possible value of $a+b?$

**Solution:**

$\dfrac{2019}{2020}<\dfrac{a}{b} < \dfrac{2020}{2021}$

$\implies a<b \implies b \ge a + 1 \implies b-a \ge 1$ and

$\implies \dfrac{2020}{2019} > \dfrac{b}{a} > \dfrac{2021}{2020}$

$\implies \dfrac{1}{2019} > \dfrac{b-a}{a} > \dfrac{1}{2020}$

$\implies 2019 < \dfrac{a}{b-a} < 2020$

When $(b-a)_{min} = 1$, $2019 < a < 2020 \implies a \not\in \mathbb{N} $

When $(b-a)_{min} = 2$, $4038 < a < 4040 \implies a=4039$

$\implies b=a+2=4041 \implies (a+b)_{min}=\boxed{8080}$

---

### 12/02/2020

#### If $\dfrac{1}{6}=\dfrac{1}{a_1}+\dfrac{1}{a_2}+\dfrac{1}{a_3}+\dfrac{1}{a_4}+\dfrac{1}{a_5}+\dfrac{1}{a_6}$ and $a_i \in \mathbb{N}$, $\forall i \ne j, a_i \ne a_j$. What is the smallest possible value of $\displaystyle \sum_{i=1}^{6}a_i.$

**Solution:**

---

### 12-03-2020

#### Solve for real values of $x$: $2\sqrt[3]{2x+1}=x^3-1$

**Solution:**

Let $y=\sqrt[3]{2x+1} \implies x=\dfrac{y^3-1}{2}$

$\implies 2y=x^3-1 \implies y=\dfrac{x^3-1}{2}$

Let $f(w)=\dfrac{w^3-1}{2}$, $f(w)$ is a restrictly increasing function, $x=f(y)$, $y=f(x)$.

Assume $x<y$, since $f(w)$ is restrictly increasing, $f(x)<f(y) \implies y < x$

Similarly assume $x>y$ will get contradictory result, so we have $x=y$

$x=\dfrac{x^3-1}{2} \implies (x^2-x-1)(x+1)=0$

$x=\boxed{-1, \dfrac{1\pm \sqrt{5}}{2}}$

---

### 12/03/2020

#### For what $x \in \mathbb{N}$ are $8x^3-20$ and $2x^5-2$ both perfect squares $?$

**Solution:**

Let $8x^3-20=m^2$, $2x^5-2=n^2$, for $m,n \in \mathbb{N}$

Then $m^2 \cdot n^2=(8x^3-20)(2x^5-2)=16x^8-40x^5-16x^3+40=(mn)^2$

$16x^8-40x^5-16x^3+40=(4x^4-5x)^2-(16x^3+25x^2-40)$

$=(4x^4-5x-1)^2+(8x^4-16x^3-25x^2-10x+39)$

Let $f(x)=16x^3+25x^2-40$, $g(x)=8x^4-16x^3-25x^2-10x+39$

When $x\ge 4$, $f(4)>0, f'(4)>0 \implies (mn)^2<(4x^4-5x)^2$

$g(x)>8x^4-16x^3-32x^2-16x+39$, Let $h(x)=8x^4-16x^3-32x^2-16x+39$

When $x\ge 4$, $h(4)>0, f'(4)>0 \implies (mn)^2>(4x^4-5x-1)^2$

This is contraductory, so we know $x<4, x \in \mathbb{N}$

When $x=1, m^2=-16 < 0$, not a solution

When $x=2, m^2=44$, not a solution

When $x=3, m^2=196 \implies m=13, n^2=484 \implies n=22$

So the solution is $x=\boxed{3}$

---

### 12/04/2020

#### Tessa has a unit cube, on which each vertex is labeled by a distinct integer between 1 and 8 inclusive. She also has a deck of 8 cards, 4 of which are black and 4 of which are white. At each step she draws a card from the deck, and
- #### if the card is black, she simultaneously replaces the number of each vertex by the sum of the three numbers on vertices that are distance 1 away from this vertex;
- #### if the card is white, she simultaneously replaces the number of each vertex by the sum of the three numbers on vertices that are distance $$\sqrt{2}$$ away from this vertex.

#### When Tessa finishes drawing all cards of the deck, what is the maximum possible value of a number that is on the cube?

**Solution:**

---

### 12/05/2020

#### In a barn, 100 chicks sit peacefully in  a circle. Suddenly, each chick randomly pecks the chick immediately to its left or right **with equal chance**. What is the expected number of unpecked chicks$?$

**Solution:**

Let
$$
\begin{align*}
X_i=
\begin{cases}
\text{ 0 if the chick is pecked}\\
\text{ 1 if the chick is unpecked}
\end{cases}
\end{align*}\\
$$

Let $P_r(\text{check pecks left})=p$ and $P_r(\text{chick pecks right})=1-p$
$$
\begin{align*}
E(X_i) &= 0 \times Pr(\text{pecked}) + 1 \times Pr(\text{unpecked})\\
&= P_r(\text{unpecked})\\
&=Pr(\text{chick on left pecks left}) \times P_r(\text{chick on right pecks right})\\
&=p(1-p)
\end{align*}\\
$$

Based on Linearity of expectation $E(X+Y)=E(X)+E(Y)$:
$$
\begin{align*}
E(X_1+X_2+...+X_{100})&=E(X_1)+E(X_2)+...+E(X_{100})\\
&=p(1-p)+p(1-p)+...+p(1-p)\\
&=100p(1-p)\\
\end{align*}
$$

![image-20201205180051792](/assets/images/2020-12/image-20201205180051792.png)

When $p=0.5$, the answer is $\boxed{25}$.
