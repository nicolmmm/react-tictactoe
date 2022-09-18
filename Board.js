import React, { useState } from 'react';
import { Box } from './Box';

export function Board() {
  const [xTurn, setXTurn] = useState(true);
  //const [turn, setTurn] = useState(0);

  const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const game = (value) => {
    //switches players turns

    setXTurn(!xTurn);

    //what are the possible states of a box: blank, X or O.
    //We have 9 boxes

    return xTurn;
  };

  const sayHello = () => {
    console.log('hello');
  };

  return (
    <div
    className="board"
    onClick={sayHello()}>
      {boardArray.map((value, index) => (
        <Box
          key={index}
          onClick={
            () => console.log(`hello ${index}`)
            /* () => {
            xTurn ? value=1 : value=2 */

            /* xTurn ? (value = 1) : (value = 2);
            game(); */
          }
          boxValue={value}
        />
      ))}
    </div>
  );
}
//homework
/* 
1. write switch statement
2. impliment onClick in board component
3. impliment "game over" state- show "game over" at top

bonus
4. reset button.
 */
