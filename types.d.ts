type ButtonTabProps={
active:boolean,
title:string,
count:number,
}

type TasksProps={
    title:string,
    status?:bool,
    task:string,
    time:string
}

type RootStackParamList = {
  Home: { tasks: TasksProps[] } | undefined;
  AddTask: undefined;
};
