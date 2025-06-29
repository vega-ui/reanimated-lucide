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
const SvgBookKey: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="m19 3 1 1" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m20 2-4.5 4.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={14} cy={8} r={2} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgBookKey;
