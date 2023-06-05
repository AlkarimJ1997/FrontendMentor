import Image from "next/image";

interface ThankYouCardProps {
	rating: number;
}

const ThankYouCard = ({ rating }: ThankYouCardProps) => {
	return (
		<div className="mx-auto max-w-[90%] rounded-lg bg-gradient-to-b from-darkBlue to-darkerBlue p-6 sm:max-w-sm">
			<div className="relative mx-auto  mb-6 h-24 w-full">
				<Image
					fill
					src="images/illustration-thank-you.svg"
					alt="Thank You"
					className="object-contain"
				/>
			</div>
			<p className="mx-auto w-max rounded-full bg-darkGrey px-2.5 py-0.5 text-[15px] text-customOrange">
				You selected {rating} out of 5
			</p>
			<div className="mt-7">
				<h2 className="text-center text-2xl font-bold text-white">
					Thank you!
				</h2>
				<p className="mt-3 text-center text-[15px] text-mediumGrey pb-3">
					We appreciate you taking the time to give a rating. If you ever need
					more support, don&apos;t hesitate to get in touch!
				</p>
			</div>
		</div>
	);
};

export default ThankYouCard;
