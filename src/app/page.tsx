import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div className="flex flex-row gap-2  w-full items-center justify-center">
					<Image
						// className="dark:invert"
						src="/HCMUSCLEBULL.png"
						alt="Next.js logo"
						width={150}
						height={150}
						priority
					/>
					<Image
						className="dark:invert"
						src="/HCMUSCLEBULL.png"
						alt="Next.js logo"
						width={150}
						height={150}
						priority
					/>
				</div>

				<ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					<li className="mb-2">
						Get started by editing{" "}
						<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
							src/app/page.tsx
						</code>
						.
					</li>
					<li>Save and see your changes instantly.</li>
				</ol>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<a
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
						href="soundcloud.com/hardcore-bull"
						target="_self"
						rel="noopener noreferrer"
					>
						<Image
							className=""
							src="/HCMUSCLEBULL.png"
							alt="HARDCORE BULL LOGO"
							width={20}
							height={20}
						/>
						Listen to HARDCORE BULL
					</a>
					<Link
						className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
						href=""
						target="_blank"
						rel="noopener noreferrer"
					>
						HARDCORE BULL Discord Bot statistics
					</Link>
				</div>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				HARDCORE BULL INCORPORATED
			</footer>
		</div>
	);
}
