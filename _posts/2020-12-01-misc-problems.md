---
title: Misc Problems
date: 2020-12-01 10:08
tags: []
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
\text{<corner neighbors to side>} & \text{<side neighbors to side>} & \text{<center to side>} \\
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
