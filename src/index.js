/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                                                                 *
 *    hassio-addon-alessio                                                                         *
 *    Copyright (c) 2022 Sgobbi Federico                                                           *
 *    All rights reserved                                                                          *
 *                                                                                                 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// > > > > > > > > > > > > > > > > > > > > > > > Import externals
import React from 'react';

// > > > > > > > > > > > > > > > > > > > > > > > The code
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
          if (typeof when === 'function' && when({ ...rest, ...child.props }) || when === true) {
            return thenWrap({ ...rest, ...child.props, children: child });
          }
          return elseWrap({ ...rest, ...child.props, children: child });
        })
      }
    </React.Fragment>
  );
};

// > > > > > > > > > > > > > > > > > > > > > > > Module exports
export default ConditionalWrap;
