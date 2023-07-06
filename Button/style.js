//js에서 css문법을 사용하므로
import styled, { css } from "styled-components";

//App.js에서  <ThemeProvider theme={theme}>을 통해 가져온 theme객체의 PALETTE
//속성을 사용한다.
//variantCss, shapeCss, sizeCss가 각각 객체안에 key(옵션명)과 value(옵션에 해당하는 css)로 들어가 있다
//각 Css마다 원하는 옵션을 선택하여 사용할 수 있다
const variantCSS = {
  primary: css`
    //배경컬러의 경우 App.js에서  <ThemeProvider theme={theme}>을 통해 가져온 theme객체의 PALETTE
    //속성을 사용한다.
    //다음과 같이 theme을 구조분해할당으로 가져와 그 안에 있는 PALETTE.primary[300]속성을 꺼내 쓴다.
    //이런식으로 가져오는 이유는 theme가 js의 객체 형식이기 때문이다
    //css에서는 js의 객체를 직접사용할 수 없으므로 이같은 형식으로 가져와야 한다.
    background-color: ${({ theme }) => theme.PALETTE.primary[300]};
    color: #fff;
  `,

  //리액트에서는 -라는 문자를 인식하지 못하므로 ""안에 넣는다.
  "primary-reverse": css`
    border: 1px solid ${({ theme }) => theme.PALETTE.primary[300]};
    color: ${({ theme }) => theme.PALETTE.primary[300]};
  `,

  "primary-text": css`
    color: ${({ theme }) => theme.PALETTE.primary[300]};
  `,
};

const shapeCSS = {
  default: css``,
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

const sizeCSS = {
  small: css`
    width: 64px;
    height: 32px;
    padding: 16px 0;
  `,

  medium: css`
    width: 96px;
    height: 48px;
    padding: 16px 0;
  `,
  large: css`
    width: 128px;
    height: 64px;
    padding: 16px 0;
  `,

  full: css`
    width: 100%;
    aspect-ratio: 8 / 1;
  `,
};

//유동적인 styled component (버튼)만드는 법
//위에서 지정한 객체 형태로 만든 css를 다음과 같이 지정할 수 있다.
//${}로 쓴것은 css에서 js객체를 꺼내 쓸때 쓰는 문법이다.
//varian, shape, size를 props로 받아 그에 해당하는 CSS객체에서
//css속성을 찾아 적용한다.
const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
    cursor: pointer;
  border: none;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  :hover {
    opacity: 0.7;
  }
`;
export default Button;
// <BascitButton size={'medium'} >

//버튼에서 쓸 수 있는 css속성을 다 props로 지정해서 옵션을 줘서
//굳이 스타일 컴포넌트를 새롭게 만들지 않아도 버튼 컴포넌트에 원하는
//props를 주면 해당 스타일 컴포넌트를 사용할 수있다.

//스타일 컴포넌트에 함수형 css를 사용할 수 있다!(js객체 활용)

//해당 props에 맞는 css의 객체에 접근하여 css 속성을 준다
