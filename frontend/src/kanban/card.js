import React from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";


const useStyles = makeStyles({
    root: {
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        border: "4px solid transparent",
        height: 155,
        width: 330,
        justifyContent: "center",

        "&:active": {
          border: "4px solid red",
        },

        "& > .description": {
            display: "flex",
            flexGrow: 1,
            padding: "0 30px",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },

        "& > .meta": {
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
            paddingBottom: 0,
            flexGrow: 1,
        },

        "& > .left, > .right": {
            border: "2px solid black",
            borderRadius: "50%",
            height: 20,
            width: 20,
            position: "absolute",
            display: "flex",
            cursor: "pointer",
        },
        "& > .right": {
            alignSelf: "flex-end",
        },
    }
});

Card.defaultProps = {
    task: {author: undefined, date: undefined, description: undefined, uuid: undefined},
    left_callback: null,
    right_callback: null,
};

export default function Card(props) {
    let styles = useStyles();
    let { task } = props;
    let dt = new Date(Date.parse(task.date));

    return (
        <div className={clsx("card", styles.root)}>
            {props.left_callback && <div className={"left"} onClick={props.left_callback}>＜</div>}
            {props.right_callback && <div className={"right"} onClick={props.right_callback}>＞</div>}
            <div className={"description"}>{task.description}</div>
            <div className={"meta"}>
                <div className={"date"}>{dt.toLocaleDateString()}</div>
                <div className={"author"}>{task.author}</div>
            </div>
        </div>
    );
}
