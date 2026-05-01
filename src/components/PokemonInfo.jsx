import React from "react";

function PokemonInfo({pokemon}){
    if(!pokemon) return null;

    return (
        <div className="mt-10 w-full flex justify-center mb-10">
            <div>
            <h2 className="text-center text-4xl font-bold capitalize mb-6 text-blue-600 drop-shadow-lg">
                {pokemon.name}
            </h2>
            <div className="flex justify-center gap-8 mb-6 bg-blue-100 p-4 rounded-lg">
                <img src={pokemon.sprites?.front_default} alt={pokemon.name} className="w-32 h-32" />
                <img src={pokemon.sprites?.back_default} alt={pokemon.name} className="w-32 h-32" />
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-300">
                <h3 className="font-bold mb-3 text-blue-600 text-lg">Moves:</h3>
                <ul className="text-sm space-y-2 max-h-40 overflow-y-auto">
                {pokemon.moves?.slice(0, 10).map((move, idx) => (
                    <li key={idx} className="capitalize bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
                    <span className="font-semibold">{move.name}</span> - <span>Attack: {move.attack}</span>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        );
    }

export default PokemonInfo