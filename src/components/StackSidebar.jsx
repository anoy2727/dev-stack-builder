import React from 'react';

export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-fit sticky top-24">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
      </div>
      
      <p className="text-xs text-gray-400 mb-6">
        {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
      </p>

      {/* Empty State vs Item List */}
      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center">
          <p className="text-xs text-gray-400 font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{item.name}</h4>
                  <span className="text-[10px] text-gray-400">{item.category}</span>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 text-sm p-1 font-bold"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 border border-red-200 text-red-500 rounded-xl text-xs font-semibold hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}
