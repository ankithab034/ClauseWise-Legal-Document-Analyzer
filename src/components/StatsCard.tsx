type Props = { title:string, value:string, hint?:string }
export default function StatsCard({title, value, hint}: Props){
  return (
    <div className="bg-white rounded-2xl p-4 shadow-card">
      <div className="text-slate-500 text-sm">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
      {hint && <div className="text-xs text-slate-400 mt-1">{hint}</div>}
    </div>
  )
}
