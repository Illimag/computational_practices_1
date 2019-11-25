# Concept

Using D3 I plan to build a map similar to this:

	https://observablehq.com/@d3/bubble-map

Instead of using population data instead replacing the data with a different dataset.

	data = new Map((await d3.json("https://gist.githubusercontent.com/mbostock/5ff33e1f3a3f9d6b1b38c8a79df86377/raw/0d71e5d21c9e44fed63b41c2e8b2f28ffd133213/population.json")).slice(1).map(([population, state, county]) => [state + county, +population]))


