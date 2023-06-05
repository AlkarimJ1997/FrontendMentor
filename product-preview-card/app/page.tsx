"use client";

import { useMemo } from "react";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

const Home = () => {
	const windowSize = useWindowSize();

	const imageSrc: string = useMemo(() => {
		if (!windowSize) return "/images/image-product-mobile.jpg";

		const isDesktop = windowSize.width >= 640;

		return `/images/image-product-${isDesktop ? "desktop" : "mobile"}.jpg`;
	}, [windowSize]);

	return (
		<main className="grid min-h-screen w-full place-items-center bg-cream">
			<div className="mx-auto max-w-[90%] rounded-lg shadow-xl sm:grid sm:max-w-xl sm:auto-cols-fr sm:grid-flow-col">
				<div className="relative h-60 rounded-t-lg sm:h-auto sm:rounded-tr-none">
					<Image
						fill
						src={imageSrc}
						alt="Perfume bottle"
						className="rounded-t-lg object-cover sm:rounded-bl-lg sm:rounded-tr-none"
					/>
				</div>
				<div className="rounded-b-lg bg-white p-6 sm:max-w-md sm:rounded-bl-none sm:rounded-tr-lg">
					<p className="text-sm uppercase text-darkGrayishBlue">Perfume</p>
					<h2 className="mt-2 font-fraunces text-3xl font-bold">
						Gabrielle Essence Eau De Parfum
					</h2>
					<p className="mt-3.5 text-sm font-medium tracking-tight text-darkGrayishBlue">
						A floral, solar and voluptuous interpretation composed by Olivier{" "}
						<br className="sm:hidden" />
						Polge, Perfumer-Creator for the House of CHANEL.
					</p>
					<div className="mt-5 flex items-center gap-4">
						<span className="font-fraunces text-3xl font-bold text-darkCyan">
							$149.99
						</span>
						<span className="text-sm text-darkGrayishBlue line-through">
							$169.99
						</span>
					</div>
					<button className="mt-4 flex w-full items-center justify-center gap-3 rounded-lg bg-darkCyan py-3.5 text-[15px] font-bold text-white hover:bg-darkerCyan sm:mt-6">
						<Image
							src="/images/icon-cart.svg"
							alt="Shopping Cart"
							width={15}
							height={15}
						/>
						<span>Add to Cart</span>
					</button>
				</div>
			</div>
		</main>
	);
};

export default Home;
