'use client';
import React from 'react';

const RoadmapBusTopology = () => {
  const milestones = [
    { id: 1, year: '2020', title: 'Company Founded', description: 'Started with 5 team members' },
    { id: 2, year: '2021', title: 'First Product', description: 'Launched initial SaaS platform' },
    { id: 3, year: '2022', title: 'Series A', description: '$5M funding round' },
    { id: 4, year: '2023', title: 'Global Expansion', description: 'Opened 3 international offices' },
    { id: 5, year: '2024', title: 'Acquisition', description: 'Acquired competitor technology' },
  ];

  return (
    <div className="w-full overflow-x-auto py-8">
      <div className="relative min-w-[800px]">
        {/* Main bus line */}
        <div className="absolute h-1 bg-black top-1/2 left-0 right-0 -translate-y-1/2 z-0" />

        {/* Milestones with controlled spacing */}
        <div className="relative flex justify-center gap-x-10 z-10"> {/* Reduced gap-x from default spacing */}
          {milestones.map((milestone, index) => (
            <div key={milestone.id} className="flex flex-col items-center">
              {/* Connection point */}
              <div className="w-6 h-6 rounded-full bg-black border-4 border-white shadow-md mb-2" />

              {/* Milestone card */}
              <div className={`w-48 p-4 rounded-lg bg-white shadow-md border border-black ${index % 2 === 0 ? 'mt-8' : 'mb-8'}`}>
                <div className="text-xs font-semibold text-black">{milestone.year}</div>
                <h3 className="font-bold text-black">{milestone.title}</h3>
                <p className="text-sm text-black mt-1">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapBusTopology;