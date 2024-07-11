# Self-Contained Incenter-Related Configurations

#### Let's start off from the **Incenter-Excenter Lemma**:

$$
\begin{multline}
\shoveleft \boxed{\pmb{\text{Incenter-Excenter Lemma (Trillium theorem)}}}\\
\shoveleft \text{Let }ABC \text{ be a triangle with incenter }I, A\text{-excenter }I_A, \text{ and denote by }M_A \text{ the midpoint of arc }BC \text{ not containing }A,\\
\shoveleft\text{then }M_A \text{ is the circumcenter of }\triangle{BIC}, \text{ or the center of } \odot{IBI_AC}
\end{multline}
$$

![image-20240703203831106](H:\workspace\mwo\assets\images\2024\image-20240702000925430.png)

**Prove:**
$$
\begin{multline}
\shoveleft \text{Since }AIM_A \text{ is the bisector of }\angle{BAC}, AIM_A \text{ are collinear}.\\
\shoveleft \angle{M_ABI}=\angle{M_ABC}+\angle{CBI}=\angle{M_ABC}+\angle{CBI}=\dfrac{\angle{BAC}}{2}+\dfrac{\angle{ABC}}{2}\\
\shoveleft \angle{BIM_A}=\angle{BAI}+\angle{ABI}=\dfrac{\angle{BAC}}{2}+\dfrac{\angle{ABC}}{2}=\angle{M_ABI}\implies BM_A=IM_A\\
\shoveleft \text{Similarly}, CM_A=IM_A \implies M_A \text{ is the circumcenter of }\triangle{BIC}\\
\shoveleft \text{Then we need prove }I_A \text{ is also on the circumcircle of }\triangle{BIC}, \text{ or }BICI_A \text{ is cyclic}\\
\shoveleft I, I_A \text{ are incenter and excenter respectively }\\
\shoveleft \implies BI, BI_A \text{ are internal and external angles respectively }\\
\shoveleft \implies\angle{IBI_A}=\angle{IBC}+\angle{CBI_A}=90^{\circ}.\text{Similarly, }\angle{ICI_A=90^{\circ}}\\
\shoveleft \implies BICI_A \text{ is cyclic} \implies M_A \text{ is the center of }\odot{BICI_A}\blacksquare
\end{multline}
$$

#### Let $M_{BC}$ be midpoint of arc $\overset{\huge\frown}{BAC}$, easy to see that:

![image-20240702002022547](H:\workspace\mwo\assets\images\2024\image-20240702001939003.png)

#### (1) $M_A$ is the center of $\odot{BIC}$

#### (2) $M_{BC}$ is the antipode of $M_A$ in $\odot{ABC}$ $\implies BC \perp M_AM_{BC}$

#### (3) $M_AM_BC$ is the diameter of $\odot{ABC} \implies \angle{M_{BC}BM_A}=\angle{M_{BC}CM_A}=90^{\circ} \implies BM_{BC}, CM_{BC}$ are tangent to $\odot{BIC}$ at $B, C$

#### Then we introduce Harmonic Quadrilateral:

![image-20240702003447325](H:\workspace\mwo\assets\images\2024\image-20240702002845027.png)

#### Let $IM_{BC}\cap \odot{ABC}=T, IM_{BC}\cap \odot{BIC}=J$

#### (1) It is a well-known Lemma in the Mixtilinear Configuration that: $T$ is the $A$-Mixtilinear Point.

####(2) The Antipode fact $\implies \angle{M_{BC}TM_A}=90^{\circ} \implies T$ is the midpoint of $IJ$

#### Let $K$ be the intersection of tangents at $I, J$ to $\odot{BIC}$

#### (3) La-Hire's Theorem $\implies I, J $ are the polar of $K$ with reference to $\odot{BIC}$

#### $\implies K $ lies on the polar of $M_{BC}$ with reference to $\odot{BIC}$, i.e., $K \in BC$

#### (4) $K, T, M_A$ are collinear



#### We can use harmonic quadrilateral instead of La-Hire's Theorem here:

![image-20240702004724634](H:\workspace\mwo\assets\images\2024\image-20240702004724634.png)

#### Let:

#### (a) $D,E,F$ be the $A,B,C-$Intouch points

#### (b) $\Psi_{\odot{BIC}}$ be the inversion around $\odot{BIC}$

#### (c) $\odot{AIFE} \cap \odot{ABC}=L$, $A'$ be the $A$-antipode of $A$ in  $\odot{ABC}$

#### (d) $AI \cap BC=X, KI \cap AB=Y, KI \cap AC=Z$

#### (e) P $\in EF$  such that $DP \perp EF$

#### (f) $S= DP \cap \odot{DEF}$

#### Then we have:

#### (1) $L $ lies on  $IA'$

#### (2) Radical Axes Theorem on $\odot{ALFIE}, \odot{BIC}, \odot{ABC} \implies K \in LA$

![image-20240702221519992](H:\workspace\mwo\assets\images\2024\image-20240702005504678.png)

#### (3) Radical axis on $\odot{IM_A}, \odot{BIC}, \odot{ABC} \implies$ $X,Y$ are the tangency points of the $A$-Mixtilinear incircle with $AB, AC$

#### (4) Quadrilateral similarity: $AFIE \sim M_{BC}M_AC$

#### (5) $\Psi_{\odot{BIC}}(\odot{ABC})=BC$

#### (6) Shooting Lemma $\implies \Psi_{\odot{BIC}}(AI \cap BC)=\Psi_{\odot{BIC}}(X)=A$

#### (7) $\triangle{IDX} \overset{\Psi_{\odot{BIC}}}{\mapsto}\triangle{ILA} \implies ALDX$ cyclic, $LDM_A$ collinear, which can also be proved using angle chasing:

$$
\begin{multline}
\shoveleft \angle{SFE}=\angle{SDE}=\angle{PDE}=90^{\circ}-\angle{FED}=\dfrac{\angle{ABC}}{2}=\angle{IBC}\\
\shoveleft \text{Similarly, }\angle{SEF}=\angle{ICB} \implies \triangle{SFE}\sim \triangle{IBC}\\
\end{multline}
$$

#### (8) Let $f$ be the spiral similarity at $L$ that sends ${F}\mapsto{B}$ and ${E}\mapsto{C} \implies f(S)=I$ (i.e., ${S} \mapsto{I} $), and since $P,D$ are the orthogonal projections of $S, I$ onto $FE, BC$ respectively  $\implies f(P)=D$

#### (9) $I$ is the midpoint of arc $\overset{\huge\frown}{FE}$ in $\odot{ALFIE} \implies f(I)=M_A$ (i.e., ${I}\mapsto{M_A}$)

#### (10) $PD \parallel IM_A \implies $ the spiral center $L$ carrying ${PD}\mapsto{IM_A}$ is also on $DM_A \implies LDM_A$ $collinear

#### (11) $f(A)=M_{BC}$

