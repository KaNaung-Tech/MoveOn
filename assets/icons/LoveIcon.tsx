import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const LoveIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#FFAAE1"
        fillRule="evenodd"
        d="M11.589 3.63C10.203 2.49 8.617 1.943 7.174 1.964c-1.588.024-3.042.748-3.745 2.173-.698 1.414-.574 3.348.599 5.633 1.174 2.289 3.435 5.006 7.172 8.086a.596.596 0 0 0 .778 0c3.737-3.08 5.997-5.797 7.172-8.086 1.173-2.285 1.297-4.219.6-5.633-.704-1.425-2.158-2.15-3.746-2.173-1.443-.021-3.03.526-4.415 1.664Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LoveIcon;
