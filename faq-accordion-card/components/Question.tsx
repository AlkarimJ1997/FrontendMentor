import Image from 'next/image';
import clsx from 'clsx';

interface QuestionProps {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}

const Question = ({ question, answer, isOpen, onClick }: QuestionProps) => {
	return (
		<div className='group space-y-2'>
			<div onClick={onClick} className='flex cursor-pointer justify-between'>
				<p
					className={clsx(
						'text-[13px] text-veryDarkDesaturatedBlue md:text-sm',
						isOpen && 'font-bold',
						!isOpen && 'hover:text-softRed'
					)}>
					{question}
				</p>
				<Image
					width={10}
					height={10}
					src='/images/icon-arrow-down.svg'
					alt='Down Arrow'
					className={clsx(
						'object-contain transition-all',
						isOpen && 'rotate-180'
					)}
				/>
			</div>
			<div
				className={clsx(
					'grid transition-all duration-300',
					isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
				)}>
				<div
					className={clsx(
						'max-w-[90%] overflow-hidden text-xs text-darkGrayishBlue lg:max-w-full',
						isOpen && 'mb-2'
					)}>
					{answer}
				</div>
			</div>
			<hr />
		</div>
	);
};

export default Question;
