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
const SvgDrum: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="m2 2 8 8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m22 2-8 8" animatedProps={animatedProps} {...pathProps} />
    <ellipse cx={12} cy={9} rx={10} ry={5} />
    <AnimatedPath
      d="M7 13.4v7.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 14v8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17 13.4v7.9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 9v8a10 5 0 0 0 20 0V9"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgDrum;
