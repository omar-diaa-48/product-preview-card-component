
function App() {
	return (
		<div className="w-screen h-screen bg-cream flex justify-center items-center">
			<div className="rounded-lg shadow-md overflow-hidden md:max-w-2xl max-w-md flex flex-col md:flex-row">

				<picture className="md:w-1/2">
					<source media="(min-width: 768px)" srcSet="images/image-product-desktop.jpg" />
					<source srcSet="images/image-product-mobile.jpg" />
					<img className="w-full h-full" src="images/image-product-mobile.jpg" alt="perfume" />
				</picture>

				<div className="px-8 py-4 md:w-1/2 bg-white flex flex-col gap-8 font-montserrat">
					<p className="text-dark-grayish-blue tracking-custom-wide uppercase">Perfume</p>
					<p className="ml-2 text-very-dark-blue font-black text-4xl font-fraunces">Gabrielle Essence Eau De Parfum</p>
					<p className="ml-2 text-dark-grayish-blue">
						A floral, solar and voluptuous interpretation composed by Olivier Polge,
						Perfumer-Creator for the House of CHANEL.
					</p>

					<div className="flex justify-around items-center px-2">
						<p className="text-dark-cyan font-black text-4xl">$149.99</p>
						<p className="text-dark-grayish-blue line-through">$169.99</p>
					</div>

					<button onClick={() => alert('Thanks for shopping with us :)')} className="bg-dark-cyan rounded p-4 text-white">Add to cart</button>
				</div>

			</div>
		</div>
	);
}

export default App;
