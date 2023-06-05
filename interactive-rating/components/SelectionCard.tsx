import Image from "next/image";

interface SelectionCardProps {
	setRating: React.Dispatch<React.SetStateAction<number>>;
	setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectionCard = ({ setRating, setSubmitted }: SelectionCardProps) => {
	return (
		<div className="mx-auto max-w-[90%] rounded-2xl bg-gradient-to-b from-darkBlue to-darkerBlue p-6 sm:max-w-sm">
			<div className="w-fit rounded-full bg-darkGrey p-3.5">
				<Image
					src="/images/icon-star.svg"
					alt="Yellow Star"
					width={15}
					height={15}
				/>
			</div>
			<div className="mt-4">
				<h3 className="text-2xl font-bold text-white">How did we do?</h3>
				<p className="mt-2 text-[15px] font-medium tracking-tight text-mediumGrey">
					Please let us know how we did with your support request. All feedback
					is appreciated to help us improve our offering!
				</p>
			</div>
			<div className="m-6 mx-auto flex w-full justify-around">
				{[1, 2, 3, 4, 5].map((rating, i) => (
					<button
						key={i}
						onClick={() => setRating(rating)}
						className="aspect-square w-11 rounded-full bg-darkGrey text-sm font-bold text-mediumGrey transition hover:bg-customOrange hover:text-white focus:bg-customOrange focus:text-white">
						{rating}
					</button>
				))}
			</div>
			<button
				onClick={() => setSubmitted(true)}
				className="w-full rounded-full bg-customOrange py-2.5 uppercase tracking-wider text-white transition hover:bg-white hover:text-customOrange">
				Submit
			</button>
		</div>
	);
};

export default SelectionCard;
