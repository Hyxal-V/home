interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="bg-[#111111] rounded-2xl p-6 border border-[#1A1A1A] hover:border-[#FFD600]/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FFD600]/10">
      <div className="text-4xl font-bold text-[#FFD600] mb-2">{number}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}
