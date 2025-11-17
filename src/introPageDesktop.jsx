import { Button } from "@/components/ui/button"
import '@fortawesome/fontawesome-free/css/all.css'
import { ThemeProvider } from "@/components/ui/theme-provider.jsx"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import pfp from "@/assets/pfp.png"
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
function HomepageDesktop(){
   const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home/projects')
  }
    return (
          <div className="flex flex-row ">
  <div class="w-[20%] mt-10 ml-20 flex justify-start items-start h-screen">
    <Card className="w-68" >
  <CardHeader className="">
    <img src={pfp} className="rounded-lg w-80" />
   <CardTitle className="text-3xl mt-4 text-center">Hyxal V</CardTitle>

    <CardDescription className="text-1xl">Internet Wizard just existing..</CardDescription>
  </CardHeader>
  <CardContent className="justify-center flex flex-col items-center ">
    <p></p>
    <a href="https://github.com/Hyxal-V" className="w-full"><Button variant="outline" className="w-full mb-3"><i class="fa-brands fa-github"/> Github</Button>
</a>
<a href="https://x.com/HyxalV" className="w-full"><Button variant="outline" className="w-full mb-3"><i class="fa-brands fa-x-twitter"/> Twitter</Button>
</a>
<a href="https://www.instagram.com/hyxal.labs" className="w-full"><Button variant="outline" className="w-full mb-3"><i class="fa-brands fa-instagram"/> Instagram</Button>
</a>
<a href="https://www.youtube.com/@Hyxal-Labs" className="w-full"><Button variant="outline" className="w-full mb-1"><i class="fa-brands fa-youtube"/> Youtube</Button>
</a>
  </CardContent>


</Card>
  </div>
  <div class="w-[75%] mt-10">
  <Breadcrumb className="">
  <BreadcrumbList>
    <BreadcrumbItem className="ml-10 text-2xl">
      <BreadcrumbLink href="/home" className="text-3xl">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage className="text-3xl">About Me</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
<p className="mt-10 mr-10 ml-10 text-2xl"> 
Hey there! I’m Hyxal — a dev who loves poking around the guts of systems, breaking things on purpose, and making my digital space feel <em>just right</em>.<br/>
These days I’m more into cybersecurity, web dev, and anything that lets me understand how tech works beneath the surface. Flutter, MERN, Linux, C — if it’s fun to tinker with, I’m in.<br/><br/>

Most of my projects start because I get curious about something, or I stumble across a random idea and think, <em>“Yeah… I could totally build that.”</em><br/><br/>

Outside Computers, I’m really into sociology, EDM (unironically listens to house music), and losing hours to RimWorld. I also love dogs (Golden Retrievers 💛)<br/><br/>

This little site is my corner of the internet to stash projects, write some thoughts, and keep things simple.<br/><br/>
</p>


  
    <Breadcrumb className="">
  <BreadcrumbList>
    <BreadcrumbItem className="ml-10 text-2xl">
      <BreadcrumbLink href="/home" className="text-3xl">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage className="text-3xl">Options</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
<div className=" ml-10 mr-10 mt-10  flex">
<Card className="w-96 hover:bg-black transition-colors duration-300">
 
  <CardHeader onClick={handleClick}>
    <CardTitle className="text-2xl ">Projects</CardTitle>
    <CardDescription>Some cool stuff I've made
       </CardDescription>
    
  </CardHeader>
</Card>
<Card className="ml-10 w-96">
 
  <CardHeader>
    <CardTitle className="text-2xl">Blog</CardTitle>
    <CardDescription>My honest thoughts on various stuff
       </CardDescription>
    
  </CardHeader>
</Card>


</div>

  </div>
  
</div>

    )
}
export default HomepageDesktop