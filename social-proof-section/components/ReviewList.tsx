import ReviewBox from '@/components/ReviewBox';
import { reviews } from '@/data/reviews';
import Image from 'next/image';

const ReviewList = () => {
	return (
		<div className='mt-7 space-y-3 lg:w-full lg:space-y-4'>
			{reviews.map(({ id, text }) => (
				<ReviewBox key={id} text={text} translateDistance={id * 50} />
			))}
		</div>
	);
};

export default ReviewList;
