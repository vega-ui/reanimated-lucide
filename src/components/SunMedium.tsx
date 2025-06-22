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
const SvgSunMedium: React.FC<AnimatedSvgProps> = ({
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
    <circle cx={12} cy={12} r={4} />
    <AnimatedPath d="M12 3v1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 20v1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M3 12h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 12h1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m18.364 5.636-.707.707"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m6.343 17.657-.707.707"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m5.636 5.636.707.707"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17.657 17.657.707.707"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgSunMedium;
