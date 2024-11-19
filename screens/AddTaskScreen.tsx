import { Button, ScrollView, View } from "react-native";
import CustomText from "../components/customText";
import globalStyles from "../global_styles";
import TextFieldComponent from "../components/textFieldComponent";
import ButtonComponent from "../components/buttonComponent";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "AddTask">;

export default function AddTaskScreen({ route, navigation }: Props) {

    const createTask = (title: string, task: string, time: string, status?: boolean): TasksProps => {
        return {
            title,
            status: status ?? false,
            task,
            time,
        };
    }
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const handleAddTask = () => {
        const newTask: TasksProps = createTask(title, task, `${start} - ${end}`, false);
        navigation.navigate('Home', {
            tasks: [newTask], // Pass the new task here
        });
    };
    return (
        <ScrollView keyboardShouldPersistTaps={'never'} style={globalStyles.main}>

            <CustomText fontSize={24} fontWeight={'Bold'} style={{ marginTop: 12 }} >
                New Task
            </CustomText>

            <CustomText fontSize={16} fontWeight={"SemiBold"} style={{ marginTop: 16 }} >
                Task Title
            </CustomText>
            <TextFieldComponent placeholder="Add Task Title.." value={title} onChangeText={setTitle} ></TextFieldComponent>
            <CustomText fontSize={16} fontWeight={"SemiBold"} style={{ marginTop: 16 }} >
                Task
            </CustomText>
            <TextFieldComponent placeholder="Add Description.." value={task} onChangeText={setTask} ></TextFieldComponent>
            <View style={[globalStyles.row, { gap: 12, paddingBottom: 50 }]}>
                <View style={{ flex: 2 }}>
                    <CustomText fontSize={16} fontWeight={"SemiBold"} style={{ marginTop: 16 }} >
                        Start
                    </CustomText>
                    <TextFieldComponent placeholder="hh : mm" value={start} onChangeText={setStart} ></TextFieldComponent>

                </View>
                <View style={{ flex: 2 }}>
                    <CustomText fontSize={16} fontWeight={"SemiBold"} style={{ marginTop: 16 }} >
                        End
                    </CustomText>
                    <TextFieldComponent placeholder="hh : mm" value={end} onChangeText={setEnd} ></TextFieldComponent>

                </View>
            </View>

            <ButtonComponent onPress={handleAddTask} height={50} title="Add Task"></ButtonComponent>

        </ScrollView>
    );
}

