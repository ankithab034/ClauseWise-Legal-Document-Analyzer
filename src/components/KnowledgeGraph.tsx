import { useEffect, useRef } from 'react'

// A tiny force-directed graph using plain d3 to avoid heavy deps
import * as d3 from 'd3'

const nodes = [
  { id: 'NDA' }, { id: 'Confidential Info' }, { id: 'GDPR' }, { id: 'Data Processing' }, { id: 'Breach' }
]
const links = [
  { source: 'NDA', target: 'Confidential Info' },
  { source: 'Data Processing', target: 'GDPR' },
  { source: 'Breach', target: 'GDPR' },
  { source: 'NDA', target: 'Data Processing' }
]

export default function KnowledgeGraph(){
  const ref = useRef<SVGSVGElement | null>(null)

  useEffect(()=>{
    const svg = d3.select(ref.current!)
    svg.selectAll('*').remove()
    const width = 800, height = 420
    svg.attr('viewBox', [0,0,width,height].join(' '))

    const sim = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(links as any).id((d:any)=>d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width/2, height/2))

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', '#cbd5e1')

    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes as any)
      .enter().append('circle')
      .attr('r', 18)
      .attr('fill', '#1E40AF')
      .call(d3.drag<any, any>()
        .on('start', (event, d:any)=>{
          if (!event.active) sim.alphaTarget(0.3).restart()
          d.fx = d.x; d.fy = d.y
        })
        .on('drag', (event, d:any)=>{
          d.fx = event.x; d.fy = event.y
        })
        .on('end', (event, d:any)=>{
          if (!event.active) sim.alphaTarget(0)
          d.fx = null; d.fy = null
        }))

    const label = svg.append('g')
      .selectAll('text')
      .data(nodes as any)
      .enter().append('text')
      .text((d:any)=>d.id)
      .attr('font-size', 12)
      .attr('fill', '#111827')
      .attr('text-anchor','middle')
      .attr('dy', 4)

    sim.on('tick', ()=>{
      link
        .attr('x1', (d:any)=>d.source.x)
        .attr('y1', (d:any)=>d.source.y)
        .attr('x2', (d:any)=>d.target.x)
        .attr('y2', (d:any)=>d.target.y)
      node
        .attr('cx', (d:any)=>d.x)
        .attr('cy', (d:any)=>d.y)
      label
        .attr('x', (d:any)=>d.x)
        .attr('y', (d:any)=>d.y - 26)
    })

    return ()=>{ sim.stop() }
  }, [])

  return (
    <div className="bg-white rounded-2xl p-6 shadow-card">
      <h2 className="text-xl font-semibold mb-2">Knowledge Graph</h2>
      <svg ref={ref} className="w-full h-[420px] rounded-xl border" />
    </div>
  )
}
