import styled from "styled-components";
import React,{useState} from "react";

interface ContainerProps {
      bgColor: string;
      borderColor: string;
};

//TS에게 Container가 bgColor를 받을것이라고 하려면 <...>추가
const Container = styled.div<ContainerProps>`
height:200px;
width:200px;
background-color:${(props) =>props.bgColor};
border-radius: 100px;
border:10px solid ${(props) =>props.borderColor};
`;

//interface: ogject shape(객체모양)을 TS에게 설명해줌
//interface안에다가 object sahpe설명해줌(a:number이런식)
interface CircleProps {
      bgColor:string;
      borderColor?:string;
}


//"bgColor의 타입은 circleprops의 object이다" 라고 설명
function Circle({bgColor, borderColor}:CircleProps) {
      const[counter,setCounter] =useState<number|string>(1);
      return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
};

export default Circle;

//1. 어떻게 우리 자신과 props를 interface를 사용하여 보호하는지
//2.