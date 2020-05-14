import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect
} from 'react';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem(window.location.pathname);

    if (items) {
      setPokemon(JSON.parse(items));
    }

  }, []);

  useEffect(() => {
    localStorage.setItem(window.location.pathname, JSON.stringify(pokemon));

  }, [pokemon])

  const addToCart = useCallback(
    sPokemon => {
      const duplicated = pokemon.findIndex(
        element => element.name === sPokemon.name,
      );

      if (duplicated === -1) {
        const { name, price } = sPokemon;
        const newPokemon = {
          name,
          price,
          quantity: 1,
        };
        setPokemon([...pokemon, newPokemon]);
      } else {
        const items = pokemon.map(element => {
          if (sPokemon.name === element.name) {
            const { name, price, quantity } = element;
            const newProduct = {
              name,
              price,
              quantity: quantity + 1,
            };
            return newProduct;
          }
          return element;
        });

        setPokemon(items);
      }
            
    },
    [pokemon, setPokemon],
  );

  const setEmpty = useCallback(()=> {
    localStorage.setItem(window.location.pathname, '');

    setPokemon([]);
  }, [])

  const increment = useCallback(
    name => {
      const items = pokemon.map(element => {
        if (name === element.name) {
          const { name: elementName, price, quantity } = element;
          const newProduct = {
            name: elementName,
            price,
            quantity: quantity + 1,
          };
          return newProduct;
        }
        return element;
      });

      setPokemon(items);

    },
    [pokemon, setPokemon],
  );

  const decrement = useCallback(
    name => {
      const items = pokemon.map(element => {
        if (name === element.name) {
          const { name: elementName, price, quantity } = element;
          const newPokemon = {
            name: elementName,
            price,
            quantity: quantity - 1,
          };

          if (newPokemon.quantity > 0) {
            return newPokemon;
          }
          return null;
        }
        return element;
      });

      const filtered = items.filter(Boolean);

      setPokemon(filtered);

    },
    [pokemon, setPokemon],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, pokemon, setEmpty }),
    [addToCart, increment, decrement, pokemon, setEmpty],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };