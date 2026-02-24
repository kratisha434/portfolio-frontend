interface Props {
  title: string;
  description: string;
  githubLink: string;
}

export default function ProjectCard({
  title,
  description,
  githubLink,
}: Props) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-6px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0)")
      }
    >
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "#4b5563" }}>
        {description}
      </p>

      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "12px",
          display: "inline-block",
          fontSize: "14px",
          color: "#4f46e5",
          textDecoration: "none",
        }}
      >
        View Code →
      </a>
    </div>
  );
}