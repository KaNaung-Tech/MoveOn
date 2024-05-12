import * as React from "react";
import Svg, { SvgProps, G, Rect, Path, Defs, ClipPath } from "react-native-svg";
const ActivityIcon = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <G stroke="#fff" strokeOpacity={0.8} strokeWidth={1.5} clipPath="url(#a)">
      <Rect width={5.664} height={5.664} x={2.75} y={2.75} rx={2.25} />
      <Rect width={5.664} height={5.664} x={2.75} y={11.586} rx={2.25} />
      <Rect width={5.664} height={5.664} x={11.586} y={11.586} rx={2.25} />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.818 5.582h-4.8M14.418 7.982v-4.8"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ActivityIcon;
