import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/styles";
import Lane from "./lane";
import NewCard from "./new_card";


const useStyles = makeStyles({
    root: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",

        "& > .header": {
            boxSizing: "border-box",
            padding: 48,
            height: 144,
            fontSize: 36,
            fontWeight: "bold",
            borderBottom: "4px solid gray",
        },
        "& > .content": {
            display: "flex",
            flexGrow: 1,
            padding: 70,
            justifyContent: "center",

            "& > .lane": {
                "&:nth-child(1) > *": { backgroundColor: "#adadad", },
                "&:nth-child(2) > *": { backgroundColor: "#0166fe", },
                "&:nth-child(3) > *": { backgroundColor: "#017a24", },
                "&:not(:first-child)": { marginLeft: 80, },
            },
        },
    },
});


KanBan.defaultProps = {
    api_port: 23456,
};


export default function KanBan(props) {
    let url = `http://${window.location.hostname}:${props.api_port}/api/kanban`
    let styles = useStyles();

    // tasks by UUID
    let [tasks, setTasks] = useState({});

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(fetched_tasks => setTasks(Object.fromEntries(fetched_tasks.map(t => [t.uuid, t]))),
            error => {
                console.log("error");
            });
    }, []);

    function change_task_status(task, new_status) {
        task.status = new_status;

        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
            })
            .then( result => console.log(result))
            .then( () => setTasks({...tasks})
        );
    }

    return (
        <div className={styles.root}>
            <div className="header">Kanban Challenge</div>
            <div className="content">
                <Lane
                    name="Backlog"
                    tasks={Object.values(tasks).filter(t => t.status === "backlog")}
                    right_callback={(task) => change_task_status(task, "in_progress")}
                >
                    <NewCard/>
                </Lane>
                <Lane
                    name="In Progress"
                    tasks={Object.values(tasks).filter(t => t.status === "in_progress")}
                    left_callback={(task) => change_task_status(task, "backlog")}
                    right_callback={(task) => change_task_status(task, "completed")}
                />
                <Lane
                    name="Completed" tasks={Object.values(tasks).filter(t => t.status === "completed")}
                    left_callback={(task) => change_task_status(task, "in_progress")}
                />
            </div>
        </div>
    )
}
