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
const SvgSunrise: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 2v8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m4.93 10.93 1.41 1.41"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 18h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 18h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m19.07 10.93-1.41 1.41"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M22 22H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m8 6 4-4 4 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16 18a4 4 0 0 0-8 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgSunrise;
