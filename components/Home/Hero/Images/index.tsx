"use client";
import classNames from "classnames";
import Image from "next/image";
import type { FC } from "react";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
	"/static/hero-1.jpeg",
	"/static/hero-2.jpeg",
	"/static/hero-3.jpeg",
];
const MAX_IMAGES = HERO_IMAGES.length;

const Images: FC = () => {
	const [selectedImage, setSelectedImage] = useState(0);
	const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
		new Array(MAX_IMAGES).fill(false),
	);

	useEffect(() => {
		// Preload all images
		const preloadImages = async () => {
			const promises = HERO_IMAGES.map((src, i) => {
				return new Promise<void>((resolve) => {
					const img = new window.Image();
					img.onload = () => {
						setImagesLoaded((prev) => {
							const newLoaded = [...prev];
							newLoaded[i] = true;
							return newLoaded;
						});
						resolve();
					};
					img.onerror = () => resolve(); // Still resolve on error to not block
					img.src = src;
				});
			});
			await Promise.all(promises);
		};

		preloadImages();

		const interval = setInterval(() => {
			setSelectedImage((prev) => (prev + 1) % MAX_IMAGES);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative size-80">
			{HERO_IMAGES.map((src, i) => (
				<Image
					alt="Augustin"
					className={classNames(
						"absolute inset-0 size-80 rounded-full border-2 border-black object-cover shadow-neo-brutalism-xl-black transition-all duration-500 hover:shadow-neo-brutalism-2xl-black dark:border-white dark:shadow-neo-brutalism-xl-white dark:hover:shadow-neo-brutalism-2xl-white",
						{
							"opacity-0 z-0": i !== selectedImage || !imagesLoaded[i],
							"opacity-100 z-10": i === selectedImage && imagesLoaded[i],
						},
					)}
					height={320}
					key={src}
					loading="eager"
					onClick={() => setSelectedImage((i + 1) % MAX_IMAGES)}
					priority={i === 0}
					src={src}
					width={320}
				/>
			))}
		</div>
	);
};

export default Images;
