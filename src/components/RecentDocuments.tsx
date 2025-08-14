export default function RecentDocuments(){
  const docs = [
    {id:'demo-nda', name:'NDA_Acme_Corp.pdf', date:'2025-08-10', status:'Analyzed'},
    {id:'msa', name:'Master_Service_Agreement.pdf', date:'2025-08-09', status:'Pending Review'},
  ]
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      <h2 className="text-xl font-semibold mb-2">Recent Documents</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="py-2">Name</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {docs.map(d => (
            <tr key={d.id} className="border-t">
              <td className="py-2">{d.name}</td>
              <td className="py-2">{d.date}</td>
              <td className="py-2">{d.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
