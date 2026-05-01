import React from 'react'

function LeftControl({handleDirection}) {
  return (
    <div className="flex flex-col items-center justify-between bg-[#1e3a8a] w-28 h-[300px] rounded-l-[2rem] border-[6px] border-r-0 border-[#1e3a8a] p-4 shadow-2xl z-10">
      {/* Botón Menos (-) */}
      <div className="w-full flex justify-end mb-2">
        <div className="w-4 h-1.5 bg-gray-800 rounded-sm shadow-sm"></div> 
      </div>
      
      {/* Joystick (Simulado) */}
      <div className="w-14 h-14 bg-gray-800 rounded-full shadow-[inset_0px_4px_4px_rgba(0,0,0,0.6)] border-4 border-gray-900 mb-4 relative">
        <div className="absolute top-1 left-1 w-10 h-10 bg-gray-700 rounded-full"></div>
      </div>
      
      {/* D-Pad (Botones direccionales) */}
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={()=>handleDirection('up')}
          className="bg-gray-800 active:bg-gray-600 text-gray-400 w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-md border-b-2 border-gray-900 transition-colors">
          ▲
        </button>
        <div className="flex gap-5">
          <button
            onClick={()=>handleDirection('left')}
            className="bg-gray-800 active:bg-gray-600 text-gray-400 w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-md border-b-2 border-gray-900 transition-colors">
            {'◀︎'}
          </button>
          <button
            onClick={()=>handleDirection('right')}
            className="bg-gray-800 active:bg-gray-600 text-gray-400 w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-md border-b-2 border-gray-900 transition-colors">
            {'▶︎'}
          </button>
        </div>
        <button
          onClick={()=>handleDirection('down')}
          className="bg-gray-800 active:bg-gray-600 text-gray-400 w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-md border-b-2 border-gray-900 transition-colors">
          ▼
        </button>
      </div>

      {/* Botón Captura */}
      <div className="w-full flex justify-end mt-4">
        <div className="w-4 h-4 bg-gray-800 rounded-sm shadow-sm border border-gray-900"></div> 
      </div>
    </div>
  )
}

export default LeftControl