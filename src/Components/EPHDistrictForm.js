import { useState, useEffect } from "react";
import "./EPHDistrictForm.css";
import Navigation from "./Navigation";
import { getAllAddress } from "./../api/APIUtils";
import { RenderModalContain } from "./EPHDistrictFormComponents/editDeleteFormModal";

export const EPHDistrictForm = () => {
  const [data, setdata] = useState([]);
  const [modal, setmodal] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleModal = () => {
    setmodal((prev) => !prev);
  };

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
  }, [modal]);
  return (
    <div className="container">
      <>
        <Navigation />
      </>

      <div className="sub-container">
        <div className="header">EPH DISTRICT COVID-19 SUMMARY </div>
        <div>
          <table className="ehp-district-table1">
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
              .map((item, i) => (
                <tbody
                  style={i % 2 != 0 ? { backgroundColor: "#ddd" } : null}
                  className="row"
                  onClick={() => {
                    handleModal();
                    setModalData(item);
                  }}
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
              ))}
          </table>
        </div>
        {modal && (
          <div className="modal">
            <div className="modal-absolute" onClick={handleModal} />
            <div className="modal-Contain">
              {/* {RenderModalContain(modalData, handleModal)} */}
              <RenderModalContain
                modalData={modalData}
                handleModal={handleModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
