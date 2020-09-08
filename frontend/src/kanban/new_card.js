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
        textDecoration: "none",
        color: "inherit",

        "&:focus-within": {
          border: "4px solid red",
        },

        "& > .description": {
            display: "flex",
            flexGrow: 1,
            padding: "0 30px",
            overflow: "hidden",
            textOverflow: "ellipsis",

            "& > textarea": {
                width: "100%",
                height: "100%",
                outline: "none",
                border: "none",
                resize: "none",
            },
        },

        "& > .meta": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            paddingBottom: 0,

            "& > .done": {
                backgroundColor: "#0166fe",
                color: "white",
                padding: "5px 10px",
                borderRadius: 5,
            },
        },

        "& > .left, > .right": {
            border: "2px solid black",
            borderRadius: "50%",
            height: 20,
            width: 20,
            position: "absolute",
            display: "flex",
            cursor: "pointer",
            justifyContent: "center",

            "& > .symbol": {
                fontFamily: "monospaced",
                marginTop: -3,
            },
        },
        "& > .right": {
            alignSelf: "flex-end",
        },
    }
});

NewCard.defaultProps = {

};

export default function NewCard(props) {
    let styles = useStyles();

    return (
        <a href="#" className={clsx("card", styles.root)}>
            <div className={"description"}><textarea placeholder="description..."/></div>
            <div className={"meta"}>
                <div>Creating...</div>
                <div className={"done"}>Done</div>
            </div>
        </a>
    );
}
