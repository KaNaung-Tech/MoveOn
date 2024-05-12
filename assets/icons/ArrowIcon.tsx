import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
const ArrowIcon = (props: SvgProps) => (
  <Svg width={35} height={35} viewBox="0 0 35 35" fill="none" {...props}>
    <Circle cx={17.5} cy={17.5} r={17.5} fill="#202020" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.458 12.08h8.522m0 0v8.401m0-8.4-9.9 9.899"
    />
  </Svg>
);
export default ArrowIcon;
