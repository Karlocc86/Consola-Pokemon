
import { useEffect, useRef } from 'react';

const Screen = ({ pokemones, position }) => {
  const selectedRef = useRef(null);

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [position]);

  return (
    <>
      <div className="w-[450px] h-[300px] bg-gray-900 border-[8px] border-y-[12px] border-gray-900 overflow-y-auto shadow-2xl relative text-white">
        <div className="flex flex-wrap items-center justify-center">
          {pokemones?.map((pokemon, index) => (
            <div
              key={index}
              ref={position === pokemon.id ? selectedRef : null}
              style={{color: position === pokemon.id ? "#1e3a8a": 'white'}}
              className="flex flex-col border-2 flex-shrink-0">

              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-25 h-25"
              />
              <p>{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Screen;