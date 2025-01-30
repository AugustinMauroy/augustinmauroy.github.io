import { Neobrutalism1, Neobrutalism2 } from '~/components/Illustration';
import type { FC } from 'react';

interface OpenGraphImageProps {
  title: string;
  description: string;
}

const OpenGraphImage: FC<OpenGraphImageProps> = ({ title, description }) => (
  <div tw="h-full w-full flex flex-col items-center justify-center bg-yellow-50 p-16 relative">
    <div
      style={{
        boxShadow: '8px 8px 0px rgba(0,0,0,1)',
      }}
      tw="flex flex-col items-center justify-center border-black border-2 bg-white p-8 relative w-2/3"
    >
      <Neobrutalism2
        tw="absolute -top-12 -left-12 text-green-500"
        width="100"
        height="100"
      />
      <h1 tw="text-5xl font-bold text-slate-800 text-center mb-4">
        {title.length > 40 ? `${title.slice(0, 40)}...` : title}
      </h1>
      <p tw="text-lg text-slate-700 text-center">
        {description.length > 120
          ? `${description.slice(0, 120)}...`
          : description}
      </p>
      <Neobrutalism1
        tw="absolute -bottom-15 -right-15 text-violet-500"
        width="150"
        height="150"
      />
    </div>
  </div>
);

export default OpenGraphImage;
