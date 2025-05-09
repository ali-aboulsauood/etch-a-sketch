# Etch-A-Sketch

**NOTE**: _This project is **still in development**. The game is expected to be missing some features or be not in a working state at all._

<!-- **click [here](https://ali-aboulsauood.github.io/etch-a-sketch/) to play Etch-A-Sketch!** -->

A pretty neat browser-based drawing toy based on the Etch-A-Sketch ([Wikipedia](https://en.wikipedia.org/wiki/Etch_A_Sketch) · [Official Website](https://www.spinmaster.com/en-US/brands/etch-a-sketch/)), originally created as a practice on Document Object Model (DOM) manipulation through JavaScript.

This project was created as the [fourth practice project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) during my journey with [The Odin Project](https://www.theodinproject.com/), the [first](https://www.theodinproject.com/lessons/foundations-recipes), [second](https://www.theodinproject.com/lessons/foundations-landing-page), and [third](https://www.theodinproject.com/lessons/foundations-etch-a-sketch#introduction) being _[Recipes](https://github.com/ali-aboulsauood/odin-recipes)_, _[Landing Page](https://github.com/ali-aboulsauood/landing-page)_, and _[Rock, Paper, Scissors](https://github.com/ali-aboulsauood/rock-paper-scissors)_, respectively.

## About Etch-A-Sketch

### Brief History of the Etch-A-Sketch

_This section was adapted from the [English Wikipedia](https://en.wikipedia.org), mostly from the articles on [Etch-A-Sketch](https://en.wikipedia.org/wiki/Etch_A_Sketch) and [Lineography](https://en.wikipedia.org/wiki/Lineography)._

The _Etch-A-Sketch_ is a mechanical drawing toy invented by the French toymaker [André Cassagnes](https://en.wikipedia.org/wiki/Andr%C3%A9_Cassagnes) and subsequently manufactured by the [Ohio Art Company](https://en.wikipedia.org/wiki/Ohio_Art_Company) from 1960 to 2016, when it became owned by the [Spin Master](https://en.wikipedia.org/wiki/Spin_Master) of Toronto, Ontario, Canada.

The Etch-A-Sketch has a thick, flat gray screen enclosed within a red plastic frame, which has two white knobs on its front and in its lower corners - twisting the knobs moves a stylus that displaces aluminum powder on the back of the screen, leaving a solid line, where the left and right knobs move the stylus horizontally and vertically, respectively, allowing for the creation of [lineographic images](https://en.wikipedia.org/wiki/Lineography) - images drawn without lifting the drawing device being used.

The practice of lineography was born in France in the 17<sup>th</sup> century and became disused by the early 19<sup>th</sup> century, until it was reborn again in the 1960s - with the release of the Etch-A-Sketch, which was used to reproduce some famous works of art, such as the [Mona Lisa](https://en.wikipedia.org/wiki/Mona_Lisa). The Etch-A-Sketch became one of the best known toys of that era.

This electronic version of Etch-A-Sketch is designed to have some resemblance to the original machine, with the intention of allowing for the creation of lineographic and non-lineographic images, by clicking/hovering over a square grid of adjustable resolution (total number of squares, or _grid size_), though for the time being the [features](#features) are going to be much more limited.

### Features

<!--
**NOTE**: If you want to know how to use Etch-A-Sketch, the game has tooltips that provide quick help, which should be enough to learn how to use the game. The information in this section are mainly for documentation purposes and should only be consulted if you think you need to know more details regarding the game.

**click [here](https://ali-aboulsauood.github.io/etch-a-sketch/) to play Etch-A-Sketch.**
-->

**NOTE**: _This project is **still in development**. This section will be updated each time a new feature is added/updated/removed_.

Currently, The features of _Etch-A-Sketch_ shall be expected to be limited to the requirements described in the [project assignment](https://www.theodinproject.com/lessons/foundations-etch-a-sketch#assignment), including those described in the ["_Extra Credit_" section](https://www.theodinproject.com/lessons/foundations-etch-a-sketch#extra-credit).

More features may be added later.

#### Grid

Etch-A-Sketch uses a square grid consisting of square _cells_, each of which can contain exactly one color (white by default).

##### Grid Size

The default grid size (total number of cells) is `16 × 16` (256 cells), but the user may set the grid size any integer value from `1 × 1` (single cell) to `100 × 100` (10000 cells).
Larger grid sizes are not allowed, in order to prevent potential delays, freezing, or crashing due to increased computer resource usage.

<!-- 
The larger the grid size, the more complex and detailed the produced image can be.

The grid is, thus, analogous to an electronic visual display - with the cells being analogous to pixels and the grid size being analogous to the screen resolution.
-->

##### Grid Lines

Grid lines can be toggled (shown/hidden) by the user. By default, they are shown so as to help the user get an idea about the current grid size.

#### Coloring

Each cell can be colored by hovering over it with the pointer. The color applied is the same as the accent color of the _Etch-A-Sketch_'s graphical interface, that is, [Tartrazine](https://en.wikipedia.org/wiki/Shades_of_yellow#Tartrazine).