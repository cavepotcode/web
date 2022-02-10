import React from "react";

export function Card() {
  return (
    <div
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "160px",
        userSelect: "none"
      }}
      tabIndex={0}
      className="card"
    >
      <div>
        <div>a</div>
        <div style={{ backgroundColor: true ? "transparent" : "gray" }}>
          visible: {JSON.stringify(true)}
        </div>
        <div>selected: </div>
      </div>
      <div
        style={{
          height: "200px"
        }}
      />
    </div>
  );
}
