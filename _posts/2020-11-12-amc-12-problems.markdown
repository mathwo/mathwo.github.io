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

#### Let $S$ be the square one of whose diagonals has endpoints $(0.1, 0.7)$ and $(-0.1, -0.7)$. A point $v=(x, y)$ is chosen uniformly at random over all pairs of real numbers $x$ and $y$ such that $0 \le x \le 2012$ and $0 \le y \le 2012$. Let $T(v)$ be a translated copy of $S$ centered at $v$. What is the probability that the square region determined by $T(v)$ contains exactly two points with integer coordinates in its interior? *(2012-AMC-12-A-23)*

Solution:

![image-20201117121642941](/assets/images/image-20201117121642941.png)

First, we need improve and revise the modeling.

The original model is, move the square uniformly to over all pairs of real numbers $x$ and $y$ such that $0 \le x \le 2012$ and $0 \le y \le 2012$ and check when there are two grid points with integer coordinates are inside the square. The approach is hard to calculate.

Instead, the square copies are placed **at each grid point** with integer coordinates for all the pairs of real numbers $x$ and $y$ such that $0 \le x \le 2012$ and $0 \le y \le 2012$. These squares divide all the points with the pair of real numbers $x$ and $y$ such that $0 \le x \le 2012$ and $0 \le y \le 2012$ into three groups:

1. Points covered by none of the squares - when the center of the square is any of these points, there are no grid point in the square
2. Points covered by one of the squares - when the center of the square is any of these points, there is one grid point in the square
3. Points covered by two squares - when the center of the square is any of these points, there are two grid points in the square

The goal is to calculate how many points in group (3) for a unit grid zone cornered by four points $(0, 0), (1, 0), (1, -1), (0, -1)$. That is to get the area of the **green** part in above figure.

To do that, we need first check the distance between the squares.

![image-20201117123359151](/assets/images/image-20201117123359151.png)

We need rotate the coordinate axes to be parallel to square edges, and check the vertical and horizontal distance between the centers of adjacent squares. Comparing the red triangles $PS_{01}S_{02}$ and $AOQ$ we can see that, the horizontal and vertical distances between two centers of adjacent squares are $0.8$ and $0.6$. So the dimension of each overlapping rectangle is $(1-0.8)$ by $(1-0.6)$, i.e., $0.2$ by $0.4$. The green part of area is exactly half of the rectangle: $0.2 * 0.4 / 2 = 0.04$. There are four of them inside unit grid zone $OABC$, so the green part area is $0.16$, thus the requested probability is $\boxed{16\%}$.

---
