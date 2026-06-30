export default function DiseaseCard({
  title,
  icon,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="
      relative
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      hover:scale-105
      transition
      cursor-pointer
      "
    >

      <div className="absolute top-4 right-4">
        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">
          Active
        </span>
      </div>

      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-slate-400">
        AI Powered Risk Assessment
      </p>

    </div>
  );
}