---
title: Misc Problems
date: 2020-11-11 12:40
tags: []
---

### 11/16/2020

#### A scale model of a building is 8 inches wide and 27 inches tall. It is placed against a wall. What is the length of the shortest pole that will reach the wall above it from the level ground?

![image-20201116160912095](/assets/images/image-20201116160912095.png){:class="image--md"}

Use trigonometry it is easier to get $CG = \dfrac{8}{cos \alpha} + \dfrac{27}{sin \alpha}$, it gets minimum value when

 $\dfrac{8 sin \alpha}{cos^2 \alpha}- \dfrac{27 cos \alpha}{sin^2 \alpha}=0 \implies tan \alpha=\dfrac{3}{2} \implies CG_{min}=\boxed{13\sqrt{13}}$

Note: to avoid trigonometrical approach, it would be a hard work to solve this problem, seems.

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

#### In a single-elimination tournament consisting of $2^9=512$ teams, there is a strict ordering on the skill levels of the teams, but Joy does not know that ordering. The teams are randomly put into a bracket and they play out the tournament, where the better team always beats the worse team. Joy is then given the results of all $511$ matches and must write a list of teams such that she can guarantee that the third-best team is on the list. What is the minimum possible length of Joy's list$\text{?}$ (Shared by Brady from HMMT November 2020)

#### Solution

