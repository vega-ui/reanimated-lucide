import { AnimatedSvg, AnimatedPath } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgHardDriveUpload = ({
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
      /* @__PURE__ */ jsx(
        AnimatedPath,
        {
          d: "m16 6-4-4-4 4",
          animatedProps,
          ...pathProps
        }
      ),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M12 2v8", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx("rect", { width: 20, height: 8, x: 2, y: 14, rx: 2 }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M6 18h.01", animatedProps, ...pathProps }),
      /* @__PURE__ */ jsx(AnimatedPath, { d: "M10 18h.01", animatedProps, ...pathProps })
    ]
  }
);
var HardDriveUpload_default = SvgHardDriveUpload;

export { HardDriveUpload_default };
