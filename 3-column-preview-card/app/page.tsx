import Image from 'next/image';

const Home = () => {
	return (
		<main className='grid min-h-screen place-items-center py-10'>
			<div className='mx-auto max-w-[90%] md:grid md:max-w-5xl md:auto-cols-fr md:grid-flow-col'>
				<div className='rounded-t-xl bg-brightOrange p-10 md:rounded-bl-xl md:rounded-tr-none'>
					<Image
						src='/images/icon-sedans.svg'
						alt='Sedan'
						width={50}
						height={50}
					/>
					<h2 className='mb-5 mt-7 font-bigShouldersDisplay text-4xl uppercase tracking-wide text-veryLightGray'>
						Sedans
					</h2>
					<p className='max-w-[85%] text-[15px] text-transparentWhite md:max-w-[80%]'>
						Choose a sedan for its affordability and excellent fuel economy.
						Ideal for cruising in the city or on your next road trip.
					</p>
					<button className='mt-6 rounded-full bg-white px-6 py-3 text-sm text-brightOrange transition hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-offset-2 md:mt-20'>
						Learn More
					</button>
				</div>
				<div className='bg-darkCyan p-10'>
					<Image
						src='/images/icon-suvs.svg'
						alt='SUV Vehicle'
						width={50}
						height={50}
					/>
					<h2 className='mb-5 mt-7 font-bigShouldersDisplay text-4xl uppercase tracking-wide text-veryLightGray'>
						SUVs
					</h2>
					<p className='max-w-[90%] text-[15px] text-transparentWhite md:max-w-[80%]'>
						Take an SUV for its spacious interior, power, and versatility.
						Perfect for your next family vacation and off-road adventures.
					</p>
					<button className='mt-6 rounded-full bg-white px-6 py-3 text-sm text-darkCyan transition hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-offset-2 md:mt-20'>
						Learn More
					</button>
				</div>
				<div className='rounded-b-xl bg-veryDarkCyan p-10 md:rounded-bl-none md:rounded-tr-xl'>
					<Image
						src='/images/icon-luxury.svg'
						alt='Luxury'
						width={50}
						height={50}
					/>
					<h2 className='mb-5 mt-7 font-bigShouldersDisplay text-4xl uppercase tracking-wide text-veryLightGray'>
						Luxury
					</h2>
					<p className='max-w-[90%] text-[15px] text-transparentWhite md:max-w-[80%]'>
						Cruise in the best car brands without the bloated prices. Enjoy the
						enhanced comfort of a luxury rental and arrive in style.
					</p>
					<button className='mt-6 rounded-full bg-white px-6 py-3 text-sm text-veryDarkCyan transition hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-offset-2 md:mt-20'>
						Learn More
					</button>
				</div>
			</div>
		</main>
	);
};

export default Home;
