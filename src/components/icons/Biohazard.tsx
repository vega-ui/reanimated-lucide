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
const SvgBiohazard: React.FC<AnimatedSvgProps> = ({
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
    <circle cx={12} cy={11.9} r={2} />
    <AnimatedPath
      d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m8.9 10.1 1.4.8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="m15.1 10.1-1.4.8"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M12 13.9v1.6"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M13.5 5.4c-1-.2-2-.2-3 0"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M5.5 13.9c.3.9.8 1.8 1.5 2.5"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgBiohazard;
