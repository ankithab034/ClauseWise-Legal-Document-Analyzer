// Simulated services standing in for IBM Watson + Granite + RAG
export async function uploadAndAnalyze(file: File){
  // pretend to upload + kick off analysis
  await new Promise(r=>setTimeout(r, 900))
  return { docId: 'demo-nda' }
}

export async function getAnalysis(docId: string){
  await new Promise(r=>setTimeout(r, 600))
  return {
    id: docId,
    title: 'Non-Disclosure Agreement (NDA)',
    language: 'English (detected)',
    overallRisk: 41,
    issues: [
      'Ambiguous definition of “Confidential Information”',
      'Missing specific breach notification timelines',
      'Governing law jurisdiction not specified'
    ],
    clauses: [
      {
        type: 'Confidential Information',
        risk: 'Medium',
        text: 'Confidential Information means any information disclosed by either party that a reasonable person would deem confidential.',
        regulations: ['GDPR Art. 4(1)', 'CCPA §1798.140'],
        explain: 'We should clearly list what counts as confidential to avoid confusion.',
        suggestion: 'Specify categories (technical, financial, PII) and exclusions (public, independently developed).'
      },
      {
        type: 'Term & Termination',
        risk: 'Low',
        text: 'This Agreement remains in effect for two (2) years from Effective Date.',
        regulations: ['GDPR storage limitation principle'],
        explain: 'State how long duties last and what happens after.',
        suggestion: 'Clarify post-termination obligations for returning/destroying data.'
      },
      {
        type: 'Breach Notification',
        risk: 'High',
        text: 'Disclosing Party shall be notified promptly of any breach.',
        regulations: ['GDPR Art. 33 (72 hours)'],
        explain: '“Promptly” is vague. Regulators expect explicit timelines.',
        suggestion: 'Replace “promptly” with “within 72 hours of discovery” and define discovery.'
      }
    ]
  }
}

export async function getRegulatoryAlerts(){
  await new Promise(r=>setTimeout(r, 300))
  return [
    { title: 'EU AI Act final text published', region: 'EU', date: '2025-08-12', impact: 'Update AI vendor clauses and risk classifications.'},
    { title: 'California Privacy Rights Act update', region: 'US-CA', date: '2025-08-09', impact: 'Revise processing addendum and opt-out terms.'},
    { title: 'India DPDP Rules amendment', region: 'IN', date: '2025-08-05', impact: 'Add cross-border transfer safeguards.'}
  ]
}
