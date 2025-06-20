import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgVault = ({
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
      /* @__PURE__ */ jsx("rect", { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
      /* @__PURE__ */ jsx("circle", { cx: 7.5, cy: 7.5, r: 0.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m7.9 7.9 2.7 2.7",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 16.5, cy: 7.5, r: 0.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m13.4 10.6 2.7-2.7",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 7.5, cy: 16.5, r: 0.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m7.9 16.1 2.7-2.7",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 16.5, cy: 16.5, r: 0.5, fill: "currentColor" }),
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m13.4 13.4 2.7 2.7",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 2 })
    ]
  }
);
var Vault_default = SvgVault;

export { Vault_default };
