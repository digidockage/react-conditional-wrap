import React from 'react';

const defaultWrap = ({ children }) => {
  return children;
};

const defaultChildren = (
  <React.Fragment />
);

const ConditionalWrap = ({
  when = false,
  thenWrap = defaultWrap,
  elseWrap = defaultWrap,
  children = defaultChildren,
  ...rest
}) => {
  return (
    <React.Fragment>
      {
        React.Children.map(children, (child) => {
          child = (rest) ? React.cloneElement(child, rest) : child;
          if ( typeof when === 'function' && when({ ...rest, ...child.props }) || when === true) {
            return thenWrap({ ...rest, ...child.props, children: child});
          }
          return elseWrap({ ...rest, ...child.props, children: child});
        })
      }
    </React.Fragment>
  );
};

export default ConditionalWrap;
