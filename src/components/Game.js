import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/Game.css";
import triangle from "../images/bg-triangle.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import { Context } from "../hooks/ContextProvider";

export const Expanding = () => {
    return <div className="expanding"></div>;
};

export const Game = () => {
    const availableChoice = useRef([
        { choice: "paper", beat: "rock", weakness: "scissors" },
        { choice: "scissors", beat: "paper", weakness: "rock" },
        { choice: "rock", beat: "scissors", weakness: "paper" },
    ]);

    const [choice, setChoice] = useState("");
    const [aiChoice, setAiChoice] = useState("");
    const [result, setResult] = useState({ exist: false, status: "" });

    const { setHasChoice, setScore } = useContext(Context);

    const getRandomChoice = async (choice) => {
        const time = Math.floor(Math.random() * 3) + 1;

        await setTimeout(() => {
            const randomChoice = Math.floor(Math.random() * 3);
            setAiChoice(availableChoice.current[randomChoice].choice);

            if (availableChoice.current[randomChoice].beat === choice) {
                setResult({ exist: true, status: "lose" });
            } else if (
                availableChoice.current[randomChoice].weakness === choice
            ) {
                setResult({ exist: true, status: "win" });
            } else {
                setResult({ exist: true, status: "draw" });
            }
        }, time * 1000);
    };

    const setUserChoice = (c) => {
        setChoice(c);
        setHasChoice(true);
        getRandomChoice(c);
    };

    const playAgain = () => {
        setChoice("");
        setAiChoice("");
        setHasChoice(false);
        setResult({ exist: false, status: "" });
    };

    useEffect(() => {
        if (result.status === "win") setScore((prev) => ++prev);
    }, [result]);

    return (
        <div className="game">
            {!choice.length ? (
                <div className="choices-box">
                    <img
                        src={triangle}
                        alt="background-triangle"
                        className="triangle"
                    />

                    <div
                        className="choices paper pending"
                        onClick={() => setUserChoice("paper")}
                    >
                        <img src={paper} alt="paper" />
                    </div>
                    <div
                        className="choices scissors pending"
                        onClick={() => setUserChoice("scissors")}
                    >
                        <img src={scissors} alt="scissors" />
                    </div>
                    <div
                        className="choices rock pending"
                        onClick={() => setUserChoice("rock")}
                    >
                        <img src={rock} alt="rock" />
                    </div>
                </div>
            ) : (
                <div className="chose">
                    <div className="userChoice">
                        <h1>YOU PICKED</h1>
                        <div className={`choices ${choice}`}>
                            <img
                                src={
                                    choice === "paper"
                                        ? paper
                                        : choice === "scissors"
                                        ? scissors
                                        : choice === "rock" && rock
                                }
                                alt={choice}
                            />
                        </div>
                    </div>

                    {result.exist ? (
                        <div className="result">
                            {result.status === "draw" ? (
                                <h1>DRAW</h1>
                            ) : (
                                <h1>
                                    YOU{" "}
                                    {result.status === "win" ? "WIN" : "LOSE"}
                                </h1>
                            )}
                            <button className="playAgain" onClick={playAgain}>
                                PLAY AGAIN
                            </button>
                        </div>
                    ) : (
                        ""
                    )}

                    <div className="aiChoice">
                        <h1>THE HOUSE PICKED</h1>
                        {aiChoice ? (
                            <div className={`choices ${aiChoice}`}>
                                <img
                                    src={
                                        aiChoice === "paper"
                                            ? paper
                                            : aiChoice === "scissors"
                                            ? scissors
                                            : aiChoice === "rock" && rock
                                    }
                                    alt={`${aiChoice}`}
                                />
                            </div>
                        ) : (
                            <div className="loading"></div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
