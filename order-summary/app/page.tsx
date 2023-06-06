'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';
import clsx from 'clsx';

const Home = () => {
	const windowSize = useWindowSize();
	const isDesktop = useMemo(() => {
		if (!windowSize) return false;

		return windowSize.width >= 640;
	}, [windowSize]);

	return (
		<main
			className={clsx(
				'grid min-h-screen place-items-center',
				isDesktop ? 'bgDesktop' : 'bgMobile'
			)}>
			<div className='mx-auto w-[90%] max-w-sm rounded-xl bg-white'>
				<div className='relative h-40 w-full'>
					<Image
						fill
						src='/images/illustration-hero.svg'
						alt='Dancing person with headphones and a blue city background'
						className='rounded-t-xl object-cover'
					/>
				</div>
				<div className='p-5'>
					<h2 className='mt-1 text-center text-2xl font-black text-darkBlue'>
						Order Summary
					</h2>
					<p className='mx-auto mt-4 max-w-[90%] text-center text-desaturatedBlue'>
						You can now listen to millions of songs, audiobooks, and podcasts on
						any device anywhere you like!
					</p>
					<div className='mt-6 flex items-center justify-between rounded-xl bg-veryPaleBlue p-4'>
						<div className='flex gap-5'>
							<Image
								src='/images/icon-music.svg'
								alt='Headphones'
								width={45}
								height={45}
								className='object-contain'
							/>
							<div>
								<h3 className='font-black text-darkBlue'>Annual Plan</h3>
								<p className='text-sm font-medium text-desaturatedBlue'>
									$59.99/year
								</p>
							</div>
						</div>
						<a
							href='#'
							className='text-sm font-black text-brightBlue underline transition-opacity hover:opacity-75'>
							Change
						</a>
					</div>
					<button className='my-6 block w-full rounded-xl bg-brightBlue py-3.5 font-bold text-white transition-opacity hover:opacity-75'>
						Proceed to Payment
					</button>
					<a
						href='#'
						className='mx-auto mb-3 inline-block w-full text-center font-black text-desaturatedBlue transition hover:text-darkBlue'>
						Cancel Order
					</a>
				</div>
			</div>
		</main>
	);
};

export default Home;
