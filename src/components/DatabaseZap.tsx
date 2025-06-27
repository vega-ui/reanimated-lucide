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
const SvgDatabaseZap: React.FC<AnimatedSvgProps> = ({
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
    <ellipse cx={12} cy={5} rx={9} ry={3} />
    <AnimatedPath
      d="M3 5V19A9 3 0 0 0 15 21.84"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M21 5V8" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M21 12L18 17H22L19 22"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 12A9 3 0 0 0 14.59 14.87"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgDatabaseZap;
