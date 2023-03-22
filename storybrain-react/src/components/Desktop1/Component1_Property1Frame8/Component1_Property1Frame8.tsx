import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1_Property1Frame8.module.css';
import { Vector1Icon } from './Vector1Icon';

interface Props {
  className?: string;
  classes?: {
    logoTop?: string;
    vector1?: string;
    root?: string;
  };
}
/* @figmaId 20:17 */
export const Component1_Property1Frame8: FC<Props> = memo(function Component1_Property1Frame8(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.logoTop || ''} ${classes.logoTop}`}></div>
      <div className={classes.mask}>
        <div className={`${props.classes?.vector1 || ''} ${classes.vector1}`}>
          <Vector1Icon className={classes.icon} />
        </div>
      </div>
    </div>
  );
});
