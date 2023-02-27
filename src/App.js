import React from 'react'
import './App.css';

function App(){
  const style = {
    padding: "100px",
    display: "flex",
    gap: "12px"
  }
  const boxStyle = {
    width : "100px",
    height: "100px",
    fontSize: "25px",
    border : "3px solid rgb(200, 168, 248)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
  return (
    <div style={style}>
      <div style={boxStyle}>감자</div>
      <div style={boxStyle}>고구마</div>
      <div style={boxStyle}>오이</div>
      <div style={boxStyle}>가지</div>
      <div style={boxStyle}>옥수수</div>
    </div>
  );
}

export default App;
