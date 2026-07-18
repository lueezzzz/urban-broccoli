import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  const ink = "#17130f";
  const green = "#7ed957";
  const greenShadow = "#53ad3c";
  const blue = "#4f86f7";

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "32px",
        height: "32px",
        background: "transparent",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "1px",
          left: "10px",
          width: "3px",
          height: "7px",
          background: ink,
          transform: "rotate(-18deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "8px",
          width: "6px",
          height: "6px",
          background: green,
          border: `2px solid ${ink}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "1px",
          right: "10px",
          width: "3px",
          height: "7px",
          background: ink,
          transform: "rotate(18deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "8px",
          width: "6px",
          height: "6px",
          background: green,
          border: `2px solid ${ink}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "4px",
          width: "24px",
          height: "15px",
          background: greenShadow,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "6px",
          left: "6px",
          width: "20px",
          height: "16px",
          background: green,
          border: `3px solid ${ink}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "11px",
          width: "3px",
          height: "4px",
          background: ink,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "11px",
          width: "3px",
          height: "4px",
          background: ink,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "18px",
          left: "13px",
          width: "6px",
          height: "2px",
          background: ink,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "23px",
          left: "10px",
          width: "12px",
          height: "6px",
          background: blue,
          border: `2px solid ${ink}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "29px",
          left: "9px",
          width: "5px",
          height: "3px",
          background: ink,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "29px",
          right: "9px",
          width: "5px",
          height: "3px",
          background: ink,
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}
