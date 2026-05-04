# 🚀 AdVantage Gen - AI-Powered Ad Generator

AdVantage Gen is a full-stack AI application designed to revolutionize social media advertising. Using cutting-edge models like Google Gemini, it transforms simple product descriptions into professional-grade advertising assets, complete with high-quality images and tailored copy.

---

## ✨ Key Features

- **AI Ad Generation**: Leverages Google Gemini for prompt enhancement and image generation.
- **Robust Fallbacks**: Automatically switches to the Pollinations.ai engine if Gemini quotas are reached.
- **Full Campaign Management**: Create, edit, browse history, and delete campaigns effortlessly.
- **Premium Dashboard**: Real-time stats, usage tracking, and a sleek user interface.
- **User Authentication**: Secure signup/login and Google OAuth integration.
- **Admin Panel**: Centralized management for users, campaigns, and system health.
- **Responsive Editor**: Fine-tune your generated ads before exporting.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React / FontAwesome
- **State Management**: React Context API
- **Networking**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB Atlas (Mongoose)
- **Authentication**: JWT & Google OAuth 2.0
- **AI Integration**: Google Generative AI (Gemini)

---

## 🚦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- [Google AI Studio](https://aistudio.google.com/) API Key (for Gemini)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Adgen
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
GOOGLE_CLIENT_ID=your_google_client_id
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```
Create a `.env` file in the `frontend` folder:
```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

---

## 🚀 Running the Application

### Start Backend
```bash
cd backend
npm run dev
```
The server will start on `http://localhost:5000`.

### Start Frontend
```bash
cd frontend
npm run dev
```
The app will start on `http://localhost:3000`.

---

## 📁 Project Structure

```text
Adgen/
├── backend/
│   ├── src/
│   │   ├── controllers/    # Business logic
│   │   ├── models/         # Database schemas
│   │   ├── routes/         # API endpoints
│   │   ├── services/       # AI & external services
│   │   └── index.js        # Entry point
│   └── .env                # Server configuration
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # Auth & State management
│   │   ├── pages/          # Main views
│   │   └── App.jsx         # Routing
│   └── .env                # Client configuration
└── README.md
```

---

## ⚠️ Important Notes (Windows Users)
The backend includes a DNS workaround in `src/index.js` to resolve MongoDB SRV records on some Windows environments. Do not remove the `dns.setDefaultResultOrder('ipv4first')` configuration unless your network environment natively supports SRV resolution.

---

## 📄 License
This project is for educational purposes.

---

**Developed with ❤️ for AdVantage Gen**
