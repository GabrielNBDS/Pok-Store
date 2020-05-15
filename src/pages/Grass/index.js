import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useWindow } from '../../hooks/window';

import Header from '../../components/Header';
import Card from '../../components/PokeCard';
import CartComponent from '../../components/CartComponent';

import { Container, Content, ToggleCart, Search, MobileContainer } from './styles';

export default function Grass() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState('');
  const [showCart, setShowCart] = useState(false);

  useEffect(()=> {
    async function getPokemon() {
      const response = await axios.get("https://pokeapi.co/api/v2/type/12/");
      setPokemon(response.data.pokemon);
    }
    getPokemon();
  }, [])

  const { windowDimensions } = useWindow();

  return (
    <>
      <Header />
      <Container>
        
        {windowDimensions > 870 
          ? (
            <>
              <Content>
                <Search 
                  placeholder="Insira o nome do Pokémon desejado"
                  value={pokemonName}
                  onChange={(e) => setPokemonName(e.target.value)}  
                />
                {pokemon.filter(eachPokemon => eachPokemon.pokemon.name.includes(pokemonName)).map(filteredPokemon => {
                  return (
                    <Card
                      key={`${filteredPokemon.pokemon.url}-${filteredPokemon.pokemon.name}`} 
                      price={filteredPokemon.pokemon.name.length * 50}
                      name={filteredPokemon.pokemon.name}
                      imgUrl={filteredPokemon.pokemon.url}
                    />
                  )
                })}
              </Content>
              <CartComponent minwidth="600px" />
            </>
          )
          : showCart 
            ? 
            (
              <>
                <CartComponent minwidth="100%">
                  <ToggleCart onClick={() => setShowCart(!showCart)}>&larr; Mostrar catálogo</ToggleCart>
                </CartComponent>
              </>
            )
            
            : (
              <>
                <Content>
                  <MobileContainer>
                    <Search 
                      placeholder="Insira o nome do Pokémon desejado"
                      value={pokemonName}
                      onChange={(e) => setPokemonName(e.target.value)}  
                    />
                    <ToggleCart onClick={() => setShowCart(!showCart)}>Mostrar Carrinho</ToggleCart>
                  </MobileContainer>
                  {pokemon.filter(eachPokemon => eachPokemon.pokemon.name.includes(pokemonName)).map(filteredPokemon => {
                    return (
                      <Card
                        key={`${filteredPokemon.pokemon.url}-${filteredPokemon.pokemon.name}`} 
                        price={filteredPokemon.pokemon.name.length * 50}
                        name={filteredPokemon.pokemon.name}
                        imgUrl={filteredPokemon.pokemon.url}
                      />
                    )
                  })}
                </Content>
              </>
            )
        }
        
      </Container>
    </>
  );
};
