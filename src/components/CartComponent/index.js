import React, { useCallback, useMemo } from 'react'
import Swal from 'sweetalert2'

import { useCart } from '../../hooks/cart';

import { CartContainer, CartHeader, Finish, Cart, CartItem, Total } from './styles'

export default function CartComponent({minwidth, children}) {
  const { increment, decrement, pokemon, setEmpty } = useCart();
  
  const filteredPokemon = pokemon.filter(element => element.type === window.location.pathname);

  const cartTotal = useMemo(() => {
    const totalArray = filteredPokemon.map(
      element => element.price * element.quantity,
    );

    let total = 0;
    if (totalArray.length > 0) {
      total = totalArray.reduce((a, b) => a + b);
    }

    if (total > 0) {
      return total;
    }
    return 0;
  }, [filteredPokemon]);

  const handleFinish = useCallback(()=> {
    Swal.fire({
      title: 'Obrigado!',
      text: `Você ganhou de volta: R$${Math.round(0.05 * cartTotal) },00 (5%)`,
      icon: 'success',
      confirmButtonText: 'Comprar mais'
    })

    setEmpty();
  },[cartTotal, setEmpty])

  return (
    <CartContainer minwidth={minwidth}>
      <>{children}</>
      <CartHeader bgcolor={window.location.pathname === '/grass' ? "#78C850" : "#EA477f"}>
        Carrinho
      </CartHeader>
      <Cart>
        {filteredPokemon.map( element => (
          <CartItem 
            key={`${element.name}-${element.quantity}-${element.price}`}
            bgcolor={window.location.pathname === '/grass' ? "#78C850" : "#EA477f"}  
          >
            <p>
              {element.name}  
            </p>
            <div>
              <button onClick={() => increment(element.name)}> + </button>
              <button onClick={() => decrement(element.name)}> - </button>
            </div>
            <p>
            QTY: {element.quantity} TOTAL: R${element.price * element.quantity},00
            </p>
          </CartItem>
        ))}
      </Cart>
      { cartTotal > 0 
        ? <Total><p>Total</p><p>R${cartTotal},00</p></Total>
        : null
      }
      <Finish 
        onClick={handleFinish}
        bgcolor={window.location.pathname === '/grass' ? "#78C850" : "#EA477f"}  
      >
        Finalizar
      </Finish>
    </CartContainer>
  )
}
