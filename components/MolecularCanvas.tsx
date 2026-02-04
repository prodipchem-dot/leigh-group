
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MolecularCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    d3.select(containerRef.current).selectAll('*').remove();

    const width = containerRef.current.clientWidth;
    const height = 500;

    const svg = d3.select(containerRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [0, 0, width, height])
      .style('cursor', 'crosshair');

    // Add filter for glow
    const defs = svg.append('defs');
    const filter = defs.append('filter')
      .attr('id', 'purple-glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');
    filter.append('feGaussianBlur')
      .attr('stdDeviation', '3.5')
      .attr('result', 'coloredBlur');
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    const nodes = [
      { id: 'Walker', group: 'robot', label: 'Robotic Walker' },
      { id: 'Leg1', group: 'component', label: 'Walker Leg 1' },
      { id: 'Leg2', group: 'component', label: 'Walker Leg 2' },
      { id: 'Track1', group: 'track', label: 'Track Point 1' },
      { id: 'Track2', group: 'track', label: 'Track Point 2' },
      { id: 'Cargo', group: 'robot', label: 'Cargo Molecule' },
    ];

    // Added 'group' property to links to resolve TypeScript errors and enable group-based styling
    const links = [
      { source: 'Walker', target: 'Leg1', value: 6, group: 'robot' },
      { source: 'Walker', target: 'Leg2', value: 6, group: 'robot' },
      { source: 'Track1', target: 'Track2', value: 2, group: 'track' },
      { source: 'Walker', target: 'Cargo', value: 4, group: 'robot' },
    ];

    const simulation = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-1000))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(60));

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', d => d.group === 'track' ? '#660099' : '#818cf8')
      .attr('stroke-opacity', 0.2)
      .attr('stroke-width', d => d.value)
      .attr('stroke-dasharray', d => d.group === 'track' ? '5,5' : 'none');

    const node = svg.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .call(d3.drag<any, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    node.append('circle')
      .attr('r', d => d.group === 'robot' ? 22 : 16)
      .attr('fill', (d: any) => {
        if (d.group === 'robot') return '#660099';
        if (d.group === 'track') return '#ffcc00';
        return '#4f46e5';
      })
      .attr('filter', 'url(#purple-glow)')
      .attr('stroke', '#fff')
      .attr('stroke-width', 3);

    node.append('text')
      .attr('dy', 35)
      .attr('text-anchor', 'middle')
      .attr('fill', '#1e293b')
      .style('font-size', '11px')
      .style('font-weight', '700')
      .style('pointer-events', 'none')
      .text(d => d.id);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    const handleResize = () => {
        if (!containerRef.current) return;
        const newWidth = containerRef.current.clientWidth;
        svg.attr('width', newWidth);
        simulation.force('center', d3.forceCenter(newWidth / 2, height / 2));
        simulation.alpha(0.3).restart();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-2xl relative">
      <div className="absolute top-6 left-8 z-10">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#660099] mb-2">Molecular Dynamics</h3>
        <p className="text-lg font-bold text-slate-900">Interactive Walker System</p>
      </div>
      <div className="absolute bottom-6 right-8 flex space-x-6 z-10">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#660099] shadow-[0_0_8px_#660099]"></div>
            <span className="text-[10px] font-bold uppercase text-slate-500 tracking-tighter">Robot</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#ffcc00] shadow-[0_0_8px_#ffcc00]"></div>
            <span className="text-[10px] font-bold uppercase text-slate-500 tracking-tighter">Track</span>
          </div>
      </div>
    </div>
  );
};

export default MolecularCanvas;
