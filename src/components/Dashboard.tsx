import StatsCard from './StatsCard'
import ComplianceOverview from './ComplianceOverview'

export default function Dashboard(){
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Documents Analyzed" value="1,284" hint="+42 this week" />
        <StatsCard title="Avg. Risk Score" value="38/100" hint="Lower is better" />
        <StatsCard title="Compliance Coverage" value="92%" hint="Tracked frameworks: 12" />
        <StatsCard title="Languages Supported" value="45+" hint="OCR + MT simulated" />
      </div>
      <ComplianceOverview />
    </div>
  )
}
