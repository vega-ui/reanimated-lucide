import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath, AnimatedCircle } from "../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgCookie: React.FC<AnimatedSvgProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
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
      d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M8.5 8.5v.01"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16 15.5v.01"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 12v.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M11 17v.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M7 14v.01" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgCookie;
