import { Github, Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';

export default function SocialCard() {
  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Hyxal-V', handle: '@Hyxal-V' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/HyxalV', handle: '@HyxalV' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/hyxal.labs/', handle: '@hyxal.labs' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@Hyxal-Labs', handle: 'Hyxal V' },
  ];

  return (
    <div className="bg-[#111111] rounded-2xl p-8 border border-[#1A1A1A] hover:border-[#FFD600]/20 transition-all">
      <h2 className="text-2xl font-bold text-white mb-6">Find Me @</h2>
      <div className="space-y-3">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              className="flex items-center justify-between p-4 bg-[#1A1A1A] rounded-xl hover:bg-[#222] border border-[#222] hover:border-[#FFD600]/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-gray-400 group-hover:text-[#FFD600] transition-colors" size={20} />
                <div>
                  <div className="text-white font-medium">{social.name}</div>
                  <div className="text-gray-500 text-sm">{social.handle}</div>
                </div>
              </div>
              <ExternalLink className="text-gray-600 group-hover:text-[#FFD600] transition-colors" size={16} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
