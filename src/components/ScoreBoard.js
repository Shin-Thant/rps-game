import React, { useContext } from "react";
import "../styles/ScoreBoard.css";
import logoText from "../images/logo.svg";
import { Context } from "../hooks/ContextProvider";

export const ScoreBoard = () => {
    const { hasChoice, open, setOpen, score } = useContext(Context);

    return (
        <div className={`scoreboard ${!hasChoice ? "addMargin" : "noMargin"}`}>
            <img src={logoText} alt="" />
            <div className="score-result">
                <h1>SCORE</h1>
                <h1 className="score">{score}</h1>
            </div>
        </div>
    );
};
