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
const SvgBuilding2: React.FC<AnimatedSvgProps> = ({
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
      d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M10 6h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 10h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 14h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M10 18h4" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgBuilding2;
