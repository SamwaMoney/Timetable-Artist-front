import React from 'react';
import { FlexCenter, S } from '../rankingpage/Ranking.style';
import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
// ٩( ᐛ )و  ◡
const MLoading = () => {
    const emogi = ['〆(･⌄･;)', '_〆(･⌄･;)', '__〆(･⌄･;)'];
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timeoutId = setInterval(() => {
            if (time === 2) {
                setTime(0);
            } else {
                setTime(prev => prev + 1);
            }
        }, 1000); // 1초 뒤에 반전 클래스를 제거합니다.
        return () => {
            clearTimeout(timeoutId);
        };
    }, [time]);

    return (
        <Wrapper>
            <LoadingWrapper>
                <Emoticon>{emogi[time]}</Emoticon>

                <div className='waviy'>
                    <Waviy style={{ '--i': 1 }}>시</Waviy>
                    <Waviy style={{ '--i': 2 }}>간</Waviy>
                    <Waviy style={{ '--i': 3 }}>표</Waviy>
                    <span style={{ marginLeft: '3vw' }}></span>
                    <Waviy style={{ '--i': 5 }} color='red'>
                        채
                    </Waviy>
                    <Waviy style={{ '--i': 6 }} color='red'>
                        점
                    </Waviy>
                    <Waviy style={{ '--i': 7 }} color='red'>
                        중
                    </Waviy>
                    <span style={{ marginLeft: '3vw' }}></span>
                    <Waviy style={{ '--i': 10 }}>입</Waviy>
                    <Waviy style={{ '--i': 11 }}>니</Waviy>
                    <Waviy style={{ '--i': 12 }}>다</Waviy>
                    <span style={{ marginLeft: '5px' }}></span>
                    <Waviy style={{ '--i': 14 }}>.</Waviy>
                    <span style={{ marginLeft: '5px' }}></span>
                    <Waviy style={{ '--i': 16 }}>.</Waviy>
                    <span style={{ marginLeft: '5px' }}></span>
                    <Waviy style={{ '--i': 18 }}>.</Waviy>
                </div>
            </LoadingWrapper>
        </Wrapper>
    );
};

export default MLoading;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const LoadingWrapper = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient(to bottom, #e2e2e2, var(--green));
    ${FlexCenter}
    flex-direction: column;
`;

const Emoticon = styled.div`
    font-size: 7vw;
    padding-bottom: 12vw;
`;

const waviyAnimation = keyframes`
  0%, 40%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-6vw);
  }
`;

const Waviy = styled.span`
    font-size: 5vw;
    font-weight: 500;
    position: relative;
    display: inline-block;
    color: ${props => props.color || '#000'};
    text-transform: uppercase;
    animation: ${waviyAnimation} 4.6s infinite;
    animation-delay: calc(0.1s * var(--i));
`;
