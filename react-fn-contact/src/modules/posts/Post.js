import React, { useEffect, useRef, useState } from 'react'

function Post() {
  const inputRef = useRef();

  function onClick() {
      inputRef.current.focus();
  }

  return (
      <div>
          <button onClick={onClick}>Click me</button>
          <input ref={inputRef} type="text" name="name" />
      </div>
  );
}

export default Post
