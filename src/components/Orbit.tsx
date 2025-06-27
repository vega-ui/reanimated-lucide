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
const SvgOrbit: React.FC<AnimatedSvgProps> = ({
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
      d="M20.341 6.484A10 10 0 0 1 10.266 21.85"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3.659 17.516A10 10 0 0 1 13.74 2.152"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedCircle cx={12} cy={12} r={3} animatedProps={animatedProps} />
    <AnimatedCircle cx={19} cy={5} r={2} animatedProps={animatedProps} />
    <AnimatedCircle cx={5} cy={19} r={2} animatedProps={animatedProps} />
  </AnimatedSvg>
);
export default SvgOrbit;
