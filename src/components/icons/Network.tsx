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
const SvgNetwork: React.FC<AnimatedSvgProps> = ({
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
    <rect x={16} y={16} width={6} height={6} rx={1} />
    <rect x={2} y={16} width={6} height={6} rx={1} />
    <rect x={9} y={2} width={6} height={6} rx={1} />
    <AnimatedPath
      d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M12 12V8" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgNetwork;
