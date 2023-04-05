import styles from "../styles/Home.module.css";
import PokemonCart from "./PokemonCart";
import React, { useState, useEffect } from "react";

function Home() {
  const [idCurentPokemon, setIdCurentPokemon] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const newPokemonList = [];
      for (let i = idCurentPokemon; i < idCurentPokemon + 15; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        newPokemonList.push(data);
      }
      setPokemonList((prevList) => [...prevList, ...newPokemonList]);
      setIdCurentPokemon(idCurentPokemon + 15);
    } catch (error) {
      console.error(error);
    }
  };
  //boo
  let boolean = true
  useEffect(() => {
    if (boolean) {
      fetchPokemon()
      boolean = false
    }
  }, []);

  const renderPokemonList = () => {
    return pokemonList.map((pokemon) => <PokemonCart data={pokemon} key={pokemon.id} />);
  };

  const handleNextButtonClick = () => {
    fetchPokemon();
  };

  return (
    <div>
      <div className={styles.title}>
        <h1>Pokedex</h1>
      </div>
      <div className={styles.pokemonContainer}>
      {renderPokemonList()}
      </div>
      <div className={styles.title}>
      <button className={styles.next} onClick={handleNextButtonClick}>
        Next
      </button>
      </div>
    </div>
  );
}

export default Home;
