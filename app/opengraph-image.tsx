import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Aldervane LLP — Clear counsel for complex decisions";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12283A",
          padding: 72,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 6,
              background: "#96743B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F7F4ED",
              fontSize: 34,
              fontFamily: "Georgia, serif",
            }}
          >
            A
          </div>
          <div style={{ color: "#F7F4ED", fontSize: 30, fontFamily: "Georgia, serif" }}>
            Aldervane LLP
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#F7F4ED",
            fontSize: 68,
            lineHeight: 1.15,
            letterSpacing: -1,
            maxWidth: 900,
          }}
        >
          Clear counsel for complex decisions.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(247,244,237,0.55)",
            fontSize: 24,
            borderTop: "1px solid rgba(247,244,237,0.18)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex" }}>
            Strategic legal representation for high-stakes matters.
          </div>
          <div style={{ display: "flex" }}>New York · London</div>
        </div>

        <div
          style={{
            position: "absolute",
            right: -140,
            top: -140,
            width: 420,
            height: 420,
            borderRadius: 9999,
            border: "1px solid rgba(247,244,237,0.14)",
          }}
        />
      </div>
    ),
    size
  );
}
