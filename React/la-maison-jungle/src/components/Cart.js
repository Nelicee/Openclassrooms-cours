  import "../styles/Cart.css";
  import { useState, useEffect } from "react";



  function Cart({ cart, updateCart, activeCategory, setActiveCategory }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
            0
        )
        
        // useEffect(() => {
        //   if (total > 0) {
        //     alert(`J'aurai ${total}€ à payer 💸`);
        //   }
        // }, [total]);

        useEffect(() => {
          document.title = `LMJ: ${total}€ d'achats`
      }, [total])
    

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount, category }, index) => (
                            <div key={`${name}-${index}`}>
                                    {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
  }
  export default Cart