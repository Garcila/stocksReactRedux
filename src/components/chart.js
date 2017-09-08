import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines width={180} height={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
};
