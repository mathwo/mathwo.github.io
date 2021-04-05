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

Let $x=\angle{XAC}, y=\angle{XCB}, z=\angle{XAC}$

$\implies 0 < z < 90^{\circ} - x - y$

$\implies 0 < sin(z) < sin(90^{\circ} - x - y) = cos(x + y) $

$\implies sin(x) \cdot sin(y) \cdot cos(x + y) > sin(x) \cdot sin(y) \cdot sin(z) > \dfrac{1}{8}$

where $0 < x + y < 90^{\circ}$

$\implies \dfrac{1}{2}(cos(x-y) - cos(x+y))cos(x + y) > \dfrac{1}{8}$

$\implies 4(cos(x-y) - cos(x+y))cos(x + y) > 1$

Obviously $ 1 \ge cos(x-y)$

$\implies 4(1 - cos(x + y))cos(x + y) \ge 4(cos(x - y)-cos(x+y))cos(x + y) > 1$

$\implies 4(cos(x + y) - 1)cos(x + y) +1 < 0$

$\implies (2cos(x+ y)-1)^2 < 0$

This is impossible. So we know the assumption is not correct. $\blacksquare$

Above analytics means that, for $sin(x)sin(y)cos(x+y), 0 < x + y < \dfrac{\pi}{2}$, it gets maximum value when $cos(x-y)=0 \implies x=y$ and $ [2cos(x+y) - 1]^2=0 \implies cos(x+y)=\dfrac{1}{2} \implies x=y=\dfrac{\pi}{6}$

We can verify this by [Wolfram](https://www.wolframalpha.com/input/?i=findmaximum%5Bsin%28x%29*sin%28y%29*cos%28x%2By%29%2C+0%3Cx%2By%3Cpi%2F2%5D):

$ max \bigg \\{ sin(x)sin(y)cos(x+y) \bigg \| 0< x+y < \dfrac{\pi}{2} \bigg \\} = 0.125 at (x,y) \approx (0.523599, 0.523599) $

---
