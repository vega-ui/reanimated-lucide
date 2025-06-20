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
const SvgSun: React.FC<AnimatedSvgProps> = ({
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
    <circle cx={12} cy={12} r={4} />
    <AnimatedPath d="M12 2v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 20v2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m4.93 4.93 1.41 1.41"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m17.66 17.66 1.41 1.41"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M2 12h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M20 12h2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="m6.34 17.66-1.41 1.41"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m19.07 4.93-1.41 1.41"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgSun;
