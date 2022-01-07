import React, { useState, useEffect } from "react";
import "./EHPDistrictSummary.css";
import { getAllAddress } from "./../api/APIUtils";

const EHPDistrictSummary = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getAllAddress()
      .then((data) => {
        console.log(data);
        setdata(
          data.data.filter((dat) => dat.name === "eastern highlands")[0]
            .districts
        );
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <>
      <h3 className="eph-summary-heading">EPH DISTRICT COVID-19 SUMMARY</h3>
      <p className="eph-summary-subheading">Updated at November 19, 2021</p>
      <div className="district-summary-table">
        <table className="ehp-district-table">
          <thead>
            <tr>
              <th>Districts</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>24 hours</th>
              <th>Total Tests</th>
              <th>Testing %</th>
              <th>Positivity</th>
            </tr>
          </thead>

          {data
            ?.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
            .map((item, i) => {
              return (
                <tbody
                  style={i % 2 != 0 ? { backgroundColor: "#ddd" } : null}
                  className="row"
                >
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.totalCases}</td>
                    <td>{item.deaths}</td>
                    <td>{item.active}</td>
                    <td>{item.recovered}</td>
                    <td>{item.twentyfourhours || 0}</td>
                    <td>{item.totalTested}</td>
                    <td>{item.totalTested / 100} %</td>
                    <td>{item.totalCases}</td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default EHPDistrictSummary;
