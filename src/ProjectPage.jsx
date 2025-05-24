import { Input } from "@/components/ui/input"
import '@fortawesome/fontawesome-free/css/all.css'
import { ThemeProvider } from "@/components/ui/theme-provider.jsx"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function ProjectLoop() {
  const projects = [
    {link:"https://github.com/Hyxal-V/QuickResize",  src:"/src/assets/projectImages/quickresize.png", title: "QuickResize", description: "Meet QuickResize—a privacy-first, open-source tool built to streamline image uploads for forms. Resize images to the exact resolution (e.g., 800x600) and compress them to meet strict file size limits (e.g., 200KB) required by online form" }, 
    {link:"https://github.com/Hyxal-V/collartag", src:"/src/assets/projectImages/collarcode.png", title: "Collar Tag", description: "CollarTag is a simple web mobile application designed to generate QR codes for pet collars and apparel. These QR codes, when scanned, display essential information about the pet and its owner, facilitating quick reunions in case of lost pets." },
    {link:"https://github.com/Hyxal-V/BandNotifier_Flutter",  src:"/src/assets/projectImages/bandnotifier.png", title: "BandNotifier", description: "Meet WristPrompt—a lightweight, open-source tool that turns your smartwatch into a teleprompter. Send custom text prompts via the Notification API and discreetly display them on your wrist for smooth speeches, presentations, or reminders on the go." }, 
    {link:"https://github.com/Hyxal-V/My-Dotfiles", src:"/src/assets/projectImages/dotfiles.png", title: "Hyxal's Dotfiles", description: "Hyxal's Dotfiles — a personal, open-source collection of configs for a sleek Hyprland setup. Customize your lockscreen, launcher, notifications, and wallpaper management for a clean, minimal, and efficient Linux desktop experience." }]

  return (
    <>
    <div className="flex flex flex-wrap justify-center gap-4">
      {projects.map((f, index) => (
        <Card key={index} className="w-114 m-4">
          <CardHeader>
            
            <img src={f.src} className="h-auto w-100 rounded-lg mb-10" alt="Profile" />
            <CardTitle className="text-4xl">{f.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-1xl">{f.description}</CardDescription>
           <a href={f.link}> <Button variant="outline" className="w-full  mt-4 text-1xl"><i class="fa-brands fa-github"/> GitHub</Button></a>
          </CardContent>
        </Card>
      ))}
      </div>
    </>
  )
}

function ProjectPage() {
  return (
    <div className="m-10">
      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-2xl">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-2xl">Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-wrap">
        <ProjectLoop />
      </div>
    </div>
  )
}

export default ProjectPage
