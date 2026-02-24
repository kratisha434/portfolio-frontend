import { useState } from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Chat from "./components/Chat";

export default function App() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#111827" }}>
      
      <Navbar />

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          paddingTop: "100px",
          background:
            "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 40%, #fdf4ff 100%)",
          boxShadow: "inset 0 0 100px rgba(99,102,241,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>
          Kratisha Hiran
        </h1>

        <h2
          style={{
            fontSize: "22px",
            color: "#6366f1",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          Full-Stack Developer
        </h2>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "600px",
            lineHeight: "1.6",
          }}
        >
          I build thoughtful, user-centric web applications using
          React, TypeScript, and Python. Passionate about clean UI,
          scalable backend architecture, and meaningful digital experiences.
        </p>

        <button
          onClick={() => setOpenChat(true)}
          style={{
            marginTop: "35px",
            padding: "14px 26px",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "white",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "500",
            boxShadow: "0 10px 25px rgba(99,102,241,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-3px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          Chat With My AI Resume 🤖
        </button>


        
      
      </section>
      

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          padding: "80px 20px",
          background: "#f9fafb",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "32px" }}>
          Projects
        </h2>

        <div
          style={{
            maxWidth: "1000px",
            margin: "40px auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <ProjectCard
            title="ArtRoom"
            description="Built a MERN-based creative platform with authentication, mood tracking and canvas drawing. Implemented JWT auth, REST APIs, and responsive UI. Improved user engagement with structured journaling flows."
            githubLink="https://github.com/kratisha434"
          />

          <ProjectCard
            title="Mental Health Chatbot"
            description="Frontend conversational experience built with pure JavaScript, HTML, and CSS focused on emotional support flows and UI usability. Designed intuitive interactive chat UI with modular components and progressive enhancement."
            githubLink="https://github.com/kratisha434"
          />

          <ProjectCard
            title="Therapy Website"
            description="Responsive React website with semantic layout, navigation, and service showcase. Employed modern component architecture and responsive design principles."
            githubLink="https://github.com/kratisha434"
          />

          <ProjectCard
            title="Artic Artworks API Project"
            description="Asynchronous API integration project fetching dynamic artwork data and rendering it in a clean, responsive UI. Managed loading and error states and leveraged composable UI components."
            githubLink="https://github.com/kratisha434"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "70px 20px",
          textAlign: "center",
          background: "#eef2ff",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Contact Me
        </h2>

        <p style={{ marginBottom: "30px" }}>
          Open to internships, collaborations, and exciting opportunities.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:hkratisha@gmail.com"
            style={{
              padding: "12px 20px",
              background: "#6366f1",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            📧 Send Email
          </a>

          <a
            href="https://www.linkedin.com/in/kratisha-hiran-5b0895289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 20px",
              background: "#0A66C2",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/kratisha434"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 20px",
              background: "#111827",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            🐙 GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "30px 20px",
          textAlign: "center",
          background: "#111827",
          color: "white",
        }}
      >
        © 2026 Kratisha Hiran
      </footer>

      {/* FLOATING CHAT BUTTON */}
      <button
        onClick={() => setOpenChat(true)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          border: "none",
          fontSize: "22px",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(99,102,241,0.3)",
        }}
      >
        🤖
      </button>

      {/* CHAT MODAL */}
      {openChat && (
        <div
          onClick={() => setOpenChat(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "500px",
              height: "600px",
              background: "white",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
          <Chat onClose={() => setOpenChat(false)} />
          </div>
        </div>
      )}
    </div>
  );
} 