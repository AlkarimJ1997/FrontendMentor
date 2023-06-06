'use client';

import { useMemo } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';

const Home = () => {
	const windowSize = useWindowSize();

	const isDesktop = useMemo(() => {
		if (!windowSize) return false;

		return windowSize.width >= 1024;
	}, [windowSize]);

	return (
		<main className='grid min-h-screen place-items-center bg-mainBg'>
			<div className='mx-auto flex w-full max-w-[90%] flex-col-reverse rounded-xl bg-cardBg lg:max-w-[75%] lg:flex-row'>
				<div className='p-7 lg:flex-1'>
					<div className='lg:mx-auto lg:my-8 lg:max-w-[85%]'>
						<h2 className='text-center font-lexendDeca text-3xl font-bold text-white lg:max-w-sm lg:text-left'>
							Get <span className='text-softViolet'>insights</span> that help
							your business grow.
						</h2>
						<p className='mx-auto mt-4 max-w-[95%] text-center text-[15px] text-mainParagraph sm:max-w-sm lg:mx-0 lg:mt-6 lg:max-w-[80%] lg:text-left lg:text-sm lg:leading-normal'>
							Discover the benefits of data analytics and make better decisions
							regarding revenue, customer experience, and overall efficiency.
						</p>
						<div className='mt-5 space-y-5 text-center font-lexendDeca lg:mt-16 lg:flex lg:max-w-[80%] lg:items-center lg:justify-between lg:space-y-0 lg:text-left'>
							<div className='space-y-1'>
								<h3 className='text-xl font-bold text-white'>10k+</h3>
								<p className='text-xs uppercase tracking-wider text-mainHeadings'>
									Companies
								</p>
							</div>
							<div className='space-y-1'>
								<h3 className='text-xl font-bold text-white'>314</h3>
								<p className='text-xs uppercase tracking-wider text-mainHeadings'>
									Templates
								</p>
							</div>
							<div className='space-y-1'>
								<h3 className='text-xl font-bold text-white'>12M+</h3>
								<p className='text-xs uppercase tracking-wider text-mainHeadings'>
									Queries
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='relative h-60 w-full rounded-t-xl lg:h-auto lg:flex-1 lg:rounded-tl-none'>
					<Image
						fill
						src={`/images/image-header-${isDesktop ? 'desktop' : 'mobile'}.jpg`}
						alt='Women talking around a business table with a laptop'
						className='rounded-t-xl object-cover lg:rounded-br-xl lg:rounded-tl-none'
					/>
					<div className='absolute inset-0 rounded-t-xl bg-softViolet/50 lg:rounded-br-xl lg:rounded-tl-none' />
				</div>
			</div>
		</main>
	);
};

export default Home;
