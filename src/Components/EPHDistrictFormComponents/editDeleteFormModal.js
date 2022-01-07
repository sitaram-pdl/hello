import { useState, useEffect } from "react";
import "./editDeleteForm.css";
import { Tooltip, Input, Select } from "antd";
import "antd/dist/antd.css";
import { GiCancel } from "react-icons/gi";
import { adduserdata, addhealthworkerdatadata } from "./../../api/APIUtils";
import { Option } from "antd/lib/mentions";
import { Radio } from "antd";
const colorEven = {
  backgroundColor: "#aaa0",
};

const colorOdd = {
  backgroundColor: "#cccc",
};
const modelOption = [
  {
    label: "User",
    value: "data",
  },
  {
    label: "Health Worker",
    value: "hworker",
  },
];

export const RenderModalContain = ({ modalData, handleModal }) => {
  const [edit, setedit] = useState(null);
  const [renderMode, setRenderMode] = useState("hworker");
  const [renderData, setRenderData] = useState([]);

  const handleUpdate = () => {
    switch (renderMode) {
      case "data":
        adduserdata(edit, modalData.district_id)
          .then((res) => handleModal())
          .catch((err) => {
            alert(err.response.data);
          });
        break;
      case "hworker":
        addhealthworkerdatadata(edit, modalData.district_id)
          .then((res) => handleModal())
          .catch((err) => console.log(err.response.data));
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const name = { ...modalData };
    setRenderData(name[renderMode]);
  }, [renderMode]);

  useEffect(() => {
    console.log(renderData);
  }, [renderData]);

  const editAbsolute = () => {
    return (
      <div className="edit-container-absolute">
        <div className="edit-container">
          <div placeholder="Basic usage" className="input-modal">
            Active Today
          </div>
          <div placeholder="Basic usage" className="input-modal">
            Death Today
          </div>
          <div placeholder="Basic usage" className="input-modal">
            Recovered Today
          </div>
          <div placeholder="Basic usage" className="input-modal">
            Tested Today
          </div>
          <div placeholder="Basic usage" className="input-modal">
            Vaccinated Today
          </div>
        </div>
        <div className="edit-container">
          <Input
            placeholder="Basic usage"
            value={edit.activeToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, activeToday: e.target.value });
            }}
          />
          <Input
            placeholder="Basic usage"
            value={edit.deathToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, deathToday: e.target.value });
            }}
          />{" "}
          <Input
            placeholder="Basic usage"
            value={edit.recoveredToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, recoveredToday: e.target.value });
            }}
          />{" "}
          <Input
            placeholder="Basic usage"
            value={edit.testedToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, testedToday: e.target.value });
            }}
          />{" "}
          <Input
            placeholder="Basic usage"
            value={edit.vaccinatedToday}
            className="input-modal"
            onChange={(e) => {
              return setedit({ ...edit, vaccinatedToday: e.target.value });
            }}
          />
        </div>
        <div
          className="cancel-edit"
          onClick={() => {
            setedit(null);
          }}
        >
          <GiCancel color="red" />
        </div>
      </div>
    );
  };

  return (
    <div className="contain">
      <div className="modal-body">
        <div className="capitalize">District Name: {modalData.name}</div>
        <div>
          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.6em 0",
            }}
          >
            <div>
              <input
                type="radio"
                value="hworker"
                id="hworker"
                onChange={(e) => {
                  setRenderMode(e.target.value);
                }}
                checked={renderMode === "hworker"}
                style={{
                  marginRight: "0.5em",
                }}
              />

              <label for="hide">Health Worker</label>
            </div>
            <div>
              <input
                type="radio"
                value="data"
                id="data"
                onChange={(e) => {
                  setRenderMode(e.target.value);
                }}
                checked={renderMode === "data"}
                style={{
                  marginRight: "0.5em",
                }}
              />

              <label for="hide">User</label>
            </div>
          </div>
        </div>
        <div className="modal-map-contaidatn">
          <div className="modal-table-row-header">
            <div className="modal-table-col1">Active Today</div>
            <div className="modal-table-col1">Death Today</div>
            <div className="modal-table-col1">Recovered Today</div>
            <div className="modal-table-col1">Tested Today</div>
            <div className="modal-table-col1">Vaccinated Today</div>
          </div>

          {renderData?.map((dat, i) => (
            <div
              style={
                i % 2 == 0 ? (dat.id == edit?.id ? colorEven : {}) : colorOdd
              }
              className="modal-table-row-table-body"
            >
              <div className="modal-table-col2">{dat.activeToday}</div>
              <div className="modal-table-col2">{dat.deathToday}</div>
              <div className="modal-table-col2">{dat.recoveredToday}</div>
              <div className="modal-table-col2">{dat.testedToday}</div>
              <div className="modal-table-col2">{dat.vaccinatedToday}</div>
            </div>
          ))}
        </div>
      </div>
      {edit != null ? editAbsolute() : null}

      <div className="modal-bottom">
        {edit != null ? (
          <div className="button edit" onClick={() => handleUpdate()}>
            Press To Add
          </div>
        ) : (
          <div
            className="button edit"
            onClick={() => {
              setedit({
                activeToday: 0,
                vaccinatedToday: 0,
                testedToday: 0,
                recoveredToday: 0,
                deathToday: 0,
              });
            }}
          >
            Add
          </div>
        )}

        <div className="button cancel" onClick={handleModal}>
          cancel
        </div>
      </div>
    </div>
  );
};
