import dynamic from "next/dynamic";
import React, { Component, useState } from "react";

const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

const DashBoard = () => {
  const [result, setResult] = useState("No Result");
  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div style={{ width: "600px", height: "600px" }}>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </div>
  );
};

export default DashBoard;
