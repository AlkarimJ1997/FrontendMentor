'use client';

import { useMemo } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';

interface ReviewBoxProps {
	text: string;
	translateDistance: number;
}

const ReviewBox = ({ text, translateDistance }: ReviewBoxProps) => {
	const windowSize = useWindowSize();

	const isDesktop = useMemo(() => {
		if (!windowSize) return false;

		return windowSize.width >= 1024;
	}, [windowSize]);

	const styles = useMemo(() => {
		if (!isDesktop || !translateDistance) return {};

		return {
			transform: `translateX(${translateDistance}px)`,
		};
	}, [isDesktop, translateDistance]);

	return (
		<div
			className='space-y-2.5 rounded-lg bg-lightGrayishMagenta px-5 py-3 lg:flex lg:max-w-md lg:items-center lg:gap-6 lg:space-y-0 lg:py-4'
			style={styles}>
			<div className='mt-1 flex items-center justify-center gap-2 lg:m-0 lg:mx-10 lg:w-fit'>
				{[...Array(5)].map((_, i) => (
					<Image
						key={i}
						width={15}
						height={15}
						src='/images/icon-star.svg'
						alt='Gold star'
						className='h-auto w-auto'
					/>
				))}
			</div>
			<p className='whitespace-nowrap text-center text-[15px] font-bold text-veryDarkMagenta lg:w-full'>
				{text}
			</p>
		</div>
	);
};

export default ReviewBox;
