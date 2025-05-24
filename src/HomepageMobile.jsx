import { Button } from "@/components/ui/button"
import '@fortawesome/fontawesome-free/css/all.css'
import { ThemeProvider } from "@/components/ui/theme-provider.jsx"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'


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
    navigate('/projects')
  }
  return (
    <div className="flex flex-col p-5">
      {/* Profile Card */}
      <div className="flex justify-center mt-10">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <img src="/src/assets/pfp.png" className="rounded-lg w-full" alt="Profile" />
            <CardTitle className="text-3xl mt-4 text-center">Hello, I'm Hyxal</CardTitle>
            <CardDescription className="text-center text-lg">Internet Wizard who makes stuff</CardDescription>
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
          </CardContent>
        </Card>
      </div>

      {/* Breadcrumb & About Section */}
      <div className="mt-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-2xl">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-2xl">About Me</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <p className="mt-8 text-lg leading-relaxed">
          Hey there! I’m Hyxal — a dev who’s all about building fun, weird, and sometimes useful stuff, while making my digital space feel <em>just right</em>.<br /><br />
          Lately, I’ve been diving headfirst into web dev, messing around with Android apps, and obsessing over Linux ricing because let’s be honest… the defaults are kinda boring.<br /><br />
          Most of my projects kick off ‘cause I get curious about how something works, or I stumble across a random idea and think, <em>“Yo… I could totally make that.”</em><br /><br />
          I’m also working on this little portfolio site you’re looking at — a space to stash my projects, drop some thoughts, and maybe throw in a few experiments along the way.<br />
          Stick around, might be something here you’ll like.
        </p>

        {/* Second Breadcrumb */}
        <Breadcrumb className="mt-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-2xl">Home</BreadcrumbLink>
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
