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
const SvgSunDim: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedCircle cx={12} cy={12} r={4} animatedProps={animatedProps} />
    <AnimatedPath d="M12 4h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 20h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M4 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M17.657 6.343h.01"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.657 17.657h.01"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6.343 17.657h.01"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M6.343 6.343h.01"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgSunDim;
