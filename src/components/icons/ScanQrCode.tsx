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
const SvgScanQrCode: React.FC<AnimatedSvgProps> = ({
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
      d="M17 12v4a1 1 0 0 1-1 1h-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M17 3h2a2 2 0 0 1 2 2v2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M17 8V7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M21 17v2a2 2 0 0 1-2 2h-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M3 7V5a2 2 0 0 1 2-2h2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M7 17h.01" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M7 21H5a2 2 0 0 1-2-2v-2"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <rect x={7} y={7} width={5} height={5} rx={1} />
  </AnimatedSvg>
);
export default SvgScanQrCode;
