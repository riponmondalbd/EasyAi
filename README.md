# EasyAi

EasyAi is a React + Vite AI productivity application with a Node/Express backend. It offers authenticated AI tools for creating articles, generating blog titles, producing images, and editing image files, plus a resume review workflow and user content management.

## Key Features

- User authentication with Clerk
- AI article generation using Gemini Chat completions
- AI blog title generation
- Premium image generation via ClipDrop + Cloudinary
- Premium image background removal and object removal via Cloudinary transformations
- Premium PDF resume review
- User creations, published creations, and like toggling
- Responsive React UI with routed AI tool pages

## Tech Stack

- Frontend: React 19, Vite, Tailwind CSS, React Router, react-hot-toast
- Backend: Express 5, Clerk, OpenAI-compatible Gemini client, Cloudinary, Multer, Axios
- Database: Neon/PostgreSQL via `@neondatabase/serverless`
- File storage: Cloudinary
- PDF parsing: `pdf-parse-new`

## Project Structure

```
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

- `client/` – React frontend
- `client/src/` – source code for UI, pages, and routing
- `server/` – Express backend
- `server/configs/` – Cloudinary, database, and Multer setup
- `server/controllers/` – AI and user request handlers
- `server/routes/` – API routing definitions
- `server/middlewares/` – auth and plan middleware

## AI Tools Included

- `AI Article Writer`
- `Blog Title Generator`
- `AI Image Generation` (premium only)
- `Background Removal` (premium only)
- `Object Removal` (premium only)
- `Resume Reviewer` (premium only)
- `Community` / published creations feed

## Environment Variables

Do not commit secret keys or credential files. Use `.env` files locally and keep them out of version control.

Copy the example files and fill in your own values:

- `server/.env.example` → `server/.env`
- `client/.env.example` → `client/.env`

### Server environment variables

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

### Client environment variables

```env
VITE_BASE_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=pk_test_<your_clerk_publishable_key>
```

These files are ignored by Git, so your secrets stay private.

## Running Locally

1. Install server dependencies:

```bash
cd server
npm install
```

2. Install client dependencies:

```bash
cd ../client
npm install
```

3. Start the server:

```bash
cd ../server
npm run server
```

4. Start the client:

```bash
cd ../client
npm run dev
```

5. Open the Vite local URL shown in the terminal.

> Internal backend API endpoints are not published in the public README. Keep API routing details private and only share them with trusted team members or in internal developer documentation.

## Important Notes

- Free users are limited to 10 AI requests for article and blog title generation.
- Image generation, background removal, object removal, and resume review require premium access.
- The middleware stores free usage in Clerk private metadata and enforces plan limits.

## Potential Improvements

- Add a root-level `README` in `client/` and `server/` with more granular setup details
- Add environment validation and `.env.example`
- Add automated tests for API routes and frontend pages
- Improve upload cleanup handling for Multer temporary files

## License

This project currently does not specify a license.
