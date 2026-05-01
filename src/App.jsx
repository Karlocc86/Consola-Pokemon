
import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Screen from './components/Screen';
import useFetch from './hooks/useFetch';
import GameScreen from './components/GameScreen';
import PokemonInfo from './components/PokemonInfo';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data, loading, error } = useFetch(url);

  const [pokemones, setPokemones] = useState([]);
  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));

    Promise.all(plist).then((values) => {
      const saniData = values?.map((e) => {
        const randMoves = [...e.moves]
        .sort(()=> 0.5 - Math.random())
        .slice(0,4);

        return {
          name: e.name,
          id: e.id,
          types: e.types,
          moves:randMoves.map((m) => ({
            name: m.move.name,
            attack: getRandomInt(10,25),
          })),
          sprites: e.sprites,
        };
      });

      setPokemones(saniData);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);

  const[position,setPosition]=useState(1);

  const [myPokeSelection, setMyPokeSelection] = useState([])
  const [pcPokeSelection, setPcPokeSelection] = useState([])
  const isBattleActive = myPokeSelection.length > 0;

const handleDirection = (direction) => {
  setPosition((prev) => {
    let newPosition = prev;
    if (direction === 'right') {
      newPosition = prev + 1;
    } else if (direction === 'left') {
      newPosition = prev - 1;
    } else if (direction === 'up') {
      newPosition = prev - 4;
    } else if (direction === 'down') {
      newPosition = prev + 4;
    }
    
    if (newPosition < 1) return 1;
    if (newPosition > 100) return 100;
    return newPosition;
  });
};

    function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const computerSelection = () => {
    const rnd = getRandomInt(1,100)
    const pc = pokemones.filter((p) => p.id === rnd);
    setPcPokeSelection(pc);
  }

  const handleSelection =()=>{
    const selectPokemon = pokemones.filter((p) => p.id === position)
    setMyPokeSelection(selectPokemon);
    computerSelection();
  
  };

  console.log(myPokeSelection.length);
  console.log(pcPokeSelection.length);

  const currentPokemon = pokemones.find((p) => p.id === position);


 return (
  <div className="flex flex-col justify-center pt-10">
    <div className="flex justify-center">
      <LeftControl handleDirection={handleDirection}/>
      {myPokeSelection.length?(
        <GameScreen myPokemon={myPokeSelection[0]}pcPokemon={pcPokeSelection[0]}onBack={()=> setMyPokeSelection([])}/>
      ):(
      
      <Screen pokemones={pokemones} position={position}/>
      )}
      <RightControl handleSelection={handleSelection}
      isDisabled ={isBattleActive}/>
    </div>
    {!myPokeSelection.length && <PokemonInfo pokemon={currentPokemon} />}
  </div>
);
}


export default App;
