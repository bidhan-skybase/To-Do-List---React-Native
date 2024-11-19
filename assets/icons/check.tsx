import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CheckSvg = (props: SvgProps) => (
    <Svg
        width={24} height={24} {...props}>
        <Path fill="none" d="M0 0h24v24H0z" />
        <Path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </Svg>
)
export default CheckSvg
