import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import globalStyles from "../global_styles";
import CustomText from "./customText";
import { AppColors } from "../constants/colors";
import HorizontalLine from "./horizontalLineComponent";
import CheckSvg from '../assets/icons/check';

export default function TaskTileComponent(props: TasksProps) {
    const [taskStatus, setTaskStatus] = useState(props.status)
    return (
        <View style={[styles.container, globalStyles.shadowProp]}>
            <View style={[globalStyles.row, globalStyles.rowWithSpaceBetween, styles.headerContainer]}>
                <View>
                    <CustomText fontSize={20} fontWeight='Medium' style={{ textDecorationLine: taskStatus ? 'line-through' : 'none' }}>{props.title}</CustomText>
                    <CustomText
                        fontSize={16}
                        fontWeight='Medium'
                        style={styles.subtitleText}
                        fontColor={AppColors.secondryTextColor}
                    >
                        {props.task}
                    </CustomText>
                </View>
                <Pressable onPress={() => {
                    taskStatus ?

                        setTaskStatus(false) : setTaskStatus(true);
                }}>
                <View
                        style={
                            taskStatus ?
                                styles.radioButtonStyleActive :
                                styles.radioButtonStyle}
                    accessibilityLabel="Task status"
                    >
                        {
                            taskStatus ? <CheckSvg fill="white" scale={2} /> : null

                        }

                    </View>
                </Pressable>

            </View>
            <HorizontalLine />
            <View style={[globalStyles.row, styles.timeContainer]}>
                <CustomText
                    fontColor={AppColors.secondryTextColor}
                    fontWeight='SemiBold'
                    fontSize={13}
                >
                    Today
                </CustomText>
                <CustomText
                    fontColor={AppColors.lightGrayColor}
                    fontWeight='Medium'
                    fontSize={13}
                >
                    {props.time}
                </CustomText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 16,
        elevation: 2,
    },

    headerContainer: {
        alignItems: 'center'
    },
    subtitleText: {
        paddingTop: 8
    },
    radioButtonStyle: {
        height: 24,
        width: 24,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: AppColors.lightGrayColor
    },
    radioButtonStyleActive: {
        height: 24,
        width: 24,
        borderRadius: 100,

        backgroundColor: AppColors.accentColor
    },
    timeContainer: {
        gap: 4
    }
});