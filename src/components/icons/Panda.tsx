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
const SvgPanda: React.FC<AnimatedSvgProps> = ({
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
      d="M11.25 17.25h1.5L12 18z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m15 12 2 2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M18 6.5a.5.5 0 0 0-.5-.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6 6.5a.495.495 0 0 1 .5-.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m9 12-2 2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgPanda;
