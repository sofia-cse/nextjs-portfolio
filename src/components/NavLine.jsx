"use client";
import React from "react";
import { useState, useEffect } from "react";

const NavLine = (props) => {
  const [mounted, setMounted] = useState(false);

  const [widths, setWidths] = useState([]);

  useEffect(() => {
    setMounted(true, []);
    const widthArray = props.elementsRef.current.map((el) => el.offsetWidth);
    setWidths(widthArray);
  }, []);

  console.log(`Widths:  ${widths[0]}`);

  //calculate size and position for each nav element on load
  const dimensions = {
    home: { width: widths[0], x: 0 },
    work: { width: widths[1], x: widths[0] },
    about: { width: widths[2], x: widths[0] + widths[1] },
    tools: { width: widths[3], x: widths[0] + widths[1] + widths[2] },
    contact: {
      width: widths[4],
      x: widths[0] + widths[1] + widths[2] + widths[3],
    },
  };

  //set width constant based on default element
  const originalWidth = 100;

  //set current width and height values to active tab
  const activeDimensions = dimensions[props.activeTab];

  // Resize and position background based on active tab
  const lineStyle = {
    home: {
      transform: `translateX(${activeDimensions.x}px) scaleX(${
        activeDimensions.width / originalWidth
      })`,
    },
  };

  return mounted && <div className="line" style={lineStyle.home} />;
};

export default NavLine;
