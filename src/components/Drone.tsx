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
const SvgDrone: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M10 10 7 7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m10 14-3 3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m14 10 3-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m14 14 3 3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M14.205 4.139a4 4 0 1 1 5.439 5.863"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19.637 14a4 4 0 1 1-5.432 5.868"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4.367 10a4 4 0 1 1 5.438-5.862"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9.795 19.862a4 4 0 1 1-5.429-5.873"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect x={10} y={8} width={4} height={8} rx={1} />
  </AnimatedSvg>
);
export default SvgDrone;
