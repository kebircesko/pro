import React, { useEffect } from "react";
import * as d3 from "d3";
import './zoom.css';
import map from './../src/assets/MobileMainPage/testi.svg';
import school from './../src/assets/MobileMainPage/school.png'; // Import school icon

const Zoom = () => {
  useEffect(() => {
    const svg = d3.select("#map");
    const image = svg.select("#image");

    const { width, height } = image.node().getBoundingClientRect();
    const { width: svgWidth, height: svgHeight } = svg.node().getBoundingClientRect();

    const minScale = Math.max(svgWidth / width, svgHeight / height);

    const zoom = d3.zoom()
      .scaleExtent([minScale, 9])
      .extent([
        [0, 0],
        [svgWidth, svgHeight],
      ])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", zoomed);

    // apply calculated default scale
    zoom.scaleTo(svg, minScale);

    svg.call(zoom);

    function zoomed(event) {
      const { transform } = event;
      image.attr("transform", transform.toString());
      // Move the icons based on the current zoom level and transformation
      svg.selectAll(".icon")
        .attr("transform", transform.toString());
    }

    // Clean up function
    return () => {
      svg.on(".zoom", null); // Remove zoom event listener
    };
  }, []);

  // Array containing icon positions and corresponding text
  const iconData = [
    { x: 100, y: 100, text: "Text 1" },
    { x: 200, y: 200, text: "Text 2" }
    // Add more objects as needed for additional icons
  ];

  return (
    <div className="container">
      <svg id="map" width="100%" height="100%" style={{ backgroundColor: "grey" }}>
        <image id="image" href={map} />
        {/* Add icons */}
        <g className="icon">
          {/* Example of adding school icons */}
          {iconData.map((icon, index) => (
            <g key={index}>
              <image href={school} x={icon.x} y={icon.y} width={20} height={20} />
              <text x={icon.x} y={icon.y + 30} textAnchor="middle">{icon.text}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Zoom;
