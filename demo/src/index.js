import React, { Component } from 'react';
import { render } from 'react-dom';

import ConditionalWrap from '../../src';

const Demo = () => {
  const random = Math.random() < 0.5;

  return (
    <div>
      <h1>conditional-wrap</h1>
      <ConditionalWrap
        condition={!!random}
        wrapIfTrue={children => <h2>Condition is TRUE <br /> {children}</h2>}
        wrapIfFalse={children => <h2>Condition is FALSE <br /> {children}</h2>}
      >
        <b>I'm the wrapped content</b>
      </ConditionalWrap>
    </div>
  );
}

render(<Demo />, document.querySelector('#demo'));
