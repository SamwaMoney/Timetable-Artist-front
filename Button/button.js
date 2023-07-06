//rest: 나머지 매개변수
//받은 것을 제외한 나머지 매개변수
//앞에 것들을 제외한 모든 매개변수를 지정할수 있다.
//굳이 가능한 모든 매개변수를 적지 않아도 된다.

//나머지 매개변수 예제
// function print(name, ...rest) {
//   console.log(name, ...rest);
// }
// print("김성용", 190, 20);
// import Button from "./style";

// const Button = ({ size, shape, variant, children, ...rest }) => {
//   // console.log(size) //"full"

//   //{...rest}로 지정하면 동일한 동일한 이름의 속성이 지정됨
//   return (
//     <Button size={size} shape={shape} variant={variant} {...rest}>
//       {children}
//     </Button>
//   );
// };
// export default Button;

//<Button size={"full"} color={"red"}>
//객체로 전달한거 구조분해 할당 가능 => props도 객체로 가져올 수 있다.

//함수형 컴포넌트도 함수이기 때문에 매개변수를 전달 받을 수 있고
//매개변수는 컴포넌트에 설정한 속성과 속성값의 형태가 객체로 전달됨
//props는 속성의 줄임말이다.

//children은 태그안에 감싼 자식들이 모두 children이 된다.
//children에 로그인을 쓰면 로그인 버튼이 되고, 회원가입을 쓰면
//회원가입 버튼이 된다.

//함수형 컴포넌트는 매개변수로 전달된 *속성값*을 객체 형태로 받는다
//styled-components는 속성으로 전달된 값을 콜백함수의 인자로 꺼내쓸 수 있다.
//이를 이용하여 유동적인 component를 공통 컴포넌트를 만들 수 있다.

import Button from "./style";

//나머지 props를 rest로 받을 수 있다.
const BasicButton = ({ size, shape, variant, children, ...rest }) => {
  return (
    //rest로 받은 속성은 {...rest}로 쓰면 rest={rest}와 동일한 props가 전달된다.
    <Button size={size} shape={shape} variant={variant} {...rest}>
      {children}
    </Button>
  );
};
export default BasicButton;

//  <BasicButton size={"full"} color={"red"}>
// 함수형 컴포넌트는 함수이기 때문에 매개변수를 전달 받을 수 있고(props)
// 매개변수는 컴포넌트에 설정한 속성과 속성값의 형태가 객체로 전달
//style.js로 이동시킬 거임
/* 
<BasicButton  size={"full"} onClick={onPressLogin} onMouseOver={}>
    ... children
</BasicButton>


나머지 매개변수

function print(name, ...rest){
    console.log(name, ...rest)
}
print("김성용", 20, 190)
*/
