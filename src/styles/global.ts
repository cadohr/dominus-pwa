import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #57ba91;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
  
  .container {
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    max-width: 375px;
    margin: 0 auto;
  }

  .row {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    color: #fff;
    background: #5cc398;
    padding: 10px;
  }

  .reset-button {
    display: flex;
    justify-content: center;
    height: 40px;

    color: #fff;
    background: #57ba91;

    font-size: 18px;
    font-weight: bold;
  }

  .point-list {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
      font-size: 32px;
      margin-bottom: 20px;
    }

    ul > li {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .total {
    display: flex;
    flex-grow: 2;
    justify-content: flex-end;
    font-size: 200px;
  }

  .Modal {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 375px;
    margin: 0 auto;

    img {
      width: 80px;
    }

    button {
      display: flex;
      flex: 1;
      justify-content: center;
      color: #fff;
      background: transparent;
      font-weight: bold;
    }
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #57ba91;
  }
`;
