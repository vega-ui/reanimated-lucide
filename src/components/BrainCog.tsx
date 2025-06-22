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
const SvgBrainCog: React.FC<AnimatedSvgProps> = ({
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
      d="m10.852 14.772-.383.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m10.852 9.228-.383-.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m13.148 14.772.382.924"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m13.531 8.305-.383.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14.772 10.852.923-.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14.772 13.148.923.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.998 5.125a4 4 0 0 1 2.525 5.771"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M19.505 10.294a4 4 0 0 1-1.5 7.706"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4.5 10.291A4 4 0 0 0 6 18"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6.002 5.125a3 3 0 0 0 .4 1.375"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m9.228 10.852-.923-.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m9.228 13.148-.923.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={12} cy={12} r={3} />
  </AnimatedSvg>
);
export default SvgBrainCog;
