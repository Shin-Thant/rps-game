import React, { useContext, useEffect } from "react";
import { Game } from "../Game";
import "../../styles/GameContainer.css";
import { ScoreBoard } from "../ScoreBoard";
import { Context } from "../../hooks/ContextProvider";
import { RulesModal } from "../RulesModal";

export const GameContainer = () => {
    const { hasChoice, open, setOpen } = useContext(Context);

    const openModal = () => {
        setOpen(true);
    };

    return (
        <div
            className="gameContainer"
            // style={hasChoice ? { gap: "5rem" } : { gap: "9rem" }}
        >
            <ScoreBoard />
            <Game />

            {open ? <RulesModal /> : ""}

            <div className="rules-btn" onClick={openModal}>
                RULES
            </div>
        </div>
    );
};
