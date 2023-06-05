"use client";

import { useState } from "react";
import ThankYouCard from "@/components/ThankYouCard";
import SelectionCard from "@/components/SelectionCard";

const RatingCard = () => {
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [rating, setRating] = useState<number>(0);

	return (
		<main className="grid min-h-screen place-items-center bg-veryDarkBlue">
			{submitted ? (
				<ThankYouCard rating={rating} />
			) : (
				<SelectionCard setRating={setRating} setSubmitted={setSubmitted} />
			)}
		</main>
	);
};

export default RatingCard;
