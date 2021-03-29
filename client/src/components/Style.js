import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  padding: 1% 5%;
  border-radius: 4px;
  transition: all 0.4s ease 0s;
  background-image: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
  color: #fff !important;
  position:  ${(props) => (props.absolute ? "absolute" : "relative")};
  margin-left: ${(props) => props.margin || "none"};
  bottom:  ${(props) => props.bottom || "none"};
  font-size: 1.2vw;


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
  width: 100%;
  // align-self: flex-start;
  order: 2;
  align-content: stretch;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 5%;
  align-items: stretch;
  flex-direction: row;
`;

const StyledApp = styled.div`
  display: flex;
  flex-basis: "auto",
  flex-direction: column;
  flex-wrap: wrap;
  overflow: "hidden",
  justify-content: space-between;
  width: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: blueviolet;
  background-color: black;
  align-items: center;
  scroll-behavior: smooth;
  align-content: space-around;
  font-size: 1.2vw;
`;

const StyledCard = styled.div`
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  // width: 25%;
  align-content: center;
  text-align: center;
  vertical-align: middle;
  background-color: black;
  border: 2px solid blueviolet;
  border-radius: 15px;
  margin: 2%;
  padding: 2%;
  h1 {
    margin: 2%;
  }
  h2 {
    margin: 2%;
  }
  input {
    width: 80%;
    height: 2;
    margin: 5%;
    float: center;
    background-color: gainsboro;
    background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
    background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
    border-radius: 4px;
  }
`;

export { StyledButton, StyledCards, StyledCard, StyledApp };
