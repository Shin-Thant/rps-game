import React, { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
    const [hasChoice, setHasChoice] = useState(false);
    const [score, setScore] = useState(0);
    const [open, setOpen] = useState(false);

    return (
        <Context.Provider
            value={{ hasChoice, setHasChoice, score, setScore, open, setOpen }}
        >
            {children}
        </Context.Provider>
    );
};
