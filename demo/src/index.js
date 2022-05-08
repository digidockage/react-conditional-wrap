import React, { Component } from 'react';
import { render } from 'react-dom';

import ConditionalWrap from '../../src';

const ThenWrapComponent = ({ children }) => {
  return (
    <React.Fragment>
      <h3>When TRUE</h3>
      {children}
    </React.Fragment>
  );
};

const ElseWrapComponent = ({ children }) => {
  return (
    <React.Fragment>
      <h3>When FALSE</h3>
      {children}
    </React.Fragment>
  );
};

const WrappedComponent = ({ id, parentExtraProp, childExtraProp }) => {
  return (
    <span>
      {"i'm the wrapped content " + id + ", my parentExtraProp=" + parentExtraProp + ", my childExtraProp=" + childExtraProp}
    </span>
  );
};

const Demo = () => {
  const random = Math.random() < 0.5;

  return (
    <React.Fragment>
      <h1>ConditionalWrap using variable</h1>
      <ConditionalWrap
        when={random}
        thenWrap={ThenWrapComponent}
        elseWrap={ElseWrapComponent}
        parentExtraProp={random}
      >
        <WrappedComponent id={1} childExtraProp={random} />
      </ConditionalWrap>

      <h1>ConditionalWrap using function to check parent's prop</h1>
      <ConditionalWrap
        when={({ parentExtraProp }) => { return parentExtraProp }}
        thenWrap={ThenWrapComponent}
        elseWrap={ElseWrapComponent}
        parentExtraProp={random}
      >
        <WrappedComponent id={1} childExtraProp={random} />
        <WrappedComponent id={2} childExtraProp={!random} />
      </ConditionalWrap>

      <h1>ConditionalWrap using function to check children prop</h1>
      <ConditionalWrap
        when={({ childExtraProp }) => { return childExtraProp }}
        thenWrap={ThenWrapComponent}
        elseWrap={ElseWrapComponent}
        parentExtraProp={random}
      >
        <WrappedComponent id={1} childExtraProp={random} />
        <WrappedComponent id={2} childExtraProp={!random} />
      </ConditionalWrap>

      <h1>ConditionalWrap using function to check mixed props</h1>
      <ConditionalWrap
        when={({ parentExtraProp, childExtraProp }) => { return parentExtraProp && childExtraProp }}
        thenWrap={ThenWrapComponent}
        elseWrap={ElseWrapComponent}
        parentExtraProp={random}
      >
        <WrappedComponent id={1} childExtraProp={random} />
        <WrappedComponent id={2} childExtraProp={!random} />
      </ConditionalWrap>
    </React.Fragment>
  );
}

render(<Demo />, document.querySelector('#demo'));
