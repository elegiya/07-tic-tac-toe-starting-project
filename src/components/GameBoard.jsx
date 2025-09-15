import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard(prevGameboard => {
            const newGameBoard = [...prevGameboard.map(row => [...row])];
            newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return newGameBoard;
        });

        onSelectSquare();
    }
    
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, colIndex) => (
                            <li key={colIndex}>
                                <button className="cell" onClick={() => handleSelectSquare(rowIndex, colIndex)}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
