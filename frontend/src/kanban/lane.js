import React from "react";
import Card from "./card";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: 388,
        minWidth: 388,

        "& > *": {
            boxShadow: "5px 5px 10px rgba(0,0,0,0.25)",
        },
        "& > .header": {
            boxSizing: "border-box",
            height: 62,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 36,
            fontWeight: "bold",
            borderRadius: "6px",
            color: "white",
        },
        "& > .content": {
            position: "relative",
            marginTop: 30,
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            boxSizing: "border-box",
            padding: 16,
            paddingBottom: 65,
            borderRadius: 10,
            "& > .scrollline": {
                content: `""`,
                position: "absolute",
                backgroundColor: "black",
                width: 4,
                right: 19,
                bottom: 66,
                top: 16,
                zIndex: 1,
            },
            "& > .scroll": {
                zIndex: 1,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                height: 0,
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                    width: 10,
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "white",
                    border: "1px solid black",
                    height: 30,
                    maxHeight: 30,
                },
                "& > .card + .card": {
                    marginTop: 16,
                },
            },
        },
    }
});

Lane.defaultProps = {
    name: undefined,
    tasks: [],
    left_callback: undefined,
    right_callback: undefined,
};


export default function Lane(props) {
    let styles = useStyles();

    return (
        <div className={clsx("lane", styles.root)}>
            <div className="header">{props.name}</div>
            <div className="content">
                <div className={"scrollline"}/>
                <div className="scroll">
                    {props.tasks.map(t => <Card
                        key={t.uuid}
                        task={t}
                        left_callback={props.left_callback ? () => props.left_callback(t) : undefined}
                        right_callback={props.right_callback ? () => props.right_callback(t) : undefined}
                    />)}
                    {props.children}
                </div>
            </div>
        </div>
    );
}
