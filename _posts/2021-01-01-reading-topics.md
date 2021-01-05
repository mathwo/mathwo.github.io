---
date: 2021-01-01 04:13
tags: []
---

### 01/01/2021

Somehow I was reminded of the 2012 movie **Tenchi: The Samurai Astronomer** again. There are not many movies you need watch in a life, and this one should be listed. There are many movies you can watch in a life, and this one should be listed as well.

---

### 01/04/2021

Note: this is a quote from some webpage which may be hard to get now:

A Coin Problem

BY GARY ANTONICK MARCH 17, 2014 12:00 PM

This week’s puzzle was suggested by Daniel Finkel of the Seattle-based Math for Love. Our last few from Dr. Finkel traced the path of a traveling nun; this week we transition to new territory with a coin challenge. Here’s Dr. Finkel with —

A Coin Problem

One of my greatest math experiences came during a test. The test was for entry into the Hampshire College Summer Studies in Mathematics, a program for high school students that I credit with opening the door of mathematical beauty for me. They call it the Interesting Test.

I had three hours to take the Interesting Test, and it consisted of four, extraordinary questions. I’ve returned to them many times over the years. (One I already posted as a Numberplay Puzzle: What Color Was the Bear). But this one is special to me. I spent two of the three hours of the test working on this problem, and I never got a satisfactory answer. I returned to it and discussed it with others for years afterward. Over that time, I got more and more out of the problem.

Here’s the surprise, though: there is a slick, two-sentence solution that, once you know it, seems ridiculously obvious. And yet, it was precisely because I did not know or stumble on the “obvious” answer that I got so much out of the problem. This problem taught me how not knowing can lead to understanding.

So here is the challenge:

Consider this simple game: flip a fair coin twice. You win if you get two heads, and lose otherwise. It’s not hard to calculate that the chances of winning are 1/4.

Your challenge is to design a game, using only a fair coin, that you have a 1/3 chance of winning.

And here is my recipe for getting the most out of this problem: if you can solve it, do not stop with one answer. Rather, see how many answers you can come up with. I’ve posed this problem to many people, and I continue to hear novel solutions.

For Math Lovers in Seattle

If you are in Seattle this Saturday, March 22, join Daniel Finkel and his Math for Love teammate Katherine Cook at Seattle’s third annual Julia Robinson Festival! The mission of the Julia Robinson Mathematics Festival is to inspire students to explore the richness and beauty of mathematics through activities that encourage collaborative, creative problem-solving. Entry is by donation but advance registration is required. Click here to register your 4th-12th grader for the festival.

That concludes week’s challenge. As always, use Gary Hewitt’s Enhancer for an optimal Numberplay experience. And send your favorite puzzles to gary.antonick@NYTimes.com.

Solution

Here’s Dr. Finkel with the complete solution and recap:


This is Dan with the solution to this week’s puzzle. Solutions, I should say, since commenters offered a slew of answers to this week’s problem. This “official” solution will be my reckoning of reader solutions, and what they show us about this problem.

Do-over Solutions

Here is Duncan Gilles (#3): “You essentially need to generate a 3 outcome game from a game that can only possibly have 2^n outcomes. So you’ll have to remove some of the outcomes. Here’s my way:

Flip the coin twice. If you get two heads, you win, if you get heads-tails or tails-heads, you lose. If you get two tails, you play again.”

Duncan Gilles put a finger on the difficulty hiding in this problem: any game that ends within some definite number of coin flips—say, n flips—has 2^n outcomes, and there is no whole number that can go in the numerator of a fraction when 2^n is in the denominator so that the fraction reduces to 1/3. The “do-over” solution, which relies on calling for a do-over if some option comes up, gives us control over the number of possible options. The cost is that the game could last a long time, if we were unlucky enough to flip tails for millions of flips in a row. But since the chances are ridiculously small that this could ever happen, it’s not too steep a price. In any case, it is a price that must be paid.

Readers contributed many variations on the do-over solution. Here are two I liked from one poster.

Kurt #25

“1) Flip 3 coins, sequentially. 2) If you get 0 heads or 0 tails, it’s a do-over. 3) The only remaining outcomes are 1 head (2 tails) or 1 tail (2 heads). 4) If the single head or tail is first, you win! 5) If the single head or tail is second or third, you lose.”

Kurt #24

“This is similar to the two coin flip, but reduces the odd of a “do over”. 1) Flip 5 coins at once. 2) If you get 1 head (5/32) or 4 heads (5/32) you win! (10/32 total) 3) If you get 2 heads (10/32) or 3 heads (10/32) you lose. (20/32) 4) If you get 0 heads (1/32) or 5 heads (1/32), do over. (2/32)”

The Stopping Point Solution

From Michael Josephy (#26_1):

“Throw a coin until you throw a tail. One wins if an odd number of heads have been thrown before that tail. So the winning sequences are HT, HHHT, HHHHHT, etc. with probability 1/4+1/16+1/64+… = 1/3 (an infinite geometric sequence).”

A number of readers noticed that you could sum an infinite sequence to get 1/3, and a few had this solution or one just like it. There is some serious power in this approach. Check out LAN’s use of infinite binary to define a game you have a 1/e chance of winning in #50_1.

The 1st Player Advantage Solution

From Paul (#23_1):

“1) Your opponent goes 1st, calls Heads or Tails, and flips the coin. If she’s right, she wins. If she is wrong, it’s your turn.2) Now you call Heads or Tails. Again, if you are right, you win; otherwise, go back to step 1).Because your opponent goes 1st, she is twice as likely to win as you — therefore her probability of winning is 2/3 and your is only 1/3.”

I love the simplicity of this method. All we need is a game that one person is twice as likely to win as their opponent. Noting that the second player half as likely to win on any of their flips as the first player was on their flip just previous means that the second player is half as likely to win period. And that means they have a 1/3 chance of winning the game.

The Better Sequence Solution

From conchis (#15):

“Flip a coin repeatedly until one of two three-coin sequences arises, then there are four pairs of sequences that give a 1/3 chance of winning. Where (x,y) indicates a pair of winning and losing sequences respectively, these are: (HTH,HHT), (HTT,HHT), (THH,TTH), and (THT,TTH).”

The Better Sequence Solution is really a variation of the 1st Player Advantage Solution above. You can read more about this game at the recent Numberplay post.

Heads vs. Tails Solutions

From Marla S (#28): “Start a sequence with a T (by definition–don’t flip). After that, flip the coin repeatedly. If you get two heads in a row BEFORE you get two tails in a row, you win. If you get two tails in a row, you lose. Note that the initialization of the sequence with a tail means that if the first flip is a tail, you lose. Note: this doesn’t quite work if you don’t initialize the sequence with a tail. Also note that this game is equivalent to the first one; it just repeats on HT instead of on TT (which loses).”

I had never seen this solution before, and at first glance, it’s not that clear why it works. Upon examination, though, it could be considered a variation of the 1st Player Advantage Solution. You have twice the chance of losing on flip 2 (by flipping a T) as you do of winning on flip 3 (by flipping a H! Notice that the only way you could get a head on flip 3 is if you already had gotten one on flip 2, which gives you 2 flips in a row). It continues on like this: your chances of winning are half your chances of losing for each pair of consecutive flips, and hence for the whole game.

The Gambling Stopping Point Variation

There’s a wonderful discussion between Jordan Greenblatt and Winston Luo (#32) that boils down to this solution:

“Keep betting $1 on a coin flip, and end if we have either won W or lost L. Because this is a valid strategy, it must have expectation zero, which means that the probability of winning W is L/(W L), and the probability of losing L is W/(W L). (I’ve glossed over a couple details here, but the details are unenlightening.) So we can use our fair coin to play this game with the given strategy, and we can fix the endpoints to give us a win with any rational probability. Then if we let W = 2 and L = 1, it works.”

A few words about this solution. The idea here is quite elegant. Since we don’t have any advantage or disadvantage, our expected outcome is to make $0 on this game. This means that if we broke up our games by stopping after $2 wins or $1 losses, we would expect that for every time we win $2, we should expect to have lost $1 twice; that’s the only way we end up with the $0 we expect to make. But this means that we are twice as likely to lose than to win! This is the territory of the 1st Player Advantage Solution above. The beauty here is that this solution generalizes to help you design games for any rational number, to give you that chance of winning.

Solutions by Symmetry

From Tom Enrico #47:

“My solution is a game you play with two friends. You pass the coin around, each flipping it once per round. If all three flips are heads, or if all three flips are tails, you each flip the coin again. Otherwise, the odd man out wins — that is, you win if you got a head and both of the other players got tails, or if you got a tail and both of the others got heads. Since each player has the same probability of winning, your chance is 1 in 3.”

From Marla S. #28 “Race three markers. Flip the coin once for each marker. If it’s a head, the marker advances. If it’s a tail, it doesn’t. Keep flipping for each marker until one marker is in front of both of the others. At completion, if the first marker is in front, you win. If either of the other two are in front, you lose. You can also play a variation of this where any marker left behind after a round is out and the remaining two race each other. Obviously, if the first marker is out first, you lose.”

These beautiful solutions take advantage of the fact if you play a fair game in a group of three, you have a 1/3 chance of winning. Aside from the elegance, note that these games generalize to any rational probability of winning as well. Say I want a game that I have a 31 out of 73 chance of winning. I’ll race 73 markers using Marla S.’s rules, and mark the first 31 of them with a blue dot. If one of the dotted one ends in front, I win. Lo and behold, my chances of winning are 31/73. I can easily design a similar game that gives any rational probability of my winning.

So there’s our slate of solutions! I thought this was a fantastic discussion, and for those who want to check out the comments, there is a ton more in there, including biased coins, martingales, and computations of expected values of the length of the game.

There were a number of deceptive games put forward that ended up not working for one reason or another. People caught and corrected most of these, but at least one slippery attempt made it through, and that was from Erik Zachte #38.

“Flip the coin until in the last three tosses occurs both a head and a tail. If the side that occurred just once in those three flips came last you win.”

This solution contains a delightful miscalculation that’s so subtle I almost missed it. I consider all mistakes productive, but this one I think is especially so. It taught me a lot about this problem. I’ll leave finding the miscalculation as a parting puzzle.

I have to mention that there were, of course, numerous technically-correct-but-not-quite-in-the-spirit-of-the-problem solutions involving fat coins, drawn markings on the ground, slot machines, dice (bought with coins), striped floors, guessing games, dates on the coin, angles of orientation of the coin, friends and other variables. I won’t catalog them, but one of them made me laugh, and is, on reflection, a pretty good answer to the question. I’ll end with that one, from pris (#27):

“Under my hand I have a coin with a heads facing up, tails facing up, or no coin at all. Which is it? (N.B. I have small children)”

Until next time. Thanks for all the great contributions!

Thank you, Dr. Finkel! And thanks as well to everyone who contributed to this week’s discussion: Neal, Richardo Ech, Steve Kass, Bram Weiser, Larry Johnson, Joshua Zucker, Pummy Kalsi, D-Ferg, Jonathan batchelor, Michael White, Steve Easterbrook, House fan, Ravi, Otto, Robert Grauer, Jay, Kurt, Michael Josephy, pris, Marla S, John, blah, B Rubin, Joe, J E Russell, Jordan Greenblatt, Rob, polymath, Kenneth Berniker, Brian, Erik Zachte, Tully, Kaye Thomas, Paul, Nuffsaid, Sreenadh, Tony, Aaron Carlisle, Corey Luskin, Tom Enrico, conchis, russ, Brent L, sw, John Plotz, msk, LAN, Marlon Field, Duncan Gilles, Tim, c101, jap, Patrick, EEE, Gary, Winston Luo, Hans, Daniel Finkel, Giovanni Ciriani and ralls.

---
