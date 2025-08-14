import { NavLink } from 'react-router-dom'
import { Home, Upload, Shield, Network, Files } from 'lucide-react'

const link = 'flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100'
const active = 'bg-primary text-white hover:bg-primary'

export default function Sidebar() {
  return (
    <aside className="bg-white shadow-card rounded-2xl p-4 h-fit">
      <nav className="space-y-2">
        <NavLink to="/dashboard" className={({isActive})=> isActive ? link + ' ' + active : link }>
          <Home size={18} /> Dashboard
        </NavLink>
        <NavLink to="/upload" className={({isActive})=> isActive ? link + ' ' + active : link }>
          <Upload size={18} /> Upload
        </NavLink>
        <NavLink to="/compliance" className={({isActive})=> isActive ? link + ' ' + active : link }>
          <Shield size={18} /> Compliance
        </NavLink>
        <NavLink to="/knowledge" className={({isActive})=> isActive ? link + ' ' + active : link }>
          <Network size={18} /> Knowledge Graph
        </NavLink>
        <NavLink to="/recent" className={({isActive})=> isActive ? link + ' ' + active : link }>
          <Files size={18} /> Recent
        </NavLink>
      </nav>
    </aside>
  )
}
