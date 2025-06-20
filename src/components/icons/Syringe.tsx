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
const SvgSyringe: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="m18 2 4 4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m17 7 3-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m9 11 4 4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m5 19-3 3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m14 4 6 6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgSyringe;
