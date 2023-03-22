import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 174 167' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g
      style={{
        mixBlendMode: 'screen',
      }}
    >
      <path d='M3.13064 27.4196L173.235 134.893M0.764933 32.1094L169.826 139.778' stroke='#FFD030' strokeWidth={3} />
    </g>
  </svg>
);
const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
