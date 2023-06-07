import './globals.css';
import { Lexend_Deca, Big_Shoulders_Display } from 'next/font/google';

const lexendDeca = Lexend_Deca({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

const bigShouldersDisplay = Big_Shoulders_Display({
	weight: '700',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-big-shoulders-display',
});

export const metadata = {
	title: '3 Column Preview Card',
	description:
		'A 3-column preview card built with Tailwind for Frontend Mentor',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${lexendDeca.className} ${bigShouldersDisplay.variable}`}>
				{children}
			</body>
		</html>
	);
}
