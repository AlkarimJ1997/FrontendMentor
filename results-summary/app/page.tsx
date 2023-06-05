import { categories } from '@/data/categories';
import Image from 'next/image';
import clsx from 'clsx';

export default function Home() {
	return (
		<main className='h-full place-items-center sm:grid'>
			<div className='h-full rounded-2xl shadow-lg sm:mx-auto sm:flex sm:h-auto sm:w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl'>
				<div className='min-h-[40%] w-full space-y-3 rounded-b-3xl bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue py-4 text-center sm:rounded-3xl sm:p-6'>
					<h3 className='text-lg font-bold text-lavender'>Your Result</h3>
					<div className='mx-auto flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-b from-violetBlue to-persianBlue text-lavender/50 sm:h-36 sm:w-36'>
						<strong className='my-2 text-5xl text-white'>76</strong> of 100
					</div>
					<div className='mx-auto max-w-[250px] sm:max-w-[200px]'>
						<h2 className='text-2xl font-semibold text-white sm:mt-8'>Great</h2>
						<p className='mt-2 text-sm text-lavender md:mt-4'>
							You scored higher than 65% of the people who have taken these
							tests.
						</p>
					</div>
				</div>

				<div className='mx-auto max-w-[90%] pt-5 sm:m-0 sm:w-full sm:p-8'>
					<h3 className='text-lg font-extrabold text-darkGrayBlue'>Summary</h3>
					<ul className='mt-3 space-y-4'>
						{categories.map(({ category, score, icon }, i) => (
							<li
								key={i}
								className={clsx(
									'flex items-center justify-between rounded-lg p-3',
									category === 'Reaction' && 'bg-lightRed/10 text-lightRed',
									category === 'Memory' &&
										'bg-orangeyYellow/10 text-orangeyYellow',
									category === 'Verbal' && 'bg-greenTeal/10 text-greenTeal',
									category === 'Visual' && 'bg-cobaltBlue/10 text-cobaltBlue'
								)}>
								<div className='flex items-center gap-x-3'>
									<Image
										src={icon}
										alt={category}
										width={20}
										height={20}
										className='object-cover'
									/>
									<span className='font-bold'>{category}</span>
								</div>

								<p className='font-bold text-gray-400'>
									<span className='pr-1 font-extrabold text-darkGrayBlue'>
										{score}
									</span>{' '}
									/ 100
								</p>
							</li>
						))}
					</ul>
					<button
						type='button'
						className='mt-3 w-full rounded-full border-0 bg-darkGrayBlue py-3 text-white hover:bg-darkGrayBlue/90 sm:mt-7'>
						Continue
					</button>
				</div>
			</div>
		</main>
	);
}
