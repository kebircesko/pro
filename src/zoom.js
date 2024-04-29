import React, { useEffect } from "react";
import * as d3 from "d3";
import './zoom.css';
import map from './map.svg';

const Zoom = () => {
  useEffect(() => {
    const svg = d3.select("#map");
    const image = svg.select("#image");

    const { width, height } = image.node().getBoundingClientRect();
    const { width: svgWidth, height: svgHeight } = svg.node().getBoundingClientRect();

    const minScale = Math.max(svgWidth / width, svgHeight / height);

    const zoom = d3.zoom()
      .scaleExtent([minScale, 3])
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
    }

    // Clean up function
    return () => {
      svg.on(".zoom", null); // Remove zoom event listener
    };
  }, []);

  return (
    <div className="container">
      <svg id="map" width="100%" height="100%" style={{ backgroundColor: "grey" }}>
        <image id="image" href={map} />
      </svg>
    </div>
  );
};

export default Zoom;
