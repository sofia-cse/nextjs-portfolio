"use client";
import React from "react";

const NavLine = ({
  activeNav,
  linkWidths,
}: {
  activeNav: string;
  linkWidths: number[];
}) => {
  //calculate size and position for each nav element on load
  const dimensions = {
    home: {
      width: linkWidths[0],
      x: 0,
      display: "block",
    },
    work: {
      width: linkWidths[1],
      x: linkWidths[0],
      display: "block",
    },
    about: {
      width: linkWidths[2],
      x: linkWidths[0] + linkWidths[1],
      display: "block",
    },
    tools: {
      width: linkWidths[3],
      x: linkWidths[0] + linkWidths[1] + linkWidths[2],
      display: "block",
    },
    contact: {
      width: linkWidths[4],
      x: linkWidths[0] + linkWidths[1] + linkWidths[2] + linkWidths[3],
      display: "block",
    },
  };

  //set width constant based on default element
  const originalWidth = 100;

  //set current width and height values to active tab
  const activeDimensions = dimensions[activeNav as keyof typeof dimensions];

  // Resize and position background based on active tab

  const activeStyle = {
    transform: `translateX(${activeDimensions?.x}px) scaleX(${
      activeDimensions?.width / originalWidth
    })`,
    //wait until dimensions are calulated to display to avoid animation from origin on refresh or navigation
    display: `${activeDimensions?.display ?? "none"}`,
  };

  return <div className={`nav_activeBar ${activeNav}`} style={activeStyle} />;
};

export default NavLine;
