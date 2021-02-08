---
date: 2021-02-02 07:56
category:
author:
tags: []
summary:
---

### 02/08/2021

#### Frieda the frog begins a sequence of hops on a 3×3 grid of squares, moving one square on each hop and choosing at random the direction of each hop-up, down, left, or right. She does not hop diagonally. When the direction of a hop would take Frieda off the grid, she "wraps around" and jumps to the opposite edge. For example if Frieda begins in the center square and makes two hops "up", the first hop would place her in the top row middle square, and the second hop would cause Frieda to jump to the opposite edge, landing in the bottom row middle square. Suppose Frieda starts from the center square, makes at most four hops at random, and stops hopping if she lands on a corner square. What is the probability that she reaches a corner square on one of the four hops? **(AMC 10A 2021 Problem 23)**

**Solution 1:**

![image-20210208044508621](/assets/images/2021-02/image-20210208044508621.png)

So we know that the probability that she reaches a corner square on one of the four hops is:

$\dfrac{1}{4} \cdot \dfrac{1}{4} \cdot 2 \cdot 4 + \dfrac{1}{32} \cdot 4 + \dfrac{5}{64} \cdot \dfrac{1}{4} \cdot 2 \cdot 4 = \boxed{\dfrac{25}{32}}$

**Solution 2:**

The transfer matrix for hops:
$$
\begin{align*}
A=
\begin{bmatrix}
0 & 1 & 0\\
\dfrac{1}{4} & \dfrac{1}{4} & \dfrac{1}{2}\\
0 & 0 & 0
\end{bmatrix}
\end{align*}
$$
Explanation: there are three kinds of grids: first the center, then the side, last the corner. The probability from center to center is 0, and from center to side grids is 1, and from center to corner is 0. The probability from side to center is $\dfrac{1}{4}$, from side to side on the opposite edge is $\dfrac{1}{4}$, and from side to corner is $\dfrac{1}{2}$ since there are two ways to hop to corner from side. The probability from corner to any grid is 0, so the third row is all zero.

The transfer matrix after each hop is
$$
\begin{align*}
A^2 =
\begin{bmatrix}
\dfrac{1}{4} & \dfrac{1}{4} & \dfrac{1}{2} \\
\dfrac{1}{16} & \dfrac{5}{16} & \dfrac{1}{8}\\0 & 0 & 0
\end{bmatrix},
A^3 =
\begin{bmatrix}\dfrac{1}{16} & \dfrac{5}{16} & \dfrac{1}{8} \\
\dfrac{5}{64} & \dfrac{9}{64} & \dfrac{5}{32}\\0 & 0 & 0
\end{bmatrix},
A^4 =
\begin{bmatrix}\dfrac{5}{64} & \dfrac{9}{64} & \dfrac{5}{32} \\
\dfrac{9}{256} & \dfrac{29}{256} & \dfrac{9}{128}\\0 & 0 & 0
\end{bmatrix}
\end{align*}
$$

The required result is to sum all probabilities to corner grids from each hop $A$, $A^2$, $A^3$ and $A^4$.
$$
\begin{align*}
\begin{bmatrix}1 & 0 & 0\end{bmatrix} \cdot (A + A^2 + A^3 + A^4 ) \cdot \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}
=\dfrac{1}{2} + \dfrac{1}{8} + \dfrac{5}{32} = \boxed{\dfrac{25}{32}}
\end{align*}
$$

---

### 02/09/2021

#### In how many ways can the sequence 1, 2, 3, 4, 5 be rearranged so that no three consecutive terms are increasing and no three consecutive terms are decreasing? **(AMC 10A 2021 Problem 20)**

**Solution:**

