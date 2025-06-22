import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgSmilePlus: React.FC<AnimatedSvgProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  svgProps,
  pathProps,
  animatedProps,
  ref,
  ...props
}) => (
  <AnimatedSvg
    viewBox="0 0 24 24"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    animatedProps={animatedProps}
    ref={ref}
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    {...props}
  >
    <AnimatedPath
      d="M22 11v1a10 10 0 1 1-9-10"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M8 14s1.5 2 4 2 4-2 4-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <line x1={9} x2={9.01} y1={9} y2={9} />
    <line x1={15} x2={15.01} y1={9} y2={9} />
    <AnimatedPath d="M16 5h6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M19 2v6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgSmilePlus;
