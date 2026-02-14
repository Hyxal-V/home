import { MapPin, Send, Mail } from 'lucide-react';

export default function ProfileCard() {
  const techStack = ['Flutter', 'Mongoose', 'Express', 'React', 'Typescript','NextJS'];

  return (
    <div className="bg-[#111111] rounded-2xl p-8 border border-[#1A1A1A] hover:border-[#FFD600]/20 transition-all">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-42 h-42 rounded-full bg-gradient-to-br from-[#FFD600] to-[#FFC107] p-1 mb-4">
          <div className="w-full h-full rounded-full bg-[#0B0B0B] flex items-center justify-center">
            
            <img 
            src="../public/pfp.png" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover"
          />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">Hyxal V</h1>

        <div className="inline-block px-3 py-1 rounded-full bg-[#FFD600]/10 border border-[#FFD600]/30 mb-2">
          <span className="text-xs text-[#FFD600] font-medium">Software Developer</span>
        </div>


        <div className="flex items-center gap-1 text-gray-500 text-lg">
          <MapPin size={14} />
          <span>Kerala</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-3 tracking-wider">Tools</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#1A1A1A] text-gray-300 text-xs rounded-lg border border-[#222] hover:border-[#FFD600]/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

   
    </div>
  );
}
