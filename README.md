# 🚀 EasyAi

EasyAi is a polished productivity platform built with React and Vite, backed by Node/Express. It delivers authenticated AI tools for content creation, image editing, and resume optimization in a modern, responsive interface.

---

## ✨ Why EasyAi?

- Fast, smooth React UX with Tailwind styling
- Secure user authentication via Clerk
- Intelligent content generation powered by Gemini chat completions
- Premium image tools with Cloudinary and ClipDrop
- Resume feedback for professional applicants
- User creations, publishing, and likes for social proof

---

## 🌟 Core Features

- **AI Article Writer** – create articles from prompts
- **Blog Title Generator** – generate engaging post titles
- **Image Generator** – premium text-to-image creation
- **Background Removal** – remove image backgrounds instantly
- **Object Removal** – delete unwanted objects from photos
- **Resume Reviewer** – analyze PDF resumes for improvements
- **Community Feed** – publish creations and interact with content

---

## 🧱 Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, React Router, react-hot-toast
- **Backend:** Express 5, Clerk authentication, OpenAI-compatible Gemini client, Cloudinary, Multer, Axios
- **Database:** Neon/PostgreSQL via `@neondatabase/serverless`
- **File storage:** Cloudinary
- **PDF parsing:** `pdf-parse-new`

---

## 📁 Folder Structure

```text
EasyAi/
├── .gitignore
├── README.md
├── client/
│   ├── .env.example
│   ├── .env.local
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   ├── README.md
│   ├── src/
│   │   ├── App.jsx
│   │   ├── assets/
│   │   │   ├── arrow_icon.svg
│   │   │   ├── assets.js
│   │   │   ├── favicon.png
│   │   │   ├── gradientBackground.png
│   │   │   ├── image2.png
│   │   │   ├── image3.png
│   │   │   ├── logo.png
│   │   │   ├── profile_img_1.png
│   │   │   ├── star_dull_icon.svg
│   │   │   ├── star_icon.svg
│   │   │   └── user_group.png
│   │   ├── components/
│   │   │   ├── AiTools.jsx
│   │   │   ├── CreationItem.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Plan.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Testimonial.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages/
│   │       ├── BlogTitles.jsx
│   │       ├── Community.jsx
│   │       ├── Dashboard.jsx
│   │       ├── GenerateImages.jsx
│   │       ├── Home.jsx
│   │       ├── Layout.jsx
│   │       ├── RemoveBackground.jsx
│   │       ├── RemoveObject.jsx
│   │       ├── ReviewResume.jsx
│   │       └── WriteArticle.jsx
│   ├── vercel.json
│   └── vite.config.js
└── server/
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── configs/
    │   ├── cloudinary.js
    │   ├── db.js
    │   └── multer.js
    ├── controllers/
    │   ├── aiController.js
    │   └── userController.js
    ├── middlewares/
    │   └── auth.js
    ├── package-lock.json
    ├── package.json
    ├── routes/
    │   ├── aiRoutes.js
    │   └── userRoutes.js
    ├── server.js
    └── vercel.json
```

---

## 🔒 Environment Variables

Use `.env` files locally and never commit real credentials. Copy the example files and replace the placeholders:

- `server/.env.example` → `server/.env`
- `client/.env.example` → `client/.env`

### Server variables

```env
DATABASE_URL='postgresql://<username>:<password>@<host>:<port>/<database>?sslmode=require'
CLERK_PUBLISHABLE_KEY=pk_test_<your_publishable_key>
CLERK_SECRET_KEY=sk_test_<your_secret_key>
GEMINI_API_KEY=<your_gemini_api_key>
GEMINI_BASE_URL='https://generativelanguage.googleapis.com/v1beta/openai/'
GEMINI_MODEL='gemini-3-flash-preview'
CLIP_DROP_API_KEY=<your_clipdrop_api_key>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
```

### Client variables

```env
VITE_BASE_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=pk_test_<your_clerk_publishable_key>
```

> These `.env` files are ignored by Git to keep secrets private.

---

## ⚙️ Quick Start

```bash
# Server setup
cd server
npm install

# Client setup
cd ../client
npm install

# Start server
cd ../server
npm run server

# Start client
cd ../client
npm run dev
```

Open the Vite local URL displayed in the terminal.

---

## ⚠️ Important Notes

- Free users get **10 AI requests** for article and blog title generation.
- Premium access is required for image generation, background removal, object removal, and resume review.
- The auth middleware tracks free usage in Clerk private metadata.

---

## 💡 Next Improvements

- Add dedicated `README.md` files for `client/` and `server/`
- Add environment validation logic
- Introduce automated tests for frontend and backend flows
- Add cleanup for temporary uploads via Multer

---

## 📄 License

This repository currently has **no license** specified.
