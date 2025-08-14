import { ShieldCheck, Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-card px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <ShieldCheck className="text-primary" />
        <h1 className="text-xl font-semibold">ClauseWise – Legal Document Analyzer</h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="relative p-2 rounded-xl hover:bg-slate-100">
          <Bell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">3</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20" />
      </div>
    </header>
  )
}
