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
const SvgCloudSunRain: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 2v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m4.93 4.93 1.41 1.41"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M20 12h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m19.07 4.93-1.41 1.41"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M15.947 12.65a4 4 0 0 0-5.925-4.128"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M11 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 19v2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgCloudSunRain;
