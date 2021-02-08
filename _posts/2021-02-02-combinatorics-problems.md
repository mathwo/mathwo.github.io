---
date: 2021-02-02 07:56
category:
author:
tags: []
summary:
---

### 02/08/2021

#### Frieda the frog begins a sequence of hops on a 3×3 grid of squares, moving one square on each hop and choosing at random the direction of each hop-up, down, left, or right. She does not hop diagonally. When the direction of a hop would take Frieda off the grid, she "wraps around" and jumps to the opposite edge. For example if Frieda begins in the center square and makes two hops "up", the first hop would place her in the top row middle square, and the second hop would cause Frieda to jump to the opposite edge, landing in the bottom row middle square. Suppose Frieda starts from the center square, makes at most four hops at random, and stops hopping if she lands on a corner square. What is the probability that she reaches a corner square on one of the four hops? **(AMC10A 2021 Problem 23)**

**Solution:**

![image-20210208035900116](/assets/images/2021-02/image-20210208035900116.png)

So we know that the probability that she reaches a corner square on one of the four hops is:

$\dfrac{1}{4} \cdot \dfrac{1}{4} \cdot 2 \cdot 4 + \dfrac{1}{32} \cdot 4 + \dfrac{5}{64} \cdot \dfrac{1}{4} \cdot 2 \cdot 4 = \boxed{\dfrac{5}{32}}$

---

