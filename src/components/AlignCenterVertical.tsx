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
const SvgAlignCenterVertical: React.FC<AnimatedSvgProps> = ({
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
    <AnimatedPath d="M12 2v20" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath
      d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgAlignCenterVertical;
