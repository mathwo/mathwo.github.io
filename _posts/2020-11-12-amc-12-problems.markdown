---
title: AMC Problems
date: 2020-11-12 15:52
tags: AMC
---

### 11/12/2020

#### Distinct planes $p_1, p_2, ... p_k$ intersect the interior of a cube $Q$, let $S$ be the union of the faces of $Q$ and let $P=\bigcup_{j=1}^{k}{p_j}$. The intersection of $P$ and $S$ consists of the union of all segments joining the midpoints of every pair of edges belonging to the same face of $Q$. What is the difference between the maximum and minimum possible values of $k$? *(2012-AMC-12-A-22)*

![image-20201116115503868](/assets/images/image-20201116115503868.png){:class="image--xl"}

The situation of minimum possible values of $k$ is trying to find such plane that includes as many segments as possible, and the segment intersection for different planes should be none. There are $\boxed{7}$ of them in total:

![image-20201116111858813](/assets/images/image-20201116111858813.png)

The situation of maximum possible values of $k$ is to count all the planes that are formed by any of the segments, as long as each plane is unique. So all above 7 planes are in this set, and there are more of them, to make up to $\boxed{20+7=27}$ in total:

![image-20201116114622061](/assets/images/image-20201116114622061.png)

So the difference of the maximum and minimum possible values of $k$ is $\boxed{20}$.

---

### 11/13/2020

#### Let $S$ be the square one of whose diagonals has endpoints $(0.1, 0.7)$ amd $(-0.1, -0.7)$. A point $v=(x, y)$ is chosen uniformly at random over all pairs of real numbers $x$ and $y$ such that $0 \le x \le 2012$ and $0 \le y \le 2012$. Let $T(v)$ be a translated copy of $S$ centered at $v$. What is the probability that the square region determined by $T(v)$ contains exactly two points with integer coordinates in its interior? *(2012-AMC-12-A-23)*


