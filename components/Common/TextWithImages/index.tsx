import type { FC, ReactNode } from "react";
import Images from "./Images/index.tsx";

type TextWithImagesProps = {
	description: ReactNode;
	images?: Array<{
		src: string;
		alt?: string;
	}>;
	imageDir?: string;
	imageNames?: string;
};

const TextWithImages: FC<TextWithImagesProps> = ({
	description,
	images,
	imageDir,
	imageNames,
}) => {
	const resolveImages = () => {
		if (images && images.length > 0) return images;

		if (imageDir && imageNames) {
			const names = imageNames
				.split(",")
				.map((name) => name.trim())
				.filter(Boolean);

			return names.map((name) => ({ src: `${imageDir}/${name}`, alt: name }));
		}

		// Fallback images for the about section (or default placeholders)
		if (imageDir === "/static/about") {
			return [
				{ src: "/static/about/rammstien-1.jpeg", alt: "Rammstein concert" },
				{ src: "/static/about/rammstien-2.jpeg", alt: "Rammstein concert" },
				{ src: "/static/about/rammstien-3.jpeg", alt: "Rammstein concert" },
				{ src: "/static/about/rammstien-4.jpeg", alt: "Rammstein concert" },
				{ src: "/static/about/rammstien-5.jpeg", alt: "Rammstein concert" },
			];
		}

		return [];
	};

	return (
		<section className="my-4 flex flex-row flex-wrap lg:justify-between justify-center items-center gap-4">
			<div className="my-auto h-full w-1/2">{description}</div>
			<Images images={resolveImages()} />
		</section>
	);
};

export default TextWithImages;
