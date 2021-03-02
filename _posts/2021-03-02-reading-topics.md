---
date: 2021-03-02 06:16
category:
tags: []
---

### 03/02/2021

#### Shoelace Theorem

Suppose the polygon $P$ has vertices $(a_1, b_1), (a_2, b_2),...(a_n, b_n)$ listed in clockwise order. Then the area of $P$ is
$$
\begin{align*}
S_P = \dfrac{1}{2} \left| (a_1b_2 + a_2b_3 + ... + a_nb_1)-(b_1a_2 + b_2a_3 + ... + b_na_1) \right| = \dfrac{1}{2} \left| \displaystyle\sum_{i=1}^{n}{(x_{i+1}+x_i)(y_{i+1}-y_i)} \right| = \dfrac{1}{2} \left| \displaystyle\sum_{i=1}^{n}{det \left( \begin{vmatrix}x_i & x_{i+1} \\ y_i & y_{i+1}\end{vmatrix} \right)} \right|
\end{align*}
$$

Reference:

* [AOPS page](https://artofproblemsolving.com/wiki/index.php/Shoelace_Theorem)
* [Wiki page](https://en.wikipedia.org/wiki/Shoelace_formula)
