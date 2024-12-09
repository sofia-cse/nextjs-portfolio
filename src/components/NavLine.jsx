"use client";
import React from "react";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const NavLine = (props) => {
  const [mounted, setMounted] = useState(false);

  {
    //const [widths, setWidths] = useState([]);
    useEffect(() => {
      setMounted(true, []);
      //const widthArray = props.elementsRef.current.map((el) => el.offsetWidth);
      //setWidths(widthArray);
    }, []);
  }

  //calculate size and position for each nav element on load
  const dimensions = {
    home: { width: props.widths[0], x: 0 },
    work: { width: props.widths[1], x: props.widths[0] },
    about: { width: props.widths[2], x: props.widths[0] + props.widths[1] },
    tools: {
      width: props.widths[3],
      x: props.widths[0] + props.widths[1] + props.widths[2],
    },
    contact: {
      width: props.widths[4],
      x: props.widths[0] + props.widths[1] + props.widths[2] + props.widths[3],
    },
  };

  //set width constant based on default element
  const originalWidth = 100;

  //set current width and height values to active tab
  const activeDimensions = dimensions[props.activeSection];

  // Resize and position background based on active tab
  const lineStyle = {
    home: {
      transform: `translateX(${activeDimensions.x}px) scaleX(${
        activeDimensions.width / originalWidth
      })`,
    },
  };

  return (
    mounted && (
      <div className={`line ${props.activeSection}`} style={lineStyle.home} />
    )
  );
};

NavLine.propTypes = {
  elementsRef: PropTypes.any.isRequired,
  activeTab: PropTypes.any.isRequired,
  activeSection: PropTypes.any,
  widths: PropTypes.number,
};

export default NavLine;
