---
date: 2021-04-01 13:03
category:
tags: []
---

### 04/05/2021

#### Let $ABC$ be a triangle and $X$ an interior point of $\triangle{ABC}$. Show that at least one of the angles $\angle{XAB}, \angle{XBC}, \angle{XCA}$ is less than or equal to $30^{\circ}$. **IMO 1991 B2**

**Prove:**

Prove by contradiction: if none of the angles $\angle{XAB}, \angle{XBC}, \angle{XCA}$ is less than or equal to $30^{\circ}$, then

$\angle{XAB} + \angle{XBC} + \angle{XCA} > 90^{\circ}$
$\implies \angle{XAC} + \angle{XCB} + \angle{XBA} < 90^{\circ}$

$sin(\angle{XAB}) > \dfrac{1}{2}, sin(\angle{XBC}) > \dfrac{1}{2}, sin(\angle{XCA}) > \dfrac{1}{2}$
$\implies sin(\angle{XAB}) \cdot sin(\angle{XBC}) \cdot sin(\angle{XCA}) > \dfrac{1}{8}$

From [Trigonometric Form of Ceva's Theorem](https://www.cut-the-knot.org/triangle/TrigCeva.shtml) we know

$sin(\angle{XAB}) \cdot sin(\angle{XBC}) \cdot sin(\angle{XCA}) = sin(\angle{XAC}) \cdot sin(\angle{XCB}) \cdot sin(\angle{XBA})$
$\implies sin(\angle{XAC}) \cdot sin(\angle{XCB}) \cdot sin(\angle{XBA}) > \dfrac{1}{8}$
where $\angle{XAC} + \angle{XCB} + \angle{XBA} < 90^{\circ}$

$\implies 0 < \angle{XBA} < 90^{\circ} - \angle{XAC} - \angle{XCB}$
$\implies 0 < sin(\angle{XBA}) < sin(90^{\circ} - \angle{XAC} - \angle{XCB}) $
$\implies 0 < sin(\angle{XBA}) < cos(\angle{XAC} + \angle{XCB})$
$\implies sin(\angle{XAC}) \cdot sin(\angle{XCB}) \cdot cos(\angle{XAC} + \angle{XCB}) > sin(\angle{XAC}) \cdot sin(\angle{XCB}) \cdot sin(\angle{XBA}) > \dfrac{1}{8}$ where $0 < $\angle{XAC} + \angle{XCB} < 90^{\circ}$
$\implies \dfrac{1}{2}[cos(\angle{XAC}-\angle{XCB}) - cos(\angle{XAC}+\angle{XCB})]cos(\angle{XAC} + \angle{XCB}) > \dfrac{1}{8}$
$\implies 4[cos(\angle{XAC}-\angle{XCB}) - cos(\angle{XAC}+\angle{XCB})]cos(\angle{XAC} + \angle{XCB}) > 1$
Obviously $ 1 \ge cos(\angle{\angle{XAC}}-\angle{\angle{XCB}})$
$\implies 4[1 - cos(\angle{XAC} + \angle{XCB})]cos(\angle{XAC} + \angle{XCB}) \ge 4[cos(\angle{XAC} - \angle{XCB})-cos(\angle{XAC}+\angle{XCB})]cos(\angle{XAC} + \angle{XCB}) > 1$
$\implies 4[cos(\angle{XAC} + \angle{XCB}) - 1]cos(\angle{XAC} + \angle{XCB}) +1 < 0$
$\implies [2cos(\angle{XAC} + \angle{XCB})-1]^2 < 0$

This is impossible. So we know the assumption is not correct. $\blacksquare$

Above analytics means that, for $sin(x)sin(y)cos(x+y), 0<x+y<\dfrac{\pi}{2}$, it gets maximum value when $cos(x-y)=0 \implies x=y$ and $[2cos(x+y)-1]^2=0 \implies cos(x+y)=\dfrac{1}{2} \implies x=y=\dfrac{\pi}{6}$

We can verify this by [Wolfram](https://www.wolframalpha.com/input/?i=findmaximum%5Bsin%28x%29*sin%28y%29*cos%28x%2By%29%2C+0%3Cx%2By%3Cpi%2F2%5D):

$ max{ sin(x)sin(y)cos(x+y) | 0< x+y < \dfrac{\pi}{2} } = 0.125 at (x,y) \approx (0.523599, 0.523599) $

---
