---
date: 2021-01-01 04:12
category:
author:
tags: []
summary:
---

### 01/04/2021

#### Aaron and Brooke are playing a game where a fair coin is being flipped repeatedly. If 4 heads in a row are ever flipped, the game ends and Aaron wins. If 3 tails in a row are ever flipped, the game ends and Brooke wins. What is the probability that Aaron wins?

**Solution:**

John Horton Conway's algorithm can be used for sequences of dissimilar length.

> Here is a general description of Conway's algorithm:
>
> (1) Given two sequences $A$ and $B$, the leading numbers give us a way of working out the odds of sequence $B$.
>
> (2) Here is the process to calculate the leading number with $A$ as the upper sequence and $B$ as the lower sequence:
>
> (2.1) Put two sequences with upper sequence on top of lower sequence
>
> (2.2) Compare two sequences, put 1 above the first digit of the upper sequence of equal, 0 otherwise
>
> (2.3) Remove the leading digit from the upper sequence and shift it to the left. Then repeat step (II) to get next digit, and so on.
>
> (3) Write $AA$ for the binary format of leading number we get using sequence $A$ as the upper and lower sequence. $AB$ for the binary format of leading number we get using sequence $A$ has the upper sequence and sequence $B$ as the lower sequence, and so on.
>
> The odds of sequence $B$ winning are given by the equation $\dfrac{AA-AB}{BB-BA}$.

Apply Conway's algorithm to this problem:

$A=HHHH, B=TTT$

The binary leading number of $AA$ is 1111, the binary leading number of $AB$ is 0000, the binary leading number of $BB$ is 111, and the binary leading number of $BA$ is 000.

So the odds of $B$ winning is given by $\dfrac{1111-0000}{111-000}=\dfrac{15}{7}$

This means the probability that Aaron wins is $\dfrac{7}{15+7}=\boxed{\dfrac{7}{22}}$.

**References:**

* [Penney's Game](https://en.wikipedia.org/wiki/Penney%27s_game)

  * [The coin flip conundrum - Po-Shen Loh](https://www.youtube.com/watch?v=IAiNqQi30-Y)

  * [Penney's Game - When Fair isn't](https://www.youtube.com/watch?v=rfzG7Iomfrg)

  * [Conway's Algorithm](https://penneyante.weebly.com/conways-algorithm.html)

  * [Winning odds](https://plus.maths.org/content/os/issue55/features/nishiyama/index)

* [Coin Tossing on Wolfram MathWorld and reference](https://mathworld.wolfram.com/CoinTossing.html)

  * [Winning Ways for Your Mathematical Plays, Vol. 1: Adding Games](/assets/files/Winning_Ways_for_Your_Mathematical_Plays_V1.pdf)

  * [Time Travel and Other Mathematical Bewilderments](/assets/files/Time_Travel_and_Other_Mathematical_Bewilderments.pdf) P. 64-66 tells some results but did not give reason.

  * [How are the odds got?](http://catlin.casinocitytimes.com/article/penneys-game-57864)

  * [Gamma Exploring Euler's Constant](/assets/files/Gamma_Exploring_Eulers_Constant.pdf)

* [Gambler's Ruin](https://en.wikipedia.org/wiki/Gambler%27s_ruin)

  * [Flyer and Exercises](/assets/files/gamblers_ruin.pdf)

  * [Gambler's Ruin: some aspects of coin tossing](/assets/files/gamblers_ruin_some_aspects_of_coin_tossing.pdf)

  * Related problem:

> A has 6 points and B has 4 points. They flip a coin and if it's a head, then A gets a point. If it's a tail, then B gets a point. What's the probability that A wins with 10 points?

* [From Unequal Chance to a Coin Game Dance: Variants of Penney's Game](/assets/files/from_unequal_chance_to_a_coin_game_dance_variants_of_penneys_game.pdf)

* [Pattern Matching Probabilities and Paradoxes as a new Variation on Penney's Coin Game](/assets/files/pattern_matching_probabilities_and_paradoxes_as_a_new_variation_on_penney_coin_game.pdf)

* [Humble-Nishiyama Randomness Game - A New Variation on Penney’s Coin Game](humble-nishiyama_randomness_game-a_new_variation_on_penneys_coin_game.pdf)

* [Coin flipping Game](https://laurentlessard.com/bookproofs/a-coin-flipping-game/)

* [Counterintuitive Probabilities](/assets/files/counterintuitive_probabilities.pdf)

* [The St. Petersburg Paradox](https://plato.stanford.edu/entries/paradox-stpetersburg/)

* [Prisoner Coin-flipping Puzzle](http://varianceexplained.org/r/riddler-prisoner-flip/)

* [The Parrondo Paradox](http://math.oxford.emory.edu/site/home/futurePages/excelProjectParrondoParadox/)

* [A Fresh Look at the "Hot Hand" Paradox](/assets/files/a_fresh_look_at_the_hot_hand_paradox.pdf)


