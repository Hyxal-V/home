import { Mail, Calendar } from 'lucide-react';

export default function CTACard() {
  return (
    <div className="bg-gradient-to-br from-[#FFD600] to-[#FFC107] rounded-2xl p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative">
        <h2 className="text-3xl font-bold text-black mb-3">Let's Work Together</h2>
        <p className="text-black/70 mb-6 max-w-md">
          Got a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-black text-[#FFD600] font-semibold rounded-xl hover:bg-[#0B0B0B] transition-all hover:shadow-lg hover:shadow-black/50 flex items-center gap-2">
            <Mail size={18} />
            Email Me
          </button>
          <button className="px-6 py-3 bg-black/10 text-black font-semibold rounded-xl hover:bg-black/20 transition-all border border-black/20 flex items-center gap-2">
            <Calendar size={18} />
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
}
