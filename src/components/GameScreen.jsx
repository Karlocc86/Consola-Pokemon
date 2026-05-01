import React, { useEffect, useState } from 'react'

function GameScreen({ myPokemon, pcPokemon, onBack }) {
  const [myHP, setMyHP] = useState(100);
  const [pcHP, setPcHP] = useState(100);
  const [turn, setTurn] = useState('player');
  const [message, setMessage] = useState('¡Tu turno!');

  useEffect(() => {
    if (turn === 'pc' && pcHP > 0 && myHP > 0) {
      const timer = setTimeout(() => {
        const randomMove = pcPokemon.moves[Math.floor(Math.random() * pcPokemon.moves.length)];
        const damage = randomMove.attack;

        setMyHP((prev) => {
          const newHP = Math.max(0, prev - damage);
          if (newHP <= 0) {
            setMessage(`Rival usó ${randomMove.name}. ¡Perdiste!`);
          } else {
            setMessage(`Rival usó ${randomMove.name}`);
            setTurn('player');
          }
          return newHP;
        });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [turn, pcHP, myHP, pcPokemon]);

  const dealPlayerDmg = (move) => {
    if (turn !== 'player' || pcHP <= 0 || myHP <= 0) return;

    const damage = move.attack;
    setPcHP((prev) => Math.max(0, prev - damage));
    setMessage(`Usaste ${move.name}!`);

    if (pcHP - damage <= 0) {
      setMessage('¡Ganaste!');
    } else {
      setTurn('pc');
    }
  }

  const getHPColor = (hp) => {
    if (hp > 50) return 'bg-green-400';
    if (hp > 25) return 'bg-yellow-400';
    return 'bg-red-500';
  }

  return (
    <div className="w-[450px] h-[300px] bg-gray-900 border-[8px] border-y-[12px] border-gray-900 flex flex-col items-center justify-center p-1 shadow-2xl relative">
      <div className="w-full h-full bg-gradient-to-b from-[#0f172a] to-[#1e293b] rounded overflow-hidden flex flex-col p-2 relative border border-slate-700">

        <button
          onClick={onBack}
          className="absolute top-2 left-2 text-slate-400 hover:text-white text-[9px] font-bold uppercase z-20 transition-colors"
        >
          ← Volver
        </button>

        <div className="flex w-full justify-between items-end px-4 pt-5 pb-1 flex-1">

          <div className="flex flex-col items-center w-[38%]">
            <span className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">Mi Pokémon</span>
            <span className="capitalize text-white font-bold text-[11px] mt-0.5">{myPokemon?.name}</span>
            <div className="w-full mt-1 mb-0.5">
              <div className="bg-slate-900 w-full rounded-full h-2 border border-slate-600">
                <div
                  className={`${getHPColor(myHP)} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${myHP}%` }}
                />
              </div>
            </div>
            <span className="text-[9px] text-slate-400">{myHP}/100 HP</span>
            <img src={myPokemon?.sprites?.back_default} alt={myPokemon?.name} className="w-20 h-20 mt-1" style={{ imageRendering: 'pixelated' }} />
          </div>

          <div className="flex flex-col items-center pb-6">
            <span className="font-black text-[#1e3a8a] text-3xl italic drop-shadow-[0_0_8px_rgba(30,58,138,0.8)]">VS</span>
          </div>

          <div className="flex flex-col items-center w-[38%]">
            <span className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">Rival</span>
            <span className="capitalize text-white font-bold text-[11px] mt-0.5">{pcPokemon?.name}</span>
            <div className="w-full mt-1 mb-0.5">
              <div className="bg-slate-900 w-full rounded-full h-2 border border-slate-600">
                <div
                  className={`${getHPColor(pcHP)} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${pcHP}%` }}
                />
              </div>
            </div>
            <span className="text-[9px] text-slate-400">{pcHP}/100 HP</span>
            <img src={pcPokemon?.sprites?.front_default} alt={pcPokemon?.name} className="w-20 h-20 mt-1" style={{ imageRendering: 'pixelated' }} />
          </div>

        </div>

        <div className="w-full bg-slate-900 border border-slate-600 rounded p-1.5 mt-auto">
          <p className="text-[9px] text-slate-300 uppercase tracking-widest text-center mb-1.5 font-semibold">
            {message}
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {myPokemon?.moves?.map((move, index) => (
              <button
                key={index}
                onClick={() => dealPlayerDmg(move)}
                disabled={turn !== 'player' || myHP <= 0 || pcHP <= 0}
                className="bg-[#1e3a8a] hover:bg-[#2d4fa8] active:bg-[#162d6e] disabled:bg-slate-700 disabled:text-slate-500 text-white text-[9px] uppercase font-bold py-1.5 px-2 rounded border-b-[3px] border-[#0f2260] disabled:border-slate-800 transition-all flex justify-between items-center"
              >
                <span>{move.name}</span>
                <span className="text-slate-400 text-[8px]">{move.attack} dmg</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default GameScreen
