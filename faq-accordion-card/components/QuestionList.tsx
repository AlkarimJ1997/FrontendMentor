'use client';

import { useState } from 'react';
import { questions } from '@/data/questions';
import Question from '@/components/Question';

const QuestionList = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleClick = (index: number) => {
		setOpenIndex(prevIndex => (prevIndex === index ? null : index));
	};

	return (
		<div className='mt-6 space-y-4 pb-4 lg:mt-8'>
			{questions.map(({ question, answer }, index) => (
				<Question
					key={index}
					question={question}
					answer={answer}
					isOpen={index === openIndex}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
};

export default QuestionList;
