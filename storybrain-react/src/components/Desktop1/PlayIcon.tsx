import { memo, SVGProps } from 'react';

const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 98 98' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={49} cy={49} r={49} fill='#D9D9D9' />
    <path
      d='M42.7656 67.3281C41.724 68.0052 40.6698 68.0448 39.6031 67.4469C38.5365 66.849 38.0021 65.924 38 64.6719V32.3281C38 31.0781 38.5344 30.1531 39.6031 29.5531C40.6719 28.9531 41.726 28.9927 42.7656 29.6719L68.2344 45.8438C69.1719 46.4688 69.6406 47.3542 69.6406 48.5C69.6406 49.6458 69.1719 50.5313 68.2344 51.1563L42.7656 67.3281Z'
      fill='#FF3737'
    />
  </svg>
);
const Memo = memo(PlayIcon);
export { Memo as PlayIcon };
