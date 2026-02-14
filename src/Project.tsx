// src/components/ProjectLoop.tsx
import { ArrowUpRight,Home } from 'lucide-react';
// Assuming these are your imported images (place them in src/assets/ or public/)
 import quickResize from '../src/assets/quickresize.png';
 import collarCode from '../src/assets/collarcode.png';
 import bandnotifier from '../src/assets/bandnotifier.png';
 import dotfiles from '../src/assets/dotfiles.png';
import { Link } from 'react-router-dom';

const projects = [
  {
    link: "https://github.com/Hyxal-V/QuickResize",
    src: quickResize, // ← your imported image
    title: "QuickResize",
    description:
      "A privacy-first, open-source tool built to streamline image uploads for forms. Resize images to the exact resolution (e.g., 800x600) and compress them to meet strict file size limits (e.g., 200KB) required by online form",
  },
  {
    link: "https://github.com/Hyxal-V/collartag",
    src: collarCode,
    title: "Collar Tag",
    description:
      "Simple web mobile application designed to generate QR codes for pet collars and apparel. These QR codes, when scanned, display essential information about the pet and its owner, facilitating quick reunions in case of lost pets.",
  },
  {
    link: "https://github.com/Hyxal-V/BandNotifier_Flutter",
    src: bandnotifier,
    title: "BandNotifier",
    description:
      "Open-source tool that turns your smartwatch into a teleprompter. Send custom text prompts via the Notification API and discreetly display them on your wrist for smooth speeches, presentations, or reminders on the go.",
  },
  {
    link: "https://github.com/Hyxal-V/My-Dotfiles",
    src: dotfiles,
    title: "Hyxal's Dotfiles",
    description:
      "Hyxal's Dotfiles—a personal, open-source collection of configs for a sleek Hyprland setup. Customize your lockscreen, launcher, notifications, and wallpaper management for a clean, minimal, and efficient Linux desktop experience.",
  },
];

export default function ProjectLoop() {
  return (
     <div className="min-h-screen bg-[#0B0B0B] text-white">
   
      <div className="max-w-1xl mx-auto p-6 md:p-8 lg:p-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project, index) => (
       <div className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#1A1A1A] hover:border-[#FFD600]/20 transition-all group">
  
  {/* Image */}
  <div className="relative aspect-video overflow-hidden rounded-xl mb-6 bg-[#1A1A1A]">
    <img
      src={project.src}
      alt={project.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>

  {/* Title */}
  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#FFD600] transition-colors">
    {project.title}
  </h3>

  {/* Description */}
  <p className="text-gray-400 text-base leading-relaxed mb-6 line-clamp-3">
    {project.description}
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap gap-3">
    
    {/* GitHub Button */}
    <button
      onClick={() => window.open(project.link, "_blank")}
      className="
        flex items-center gap-2
        px-5 py-2.5
        bg-[#1A1A1A]
        rounded-xl
        border border-[#222]
        hover:border-[#FFD600]/40
        hover:bg-[#222]
        text-white
        font-medium
        transition-all
      "
    >
      Go to GitHub
    </button>

    {/* Optional Second Button */}
    {project.live && (
      <button
        onClick={() => window.open(project.live, "_blank")}
        className="
          flex items-center gap-2
          px-5 py-2.5
          bg-[#FFD600]
          text-black
          rounded-xl
          font-medium
          hover:opacity-90
          transition-all
        "
      >
        Live Demo
      </button>
    )}

  </div>
</div>

      ))}
    </div>
    </div>
    <Link to="/">
        <button
      className="fixed bottom-6 right-6  bg-[#FFD600] hover:opacity-90
                 text-black font-mmedium p-4 rounded-full shadow-lg 
                 transition transform hover:scale-110"
    >
      <Home size={24} />
    </button>
    </Link>
  </div>
  
  );
}