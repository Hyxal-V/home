export default function ContentCard({
  title,
  subtitle,
  children,
  icon: Icon,
  className = '',
  onClick,
}: ContentCardProps) {
  return (
    <div
      onClick={onClick}   // ✅ THIS WAS MISSING
      className={`bg-[#111111] rounded-2xl p-8 border border-[#1A1A1A]
      hover:border-[#FFD600]/20 transition-all ${className}`}
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          {Icon && (
            <div className="w-10 h-10 rounded-lg bg-[#FFD600]/10 flex items-center justify-center">
              <Icon className="text-[#FFD600]" size={20} />
            </div>
          )}
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>

        {subtitle && (
          <p className="text-gray-400 text-sm">{subtitle}</p>
        )}
      </div>

      {children}
    </div>
  );
}
