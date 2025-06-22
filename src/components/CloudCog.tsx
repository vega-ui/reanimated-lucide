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
const SvgCloudCog: React.FC<AnimatedSvgProps> = ({
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
      d="m10.852 19.772-.383.924"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m13.148 14.228.383-.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14.772 15.852.923-.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m14.772 18.148.923.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m9.228 15.852-.923-.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m9.228 18.148-.923.383"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgCloudCog;
