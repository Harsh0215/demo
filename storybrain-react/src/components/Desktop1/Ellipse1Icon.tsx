import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 79 79' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={39.4} cy={39.2} r={39.2} fill='#D9D9D9' />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
