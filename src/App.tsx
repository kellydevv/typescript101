import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Button = styled.button`
  color: ${(props) => props.theme.btnColor};
`;
function App() {
  return ( 
    <Container>
      <H1>protected</H1>
      <Button> wow</Button>
    </Container>
  );
}

export default App;
