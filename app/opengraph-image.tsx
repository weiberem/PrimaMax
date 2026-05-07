import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PrimaMax – Reinigung, Haushaltshilfe & Nähservice auf dem Bödeli";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg,#dbeafe 0%,#ffffff 60%,#eff6ff 100%)",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Mountain silhouette in corner */}
        <svg
          width="600"
          height="280"
          viewBox="0 0 600 280"
          style={{ position: "absolute", right: 0, bottom: 0 }}
        >
          <polygon points="0,260 120,80 220,200 320,40 440,180 560,100 600,180 600,280 0,280" fill="#1e3a8a" />
          <polygon points="0,280 90,180 200,240 280,160 400,220 520,170 600,220 600,280" fill="#2563eb" opacity="0.85" />
          <polygon points="80,140 120,80 160,140" fill="#ffffff" opacity="0.9" />
          <polygon points="290,90 320,40 350,90" fill="#ffffff" opacity="0.95" />
        </svg>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#1d4ed8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            P
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, color: "#1e3a8a" }}>
            PrimaMax
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 60,
            maxWidth: 800,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            Reinigung, Haushaltshilfe & Nähservice
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#2563eb",
              fontWeight: 600,
              marginTop: 18,
            }}
          >
            Auf dem Bödeli – Region Interlaken
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: "auto",
          }}
        >
          {["Lokal", "Sorgfältig", "Persönlich", "Faire Preise"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "white",
                border: "1px solid #bfdbfe",
                color: "#1e40af",
                padding: "8px 18px",
                borderRadius: 999,
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
