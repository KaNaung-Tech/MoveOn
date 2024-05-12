import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const JournalingIcon = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      strokeWidth={1.3}
      d="M7 6h6M7 9h6m-6 3h3M5.5 2h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
    />
  </Svg>
);
export default JournalingIcon;
