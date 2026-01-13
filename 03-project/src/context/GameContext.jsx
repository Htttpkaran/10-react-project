import { createContext } from "react";

export const GameContext = createContext({
	score: 0,
	setScore: () => {},
	selectedNumber: null,
	setSelectedNumber: () => {},
});