import Image from "next/image";

const Home = () => {
	return (
		<main className="grid min-h-screen place-items-center bg-lightGray">
			<div className="mx-auto max-w-[90%] rounded-xl bg-white p-4 sm:max-w-xs">
				<div className="relative h-[300px] w-full">
					<Image
						fill
						src="/images/image-qr-code.png"
						alt="QR Code"
						className="rounded-xl object-cover"
					/>
				</div>
				<div className="mx-auto my-6 max-w-[85%] sm:max-w-[90%]">
					<h3 className="text-center text-[22px] font-bold leading-tight text-darkBlue">
						Improve your front-end skills by building projects
					</h3>
					<p className="mt-3 text-center text-[15px] text-grayishBlue">
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level
					</p>
				</div>
			</div>
		</main>
	);
};

export default Home;
