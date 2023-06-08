import { questions } from '@/data/questions';
import Question from '@/components/Question';

const QuestionList = () => {
	return (
		<div className='mt-6 space-y-4 pb-4 lg:mt-8'>
			{questions.map(({ question, answer }, index) => (
				<Question key={index} question={question} answer={answer} />
			))}
		</div>
	);
};

export default QuestionList;
