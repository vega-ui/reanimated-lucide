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
const SvgThermometerSun: React.FC<AnimatedSvgProps> = ({
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
      d="M12 9a4 4 0 0 0-2 7.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 3v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m6.6 18.4-1.4 1.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M4 13H2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M6.34 7.34 4.93 5.93"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgThermometerSun;
