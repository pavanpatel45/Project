import React, { useState } from "react";
import Button from "./Button";
import Box from "./Box";

export default function NavbarMaterials({
  title,
  className,
  buttonStyle,
  btnTitle,
}) {
  const [exportOption, setExportOption] = useState("");

  const handleChange = (e) => {
    setExportOption(e.target.value);
  };

  return (
    <div className="flex flex-row justify-between items-center border-1 border-black border-solid mt-8">
      <div className="flex flex-row gap-2 ml-4">
        <div>&larr;</div>
        <div className="font-medium">{title}</div>
      </div>

      <div className="flex justify-end">
        <div className="flex justify-end">
        <div
  className="border border-1 border-r mr-6 flex flex-row items-center relative h-10 w-44"
  style={{ borderRadius: "8px", backgroundColor: "#EFEFEF" }}
>
  <img src="./search.png" alt="icon" className="ml-3"/>
  <input
    type="text"
    className="ml-3"
    style={{
      fontWeight: "500", 
      fontSize: "14px",
      lineHeight: "22px",
      fontFamily:"Roboto",
      backgroundColor: "transparent",
    }}
    placeholder="Search"
  />
</div>

        </div>

        <Box
          style={{ borderRadius: "8px", backgroundColor: "#EFEFEF" }}
          className="h-10 w-44"
          icon1="/location.png"
          icon2="/small.png"
          title="All Locations"
          titleStyle={{
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "22px",
          }}
          options={["INDIA", "AMERICA"]}
        />

        <Box
          style={{ borderRadius: "8px", backgroundColor: "#EFEFEF" }}
          className="h-10 w-32"
          icon1="/export.png"
          icon2="/small.png"
          title="Export"
          titleStyle={{
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "22px",
          }}
          options={["EXCEL", "CSV", "PDF"]}
        />

        <Button
          title={btnTitle}
          className="p-2 border-1 border-solid border-black rounded-md pt-0 pb-0"
          style={buttonStyle}
        />
      </div>
    </div>
  );
}
