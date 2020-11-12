import React from "react";
import { File } from "react-kawaii";
import "animate.css";

import "./styles.css";
// FFD882
export default function App() {
  const [RandInt] = React.useState(Math.floor(Math.random() * 99 + 1));
  const [token, setToken] = React.useState("");
  const [dif, setDif] = React.useState({ Msg: "🔥", Attempt: -1 });
  const [kawa, setKawa] = React.useState({
    mood: "ko",
    color: "#e74c3c",
    disabled: true,
    disabledText: "Correct",
    className: ""
  });
  const handleToken = (event) => {
    const token = event.target.value;
    const Val = token > 99 ? Math.floor(token / 10) : token < 0 ? 0 : token;
    setToken(Val);
  };
  React.useEffect(() => {
    const counter = dif["Attempt"] + 1;
    if (Number(token) !== RandInt ? true : false) {
      if (Number(token) > RandInt) {
        setDif({ Msg: "Too High", Attempt: counter });
      } else if (Number(token) < RandInt) {
        setDif({ Msg: "Too Low", Attempt: counter });
      }
      setKawa({
        mood: "ko",
        color: "#e74c3c",
        disabled: true,
        disabledText: "Wrong Guess ❌",
        className: "animate__animated animate__wobble"
      });
    } else {
      setDif({
        Msg: "🔥" + dif["Attempt"],
        Attempt: dif["Attempt" + 1]
      });
      setKawa({
        mood: "happy",
        color: "#e74c3c",
        disabled: false,
        disabledText: "🔥 Correct",
        className: "animate__animated animate__heartBeat"
      });
    }
  }, [token]);

  return (
    <div className="App">
      <div>
        <div>
          <button className="btn" style={{ display: "block" }}>
            Range 0-99 ::
            <span style={{ color: "orange", background: "none" }}>
              {dif["Msg"]}
            </span>
            :: {dif["Attempt"]}
          </button>
        </div>
        <div className="SearchBox">
          <File
            size={100}
            mood={kawa["mood"]}
            color={kawa["color"]}
            className={kawa["className"]}
          />
          <div>
            <input
              className="searchBar"
              type="number"
              autoCorrect="off"
              onChange={(event) => handleToken(event)}
              value={
                token > 99 ? Math.floor(token / 10) : token < 0 ? 0 : token
              }
              placeholder="Range (0-99)"
            />
          </div>
        </div>
        <div>
          <button className="btn" disabled={kawa["disabled"]}>
            {kawa["disabledText"]}
          </button>
        </div>
      </div>
    </div>
  );
}
