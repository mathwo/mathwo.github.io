---
title: Misc Problems
date: 2020-11-12 12:40
tags: []
---

### 11/16/2020

#### A scale model of a building is 8 inches wide and 27 inches tall. It is placed against a wall. What is the length of the shortest pole that will reach the wall above it from the level ground?

![image-20201116160912095](/assets/images/image-20201116160912095.png){:class="image--md"}

Use trigonometry it is easier to get $CG = \dfrac{8}{cos \alpha} + \dfrac{27}{sin \alpha}$, it gets minimum value when

 $\dfrac{8 sin \alpha}{cos^2 \alpha}- \dfrac{27 cos \alpha}{sin^2 \alpha}=0 \implies tan \alpha=\dfrac{3}{2} \implies CG_{min}=\boxed{13\sqrt{13}}$

Note: to avoid trigonometrical approach, it would be a hard work to solve this problem, seems.

Solution 2:

Get another solution based on another problem on 11/30/2020:

Suppose $AF=a, AD=b, FG=x, CD=y, CG=l$

$\dfrac{y}{a}=\dfrac{b}{x} \implies xy=ab$

$l^2=(a+x)^2+(b+y)^2=(a+x)^2+(b+\dfrac{ab}{x})^2$

$l^2$ gets minimum value when

$2(a+x)+2(b+\dfrac{ab}{x})(-\dfrac{ab}{x^2})=0$

$\implies (x^3-ab^2)(x+a)=0$

$\implies x=\sqrt[3]{ab^2}, y=\sqrt[3]{a^2b}$

$\implies l_{min}=\boxed{\sqrt{a^2+3a\sqrt[3]{ab^2}+3b\sqrt[3]{a^2b}+b^2}}$

---

### 11/15/2020

#### Find all primes $p$ to make $p^3-2p+4$ is a perfect square.

Solution:

If $q=3k+1$ or $3k-1$, then $q^2=1(mod3)$
But if $p=3k+1$, $p^3-2p+4=0 (mod3)$, if $p=3k-1$, $p^3-2p+4=2 (mod3)$
only when $p=3k$, $p^3-2p+4=1 (mod3)$
and $p$ must be prime, so $\boxed{k=1, p=3}$ is the only one.

---

### 11/23/2020

#### In a single-elimination tournament consisting of $2^9=512$ teams, there is a strict ordering on the skill levels of the teams, but Joy does not know that ordering. The teams are randomly put into a bracket and they play out the tournament, where the better team always beats the worse team. Joy is then given the results of all $511$ matches and must write a list of teams such that she can guarantee that the third-best team is on the list. What is the minimum possible length of Joy's list$\text{?}$ (Shared by Brady from HMMT Guts Test November 2020)

Solution

After understanding the model, easy to know that, checking the result of all $511$ matches, the only team who won 9 matches is the first team in the skill level list.

The second best team must be one of those teams who lost to the first team - because only the best team can win it. There are 9 teams in this set.

The third best team has two situations:

* It could be one of the teams who lost to the first team - it could be in the 9-team-set.
* Or, it could be one of the teams who lost to any team from the 9-team-set.

Check the teams in the 9-team-set:

* There is a team lost in the 1st round, and 0 team lost to it.
* There is a team lost in the 2nd round, and 1 team lost to it.
* There is a team lost in the 3rd round, and 2 teams lost to it.
* ...
* There is a team lost in the 9th round, and 8 teams lost to it.

So totally there are $1+2+...+8=36$ teams lost to any team from the 9-team-set.

To include two situations for the third best team, we need the list length no shorter than $9 + 36 = \boxed{45}$ to guarantee that the third best team in it.

---

### 11/30/2020

![image-20201130023450021](/assets/images/image-20201130023450021.png){:class="image--md"}

$l$ and $c$ are known. Find $x$ and $y$. This problem seems similar to a previous one.

Solution:

![image-20201130024443003](/assets/images/image-20201130024443003.png){:class="image--xl"}

$\dfrac{y}{c}=\dfrac{c}{x} \implies xy=c^2$

$\implies l=\sqrt{xy+x^2}+\sqrt{xy+y^2}$

$w=x+y \implies l=\sqrt{xw}+\sqrt{yw}=\sqrt{w}(\sqrt{x}+\sqrt{y})$

$\implies l^2=w(x+y+2\sqrt{xy})=w(w+2c)$

$w^2+2cw-l^2=0 \implies w=\dfrac{-2c+\sqrt{4c^2+4l^2}}{2}=\sqrt{c^2+l^2}-c$

So $x$,$y$ are roots of $t^2-(\sqrt{c^2+l^2}-c)t+c^2=0$:

$\implies x,y=\dfrac{\sqrt{c^2+l^2}-c \pm \sqrt{l^2-2c^2-2c\sqrt{c^2+l^2}}}{2}$

$\implies y=\boxed{\dfrac{\sqrt{c^2+l^2}-c+\sqrt{l^2-2c^2-2c\sqrt{c^2+l^2}}}{2}}$

