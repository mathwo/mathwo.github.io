---
title: Algebra Problems
date: 2020-12-01 11:08
tags: []
---

### 12/01/2020

#### For $n=1,2,3,... (\sqrt{2}-1)^n=\sqrt{m+1}-\sqrt{m}$ where $m$ is a positive integer which depends on $n$. Proof by (easy) mathematical induction. See *American Mathematical Monthly, vol. 58, 1951, p. 566*. Problem 15.53 From *Mathematical Discovery* by George Polya

**Solution:**

1. When $n=1, m_1=1$

2. When $n=2, (\sqrt{2}-1)^2=3-2\sqrt{2}=\sqrt{9}-\sqrt{8}, m_2=8$

3. Suppose $n=k, (\sqrt{2}-1)^k=\sqrt{m_k+1}-\sqrt{m_k}, m_k \in \mathbb{Z^{+}}$, then
  $(\sqrt{2}-1)^{k+1}=(\sqrt{m_k+1}-\sqrt{m_k})(\sqrt{2}-1)$
  $=\sqrt{2m_k+2}+\sqrt{m_k}-\sqrt{m_k+1}-\sqrt{2m_k}$

Let $\sqrt{2m_k+2}+\sqrt{m_k}=\sqrt{m_{k+1}+1}$, then
$m_{k+1}=(\sqrt{2m_k+2}+\sqrt{m_k})^2-1=3m_k+1+2\sqrt{2m_k^2+2m_k}$
$=(\sqrt{2m_k})^2+(\sqrt{m_k+1})^2+2\sqrt{2m_k(m_k+1)}=(\sqrt{2m_k}+\sqrt{m_k+1})^2$
$\sqrt{m_{k+1}}=\sqrt{2m_k}+\sqrt{m_k+1} \implies (\sqrt{2}-1)^{k+1}=\sqrt{m_{k+1}+1}-\sqrt{m_{k+1}}$
where $ m_{k+1}=3m_k+1+2 \sqrt{2m_k^2+2m_k} $

Now we need prove that $m_{k+1} \in \mathbb{Z^{+}}$.

1. When $n=1$, $m_1=1$

2. When $n=2$, $m_2=3m_1+1+2\sqrt{2m_1^2+2m_1}=8$, and $\sqrt{2m_1^2+2m_1}=2 \in \mathbb{Z^{+}}$

3. Suppose $n=k$, $m_k=3m_{k-1}+1+2\sqrt{2m_{k-1}^2+2m_{k-1}}$, and $\sqrt{2m_{k-1}^2+2m_{k-1}}=p \in \mathbb{Z^{+}}$

   So $m_k=3m_{k-1}+1+2p$, $p^2=2m_{k-1}^2+2m_{k-1}$

   Then when $n=k+1$, $m_{k+1}=2m_k+1+2\sqrt{2m_k^2+2m_k}$, where

   $2m_k^2+2m_k=2(3m_{k-1}+1+2p)(3m_{k-1}+2+2p)$

   $=18m_{k-1}^2+18m_{k-1}+24pm_{k-1}+12p+4+8p^2$

   $=34m_{k-1}^2+34m_{k-1}+24pm_{k-1}+12p+4$

   $=(4m_{k-1}+3p+2)^2 \implies m_{k+1} \in \mathbb{Z^{+}}$

So we have approved the statement. $\blacksquare$
