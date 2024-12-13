"use client";
import React from "react";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const NavLine = (props) => {
  const [mounted, setMounted] = useState(false);

  {
    //const [links, setWidths] = useState([]);
    useEffect(() => {
      setMounted(true, []);
      //const widthArray = props.elementsRef.current.map((el) => el.offsetWidth);
      //setWidths(widthArray);
    }, []);
  }

  //calculate size and position for each nav element on load
  const dimensions = {
    home: { width: props.links[0], x: 0, display: "block" },
    work: { width: props.links[1], x: props.links[0], display: "block" },
    about: {
      width: props.links[2],
      x: props.links[0] + props.links[1],
      display: "block",
    },
    tools: {
      width: props.links[3],
      x: props.links[0] + props.links[1] + props.links[2],
      display: "block",
    },
    contact: {
      width: props.links[4],
      x: props.links[0] + props.links[1] + props.links[2] + props.links[3],
      display: "block",
    },
  };

  //set width constant based on default element
  const originalWidth = 100;

  //set current width and height values to active tab
  const activeDimensions = dimensions[props.activeNav];

  // Resize and position background based on active tab

  const activeStyle = {
    transform: `translateX(${activeDimensions?.x}px) scaleX(${
      activeDimensions?.width / originalWidth
    })`,
    //wait until dimensions are calulated to display to avoid animation from origin on refresh or navigation
    display: `${activeDimensions?.display ?? "none"}`,
  };
  return (
    mounted && (
      <div className={`nav_activeBar ${props.activeNav}`} style={activeStyle} />
    )
  );
};

NavLine.propTypes = {
  elementsRef: PropTypes.any.isRequired,
  activeNav: PropTypes.any.isRequired,
  activeSection: PropTypes.any,
  links: PropTypes.number,
};

export default NavLine;
