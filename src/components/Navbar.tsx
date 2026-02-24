export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "70px",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        zIndex: 1000,
      }}
    >
      {/* LEFT: NAME */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: "600",
          color: "#111827",
        }}
      >
        Kratisha Hiran
      </div>

      {/* RIGHT: NAV LINKS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <a href="#projects" style={navLinkStyle}>
          Projects
        </a>

        <a href="#contact" style={navLinkStyle}>
          Contact
        </a>

        <a
          href="http://localhost:8000/download-resume"
          target="_blank"
          rel="noopener noreferrer"
          style={resumeButtonStyle}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  textDecoration: "none",
  color: "#111827",
  fontSize: "15px",
  fontWeight: "500",
};

const resumeButtonStyle = {
  padding: "8px 18px",
  background: "#111827",
  color: "white",
  borderRadius: "999px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
};