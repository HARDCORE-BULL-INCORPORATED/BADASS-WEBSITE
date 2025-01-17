import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HCMUSCLEBULL from "../../public/HCMUSCLEBULL.png";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Hardcore Bull",
	description: "Pieps and Booms",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				style={{
					// backgroundImage: `url(${HCMUSCLEBULL.src})`,
					width: "100%",
					height: "100%",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
				className={`${geistSans.variable} ${geistMono.variable} antialiased bgi`}
			>
				{children}
			</body>
		</html>
	);
}
