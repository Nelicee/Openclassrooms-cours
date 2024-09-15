// import Banner from './Banner'
// import logo from '../assets/logo.png'
// import ShoppingList from './ShoppingList'
// import QuestionForm from './QuestionForm'
// import Footer from './Footer'
// import Cart from './Cart'
// import '../styles/Layout.css'
// import { useState } from 'react'


// function App() {
// 	const [cart, updateCart] = useState([])
// 	const [isFooterShown, updateIsFooterShown] = useState(true)
// 	return (
// 		<div>
// 			<Banner>
// 				<img src={logo} alt='La maison jungle' className='lmj-logo' />
// 				<h1 className='lmj-title'>La maison jungle</h1>
// 			</Banner>
// 			<div className='lmj-layout-inner'>
// 			<Cart cart={cart} updateCart={updateCart} />
// 			<ShoppingList cart={cart} updateCart={updateCart} />
// 			</div>
// 			<QuestionForm />
// 			<button onClick={() => updateIsFooterShown(!isFooterShown)}>Cacher !</button>
// 			{isFooterShown && <Footer cart={cart} />}
// 		</div>
// 	)
// }

// export default App

import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App
