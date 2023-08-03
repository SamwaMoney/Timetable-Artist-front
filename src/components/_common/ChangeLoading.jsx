import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { S } from '../rankingpage/Ranking.style';
import { FlexCenter } from '../rankingpage/Ranking.style';
const ChangeLoading = () => {
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
                <Text>
                    <Waviy style={{ '--i': 1 }}>
                        <ColorText>랭</ColorText>
                    </Waviy>
                    <Waviy style={{ '--i': 2 }}>
                        <ColorText>킹</ColorText>
                    </Waviy>
                    <Waviy style={{ '--i': 3 }}>
                        <ColorText>보</ColorText>
                    </Waviy>
                    <Waviy style={{ '--i': 4 }}>
                        <ColorText>드</ColorText>
                    </Waviy>
                    <span>를 불러오고 있습니다.</span>
                </Text>
            </LoadingWrapper>
        </S.Container>
    );
};

export default ChangeLoading;

const Text = styled.div`
    letter-spacing: 2px;

    font-size: 1.3rem;
`;

const Emogi = styled.div`
    font-size: 2rem;
    padding-bottom: 5rem;
    &.flipped {
        transform: scaleX(-1);
    }
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
    transform: translateY(-20px);
  }
`;

const Waviy = styled.span`
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
	-webkit-animation: hue 7s infinite linear;
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
