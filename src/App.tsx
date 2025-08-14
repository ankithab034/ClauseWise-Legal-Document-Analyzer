import { Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import ComplianceMonitor from './components/ComplianceMonitor'
import DocumentUpload from './components/DocumentUpload'
import AnalysisResults from './components/AnalysisResults'
import KnowledgeGraph from './components/KnowledgeGraph'
import RecentDocuments from './components/RecentDocuments'

export default function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      <Header />
      <div className="grid grid-cols-[280px_1fr] gap-4 p-4">
        <Sidebar />
        <div className="space-y-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<DocumentUpload />} />
            <Route path="/analysis/:docId" element={<AnalysisResults />} />
            <Route path="/compliance" element={<ComplianceMonitor />} />
            <Route path="/knowledge" element={<KnowledgeGraph />} />
            <Route path="/recent" element={<RecentDocuments />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
