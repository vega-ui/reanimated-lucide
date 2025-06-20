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
const SvgAlarmClockPlus: React.FC<AnimatedSvgProps> = ({
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
    <circle cx={12} cy={13} r={8} />
    <AnimatedPath d="M5 3 2 6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m22 6-3-3" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M6.38 18.7 4 21"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.64 18.67 20 21"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 10v6" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M9 13h6" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgAlarmClockPlus;
