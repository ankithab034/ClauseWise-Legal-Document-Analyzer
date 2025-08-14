import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { uploadAndAnalyze } from '../services/ai'

export default function DocumentUpload(){
  const [files, setFiles] = useState<FileList | null>(null)
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  const handleUpload = async () => {
    if(!files || files.length===0) return
    setLoading(true)
    const res = await uploadAndAnalyze(files[0])
    setLoading(false)
    nav(`/analysis/${res.docId}`)
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      <h2 className="text-xl font-semibold mb-2">Upload Legal Document</h2>
      <p className="text-sm text-slate-500 mb-4">Supports PDF, DOCX, or images. OCR + multilingual analysis simulated.</p>
      <input type="file" className="mb-4" onChange={e=>setFiles(e.target.files)} />
      <button onClick={handleUpload} disabled={loading} className="px-4 py-2 rounded-xl bg-primary text-white hover:opacity-90">
        {loading ? 'Analyzing…' : 'Upload & Analyze'}
      </button>
    </div>
  )
}
