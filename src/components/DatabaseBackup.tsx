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
const SvgDatabaseBackup: React.FC<AnimatedSvgProps> = ({
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
      d="M3 12a9 3 0 0 0 5 2.69"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M21 9.3V5" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M3 5v14a9 3 0 0 0 6.47 2.88"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 12v4h4" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgDatabaseBackup;
