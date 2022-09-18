import React, { useState } from 'react';

export function Box({ boxValue }) {
  function convertBoxValue() {
    //make switch statement
    switch (boxValue) {
      case 0:
        return '';

      case 1:
        return 'X';

      case 2:
        return 'O';

      default:
        alert('something went wrong');
    }
  }

  return <div className="box">{convertBoxValue()}</div>;
}
