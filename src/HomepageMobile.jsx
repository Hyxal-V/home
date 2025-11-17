import { Button } from "@/components/ui/button"
import '@fortawesome/fontawesome-free/css/all.css'
import { ThemeProvider } from "@/components/ui/theme-provider.jsx"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'

import pfp from "@/assets/pfp.png"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
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

function HomepageMobile() {
    const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home/projects')
  }
  return (
    <div className="flex flex-col p-5">
      {/* Profile Card */}
      <div className="flex justify-center mt-10">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <img src={pfp} className="rounded-lg w-full" alt="Profile" />
            <CardTitle className="text-3xl mt-4 text-center">Hello, I'm Hyxal</CardTitle>
            <CardDescription className="text-center text-lg">Internet Wizard who makes stuff...</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-3">
         <a href="https://github.com/Hyxal-V" className="w-full">
          <Button variant="outline" className="w-full">
              <i className="fa-brands fa-github mr-2" /> Github
            </Button></a>
<a href="https://x.com/HyxalV/" className="w-full">
            <Button variant="outline" className="w-full">
              <i className="fa-brands fa-x-twitter mr-2" /> Twitter
            </Button> </a>
            <a href="https://www.instagram.com/hyxal.labs" className="w-full">
            <Button variant="outline" className="w-full">
              <i className="fa-brands fa-instagram mr-1" /> Instagram
            </Button> </a>
            <a href="https://www.youtube.com/@Hyxal-Labs" className="w-full">
            <Button variant="outline" className="w-full">
              <i className="fa-brands fa-youtube mr-2" /> Youtube
            </Button> </a>
          </CardContent>
        </Card>
      </div>

      {/* Breadcrumb & About Section */}
      <div className="mt-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home" className="text-2xl">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-2xl">About Me</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="mt-8 text-lg leading-relaxed">
        Hey there! I’m Hyxal — a dev who loves poking around the guts of systems, breaking things on purpose, and making my digital space feel <em>just right</em>.<br/>
These days I’m more into cybersecurity, web dev, and anything that lets me understand how tech works beneath the surface. Flutter, MERN, Linux, C — if it’s fun to tinker with, I’m in.<br/><br/>

Most of my projects start because I get curious about something, or I stumble across a random idea and think, <em>“Yeah… I could totally build that.”</em><br/><br/>

Outside Computers, I’m really into sociology, EDM (unironically listens to house music), and losing hours to RimWorld. I also love dogs (Golden Retrievers 💛)<br/><br/>

This little site is my corner of the internet to stash projects, write some thoughts, and keep things simple.<br/><br/> 
        </p>

        {/* Second Breadcrumb */}
        <Breadcrumb className="mt-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/home" className="text-2xl">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-2xl">Options</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Projects & Blog Cards */}
      <div className="flex flex-col gap-6 mt-10">
        <Card className="w-full" onClick={handleClick}>
          <CardHeader>
            <CardTitle className="text-2xl">Projects</CardTitle>
            <CardDescription>Some cool stuff I've made</CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Blog</CardTitle>
            <CardDescription>My honest thoughts on various stuff</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default HomepageMobile
