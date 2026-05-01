import React from 'react'

function RightControl({handleSelection}) {
  return (
    <div className="flex flex-col items-center justify-between bg-white w-28 h-[300px] rounded-r-[2rem] border-[6px] border-l-0 border-[#1e3a8a] p-4 shadow-2xl z-10">
      <div className="w-full flex justify-start mb-2">
        <div className="w-5 h-5 text-gray-800 font-black leading-none flex items-center justify-center text-2xl drop-shadow-sm">+</div> 
      </div>
      <div className="flex flex-col items-center gap-1 mt-1">
        <button className="bg-gray-800 active:bg-gray-600 text-gray-300 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md border-b-2 border-gray-900 transition-colors">
          X
        </button>
        <div className="flex gap-5">
          <button className="bg-gray-800 active:bg-gray-600 text-gray-300 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md border-b-2 border-gray-900 transition-colors">
            Y
          </button>
          <button onClick={handleSelection} className="bg-gray-800 active:bg-gray-600 text-gray-300 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md border-b-2 border-gray-900 transition-colors">
            A
          </button>
        </div>
        <button className="bg-gray-800 active:bg-gray-600 text-gray-300 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md border-b-2 border-gray-900 transition-colors">
          B
        </button>
      </div>
      <div className="w-14 h-14 bg-gray-800 rounded-full shadow-[inset_0px_4px_4px_rgba(0,0,0,0.6)] border-4 border-gray-900 mt-4 relative">
         <div className="absolute top-1 left-1 w-10 h-10 bg-gray-700 rounded-full"></div>
      </div>
      <div className="w-full flex justify-start mt-4">
        <div className="w-5 h-5 bg-gray-800 rounded-full border-2 border-gray-900 flex items-center justify-center shadow-sm">
           <div className="w-3 h-3 border border-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default RightControl