import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  padding: 1 1;
  max-height: 2 rem;
  border-radius: 4px;
  border: 1px solid blueviolet;
  font-weight: bold;
  transition: all 0.4s ease 0s;
  background-image: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
  color: #fff !important;
  position:  ${(props) => (props.absolute ? "absolute" : "relative")};
  margin-left: ${(props) => props.margin || "none"};
  bottom:  ${(props) => props.bottom || "none"};
  font-size:  13px;
  margin: 2px;


  :hover {
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
  },

`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: auto;
  width: 100%;
  order: 1;
  align-content: stretch;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 1%;
  align-items: stretch;
  flex-grow: 1;
`;

const StyledApp = styled.div`
  display: flex;
  flex-basis: auto,
  border: yellow solid 2px;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  overflow: hidden,
  justify-content: space-between;
  width: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: blueviolet;
  background-color: lightgray;

  align-items: center;
  scroll-behavior: smooth;
  align-content: space-around;
  font-size: 18px;
`;

const StyledCard = styled.div`
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 35%;
  min-width: 350px;
  min-height: 50px;
  // max-height: 300px;
  align-content: center;
  text-align: center;
  vertical-align: middle;
  background-color: lightgray;
  border: 2px solid blueviolet;
  border-radius: 15px;
  margin: 1%;
  padding: 1%;
  transition: all 0.4s ease 0s;
  :hover {
    letter-spacing: 5px;
    transition: all 0.4s ease 0s;
  }
  ,
  h1 {
    margin: 1%;
  }
  h2 {
    margin: 1%;
  }
  input {
    width: 90%;
    height: 10px;
    margin: 2%;
    padding: 2%;
    border: 1px solid blueviolet;
    font-weight: bold;
    float: center;
    color: #fff !important;
    background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
    background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
    border-radius: 4px;
  }
`;

export { StyledButton, StyledCards, StyledCard, StyledApp };
