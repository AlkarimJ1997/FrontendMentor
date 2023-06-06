import Image from 'next/image';

const Home = () => {
	return (
		<main className='grid min-h-screen place-items-center bg-mainBg'>
			<div className='mx-auto max-w-[85%] sm:max-w-xs rounded-xl bg-cardBg p-6'>
				<div className='group relative grid h-72 w-full cursor-pointer place-items-center rounded-xl'>
					<Image
						fill
						src='/images/image-equilibrium.jpg'
						alt='Neon cube on a blue background'
						className='rounded-xl object-cover'
					/>
					<Image
						src='/images/icon-view.svg'
						alt='View Eye'
						width={45}
						height={45}
						className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 object-cover group-hover:block'
					/>
					<div className='absolute inset-0 rounded-xl bg-customCyan opacity-0 group-hover:opacity-50' />
				</div>
				<div className='mt-6'>
					<h3 className='cursor-pointer text-2xl font-semibold text-white hover:text-customCyan'>
						Equilibrium &#35;3429
					</h3>
					<p className='mt-3 text-base font-light text-softBlue'>
						Our Equilibrium collection promotes balance and calm.
					</p>
				</div>
				<div className='my-4 flex justify-between'>
					<div className='flex items-center gap-2'>
						<Image
							src='/images/icon-ethereum.svg'
							alt='Ethereum'
							width={10}
							height={10}
							className='object-contain'
						/>
						<span className='font-semibold text-customCyan'>0.041 ETH</span>
					</div>
					<div className='flex items-center gap-2'>
						<Image
							src='/images/icon-clock.svg'
							alt='Clock'
							width={18}
							height={18}
						/>
						<span className='text-softBlue'>3 days left</span>
					</div>
				</div>
				<hr className='border border-line' />
				<div className='mt-5 flex items-center gap-4'>
					<Image
						src='/images/image-avatar.png'
						alt='Avatar'
						width={30}
						height={30}
						className='rounded-full border-2 border-white'
					/>
					<p className='text-softBlue'>
						Creation of{' '}
						<span className='cursor-pointer text-white hover:text-customCyan'>
							Jules Wyvern
						</span>
					</p>
				</div>
			</div>
		</main>
	);
};

export default Home;
