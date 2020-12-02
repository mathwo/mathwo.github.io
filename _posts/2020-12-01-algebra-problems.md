---
title: Algebra Problems
date: 2020-12-01 11:08
tags: []
---

### 12/01/2020

#### For $n=1,2,3,... (\sqrt{2}-1)^n=\sqrt{m+1}-\sqrt{m}$ where $m$ is a positive integer which depends on $n$. Proof by (easy) mathematical induction. See *American Mathematical Monthly, vol. 58, 1951, p. 566*. Problem 15.53 From *Mathematical Discovery* by George Polya

**Solution:**

1. When $n=1, m=1$

2. When $n=2, (\sqrt{2}-1)^2=3-2\sqrt{2}=\sqrt{9}-\sqrt{8}, m=8$

3. Suppose $n=k, (\sqrt{2}-1)^k=\sqrt{m+1}-\sqrt{m}, m \in \mathbb{Z^{+}}$, then
  $(\sqrt{2}-1)^{k+1}=(\sqrt{m+1}-\sqrt{m})(\sqrt{2}-1)$

  $=\sqrt{2m+2}+\sqrt{m}-\sqrt{m+1}-\sqrt{2m}$
  Let $\sqrt{2m+2}+\sqrt{m}=\sqrt{n+1}$, then
  $n=(\sqrt{2m+2}+\sqrt{m})^2-1=3m+1+2\sqrt{2m^2+2m}$

  $=(\sqrt{2m})^2+(\sqrt{m+1})^2+2\sqrt{2m(m+1)}=(\sqrt{2m}+\sqrt{m+1})^2$

  $\sqrt{n}=\sqrt{2m}+\sqrt{m+1} \implies (\sqrt{2}-1)^{k+1}=\sqrt{n+1}-\sqrt{n}$
  where $ n=3m+1+2 \sqrt{2m^2+2m} $
