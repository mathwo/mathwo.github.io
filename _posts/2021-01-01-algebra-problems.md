---
date: 2021-01-01 04:11
category:
author:
tags: []
summary:
---

### 01/15/2021

#### Let $x_1, x_2, x_3, x_4$ be positive reals such that $(x_1+x_3)(x_2+x_4)=1$. Prove $\dfrac{x_1^3}{x_2+x_3+x_4} + \dfrac{x_2^3}{x_1+x_3+x_4} + \dfrac{x_3^3}{x_1+x_2+x_4} + \dfrac{x_4^3}{x_1+x_2+x_3} \ge \dfrac{1}{3}.$

**Solution:**

$(x_1+x_3)(x_2+x_4)=1 \implies x_1^2+x_2^2+x_3^2+x_4^2 \ge \dfrac{1}{2}[(x_1+x_3)^2+(x_2+x_4)^2] \ge 1$

$\displaystyle\sum_{cyc}{\dfrac{x_1^3}{x_2+x_3+x_4}} = \sum_{cyc}{\dfrac{x_1^4}{x_1x_2+x_1x_3+x_1x_4}} \ge \dfrac{(x_1^2+x_2^2+x_3^2+x_4^2)^2}{2\sum_{i>j}{x_ix_j}} = \dfrac{(x_1^2+x_2^2+x_3^2+x_4^2)^2}{2(x_1x_3+x_2x_4)+2(x_1+x_3)(x_2+x_4)}$

since $2(x_1x_3+x_2x_4) \le x_1^2+x_2^2+x_3^2+x_4^2$

$\implies \displaystyle\sum_{cyc}{\dfrac{x_1^3}{x_2+x_3+x_4}}  \ge \dfrac{(x_1^2+x_2^2+x_3^2+x_4^2)^2}{3(x_1^2+x_2^2+x_3^2+x_4^2)} \ge \dfrac{1}{3} \blacksquare$
