import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const HomeIcon = (props: SvgProps) => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <G stroke="#fff" strokeWidth={1.5} clipPath="url(#a)">
      <Path d="M13.476 4.724c.643.479 1.09.813 1.422 1.103.322.284.493.491.603.698.229.43.249.925.249 2.438v1.119c0 1.537-.002 2.602-.128 3.405-.12.767-.34 1.188-.708 1.503-.385.33-.928.537-1.885.647-.968.112-2.243.113-4.029.113s-3.06-.001-4.029-.113c-.957-.11-1.5-.317-1.885-.647-.368-.315-.587-.736-.708-1.503-.126-.803-.128-1.868-.128-3.405V8.963c0-1.513.02-2.008.25-2.438.11-.207.28-.414.602-.698.332-.29.779-.624 1.422-1.103 1.188-.885 2.027-1.508 2.741-1.918C7.96 2.408 8.474 2.25 9 2.25s1.04.158 1.735.556c.714.41 1.553 1.033 2.74 1.918Z" />
      <Path strokeLinecap="round" d="M9 8.25V12" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HomeIcon;
