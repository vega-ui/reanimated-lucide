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
const SvgGrape: React.FC<AnimatedSvgProps> = ({
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
      d="M22 5V2l-5.89 5.89"
      animatedProps={animatedProps}
      {...pathProps}
    />
    <circle cx={16.6} cy={15.89} r={3} />
    <circle cx={8.11} cy={7.4} r={3} />
    <circle cx={12.35} cy={11.65} r={3} />
    <circle cx={13.91} cy={5.85} r={3} />
    <circle cx={18.15} cy={10.09} r={3} />
    <circle cx={6.56} cy={13.2} r={3} />
    <circle cx={10.8} cy={17.44} r={3} />
    <circle cx={5} cy={19} r={3} />
  </AnimatedSvg>
);
export default SvgGrape;
