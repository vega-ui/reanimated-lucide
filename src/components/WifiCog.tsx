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
const SvgWifiCog: React.FC<AnimatedSvgProps> = ({
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
      d="M2 7.82a15 15 0 0 1 20 0"
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
    <AnimatedPath
      d="M5 11.858a10 10 0 0 1 11.5-1.785"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M8.5 15.429a5 5 0 0 1 2.413-1.31"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={18} cy={18} r={3} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgWifiCog;
