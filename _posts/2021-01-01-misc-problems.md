---
date: 2021-01-01 04:12
category:
author:
tags: []
summary:
---

### 01/17/2021

#### Adam, Bob and Charlie, each of them is given a unique number from 1,2,3,4,5,6,7,8,9. Everyone knows his number only. And they all know that Charlie's number equals to the average of Adam's and Bob's numbers. Now they start to talk to guess others numbers.

#### Adam: I guess Charlie's number is 7.

#### Bob: Charlie's number cannot be 7. I guess Charlie's number is 6.

#### Charlie: I know Bob is still guessing. I have known all our numbers, and I know Adam has known the numbers too.

#### If they are all smart and honest, what are their numbers?

**Solution:**

We use $A, B, C$ to represent Adam, Bob and Charlie's numbers.

From Adam's statement, we know that he thinks $A + B = 14$, so $A$ cannot be $1, 2, 3, 4$, and $A \ne 7$. Thus $A$ could be $5, 6, 8, 9$.

From Bob's statement, since he thinks $A + B = 12$, and $A$ could be $5, 6, 8, 9$, $B$ could be $3, 4, 6, 7$, but he guesses $C=6$, so $B$ could be $3, 4, 7$.

Now we make all possible combinations that $A + B$ must be an even number:

|   A   |    B   |   C   |
| :---- |    :-: | ----: |
|   5   |    3   |   4   |
|   5   |    7   |   6   |
|   6   |    4   |   5   |
|   8   |    4   |   6   |
|   9   |    3   |   6   |
|   9   |    7   |   8   |

These are the information that all three persons know. Then from Charlie's statement, since he knows all the numbers, $C$ must be a unique number is all situations, so $C \ne 6$. And similarly, $A$ is also a unique number in all situations, so $A$ must be 6 or 8. $A$ cannot be 8 since it will make $C = 6$. So the answer is $\boxed{A=6, B=4, C=5}$. To verify Charlie's statement, before he said he and Adam have known the answer, Bob was still guessing. He was right, Bob has number 4 and it appears in two situations, so Bob was still guessing before Charlie finished his statement.

