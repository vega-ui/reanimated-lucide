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
const SvgUserCog: React.FC<AnimatedSvgProps> = ({
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
      d="M10 15H6a4 4 0 0 0-4 4v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14.305 16.53.923-.382"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m15.228 13.852-.923-.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16.852 12.228-.383-.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16.852 17.772-.383.924"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19.148 12.228.383-.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19.53 18.696-.382-.924"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20.772 13.852.924-.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20.772 16.148.924.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={18} cy={15} r={3} />
    <circle cx={9} cy={7} r={4} />
  </AnimatedSvg>
);
export default SvgUserCog;
