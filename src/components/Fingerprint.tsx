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
const SvgFingerprint: React.FC<AnimatedSvgProps> = ({
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
      d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M14 13.12c0 2.38 0 6.38-1 8.88"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.29 21.02c.12-.6.43-2.3.5-3.02"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 12a10 10 0 0 1 18-6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 16h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M21.8 16c.2-2 .131-5.354 0-6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M8.65 22c.21-.66.45-1.32.57-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9 6.8a6 6 0 0 1 9 5.2v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgFingerprint;
