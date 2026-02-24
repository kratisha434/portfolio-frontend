import { useState, useEffect, useRef } from "react";

interface ChatProps {
  onClose: () => void;
}

/* 🔹 Typing Indicator Component */
function TypingDots() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "14px",
        color: "#6b7280",
        marginLeft: "40px",
        marginTop: "4px",
      }}
    >
      AI is typing
      <span className="dot">.</span>
      <span className="dot">.</span>
      <span className="dot">.</span>

      <style>
        {`
          .dot {
            animation: blink 1.4s infinite both;
          }
          .dot:nth-child(2) {
            animation-delay: 0.2s;
          }
          .dot:nth-child(3) {
            animation-delay: 0.4s;
          }
          @keyframes blink {
            0% { opacity: 0.2; }
            20% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}
      </style>
    </div>
  );
}

export default function Chat({ onClose }: ChatProps) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! Ask me anything about Kratisha 👋" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /* 🔹 Auto-scroll to bottom */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (customMessage?: string) => {
    const messageToSend = customMessage || input;
    if (!messageToSend.trim() || loading) return;

    const newMessages = [
      ...messages,
      { role: "user", content: messageToSend },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* HEADER */}
      <div
        style={{
          padding: "15px",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "white",
          fontWeight: "500",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>AI Resume Assistant 🤖</span>
        <button
          onClick={onClose}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>

      {/* MESSAGES */}
      <div
        style={{
          flex: 1,
          padding: "15px",
          overflowY: "auto",
          background: "#f9fafb",
        }}
      >
        {messages.length === 1 && !loading && (
          <div
            style={{
              fontSize: "13px",
              color: "#6b7280",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            💡 Ask about skills, projects, or backend experience
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "14px",
              display: "flex",
              justifyContent:
                msg.role === "user" ? "flex-end" : "flex-start",
              gap: "8px",
              alignItems: "flex-end",
            }}
          >
            {msg.role === "assistant" && (
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#6366f1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                🤖
              </div>
            )}

            <div
              style={{
                padding: "8px 12px",
                borderRadius: "14px",
                background: msg.role === "user" ? "#6366f1" : "white",
                color: msg.role === "user" ? "white" : "#111827",
                maxWidth: "70%",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              {msg.content}
            </div>

            {msg.role === "user" && (
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#111827",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                👩
              </div>
            )}
          </div>
        ))}

        {loading && <TypingDots />}
        <div ref={messagesEndRef} />
      </div>

      {/* SUGGESTED QUESTIONS */}
      <div
        style={{
          padding: "10px",
          borderTop: "1px solid #e5e7eb",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        {[
          "What tech stack does she use?",
          "Tell me about ArtRoom",
          "What backend experience does she have?",
        ].map((q) => (
          <button
            key={q}
            onClick={() => sendMessage(q)}
            disabled={loading}
            style={{
              padding: "6px 10px",
              fontSize: "12px",
              background: "#eef2ff",
              border: "none",
              borderRadius: "20px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* INPUT */}
      <div
        style={{
          padding: "10px",
          borderTop: "1px solid #e5e7eb",
          display: "flex",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={loading ? "AI is replying..." : "Ask something..."}
          disabled={loading}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            outline: "none",
            background: loading ? "#f3f4f6" : "white",
          }}
        />

        <button
          onClick={() => sendMessage()}
          disabled={loading}
          style={{
            marginLeft: "8px",
            padding: "10px 14px",
            background: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}