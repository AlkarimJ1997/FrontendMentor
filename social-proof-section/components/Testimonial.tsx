'use client';

import { useMemo } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';

interface TestimonialProps {
	name: string;
	title: string;
	src: string;
	text: string;
	translateDistance: number;
}

const Testimonial = ({
	name,
	title,
	src,
	text,
	translateDistance,
}: TestimonialProps) => {
	const windowSize = useWindowSize();

	const isDesktop = useMemo(() => {
		if (!windowSize) return false;

		return windowSize.width >= 1024;
	}, [windowSize]);

	const styles = useMemo(() => {
		if (!isDesktop || !translateDistance) return {};

		return {
			transform: `translateY(${translateDistance}px)`,
		};
	}, [isDesktop, translateDistance]);

	return (
		<div
			className='rounded-lg bg-veryDarkMagenta px-7 py-4 md:max-w-xl lg:max-w-md'
			style={styles}>
			<div className='flex gap-5 py-6'>
				<Image
					width={35}
					height={35}
					src={src}
					alt={name}
					className='self-start rounded-full object-contain'
				/>
				<div className=''>
					<h3 className='font-bold leading-4'>{name}</h3>
					<p className='text-softPink'>{title}</p>
				</div>
			</div>
			<p className='max-w-[83%] pb-3 text-[15px] before:pr-1 before:content-[open-quote] after:pl-1 after:content-[close-quote] md:text-base'>
				{text}
			</p>
		</div>
	);
};

export default Testimonial;
