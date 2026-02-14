// src/app/projects/page.tsx
import { ArrowUpRight, Briefcase } from 'lucide-react';

// Replace these imports with your actual image paths
// Option A: If images are in public/ folder → use string paths
// const quickResize = "/quickresize.png";
// const collarCode  = "/collarcode.png";
// etc.

// Option B: If images are in src/assets/ → import them (recommended)
import quickResize from '@/assets/quickresize.png';     // adjust @ alias if needed
import collarCode  from '@/assets/collarcode.png';
import bandnotifier from '@/assets/bandnotifier.png';
import dotfiles     from '@/assets/dotfiles.png';

const projects = [
  {
    link: "https://github.com/Hyxal-V/QuickResize",
    src: quickResize,
    title: "QuickResize",
    description:
      "Meet QuickResize—a privacy-first, open-source tool built to streamline image uploads for forms. Resize images to the exact resolution (e.g., 800x600) and compress them to meet strict file size limits (e.g., 200KB) required by online forms.",
  },
  {
    link: "https://github.com/Hyxal-V/collartag",
    src: collarCode,
    title: "Collar Tag",
    description:
      "CollarTag is a simple web mobile application designed to generate QR codes for pet collars and apparel. These QR codes, when scanned, display essential information about the pet and its owner, facilitating quick reunions in case of lost pets.",
  },
  {
    link: "https://github.com/Hyxal-V/BandNotifier_Flutter",
    src: bandnotifier,
    title: "BandNotifier",
    description:
      "Meet BandNotifier—a lightweight, open-source tool that turns your smartwatch into a teleprompter. Send custom text prompts via the Notification API and discreetly display them on your wrist for smooth speeches, presentations, or reminders on the go.",
  },
  {
    link: "https://github.com/Hyxal-V/My-Dotfiles",
    src: dotfiles,
    title: "Hyxal's Dotfiles",
    description:
      "Hyxal's Dotfiles—a personal, open-source collection of configs for a sleek Hyprland setup. Customize your lockscreen, launcher, notifications, and wallpaper management for a clean, minimal, and efficient Linux desktop experience.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-12 md:pt-16 lg:pt-20">
        {/* Page Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-9 h-9 text-[#FFD600]" strokeWidth={1.8} />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Projects</h1>
          </div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl">
            Open-source tools, experiments, and random useful things I've built and actually use.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex flex-col h-full
                bg-[#111111]/80 backdrop-blur-sm
                rounded-2xl md:rounded-3xl overflow-hidden
                border border-[#222]/40
                shadow-lg shadow-black/30
                hover:shadow-xl hover:shadow-yellow-500/10
                hover:scale-[1.015] hover:-translate-y-1
                transition-all duration-300
              `}
            >
              <div className="relative aspect-video bg-black/40 overflow-hidden">
                <img
                  src={project.src}
                  alt={`${project.title} screenshot`}
                  className={`
                    w-full h-full object-cover
                    group-hover:scale-105
                    transition-transform duration-700 ease-out
                  `}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="flex flex-col flex-1 p-5 md:p-6 lg:p-7">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-[#FFD600] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-6 flex-1 line-clamp-4">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[#FFD600] font-medium text-sm md:text-base group-hover:gap-3 transition-all">
                  View on GitHub
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-500">
          <p className="mb-4">More chaos coming soon...</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#FFD600] hover:text-[#FFC107] font-medium transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}