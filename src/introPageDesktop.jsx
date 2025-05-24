import { Button } from "@/components/ui/button"
import '@fortawesome/fontawesome-free/css/all.css'
import { ThemeProvider } from "@/components/ui/theme-provider.jsx"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"

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
    navigate('/projects')
  }
    return (
          <div className="flex flex-row ">
  <div class="w-[20%] mt-10 ml-20 flex justify-start items-start h-screen">
    <Card className="w-68" >
  <CardHeader className="">
    <img src="/src/assets/pfp.png" className="rounded-lg w-80" />
    <CardTitle className="text-4xl">Hello, I'm Hyxal</CardTitle>
    <CardDescription className="text-1xl">Internet Wizard who makes stuff</CardDescription>
  </CardHeader>
  <CardContent className="justify-center flex flex-col items-center ">
    <p></p>
    <a href="https://github.com/Hyxal-V" className="w-full"><Button variant="outline" className="w-full mb-3"><i class="fa-brands fa-github"/> Github</Button>
</a>
<a href="https://x.com/HyxalV/" className="w-full"><Button variant="outline" className="w-full mb-0"><i class="fa-brands fa-x-twitter"/> Twitter</Button>
</a>
  </CardContent>


</Card>
  </div>
  <div class="w-[75%] mt-10">
  <Breadcrumb className="">
  <BreadcrumbList>
    <BreadcrumbItem className="ml-10 text-2xl">
      <BreadcrumbLink href="/" className="text-3xl">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage className="text-3xl">About Me</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
  <p className="mt-10 mr-10 ml-10 text-2xl"> 
Hey there! I’m Hyxal — a dev who’s all about building fun, weird, and sometimes useful stuff, while making my digital space feel <em>just right</em>.<br/>
Lately, I’ve been diving headfirst into web dev, messing around with Android apps, and obsessing over Linux ricing because let’s be honest… the defaults are kinda boring.<br/><br/>

Most of my projects kick off ‘cause I get curious about how something works, or I stumble across a random idea and think, <em>“Yo… I could totally make that.”</em><br/><br/>

I’m also working on this little portfolio site you’re looking at — a space to stash my projects, drop some thoughts, and maybe throw in a few experiments along the way.<br/>
Stick around, might be something here you’ll like.<br/><br/>

  </p>
    <Breadcrumb className="">
  <BreadcrumbList>
    <BreadcrumbItem className="ml-10 text-2xl">
      <BreadcrumbLink href="/" className="text-3xl">Home</BreadcrumbLink>
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
    <CardDescription>Some Cool stuf I've made
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