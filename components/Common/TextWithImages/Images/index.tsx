"use client";
import classNames from "classnames";
import type { FC } from "react";
import { useEffect, useState } from "react";

type ImagesProps = {
	images?: Array<{
		src: string;
		alt?: string;
	}>;
};

const Images: FC<ImagesProps> = ({ images = [] }) => {
	const [selectedImage, setSelectedImage] = useState(0);
	const MAX_IMAGES = images?.length ?? 0;

	useEffect(() => {
		if (MAX_IMAGES <= 1) {
			setSelectedImage(0);
			return;
		}

		const interval = setInterval(() => {
			setSelectedImage((prev) => (prev + 1) % MAX_IMAGES);
		}, 4000);

		return () => clearInterval(interval);
	}, [MAX_IMAGES]);

	return (
		<div className="relative h-96 w-96 overflow-hidden rounded-xl border-2 border-black shadow-neo-brutalism-black dark:border-white dark:shadow-neo-brutalism-white">
			{images.map((image, i) => (
				// biome-ignore lint/performance/noImgElement: don't care we don't know size of images
				<img
					alt={image.alt || "Image"}
					className={classNames(
						"absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
						{
							"opacity-0": i !== selectedImage,
							"opacity-100": i === selectedImage,
						},
					)}
					fetchPriority={i === selectedImage ? "high" : "low"}
					key={`${image.src}-${image.alt ?? "image"}`}
					src={image.src}
				/>
			))}
		</div>
	);
};

export default Images;
