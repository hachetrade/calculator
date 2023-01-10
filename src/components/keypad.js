import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";

const Keypad = (props) => {
  return (
    <div className='grid'>
      <button
        className='btn btn-outline-secondary col-7'
        onClick={() => props.clearDis()}
      >
        C
      </button>
      <button
        className='btn btn-outline-secondary col-5'
        onClick={() => props.deleteLast()}
      >
        DEL
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("1")}
      >
        1
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("2")}
      >
        2
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("3")}
      >
        3
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("4")}
      >
        4
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("5")}
      >
        5
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("6")}
      >
        6
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("7")}
      >
        7
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("8")}
      >
        8
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("9")}
      >
        9
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck(".")}
      >
        .
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("0")}
      >
        0
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("+")}
      >
        +
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("-")}
      >
        -
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("/")}
      >
        /
      </button>
      <button
        className='btn btn-outline-secondary col-4'
        onClick={() => props.fuck("*")}
      >
        *
      </button>
      <button
        className='btn btn-outline-secondary col-12'
        onClick={() => {
          props.result();
        }}
      >
        =
      </button>
    </div>
  );
};

export default Keypad;
