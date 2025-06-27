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
const SvgTruckElectric: React.FC<AnimatedSvgProps> = ({
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
      d="M14 19V7a2 2 0 0 0-2-2H9"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M15 19H9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M2 13v5a1 1 0 0 0 1 1h2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={17} cy={19} r={2} animatedProps={animatedProps} />
    <AnimatedCircle cx={7} cy={19} r={2} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgTruckElectric;
