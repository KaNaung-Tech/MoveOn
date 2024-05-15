import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LogoutIcon = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 19 19" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      strokeWidth={2}
      d="M10.318 14.25 5.7 9.5m0 0 4.618-4.75M5.7 9.5h11.4M1.9 1.9v15.2"
    />
  </Svg>
);
export default LogoutIcon;
