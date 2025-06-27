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
const SvgBuilding: React.FC<AnimatedSvgProps> = ({
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
    <rect width={16} height={20} x={4} y={2} rx={2} ry={2} />
    <AnimatedPath
      d="M9 22v-4h6v4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 6h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 6h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 6h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 10h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 14h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 10h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 14h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 10h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M8 14h.01" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgBuilding;
