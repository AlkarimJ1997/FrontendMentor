import QuestionList from '@/components/QuestionList';
import clsx from 'clsx';

const Home = () => {
	return (
		<main className='grid min-h-screen place-items-center bg-gradient-to-b from-softViolet to-softBlue pt-20'>
			<div className='bgFaq lg:bgDesktop relative mx-auto w-full max-w-[85%] rounded-xl bg-white p-6 sm:max-w-md md:max-w-lg lg:flex lg:max-w-4xl lg:flex-row-reverse lg:p-8'>
				<div className='mt-28 lg:mt-0 lg:w-[57%] lg:px-16 lg:py-6'>
					<h2 className='text-center text-3xl font-bold text-veryDarkDesaturatedBlue lg:text-left'>
						FAQ
					</h2>
					<QuestionList />
				</div>
			</div>
		</main>
	);
};

export default Home;
