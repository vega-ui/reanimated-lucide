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
const SvgColumns3Cog: React.FC<AnimatedSvgProps> = ({
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
      d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14.3 19.6 1-.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M15 3v7.5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m15.2 16.9-.9-.3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16.6 21.7.3-.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16.8 15.3-.4-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19.1 15.2.3-.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19.6 21.7-.4-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20.7 16.8 1-.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m21.7 19.4-.9-.3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M9 3v18" animatedProps={animatedProps} {...pathProps} />
    <AnimatedCircle cx={18} cy={18} r={3} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgColumns3Cog;
