import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgGripVertical = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 9, cy: 12, r: 1 }),
      /* @__PURE__ */ jsx("circle", { cx: 9, cy: 5, r: 1 }),
      /* @__PURE__ */ jsx("circle", { cx: 9, cy: 19, r: 1 }),
      /* @__PURE__ */ jsx("circle", { cx: 15, cy: 12, r: 1 }),
      /* @__PURE__ */ jsx("circle", { cx: 15, cy: 5, r: 1 }),
      /* @__PURE__ */ jsx("circle", { cx: 15, cy: 19, r: 1 })
    ]
  }
);
var GripVertical_default = SvgGripVertical;

export { GripVertical_default };
