import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import arrow_icon from "./arrow_icon.svg";
import gradientBackground from "./gradientBackground.png";
import profile_img_2 from "./image2.png";
import profile_img_3 from "./image3.png";
import logo from "./logo.png";
import profile_img_1 from "./profile_img_1.png";
import star_dull_icon from "./star_dull_icon.svg";
import star_icon from "./star_icon.svg";
import user_group from "./user_group.png";

export const assets = {
  logo,
  gradientBackground,
  user_group,
  star_icon,
  star_dull_icon,
  profile_img_1,
  profile_img_2,
  profile_img_3,
  arrow_icon,
};

export const AiToolsData = [
  {
    title: "AI Article Writer",
    description:
      "Generate high-quality, engaging articles on any topic with our AI writing technology.",
    Icon: SquarePen,
    bg: { from: "#3588F2", to: "#0BB0D7" },
    path: "/ai/write-article",
  },
  {
    title: "Blog Title Generator",
    description:
      "Find the perfect, catchy title for your blog posts with our AI-powered generator.",
    Icon: Hash,
    bg: { from: "#B153EA", to: "#E549A3" },
    path: "/ai/blog-titles",
  },
  {
    title: "AI Image Generation",
    description:
      "Create stunning visuals with our AI image generation tool, Experience the power of AI ",
    Icon: Image,
    bg: { from: "#20C363", to: "#11B97E" },
    path: "/ai/generate-images",
  },
  {
    title: "Background Removal",
    description:
      "Effortlessly remove backgrounds from your images with our AI-driven tool.",
    Icon: Eraser,
    bg: { from: "#F76C1C", to: "#F04A3C" },
    path: "/ai/remove-background",
  },
  {
    title: "Object Removal",
    description:
      "Remove unwanted objects from your images seamlessly with our AI object removal tool.",
    Icon: Scissors,
    bg: { from: "#5C6AF1", to: "#427DF5" },
    path: "/ai/remove-object",
  },
  {
    title: "Resume Reviewer",
    description:
      "Get your resume reviewed by AI to improve your chances of landing your dream job.",
    Icon: FileText,
    bg: { from: "#12B7AC", to: "#08B6CE" },
    path: "/ai/review-resume",
  },
];

export const dummyTestimonialData = [
  {
    image: assets.profile_img_1,
    name: "John Doe",
    title: "Marketing Director, TechCorp.",
    content:
      "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
    rating: 4,
  },
  {
    image: assets.profile_img_2,
    name: "Jane Smith",
    title: "Amazon.com, Inc.",
    content:
      "ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
    rating: 5,
  },
  {
    image: assets.profile_img_3,
    name: "David Lee",
    title: "Facebook, Inc.",
    content:
      "ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
    rating: 4,
  },
];

export const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

export const articleLength = [
  { length: 800, text: "Short (500-800 words)" },
  { length: 1200, text: "Medium (800-1200 words)" },
  { length: 1600, text: "Long (1200+ words)" },
];

export const blogCategories = [
  "General",
  "Technology",
  "Business",
  "Health",
  "Lifestyle",
  "Education",
  "Travel",
  "Food",
];
export const imageStyle = [
  "Realistic",
  "Ghibli style",
  "Anime style",
  "Cartoon style",
  "Fantasy style",
  "Realistic style",
  "3D style",
  "Portrait style",
];
