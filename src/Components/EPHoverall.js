import React from "react";
import "./EPHoverall.css";
import EHPlineGraph from './EHPlineGraph';
import EHPDistrictSummary from './EHPDistrictSummary';

const EPHoverall = () => {
  const data = [
    { name: "Totalcases", value: 8905 },
    { name: "New Cases", value: 8905 },
    { name: "Active Cases", value: 8905 },
    { name: "Total Deaths", value: 8905 },
    { name: "Recovered", value: 8905 },
    { name: "Recovered", value: 8905 },
  ];

  const EHPhealthworkerSummary = [
    { name: "Total Health Worker", value: 8905 },
    { name: "Current Impatient", value: 8905 },
    { name: "Health Worker Deaths", value: 8905 },
    { name: "Admission in < 24 hrs", value: 8905 },
    { name: "Deaths in < 24 hrs", value: 8905 },
  ];

  const pngOverallSUmmaryColor = [
    "#FF6161",
    "#6B68FF",
    "#A26BB6",
    "#505050",
    "#FFB168",
    "#597983",
  ];

  return (
    <div className="eph-overall">
      <div className="eph-overall-heading">
        <h2>EASTERN HIGHLAND PROVINCE COVID-19 STATISTIC</h2>
      </div>

      <h3 className="eph-summary-heading">EPH Covid-19 Summary</h3>
      <p className="eph-summary-subheading">Updated at November 19, 2021</p>

      <div className="eph-overall-cases">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="rectangle-data"
              style={{ backgroundColor: `${pngOverallSUmmaryColor[i]}` }}
            >
              <h3 className="rectangle-data-value">{item.value}</h3>
              <p className="rectangle-data-name">{item.name}</p>
            </div>
          );
        })}
      </div>

      <h3 className="eph-summary-heading">EPH HEALTHWORKERS SUMMARY</h3>
      <p className="eph-summary-subheading">Updated at November 19, 2021</p>

      <div className="ehp-healthworker-summary">
        <div className="total-healthworker-cases">
          {EHPhealthworkerSummary.map((item, i) => {
            return (
              <div key={i} className="healthworker-data">
                <h3 className="rectangle-data-value">{item.value}</h3>
                <p className="rectangle-data-name">{item.name}</p>
              </div>
            );
          })}
        </div>

        <div className="healthworker-district-cases-table">
          {/* table */}

          <table className="healthworker-table">
            <thead>
              <tr>
                <th>Health Worker</th>
                <th>Cases</th>
                <th>Deaths</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Goroko</td>
                <td>33</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Kainantu</td>
                <td>33</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Daulo</td>
                <td>33</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Lufa</td>
                <td>33</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Okapa</td>
                <td>33</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Henganofi</td>
                <td>33</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Unggai/Bena</td>
                <td>33</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Obura/Wonernara</td>
                <td>33</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        <EHPlineGraph/>
        <EHPDistrictSummary />
    </div>
  );
};

export default EPHoverall;
