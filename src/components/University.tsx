import * as React from "react";
import type { SVGProps } from "react";
import { type SvgProps } from "react-native-svg";
import { useAnimatedProps } from "react-native-reanimated";
import { AnimatedSvg, AnimatedPath } from "../animatedFactory";
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgUniversity: React.FC<AnimatedSvgProps> = ({
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
      d="M14 21v-3a2 2 0 0 0-4 0v3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M18 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M18 16h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M6 12h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M6 16h.01" animatedProps={animatedProps} {...pathProps} />
    <circle cx={12} cy={10} r={2} />
  </AnimatedSvg>
);
export default SvgUniversity;
