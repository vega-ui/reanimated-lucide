import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgMonitorPause = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  svgProps,
  pathProps,
  animatedProps,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  AnimatedSvg,
  {
    viewBox: "0 0 24 24",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    animatedProps,
    ref,
    width: size,
    height: size,
    stroke: color,
    strokeWidth,
    ...props,
    children: [
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M10 13V7", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M14 13V7", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { width: 20, height: 14, x: 2, y: 3, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 17v4", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M8 21h8", animatedProps, ...pathProps })
    ]
  }
);
var MonitorPause_default = SvgMonitorPause;

export { MonitorPause_default };
