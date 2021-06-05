import React from 'react';

const emptyWrap = ({ children }) => {
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  );
};

const ConditionalWrap = ({ condition, wrapIfTrue, wrapIfFalse, children }) => {
  wrapIfTrue = wrapIfTrue || emptyWrap;
  wrapIfFalse = wrapIfFalse || emptyWrap;

  return condition ? wrapIfTrue(children) : wrapIfFalse(children);
}

export default ConditionalWrap
