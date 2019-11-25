# Concept 1

Similar to concept0, I am planning to build a map using D3 that shows data visually.

	https://observablehq.com/@d3/choropleth

Instead of bubbles this map uses colors to indicate the percentage.

Then instead of using unemployment data, I am planning to use a different dataset.

	data = Object.assign(new Map(d3.csvParse(await FileAttachment("unemployment-x.csv").text(), ({id, rate}) => [id, +rate])), {title: "Unemployment rate (%)"})
