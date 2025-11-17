import { useEffect } from "react"
import { Input } from "@/components/ui/input"
import '@fortawesome/fontawesome-free/css/all.css'
import { ThemeProvider } from "@/components/ui/theme-provider.jsx"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import quickResize from "@/assets/projectImages/quickresize.png"
import collarCode from "@/assets/projectImages/collarcode.png"
import dotfiles from "@/assets/projectImages/dotfiles.png"
import bandnotifier from "@/assets/projectImages/bandnotifier.png"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function ProjectLoop() {
  const projects = [
    {
      link: "https://github.com/Hyxal-V/QuickResize",
      src: quickResize,
      title: "QuickResize",
      description:
        "Meet QuickResize—a privacy-first, open-source tool built to streamline image uploads for forms. Resize images to the exact resolution (e.g., 800x600) and compress them to meet strict file size limits (e.g., 200KB) required by online form",
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
        "Meet WristPrompt—a lightweight, open-source tool that turns your smartwatch into a teleprompter. Send custom text prompts via the Notification API and discreetly display them on your wrist for smooth speeches, presentations, or reminders on the go.",
    },
    {
      link: "https://github.com/Hyxal-V/My-Dotfiles",
      src: dotfiles,
      title: "Hyxal's Dotfiles",
      description:
        "Hyxal's Dotfiles — a personal, open-source collection of configs for a sleek Hyprland setup. Customize your lockscreen, launcher, notifications, and wallpaper management for a clean, minimal, and efficient Linux desktop experience.",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {projects.map((f, index) => (
        <Card key={index} className="max-w-md m-4 flex flex-col">
          <CardHeader>
            <img src={f.src} className="h-auto w-full rounded-lg mb-6" alt={f.title} />
            <CardTitle className="text-3xl md:text-4xl">{f.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription className="text-base md:text-lg">{f.description}</CardDescription>
            <a href={f.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full mt-4 text-base md:text-lg">
                <i className="fa-brands fa-github mr-2" /> GitHub
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function ProjectPage() {
  useEffect(() => {
    // Scroll to top when this page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="m-4 md:m-10">
      <Breadcrumb className="mb-6 md:mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/home" className="text-lg md:text-2xl">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-lg md:text-2xl">Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ProjectLoop />
    </div>
  )
}

export default ProjectPage
