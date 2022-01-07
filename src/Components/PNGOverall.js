import React, { useState, useEffect } from "react";
import "./PNGOverall.css";

const PNGOverall = () => {
  const data = [
    { name: "Totalcases", value: 8905 },
    { name: "New Cases", value: 8905 },
    { name: "Active Cases", value: 8905 },
    { name: "Total Deaths", value: 8905 },
    { name: "Recovered", value: 8905 },
    { name: "People Tested", value: 8905 },
    { name: "Vaccinated", value: 8905 },
    { name: "Delta Cases", value: 8905 },
  ];

  const pngOverallSUmmaryColor = [
    "#FF6161",
    "#6B68FF",
    "#FFB168",
    "#7DFF68",
    "#8A8A8A",
    "#A36060",
    "#597983",
    "#A26BB6",
  ];

  return (
    <>
      <div className="png-overall">
        <div className="overall-heading">
          <h2 className="overall-summary-heading">
          EHP Covid-19 LINE GRAPH
          </h2>
          <p className="updated-para">Updated at November 19, 2001</p>
        </div>

        <div className="overall-cases">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="circle-data"
                style={{ border: `8px solid ${pngOverallSUmmaryColor[i]}` }}
              >
                <h3 className="circle-data-value">{item.value}</h3>
                <p className="circle-data-name">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PNGOverall;
