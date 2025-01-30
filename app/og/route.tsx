import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import OpenGraphImage from '~/components/Common/OpenGraphImage';

export const alt = 'Page title and description';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export const dynamic = 'force-static';

export const GET = async () => {
  const geistSansBold = await readFile(
    join(
      process.cwd(),
      'node_modules/geist/dist/fonts/geist-sans/Geist-Light.ttf'
    )
  );

  return new ImageResponse(
    <OpenGraphImage
      title="Welcome to My Awesome Site grjkzlrekghzekrhkojezjrghjreajgiojakzjqtek"
      description="Discover amazing content and features that will blow your mind Discover amazing content and features that will blow your mind"
    />,
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: geistSansBold,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
};
