import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const FileIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.65 4.7h5.7m-5.7 2.85h5.7m-5.7 2.85H7.5M3.225.9h8.55c1.05 0 1.9.85 1.9 1.9v11.4a1.9 1.9 0 0 1-1.9 1.9h-8.55a1.9 1.9 0 0 1-1.9-1.9V2.8c0-1.05.85-1.9 1.9-1.9Z"
    />
  </Svg>
);
export default FileIcon;
