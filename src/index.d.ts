/// <reference types="react" />
interface ConditionalWrapProps {
  condition: boolean;
  wrapIfTrue: (children: JSX.Element) => JSX.Element;
  wrapIfFalse: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}
declare const _default: ({ condition, wrapIfTrue, wrapIfFalse, children }: ConditionalWrapProps) => JSX.Element;
export default _default;
