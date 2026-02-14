import { Code2, Briefcase, BookOpen } from 'lucide-react';

import ProfileCard from "../../components/ProfileCard";
import ContentCard from "../../components/ContentCard";
import SocialCard from "../../components/SocialCard";
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="max-w-7xl mx-auto p-6 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-6 " >
            <motion.div
   initial={{ x: -80, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 12,
  }}
>
            <ProfileCard /></motion.div>
                     <motion.div
   initial={{
        opacity: 0,
        y: 80,        // start below
      }}
      animate={{
        opacity: 1,
        y: 0,         // move to normal position
      }}
      transition={{
        type: "spring",
        stiffness: 120, // bounce strength
        damping: 12,    // lower = more bounce
        duration: 0.6,
      }}
>
            <SocialCard /></motion.div>
          </div>

          <div className="lg:col-span-8 space-y-6">
          
<motion.div   initial={{
        opacity: 0,
        x: 80,     // start from right
      }}
      animate={{
        opacity: 1,
        x: 0,      // move to normal position
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}>
            <ContentCard
              title="About Me"
              icon={Code2}
              subtitle="Internet Wizard just existing.."
            >
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Hey there! I'm Hyxal V, a passionate developer and tech enthusiast who loves building things that make a difference.
                  My journey in tech started years ago, and since then, I've been constantly learning and exploring new technologies.
                </p>
                <p>
                  I specialize in full-stack development with expertise in Flutter, MERN stack, Linux systems, C programming,
                  and cybersecurity. I believe in writing clean, efficient code and creating user experiences that are both
                  beautiful and functional.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge through blog posts and tutorials. I'm always excited to collaborate on interesting
                  projects and connect with fellow developers.
                </p>
              </div>
            </ContentCard>
</motion.div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div   initial={{
        opacity: 0,
        x: 80,     // start from right
      }}
      animate={{
        opacity: 1,
        x: 0,      // move to normal position
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}>
              <Link to="/Projects">
              
              <ContentCard
                title="Projects"
                icon={Briefcase}
                subtitle="Some cool stuff I've made"
                className="cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <div className="text-gray-400">
                  <p className="mb-4">
                    From web applications to mobile apps, I've worked on a diverse range of projects
                    that showcase my skills and creativity.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[#FFD600] font-medium hover:gap-3 transition-all">
                    View All Projects
                    <span>→</span>
                  </div>
                </div>
              </ContentCard>
</Link></motion.div>
    <motion.div   initial={{
        opacity: 0,
        x: 80,     // start from right
      }}
      animate={{
        opacity: 1,
        x: 0,      // move to normal position
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}>
              <ContentCard
                title="Blog"
                icon={BookOpen}
              onClick={()=>alert("Blog coming soon!")}
                subtitle="My honest thoughts on various stuff"
                
                className="cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <div className="text-gray-400">
                  <p className="mb-4">
                    I write about technology, development practices, and share insights from my
                    journey as a developer.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[#FFD600] font-medium hover:gap-3 transition-all">
                    Read My Posts
                    <span>→</span>
                  </div>
                </div>
              </ContentCard>
             </motion.div>
            </div> 
<a className="text-gray-500 text-sm flex justify-end">Profile Art: Zaiyer</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
