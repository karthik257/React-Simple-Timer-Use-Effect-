import React, { useState } from "react";
import Timer from "./Timer";

function StartEnd() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Start time"
        onChange={(e) => {
          setStart(e.currentTarget.value);
        }}
        value={start}
      />
      <input
        type="text"
        placeholder="Enter End time"
        onChange={(e) => {
          setEnd(e.currentTarget.value);
        }}
        value={end}
      />
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"}
      </button>

      {show && <Timer start={start} end={end} />}
    </div>
  );
}

export default StartEnd;
