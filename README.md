# AI-Powered Portfolio – Kratisha Hiran

A full-stack personal portfolio website featuring an **AI Resume Assistant** that allows users to interact with my resume through natural language questions.  
The assistant responds **strictly based on resume data**, ensuring accuracy and relevance.

---

## 🚀 Features

- 🤖 Interactive AI Resume Assistant  
- 📄 Resume PDF download  
- 💬 Persistent conversation history  
- 🔗 Backend API powered by OpenRouter  
- 🎨 Clean, modern, and responsive UI  
- ⚡ FastAPI backend with database storage  

---

## 🛠 Tech Stack

### Frontend
- React  
- TypeScript  
- Vite  

### Backend
- FastAPI  
- SQLAlchemy  
- OpenRouter API  
- SQLite  

---

## 🌐 Deployment

- **Frontend:** Deployed on Vercel  https://portfolio-frontend1-olive.vercel.app/
- **Backend:** Exposed via Cloudflare Tunnel (secure public access without server hosting)

> Note: Cloudflare tunnel URLs may change between restarts and are intended for demo purposes.

---

## 📂 Project Structure
portfolio-ai/
├─ frontend/
└─ backend/


---

## ⚙️ Setup Instructions

### Backend
 cd backend 
 pip install -r requirements.txt
uvicorn main:app --reload

Create a .env file inside backend/:

OPENROUTER_API_KEY=your_api_key_here
Frontend
cd frontend
npm install
npm run dev
🧠 AI Behavior

The AI assistant is designed to respond only based on resume content

No hallucinated experience or skills

Ensures recruiter-friendly and trustworthy responses

📌 Future Improvements

JWT-based authentication

Persistent user sessions

UI/UX enhancements

Role-based AI responses

Permanent backend deployment

👩‍💻 Author

Kratisha Hiran
Full-Stack Developer
