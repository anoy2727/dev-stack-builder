import React from 'react';

export default function TechCard({ tech, onAdd, isAdded }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        {/* Header: Icon & Badge */}
        <div className="flex items-start justify-between mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          <span className="text-xs font-semibold text-sky-500 bg-sky-50 px-2.5 py-1 rounded-full">
            {tech.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-2">{tech.name}</h3>
        
        {/* Description */}
        <p className="text-xs text-gray-500 mb-6 leading-relaxed line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-gray-50">
          <span className="bg-gray-100 px-2.5 py-1 rounded-md">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-slate-700">
            ★ {tech.rating}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
            isAdded
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}
