import './globals.css';
import { Inter, Lexend_Deca } from 'next/font/google';

const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] });
const lexendDeca = Lexend_Deca({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lexend-deca',
});

export const metadata = {
	title: 'Stats Preview Card',
	description: 'A stats preview card built with Tailwind for Frontend Mentor',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} ${lexendDeca.variable}`}>
				{children}
			</body>
		</html>
	);
}
