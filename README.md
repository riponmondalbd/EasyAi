# Easy.ai

I created this project to provide an AI-powered platform where users can submit prompts and documents to get instant, structured AI responses. It solves the problem of slow manual analysis and content generation by offering automated processing, secure authentication, and a clean interactive interface.

## Key Focus Areas
- Primary goal I achieved: Built a full-stack AI app with secure login, file upload, and real-time AI response features

- Unique value I provide: Fast AI processing with document parsing and a smooth, user-friendly experience



## Demo

Check out the live demo: [Live Demo](https://easy-aii.vercel.app)




## My Tech Stack

**Frontend:**  
React · Tailwind CSS · Vite · React Router · Axios · Clerk · React Markdown · React Hot Toast · Lucide React

**Backend:**  
Node.js · Express · Clerk Express SDK · Multer · Cloudinary · OpenAI API · Custom middleware

**Database:**  
Neon Serverless PostgreSQL

**DevOps:**  
Vercel (deployment) · Git · GitHub



## 🚀 Getting Started

Follow these steps to get your project up and running locally.

1. Clone the repo
2. Install dependencies
3. Configure environment variables
4. Start the development server




## Installation

Here's how to install my project:

```bash
# Clone my repository
git clone https://github.com/riponmondalbd/EasyAi

#seperate frontend & backend

# Install dependencies I require for both
npm install

# Start the development server I configured (for front-end)
npm run dev

# Start the development server I configured (for back-end)
npm run server
```



## Environment Variables

To run my project, you'll need these in your `.env` file:

```
# I require these for front-end
VITE_CLERK_PUBLISHABLE_KEY="your_key_here" 
VITE_BASE_URL="your_key_here" 

# My database connection settings
DATABASE_URL = "your_key_here" 
CLERK_PUBLISHABLE_KEY = "your_key_here" 
CLERK_SECRET_KEY = "your_key_here" 
GEMINI_API_KEY = "your_key_here" 
GEMINI_BASE_URL = "your_key_here" 
GEMINI_MODEL = "your_key_here" 
CLIP_DROP_API_KEY = "your_key_here" 
CLOUDINARY_CLOUD_NAME = "your_key_here" 
CLOUDINARY_API_KEY = "your_key_here" 
CLOUDINARY_API_SECRET = "your_key_here" 
```




## Configuration

To configure this project, edit the ".env" file and set the required environment variables. See the example below:






## How I Use It

Basic implementation from my code:
```javascript
// Import my library
import myModule from 'my-package';

// Initialize with my recommended settings
const instance = myModule({ config: true });

// Example from my actual implementation
instance.processData(data);
```



## API Reference

Here's the API I designed:

#### GET /api/data
```http
GET /api/data
```

| Parameter   | Type     | Description                                 |
| :---------- | :------- | :------------------------------------------ |
| `user_token`| `string` | Your API key (I require this for authentication) |

#### POST /api/create
```http
POST /api/create
```

| Body Field | Type   | My Requirements                |
| :--------- | :----- | :----------------------------- |
| `title`    | string | **Required**. Item name         |




## My Optimizations

I improved performance by:
- Implementing API request optimization and lazy loading for faster page and data loading
- Reducing bundle size by using Vite production build and dependency cleanup
- Enhancing rendering with component-level state management and memoization to avoid unnecessary re-renders



## Lessons I Learned

Building this taught me:
1. **Architecture**: How I structured a full-stack app with secure auth, file handling, and API integration
2. **Problem Solving**: My method for handling large file uploads and parsing PDFs efficiently
3. **Optimization**: Techniques for faster rendering, lazy loading, and reducing API call overhead



## Contact

Maintainer: [Ripon Mondal](mailto:contact.riponmondal@gmail.com)
Project Link: [https://github.com/riponmondalbd/EasyAi](https://github.com/riponmondalbd/EasyAi)




## Deployment

Here's how I deploy this project:

1. Install dependencies: `npm install`
2. Build production version: `npm run build`
3. Deploy the project to Vercel
4. Configure environment variables via the Vercel dashboard





<p align="center">
  Made with ❤️ by Ripon Mondal
</p>




---

<p align="center">
  If you like this project, please <a href="https://github.com/Readmecodegen/github-readme-generator">⭐ star</a> and <a href="https://github.com/Readmecodegen/github-readme-generator/fork">fork</a> it!
</p>
