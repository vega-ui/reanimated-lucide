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
const SvgSunMoon: React.FC<AnimatedSvgProps> = ({
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
      d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 2v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m4.9 4.9 1.4 1.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17.7 17.7 1.4 1.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 12h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 12h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m6.3 17.7-1.4 1.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19.1 4.9-1.4 1.4"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgSunMoon;
