import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgServerCog: React.FC<AnimatedSvgProps> = ({
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
      d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m13.148 9.228.383-.923"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"
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
      d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 18h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 6h.01" animatedProps={animatedProps} {...pathProps} />
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
  </AnimatedSvg>
);
export default SvgServerCog;
