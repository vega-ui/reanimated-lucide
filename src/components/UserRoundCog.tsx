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
const SvgUserRoundCog: React.FC<AnimatedSvgProps> = ({
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
      d="m14.305 19.53.923-.382"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m15.228 16.852-.923-.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16.852 15.228-.383-.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m16.852 20.772-.383.924"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19.148 15.228.383-.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19.53 21.696-.382-.924"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 21a8 8 0 0 1 10.434-7.62"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20.772 16.852.924-.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m20.772 19.148.924.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={10} cy={8} r={5} animatedProps={animatedProps} />
    <AnimatedCircle cx={18} cy={18} r={3} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgUserRoundCog;
