import Testimonial from '@/components/Testimonial';
import { testimonials } from '@/data/testimonials';

const TestimonialsList = () => {
	return (
		<div className='mt-11 space-y-3.5 text-white lg:flex lg:w-full lg:gap-5 lg:space-y-0 lg:mt-0 lg:justify-around lg:place-self-start'>
			{testimonials.map((testimonial, i) => (
				<Testimonial
					key={i}
					name={testimonial.name}
					title={testimonial.title}
					src={testimonial.src}
					text={testimonial.text}
          translateDistance={i * 20}
				/>
			))}
		</div>
	);
};

export default TestimonialsList;
