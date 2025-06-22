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
const SvgWifiOff: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 20h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M8.5 16.429a5 5 0 0 1 7 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M5 12.859a10 10 0 0 1 5.17-2.69"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19 12.859a10 10 0 0 0-2.007-1.523"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 8.82a15 15 0 0 1 4.177-2.643"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 8.82a15 15 0 0 0-11.288-3.764"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgWifiOff;
