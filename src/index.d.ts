/// <reference types="react" />
interface ConditionalWrapProps {
  when: boolean | ((mixedProps) => boolean);
  thenWrap: (children: JSX.Element) => JSX.Element;
  elseWrap: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}
declare const _default: ({ when, thenWrap, elseWrap, children }: ConditionalWrapProps) => JSX.Element;
export default _default;
