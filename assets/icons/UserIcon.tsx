import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const UserIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2.563 15.438c1.05-1.75 3.35-2.949 6.937-2.949 3.588 0 5.887 1.198 6.937 2.948M12.35 6.414a2.85 2.85 0 1 1-5.7 0 2.85 2.85 0 0 1 5.7 0Z"
    />
  </Svg>
);
export default UserIcon;
