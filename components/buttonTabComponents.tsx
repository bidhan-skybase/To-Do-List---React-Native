import { StyleSheet, View } from "react-native";
import globalStyles from "../global_styles";
import CustomText from "./customText";


const ButtonTabComponent = (props: ButtonTabProps) => {
    return (
        <View style={[globalStyles.row, { gap: 4 }]}>
            <CustomText style={
                props.active ?
                    styles.activeButtonTabs : styles.buttonTabs}>
                {props.title}
            </CustomText>
            <View style={
                props.active ?
                    styles.activeTabCircle : styles.tabCircle}>
                <CustomText style={{ color: 'white', fontSize: 12 }}>{props.count}</CustomText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    activeButtonTabs: {
        color: "#2560FD",
        fontWeight: "bold",
        fontSize: 14,
        letterSpacing: 0.4
    },
    buttonTabs: {
        color: "#8B8B8B",
        fontWeight: "bold",
        fontSize: 14,
        letterSpacing: 0.4
    },
    activeTabCircle: {
        backgroundColor: "#2560FD",
        borderRadius: 12,
        paddingHorizontal: 4
    },
    tabCircle: {
        backgroundColor: "#8b8b8b",

        borderRadius: 12,
        paddingHorizontal: 4
    }
});

export default ButtonTabComponent;

