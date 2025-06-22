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
const SvgMonitorCog: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 17v4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m14.305 7.53.923-.382"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m15.228 4.852-.923-.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16.852 3.228-.383-.924"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16.852 8.772-.383.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19.148 3.228.383-.924"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19.53 9.696-.382-.924"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20.772 4.852.924-.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20.772 7.148.924.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 21h8" animatedProps={animatedProps} {...pathProps} />
    <circle cx={18} cy={6} r={3} />
  </AnimatedSvg>
);
export default SvgMonitorCog;
