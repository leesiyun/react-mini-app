import { useState } from "react";
import MinutesToHours from "./MinutesToHours";
import KmToMiles from "./KmToMiles";

const UnitConverter = () => {
  const [index, setIndex] = useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1 className="hi">Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "Please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
};

export default UnitConverter;
