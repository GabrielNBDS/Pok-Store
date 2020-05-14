import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useWindow } from '../../hooks/window';

import Header from '../../components/Header';
import Card from '../../components/PokeCard';
import CartComponent from '../../components/CartComponent';

import { Container, Content, ToggleCart } from './styles';

export default function Psychic() {
  const [pokemon, setPokemon] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(()=> {
    async function getPokemon() {
      const response = await axios.get("https://pokeapi.co/api/v2/type/14/");
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
                {pokemon.map(eachPokemon => {
                  return (
                    <Card
                      key={`${eachPokemon.pokemon.url}-${eachPokemon.pokemon.name}`} 
                      price={eachPokemon.pokemon.name.length * 50}
                      name={eachPokemon.pokemon.name}
                      imgUrl={eachPokemon.pokemon.url}
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
                  <ToggleCart onClick={() => setShowCart(!showCart)}>Mostrar Carrinho</ToggleCart>
                  {pokemon.map(eachPokemon => {
                    return (
                      <Card
                        key={`${eachPokemon.pokemon.url}-${eachPokemon.pokemon.name}`} 
                        price={eachPokemon.pokemon.name.length * 50}
                        name={eachPokemon.pokemon.name}
                        imgUrl={eachPokemon.pokemon.url}
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
