import { AnimatedSvg } from './chunk-5NP36EHL.js';
import { jsxs, jsx } from 'react/jsx-runtime';

var SvgVoicemail = ({
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
      /* @__PURE__ */ jsx("circle", { cx: 6, cy: 12, r: 4 }),
      /* @__PURE__ */ jsx("circle", { cx: 18, cy: 12, r: 4 }),
      /* @__PURE__ */ jsx("line", { x1: 6, x2: 18, y1: 16, y2: 16 })
    ]
  }
);
var Voicemail_default = SvgVoicemail;

export { Voicemail_default };
