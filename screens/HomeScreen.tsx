
import TaskTileComponent from "../components/tasksComponent";
import { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ButtonComponent from "../components/buttonComponent";
import ButtonTabComponent from "../components/buttonTabComponents";
import CustomText from "../components/customText";
import globalStyles from "../global_styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ route, navigation }: Props) {
    const [TasksProps, setTaskData] = useState<TasksProps[]>([]);
    const [tabActive, setTabActive] = useState("All")
    const tabOptions = [{
        title: "All",
        count: 36
    },
    {
        title: "Open",
        count: 15
    },
    {
        title: "Closed",
        count: 12
    },
    {
        title: "Archived",
        count: 2
    },


    ]

    useEffect(() => {
        const initialTaskData: TasksProps[] = [
            {
                title: 'Client Review and Feedback',
                task: 'Crypto wallet redesign and code',
                time: '10:00 PM - 11:45 PM',
                status: true
            },
            {
                title: 'Project Planning',
                task: 'Weekly team strategy meeting',
                time: '02:00 PM - 03:30 PM',
                status: false
            },
            {
                title: 'UI Design Review',
                task: 'Finalize dashboard UI mockups',
                time: '09:00 AM - 10:30 AM',
                status: true
            },
            {
                title: 'Backend Integration',
                task: 'Connect API endpoints for the user profile',
                time: '12:00 PM - 01:45 PM',
                status: false
            },
            {
                title: 'Code Review Session',
                task: 'Review pull requests and provide feedback',
                time: '04:00 PM - 05:30 PM',
                status: true
            },
            {
                title: 'Product Demo Preparation',
                task: 'Prepare demo for new app features',
                time: '06:00 PM - 07:30 PM',
                status: false
            }
        ];

        setTaskData(initialTaskData);
        if (route.params?.tasks) {
            setTaskData(prevTasks => [...route.params!.tasks, ...prevTasks,]);
        }

    }, [route.params]);


    return (
        <View style={styles.main}>
            <SafeAreaView>
                <View style={[globalStyles.row, globalStyles.rowWithSpaceBetween]}>

                    <View>
                        <CustomText fontSize={24} fontWeight="Bold" >
                            Today's Task
                        </CustomText>


                        <CustomText style={styles.subTitleStyle}>
                            Tuesday, 19 November
                        </CustomText>

                    </View>
                    <ButtonComponent
                        title="Add Task"
                        onPress={() => {
                            navigation.navigate('AddTask');

                        }}
                    />
                </View>
                <View style={[globalStyles.row, { gap: 40, marginTop: 20, marginBottom: 40 }]}>
                    {
                        tabOptions.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    setTabActive(option.title);
                                }}>
                                <ButtonTabComponent active={
                                    tabActive === option.title
                                } title={option.title} count={option.count}></ButtonTabComponent>
                            </TouchableOpacity>
                        )
                        )
                    }
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 120 }}>
                    {
                        TasksProps.map((task, index) => (
                            <TaskTileComponent
                                key={index}
                                title={task.title}
                                status={task.status}
                                time={task.time}
                                task={task.task}
                            ></TaskTileComponent>
                        ))
                    }
                </ScrollView>


            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: "#F7F7F8",

    },
    headerStyle: {
        fontSize: 24,
        fontWeight: '600',

    },
    subTitleStyle: {
        fontSize: 16,
        color: "#8A8A8A",
    },

});