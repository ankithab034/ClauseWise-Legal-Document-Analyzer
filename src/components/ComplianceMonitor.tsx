import { useQuery } from '@tanstack/react-query'
import { getRegulatoryAlerts } from '../services/ai'

export default function ComplianceMonitor(){
  const { data } = useQuery({ queryKey:['alerts'], queryFn:getRegulatoryAlerts })

  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      <h2 className="text-xl font-semibold mb-2">Regulatory Monitoring</h2>
      <p className="text-sm text-slate-500 mb-4">Live stream of global legal/regulatory changes (simulated feed).</p>
      <div className="space-y-3">
        {data?.map((a:any, i:number)=> (
          <div key={i} className="border rounded-xl p-3">
            <div className="text-sm font-medium">{a.title}</div>
            <div className="text-xs text-slate-500">{a.region} · {a.date}</div>
            <div className="text-sm mt-1">{a.impact}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
