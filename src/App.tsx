import styled from "styled-components";
import Circle from "./Circle";


function App() {
  return (
    <div>
        <Circle borderColor="yellow" bgColor="teal"/>
        <Circle bgColor="tomato"/>
      {/* component를 type을 한다== component에게 type을 준다==
      typescript에게 어떤 type인지 설명한다 */}
    </div>
  )
}

export default App;

// typescript에게 내 component가 가져야하는 prop을 설명한다. 
// JS에서 prop types는 prop이 거기에 있는지 없는지 확인해주지만, 코드를 실행한
// "후"에만 확인 가능하다.(브라우저콘솔)
// TS를 사용하는 이유는 코드가 실행되기 "전"에 오류를 확인하기 위해서이다.
// 그러므로TS에서는 prop types를 사용하지 않는다.