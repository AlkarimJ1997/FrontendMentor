import Image from 'next/image';

const Home = () => {
	return (
		<main className='bgHero grid min-h-screen place-items-center bg-darkCyan'>
			<div className='mx-auto w-full max-w-[85%] rounded-2xl bg-white sm:max-w-sm'>
				<div className='relative mb-14 h-32 w-full'>
					<Image
						fill
						src='/images/bg-pattern-card.svg'
						alt='Blue Waves'
						className='rounded-t-2xl object-cover'
					/>
					<Image
						width={90}
						height={90}
						src='/images/image-victor.jpg'
						alt='Victor'
						className='absolute bottom-0 left-0 right-0 mx-auto translate-y-1/2 rounded-full border-4 border-white'
					/>
				</div>
				<h3 className='text-center text-xl font-bold text-darkDesaturatedBlue'>
					Victor Crest{' '}
					<span className='pl-1 text-lg font-normal text-darkGrayishBlue'>
						26
					</span>
				</h3>
				<p className='mt-1 text-center text-sm text-darkGrayishBlue'>London</p>
				<hr className='mt-7' />
				<div className='flex items-center justify-between px-12 py-6 text-center'>
					<div className='space-y-1'>
						<h4 className='text-xl font-bold text-darkDesaturatedBlue'>80K</h4>
						<p className='text-xs tracking-wider text-darkGray'>Followers</p>
					</div>
					<div className='space-y-1'>
						<h4 className='text-xl font-bold text-darkDesaturatedBlue'>803K</h4>
						<p className='text-xs tracking-wider text-darkGray'>Likes</p>
					</div>
					<div className='space-y-1'>
						<h4 className='text-xl font-bold text-darkDesaturatedBlue'>1.4K</h4>
						<p className='text-xs tracking-wider text-darkGray'>Photos</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
