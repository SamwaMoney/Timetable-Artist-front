import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { S } from '../rankingpage/Ranking.style';
import { FlexCenter } from '../rankingpage/Ranking.style';
const Loading = props => {
    const emogi = '٩( ᐛ )و';
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const timeoutId = setInterval(() => {
            setIsFlipped(prev => !prev);
        }, 1000); // 1초 뒤에 반전 클래스를 제거합니다.

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isFlipped]);

    return (
        <S.Container>
            <LoadingWrapper>
                <Emogi className={isFlipped ? '' : 'flipped'}>{emogi}</Emogi>
                {/* <Text>
                    <ColorText>랭킹보드</ColorText>
                    <span>를 불러오고 있습니다.</span>
                </Text> */}{' '}
                <Text className='waviy'>
                    <Waviy style={{ '--i': 1 }} color={'var(--blue)'}>
                        {props.title[0]}
                    </Waviy>
                    <Waviy style={{ '--i': 2 }} color={'var(--blue)'}>
                        {props.title[1]}
                    </Waviy>
                    <Waviy style={{ '--i': 3 }} color={'var(--blue)'}>
                        {props.title[2]}
                    </Waviy>
                    <Waviy style={{ '--i': 4 }} color={'var(--blue)'}>
                        {props.title[3]}
                    </Waviy>
                    <Waviy style={{ '--i': 5 }}>를</Waviy>
                    <Waviy style={{ marginLeft: '5px' }}></Waviy>
                    <Waviy style={{ '--i': 7 }}>불</Waviy>
                    <Waviy style={{ '--i': 8 }}>러</Waviy>
                    <Waviy style={{ '--i': 9 }}>오</Waviy>
                    <Waviy style={{ '--i': 10 }}>고</Waviy>
                    <Waviy style={{ marginLeft: '5px' }}></Waviy>
                    <Waviy style={{ '--i': 12 }}>있</Waviy>
                    <Waviy style={{ '--i': 13 }}>습</Waviy>
                    <Waviy style={{ '--i': 14 }}>니</Waviy>
                    <Waviy style={{ '--i': 15 }}>다</Waviy>
                    <Waviy style={{ '--i': 16 }}>.</Waviy>
                </Text>
            </LoadingWrapper>
        </S.Container>
    );
};

export default Loading;

const Emogi = styled.div`
    font-size: 2rem;
    padding-bottom: 5rem;
    &.flipped {
        transform: scaleX(-1);
    }
`;
const Text = styled.div`
    letter-spacing: 2px;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 0.1rem solid black;
    background: linear-gradient(to bottom, #e2e2e2, var(--green));
    ${FlexCenter}
    flex-direction:column;
`;

const waviyAnimation = keyframes`
  0%, 40%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-15px);
  }
`;

const Waviy = styled.span`
    font-size: 1.5rem;
    position: relative;
    display: inline-block;
    color: ${props => props.color || '#000'};
    text-transform: uppercase;
    animation: ${waviyAnimation} 4s infinite;
    animation-delay: calc(0.1s * var(--i));
    padding: 1px;
`;

const ColorText = styled.span`
	font-weight:  600;
	letter-spacing: 2px;
	text-align: center;
	color: #7f1cff;
	background-image: -webkit-linear-gradient(92deg, #fd11e5, #008cff5e);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-animation: hue 5s infinite linear;
}

@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
`;
