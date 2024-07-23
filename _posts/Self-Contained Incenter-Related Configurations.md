### Self-Contained Incenter-Related Configurations

#### Let's start from Ratio Lemma:

![image-20240716082337165](H:\workspace\mwo\assets\images\2024\image-20240716082310459.png)
$$
\begin{multline}
\shoveleft \boxed{\pmb{\text{Boring Ratio Lemma}}}\\
\shoveleft \text{Let }D \text{ be a point on side }BC \text{ of }\triangle{ABC}, \text{ then } \dfrac{BD}{CD}=\dfrac{AB}{AC}\cdot \dfrac{sin\angle{BAD}}{sin\angle{CAD}}\\
\shoveleft
\end{multline}
$$
**Prove:**
$$
\begin{multline}
\shoveleft \dfrac{BD}{AB}=\dfrac{sin\angle{BAD}}{sin\angle{ADB}} \implies BD=\dfrac{sin\angle{BAD}}{sin\angle{ADB}}\cdot AB\\
\shoveleft \dfrac{CD}{AC}=\dfrac{sin\angle{CAD}}{sin\angle{ADC}} \implies CD=\dfrac{sin\angle{CAD}}{sin\angle{ADC}} \cdot AC\\
\shoveleft sin\angle{ADB}=sin\angle{ADC}\implies \dfrac{BD}{CD}=\dfrac{AB}{AC}\cdot \dfrac{sin\angle{BAD}}{sin\angle{CAD}}\blacksquare
\end{multline}
$$

$$
\begin{multline}
\shoveleft  \boxed{\pmb{\text{Cool Ratio Lemma}}}\\
\shoveleft \text{Let }\omega \text{be a circle through points }B \text{ and }C, \text{ and let a line meet }\omega \text{ at points }A, D, \text{ and } BC \text{ at }E, \text{ then }\\
\shoveleft \dfrac{BE}{CE}=\dfrac{AB}{AC} \cdot \dfrac{BD}{CD}
\end{multline}
$$

![image-20240716083508836](H:\workspace\mwo\assets\images\2024\image-20240716083508836.png)

**Prove:**
$$
\begin{multline}
\shoveleft \dfrac{BE}{CE}=\dfrac{[ABE]}{[ACE]}=\dfrac{d(B, AE)}{d(C, AE)}==\dfrac{d(B, AD)}{d(C, AD)}=\dfrac{[ABD]}{[ACD]}\\
\shoveleft =\dfrac{\dfrac{1}{2} \cdot AB \cdot BD \cdot sin{\angle{ABD}}}{\dfrac{1}{2} \cdot AC \cdot CD \cdot sin{\angle{ACD}}}=\dfrac{AB}{AC} \cdot \dfrac{BD}{CD}\\
\end{multline}
$$


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

#### Let $IM_{BC}\cap \odot{ABC}=T, IM_{BC}\cap \odot{BIC}=J$, Let $K$ be the intersection of tangents at $I, J$ to $\odot{BIC}$.



#### We will start from $\boxed{symmedian}$: 

#### Symmedian is the reflection of median over the corresponding angle bisector of a triangle (isogonal of the median).

![image-20240716042808826](H:\workspace\mwo\assets\images\2024\image-20240716042234802.png)
$$
\begin{multline}
\shoveleft  \boxed{\pmb{\text{Lemma 1}}}\\
\shoveleft \text{In }\triangle{ABC}, P \text{ is a point on } BC \text{ such that }\dfrac{BP}{PC}=\dfrac{AB^2}{AC^2} \text{ iff }AP \text{ is a symmedian}.
\end{multline}
$$
**Prove:**
$$
\begin{multline}
\shoveleft AP \text{ is a symmedian } \Longleftrightarrow \angle{BAP}=\angle{CAM} \Longleftrightarrow \angle{BAM}=\angle{PAC}\\
\shoveleft \dfrac{BM}{MC}=1=\dfrac{AB}{BC}\dfrac{sin\angle{BAM}}{sin\angle{MAC}} \Longleftrightarrow \dfrac{AB}{AC}=\dfrac{sin\angle{MAC}}{sin\angle{BAM}}=\dfrac{sin\angle{BAP}}{sin\angle{PAC}}\\
\shoveleft \Longleftrightarrow \dfrac{BP}{PC}=\dfrac{AB}{AC}\dfrac{sin\angle{BAP}}{sin\angle{PAC}}=\dfrac{AB^2}{AC^2}\blacksquare\\
\end{multline}
$$

$$
\begin{multline}
\shoveleft \boxed{\pmb{\text{Lemma 2}}}\\
\shoveleft \text{If the tangents at }B \text{ and } C \text{ to circumcircle of }\triangle{ABC} \text{ intersect at }K, \text{ then the line } AK \text{ is a symmedian}.\\
\end{multline}
$$

![image-20240716203829494](H:\workspace\mwo\assets\images\2024\image-20240716203829494.png)

**Prove:**
$$
\begin{multline}
\shoveleft \text{Let }AK \cap BC=P, \text{easy to see }BK=CK, \angle{CBK}=\angle{BCK}=\angle{A}\\
\shoveleft \text{from Lmma 1 } \implies \dfrac{BP}{CP}=\dfrac{BK}{CK}\dfrac{sin\angle{BKP}}{sin\angle{CKP}}=\dfrac{sin\angle{BKP}}{sin\angle{CKP}}\\ 
\shoveleft \text{Apply Sine laws in }\triangle{ABK} \implies \dfrac{AB}{sin\angle{BKP}}=\dfrac{AK}{sin\angle{ABK}}=\dfrac{AK}{sin(\angle{A}+\angle{B})}=\dfrac{AK}{sin{\angle{C}}}\\
\shoveleft \text{Apple Sine laws in }\triangle{ACK} \implies  \dfrac{AC}{sin\angle{CKP}}=\dfrac{AK}{sin\angle{ACK}}=\dfrac{AK}{sin(\angle{A}+\angle{C})}=\dfrac{AK}{sin\angle{B}}\\
\shoveleft \implies \dfrac{sin\angle{BKP}}{sin\angle{CKP}}=\dfrac{AB}{AC}\cdot \dfrac{sin\angle{C}}{sin\angle{B}}=\dfrac{AB}{AC}\cdot \dfrac{AB}{AC} \implies AK \text{ is a symmedian of }\triangle{ABC}\blacksquare\\
\end{multline}
$$

$$
\begin{multline}
\shoveleft \boxed{\pmb{\text{Lemma 3}}}\\
\shoveleft AP \text{ is the A-symmedian of }\triangle{ABC} \text{ with } P \text{ on }BC. AP \cap \odot(ABC) = X, \text{ then } \dfrac{AB}{AC}=\dfrac{BX}{CX}\\
\end{multline}
$$

![image-20240716210334241](H:\workspace\mwo\assets\images\2024\image-20240716210334241.png)

**Prove:**
$$
\begin{multline}
\shoveleft \text{By Ratio Lemma }\implies \dfrac{BX}{CX}\cdot\dfrac{sin\angle{BXA}}{sin\angle{CXA}}= \dfrac{BX}{CX}\cdot\dfrac{sin\angle{C}}{sin\angle{B}}= \dfrac{BX}{CX}\cdot\dfrac{AB}{AC}=\dfrac{BP}{CP}=\dfrac{AB^2}{AC^2}\implies\dfrac{AB}{AC}=\dfrac{BX}{CX}\blacksquare 
\end{multline}
$$

#### Now we will introduce $\boxed{\text{Cross Ratios}}$  from Projective Geometry:

$$
\begin{multline}
\shoveleft \text{For any given four collinear points }A,B,X,Y, \text{ the cross ratio is}\\
\shoveleft (A,B;X,Y) = \dfrac{XA}{XB} {\div} \dfrac{YA}{YB}\\
\end{multline}
$$



#### [Here](/assets/files/poles_and_polars.pdf) is a handout on topic of Polar and Pole.

![image-20240713092614227](H:\workspace\mwo\assets\images\2024\image-20240713092614227.png)

#### Let $T$ be a point inside $\odot{M_A}$, other than $M_A$ and $K$ is its **inverse** around $\odot{M_A}$, then the tangency points $I,J$ of the tangents from $K$ to $\odot{M_A}$ are collinear with $T$. The line $IJ$ is called the polar of $K$ with reference to $\odot{M_A}$. $K$ is called the pole of $IJ$ with reference to $\odot{M_A}$.

![image-20240714002843524](H:\workspace\mwo\assets\images\2024\image-20240714002843524.png)

#### Let $l$ be a line lies outside $\odot{M_A}$, make perpendicular line from $M_A$ to $l$ and let the foot be point $K$, let $I,J$ be the tangency points of the tangents from $K$ to $\odot{M_A}$ , $IJ \cap KM_A=T$, then $T$ is the pole of line $l$ with reference to $\odot{M_A}$, line $l$ is the polar of $T$ with reference to $\odot{M_A}$.

#### Or we start from point $T$ which is outside 

$$
\begin{multline}
\shoveleft \boxed{\pmb{\text{La Hire's Theorem}}}\\
\shoveleft \text{A point }X \text{ lives on the polar of a point }Y \text{ iff }Y \text{ lies on the polar of }X.
\end{multline}
$$

![image-20240714011006907](H:\workspace\mwo\assets\images\2024\image-20240714010506295.png)

**Prove:**
$$
\begin{multline}
\shoveleft \text{Let line }IJ \text{ is the polar of point }K \text{ with reference to }\odot{M_A}, IM_A=R\\
\shoveleft \implies KM_A \perp IJ, KI \perp IM_A \implies \angle{TKI}=\angle{M_AIT}\implies KT \cdot KM_A=R^2\\
\shoveleft \text{Let }T' \text{ is a point on }IJ, \text{ to find polar of }T', \text{ we make } I',J' \text{ on }\odot{M_A} \text{ such that }I'J' \perp T'M_A\\
\shoveleft \text{From }I',J' \text{ we make tangents and they meet at }K' \implies K'I' \perp I'M_A \\
\shoveleft  \implies \angle{I'K'M_A}=\angle{T'I'M_A}\implies K'T'\cdot K'M_A=I'M_A^2=R^2=KT\cdot KM_A\\
\shoveleft \implies \dfrac{KT}{K'T'}=\dfrac{K'M_A}{KM_A} \implies \triangle{TT'M_A}\sim\triangle{K'KM_A}\implies \angle{KK'M_A}=\angle{T'TM_A}=90^{\circ}\\
\shoveleft \implies KK' \perp K'M_A \implies l \text{ is the polar of point }T' \text{ with reference to }\odot{M_A}\\
\shoveleft \implies K \text{ lies on the polar of }T'. \text{ The reverse backward is similar.} \blacksquare 
\end{multline}
$$

$$
\begin{multline}
\shoveleft \boxed{\pmb{\text{Brokard's Theorem}}}\\
\shoveleft \text{The points }A,B,C,D \text{ lie in this order on circle }\odot{\omega} \text{ with center } $O$.\\
\shoveleft AC\cap BD=P, AB\cap DC=Q, AD \cap BC=R. \text{Then }\\
\shoveleft \text{(1) }O \text{ is the orthocenter of }\triangle{PQR}\\
\shoveleft \text{(2) }QR \text{ is the polar of }P, PR \text{ is the polar of }Q, PQ \text{ is the polar of }R\\
\shoveleft \text{with reference to }\odot{\omega}.
\end{multline}
$$

#### Some references including [Proof 1](https://tomrocksmaths.com/wp-content/uploads/2022/06/essay-3.pdf), [Proof 2](https://imomath.com/index.cgi?page=polePolarBrianchonBrokard) and [Proof 3](/assetc/files/Proof_of_Brocards_Theorem_Shounak_Kar.pdf) provides proof of this theorem. 

#### (3) La-Hire's Theorem $\implies$ line  $IJ$ are the polar of $K$ with reference to $\odot{BIC}$

#### $\implies K $ lies on the polar of $M_{BC}$ with reference to $\odot{BIC}$, i.e., $K \in BC$

#### (4) $K, T, M_A$ are collinear

#### Then we introduce Harmonic Quadrilateral:

![image-20240702003447325](H:\workspace\mwo\assets\images\2024\image-20240702002845027.png)

#### (1) It is a well-known Lemma in the Mixtilinear Configuration that: $T$ is the $A$-Mixtilinear Point.

#### (2) The Antipode fact $\implies \angle{M_{BC}TM_A}=90^{\circ} \implies T$ is the midpoint of $IJ$

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

