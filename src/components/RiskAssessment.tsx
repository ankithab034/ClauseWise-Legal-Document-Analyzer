type Props = { score:number, issues:string[] }
export default function RiskAssessment({score, issues}: Props){
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Overall Risk Assessment</h3>
        <div className={"text-lg font-bold " + (score>75?'text-red-600':score>45?'text-yellow-600':'text-green-600') }>{score}/100</div>
      </div>
      <ul className="list-disc pl-6 mt-2 text-sm">
        {issues.map((i,idx)=>(<li key={idx}>{i}</li>))}
      </ul>
    </div>
  )
}
