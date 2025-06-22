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
const SvgTowerControl: React.FC<AnimatedSvgProps> = ({
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
      d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath d="M8 13v9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M16 22v-9" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m9 6 1 7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="m15 6-1 7" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M12 6V2" animatedProps={animatedProps} {...pathProps} />
    <AnimatedPath d="M13 2h-2" animatedProps={animatedProps} {...pathProps} />
  </AnimatedSvg>
);
export default SvgTowerControl;
