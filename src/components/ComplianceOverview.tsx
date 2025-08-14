export default function ComplianceOverview(){
  const items = [
    {label: 'GDPR', status: 'Compliant', score: 94},
    {label: 'CCPA', status: 'Minor Issues', score: 88},
    {label: 'HIPAA', status: 'Review', score: 76},
  ]
  return (
    <div className="bg-white rounded-2xl p-4 shadow-card">
      <h3 className="font-semibold mb-3">Compliance Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {items.map(i => (
          <div key={i.label} className="border rounded-xl p-3">
            <div className="text-sm text-slate-500">{i.label}</div>
            <div className="flex items-end justify-between">
              <div className={"text-lg font-semibold " + (i.score>90 ? 'text-green-600' : i.score>80 ? 'text-yellow-600' : 'text-red-600') }>{i.score}%</div>
              <div className="text-xs">{i.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
