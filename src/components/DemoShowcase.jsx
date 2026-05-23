import { useState, useRef, useEffect } from "react";

const DEMO_URL = "https://maisonlumiere-demo.online/";

export default function DemoShowcase() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    function calculateScale() {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setScale(containerWidth / 1440);
      }
    }
    calculateScale();
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, []);

  const screenHeight = 500;
  const iframeHeight = Math.round(screenHeight / scale);

  return (
    <section
      id="demo"
      style={{ padding: "80px 24px", background: "#F5F5F3" }}
    >
      {/* Section header */}
      <div style={{ maxWidth: "860px", margin: "0 auto 48px" }}>
        <p style={{
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#9CA3AF",
          marginBottom: "12px",
        }}>
          Live-Demo
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 600,
          color: "#111827",
          lineHeight: 1.15,
          marginBottom: "16px",
        }}>
          So sieht ein Geschäft aus,<br />das Buchungen nicht verliert.
        </h2>
        <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: 1.6 }}>
          Scrolle durch die Demo. Echte Leistungen, echte Buchung, echtes Google-Setup.
        </p>
      </div>

      {/* DESKTOP: MacBook mockup */}
      <div
        className="demo-desktop"
        style={{ maxWidth: "860px", margin: "0 auto" }}
      >
        {/* MacBook outer shell */}
        <div style={{
          background: "linear-gradient(160deg, #e0e0e0 0%, #c8c8c8 100%)",
          borderRadius: "14px 14px 0 0",
          padding: "14px 14px 0 14px",
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.18), 0 30px 80px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.5)",
          position: "relative",
        }}>
          {/* Inner bezel */}
          <div style={{
            background: "#1a1a1a",
            borderRadius: "8px 8px 0 0",
            padding: "8px 8px 0 8px",
          }}>
            {/* Camera dot */}
            <div style={{
              width: "7px",
              height: "7px",
              background: "#3a3a3a",
              borderRadius: "50%",
              margin: "0 auto 6px",
            }} />

            {/* Screen — the iframe lives here */}
            <div
              ref={containerRef}
              style={{
                width: "100%",
                height: screenHeight + "px",
                overflow: "hidden",
                background: "#fff",
                borderRadius: "3px 3px 0 0",
              }}
            >
              <iframe
                src={DEMO_URL}
                style={{
                  width: "1440px",
                  height: iframeHeight + "px",
                  border: "none",
                  display: "block",
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                  pointerEvents: "auto",
                }}
                title="Maison Lumière Beauty Studio Demo"
              />
            </div>
          </div>
        </div>

        {/* Hinge */}
        <div style={{
          height: "5px",
          background: "linear-gradient(180deg, #b0b0b0 0%, #989898 100%)",
        }} />

        {/* Base / keyboard */}
        <div style={{
          background: "linear-gradient(180deg, #d4d4d4 0%, #bebebe 100%)",
          borderRadius: "0 0 10px 10px",
          height: "28px",
          position: "relative",
          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        }}>
          {/* Trackpad */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "110px",
            height: "70px",
            background: "rgba(0,0,0,0.06)",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "6px",
          }} />
        </div>

        {/* Bottom foot */}
        <div style={{
          height: "4px",
          background: "linear-gradient(90deg, #b0b0b0, #d0d0d0, #b0b0b0)",
          borderRadius: "0 0 4px 4px",
        }} />
      </div>

      {/* MOBILE: Phone mockup */}
      <div
        className="demo-mobile"
        style={{ display: "flex", justifyContent: "center", padding: "0 24px" }}
      >
        <div style={{ position: "relative", width: "260px", flexShrink: 0 }}>
          <div style={{
            background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
            borderRadius: "44px",
            padding: "14px 10px",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.08), 0 25px 60px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(0,0,0,0.5)",
            position: "relative",
          }}>
            {/* Dynamic Island */}
            <div style={{
              width: "90px",
              height: "26px",
              background: "#000",
              borderRadius: "13px",
              margin: "0 auto 10px",
            }} />

            {/* Phone screen */}
            <div style={{
              background: "#fff",
              borderRadius: "32px",
              overflow: "hidden",
              height: "480px",
              position: "relative",
            }}>
              <div style={{
                width: "390px",
                height: "844px",
                transform: "scale(0.615)",
                transformOrigin: "top left",
              }}>
                <iframe
                  src={DEMO_URL}
                  width="390"
                  height="844"
                  style={{ border: "none", display: "block" }}
                  title="Maison Lumière Mobile Demo"
                />
              </div>
            </div>

            {/* Volume buttons */}
            <div style={{ position: "absolute", left: "-3px", top: "80px", width: "3px", height: "32px", background: "#3a3a3a", borderRadius: "2px 0 0 2px" }} />
            <div style={{ position: "absolute", left: "-3px", top: "124px", width: "3px", height: "32px", background: "#3a3a3a", borderRadius: "2px 0 0 2px" }} />
            {/* Power button */}
            <div style={{ position: "absolute", right: "-3px", top: "100px", width: "3px", height: "56px", background: "#3a3a3a", borderRadius: "0 2px 2px 0" }} />
          </div>
        </div>
      </div>

      {/* Caption and CTA — visible on both */}
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "20px" }}>
          Demo-Beispiel: Maison Lumière Beauty Studio, Zürich. Gebaut, um zu zeigen, wie LumaFlow ein lokales Geschäft online buchungsbereit macht.
        </p>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 28px",
            border: "1.5px solid #D1D5DB",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 500,
            color: "#111827",
            textDecoration: "none",
            background: "#fff",
          }}
        >
          Live-Demo ansehen ↗
        </a>
      </div>

      {/* Responsive styles */}
      <style>{`
        .demo-desktop { display: block; }
        .demo-mobile  { display: none;  }
        @media (max-width: 767px) {
          .demo-desktop { display: none;  }
          .demo-mobile  { display: flex;  }
        }
      `}</style>
    </section>
  );
}
