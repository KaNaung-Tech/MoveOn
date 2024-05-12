import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const SaveIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#FFB059"
        d="M21 14.976v-4.433c0-4.027 0-6.04-1.194-7.292C18.613 2 16.691 2 12.85 2h-1.698C7.309 2 5.387 2 4.194 3.251 3 4.502 3 6.516 3 10.543v4.433c0 3.494 0 5.241.667 6.045a2.658 2.658 0 0 0 2.24.972c1.013-.074 2.191-1.31 4.549-3.78.545-.571.817-.857 1.132-.962a1.3 1.3 0 0 1 .824 0c.315.105.587.39 1.132.962 2.357 2.47 3.536 3.706 4.55 3.78.85.062 1.68-.298 2.24-.972.666-.804.666-2.55.666-6.045Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 9H9M12 12V6"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SaveIcon;
