---
title: Combinatorics Problems
date: 2020-12-01 11:09
tags: [Combinatorics]
---

### 12/20/2020

#### Adam, Benin, Chiang, Deshawn, Esther, and Fiona have internet accounts. Some, but not all, of them are internet friends with each other, and none of them has an internet friend outside this group. Each of them has the same number of internet friends. In how many different ways can this happen? (AMC 10 2012-A Problem 23)

**Solution:**

* Each has 1 internet friend: $5*3=15$ (Three lines: for A, choose 1 from 5 to make a pair, then one of the rest person choose 1 from 3 to make a pair, the rest 2 makes a pair)
* Each has 2 internet friends: $\binom{5}{2} + \binom{5}{2} \times \binom{3}{1} \times \binom{2}{1}=70$ (a hexagon or two small triangles)
* Each has 3 internet friends: $\binom{5}{3} + \binom{5}{3} \times \binom{3}{2} \times \binom{2}{1}=70$ (for A, choose 3 from 5 to make friends, then left 2 persons not friend of A. Consider one of the two, he can share 3 friends with A, then the last person also shares three friends with A; or he can share 2 friends out of 3 with A, then make friend with the last person, now there are 2 people with 2 friends, 2 people with 2 friend, th former choose 1 of the latters, then the rest connections are determined; or he can share 1 friends out of 3 with A)
* Each has 4 internet friends: $\binom{5}{4} \times \binom{3}{2} = 15$ (for A, choose 4 from 5 to make friends, then there is the last person not being A's friends, and must have all A's friends as his/her friends. Then one of their common 4 friends chooses 2 from the other three as his/her friends, the last of the common friend has no other choice than share these two friends)

So there are totally $15+70+70+15=\boxed{170}$ different ways.

---

### 12/21/2020

#### A $3 \times 3$ square is partitioned into 9 unit squares. Each unit square is painted either white or black with each color being equally likely, chosen independently and at random. The square is then rotated $90^{\circ}$ clockwise about its center, and every white square in a position formerly occupied by a black square is painted black. The colors of all other squares are left unchanged. What is the probability that the grid is now entirely black? (AMC 10 2012-A Problem 20)

**Solution:**

* The center square has $\dfrac{1}{2}$ chance to be black.
* The 4 corners will be all black if they are BBBB, BBBW, BWBW, WBWB, BBWB, BWBB, WBBB, so it's $\dfrac{7}{16}$ chance to be all black.
* Similarly the 4 squares not on corner nor in center will be all black if they are BBBB, BBBW, BWBW, WBWB, BBWB, BWBB, WBBB, and it's also $\dfrac{7}{16}$ chance to be all black.

Thus totally the probability that the grid is entirely black: $\dfrac{1}{2} \times \dfrac{7}{16} \times \dfrac{7}{16} = \boxed{\dfrac{49}{512}}$

---

### 12/21/20202

#### Real numbers $x$, $y$, and $z$ are chosen independently and at random from the interval $[0, n]$ for some positive integer $n$. The probability that no two of $x$, $y$, and $z$ are within 1 unit of each other is greater than $\dfrac{1}{2}$. What is the smallest possible value of $n?$

**Solution:**

---

### 12/22/2020

#### In a round-robin tournament with 6 teams, each team plays one game against each other team, and each game results in one team winning and one team losing. At the end of the tournament, the teams are ranked by the number of games won. What is the maximum number of teams that could be tied for the most wins at the end of the tournament? (AMC 10 2012-B Problem 15)

**Solution:**

There are $\binom{6}{2} = 15$ games played, so it's impossible for 6 teams to win equal number of games. It is possible for 5 teams to win equally. 5 teams each wins 3 games and the rest team wins 0 games.

---

### 12/23/2020

#### Suppose that one of every $500$ people in a certain population has a particular disease, which displays no symptoms. A blood test is available for screening for this disease. For a person who has this disease, the test always turns out positive. For a person who does not have the disease, however, there is a $2%$ false positive rate—in other words, for such people, $98%$ of the time the test will turn out negative, but $2%$ of the time the test will turn out positive and will incorrectly indicate that the person has the disease. Let $p$ be the probability that a person who is chosen at random from this population and gets a positive test result actually has the disease. Which of the following is closest to $p?$ (AMC 10 2011-B Problem 18)

$(A) \dfrac{1}{98} \hspace{5mm} (B) \dfrac{1}{9} \hspace{5mm} (C) \dfrac{1}{11} \hspace{5mm} (D) \dfrac{49}{99} \hspace{5mm} (E) \dfrac{98}{99}$

**Solution:**

This problem is a reading problem at first. What is asked to solve? Choose a person at random and what is probability he actually has the disease? No. For second think, it's asking when a person is chosen at random from this population and gets a positive test result, what is the probability he actually has the disease.

How many people will get positive test result from $500$ people? $1 + 0.02 \times 499$

How many of them actually has the disease: $1$

So the answer is $\dfrac{1}{1+\dfrac{499}{50}} \approx \dfrac{50}{550} = \boxed{\dfrac{1}{11}}$
