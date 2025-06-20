import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgTentTree: React.FC<AnimatedSvgProps> = ({
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
    <circle cx={4} cy={4} r={2} />
    <AnimatedPath
      d="m14 5 3-3 3 3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14 10 3-3 3 3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M17 14V2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17 14H7l-5 8h20Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 14v8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m9 14 5 8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgTentTree;
