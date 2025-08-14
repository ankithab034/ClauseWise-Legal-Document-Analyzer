import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAnalysis } from '../services/ai'
import RiskAssessment from './RiskAssessment'

export default function AnalysisResults(){
  const { docId } = useParams()
  const { data, isLoading } = useQuery({
    queryKey: ['analysis', docId],
    queryFn: () => getAnalysis(docId!)
  })

  if(isLoading) return <div className="bg-white rounded-2xl p-6 shadow-card">Loading analysis…</div>
  if(!data) return <div className="bg-white rounded-2xl p-6 shadow-card">No analysis found.</div>

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-6 shadow-card">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Analysis – {data.title}</h2>
          <div className="text-sm text-slate-500">Language: {data.language} · Model: Watson+Granite (simulated)</div>
        </div>
        <div className="mt-4 grid gap-3">
          {data.clauses.map((c:any, idx:number)=> (
            <div key={idx} className="border rounded-xl p-3">
              <div className="flex items-center justify-between">
                <div className="font-medium">{c.type}</div>
                <span className={"text-xs px-2 py-0.5 rounded-full " + (c.risk==='High'?'bg-red-100 text-red-700': c.risk==='Medium'?'bg-yellow-100 text-yellow-700':'bg-green-100 text-green-700')}>
                  {c.risk} risk
                </span>
              </div>
              <p className="text-sm text-slate-600 mt-2">{c.text}</p>
              <div className="mt-2 text-xs text-slate-500">Regulations: {c.regulations.join(', ')}</div>
              <div className="mt-2 text-sm">
                <span className="font-medium">ELI5:</span> {c.explain}
              </div>
              <div className="mt-2 text-sm">
                <span className="font-medium">Suggestion:</span> {c.suggestion}
              </div>
            </div>
          ))}
        </div>
      </div>
      <RiskAssessment score={data.overallRisk} issues={data.issues} />
    </div>
  )
}
