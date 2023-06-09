import ReviewList from '@/components/ReviewList';
import TestimonialsList from '@/components/TestimonialsList';

const Home = () => {
	return (
		<main className='mx-auto grid min-h-screen max-w-[90%] place-items-center py-16 lg:max-w-[60%]'>
			<div className='lg:flex lg:w-full lg:justify-between'>
				<div className='lg:w-full'>
					<h1 className='mx-auto max-w-[75%] text-center text-4xl font-bold leading-7 text-veryDarkMagenta lg:mx-0 lg:max-w-lg lg:text-left lg:text-7xl lg:leading-[0.85]'>
						10,000+ of our users love our products.
					</h1>
					<p className='mt-4 text-center text-[15px] font-medium text-darkGrayishMagenta md:text-base lg:mt-6 lg:max-w-sm lg:text-left'>
						We only provide great products combined <br className='lg:hidden' />{' '}
						with excellent customer service. See what{' '}
						<br className='lg:hidden' /> our satisfied customers are saying
						about our <br className='lg:hidden' /> services.
					</p>
				</div>
				<ReviewList />
			</div>
			<TestimonialsList />
		</main>
	);
};

export default Home;
