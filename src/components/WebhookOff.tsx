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
const SvgWebhookOff: React.FC<AnimatedSvgProps> = ({
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
      d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M9 3.4a4 4 0 0 1 6.52.66"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20.3 20.3a4 4 0 0 1-2.3.7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M18.6 13a4 4 0 0 1 3.357 3.414"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="m12 6 .6 1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m2 2 20 20" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgWebhookOff;
