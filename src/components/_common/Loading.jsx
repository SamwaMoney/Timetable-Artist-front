import React from 'react';
import { FlexCenter, S } from '../rankingpage/Ranking.style';
import styled, { keyframes } from 'styled-components';
// ٩( ᐛ )و  ◡
const Loading = () => {
    return (
        <S.Container>
            <LoadingWrapper>
                <Emoticon> __〆(･⌄･;) </Emoticon>

                <div className='waviy'>
                    <Waviy style={{ '--i': 1 }}>시</Waviy>
                    <Waviy style={{ '--i': 2 }}>간</Waviy>
                    <Waviy style={{ '--i': 3 }}>표</Waviy>
                    <span style={{ marginLeft: '5px' }}></span>
                    <Waviy style={{ '--i': 5 }} color='blue'>
                        채
                    </Waviy>
                    <Waviy style={{ '--i': 6 }} color='blue'>
                        점
                    </Waviy>
                    <span style={{ marginLeft: '5px' }}></span>
                    <Waviy style={{ '--i': 8 }} color='blue'>
                        중
                    </Waviy>
                    <span style={{ marginLeft: '5px' }}></span>
                    <Waviy style={{ '--i': 10 }}>입</Waviy>
                    <Waviy style={{ '--i': 11 }}>니</Waviy>
                    <Waviy style={{ '--i': 12 }}>다</Waviy>
                    <span style={{ marginLeft: '5px' }}></span>
                    <Waviy style={{ '--i': 14 }}>.</Waviy>
                    <span style={{ marginLeft: '5px' }}></span>
                    <Waviy style={{ '--i': 16 }}>.</Waviy>
                    <span style={{ marginLeft: '5px' }}></span>
                    <Waviy style={{ '--i': 18 }}>.</Waviy>
                    {/* <span>☆ƪ(˘⌣˘)ʃ☆</span> */}
                </div>
            </LoadingWrapper>
        </S.Container>
    );
};

export default Loading;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 0.1rem solid black;
    background: linear-gradient(to bottom, #e2e2e2, var(--green));
    ${FlexCenter}
    flex-direction:column;
`;

const Emoticon = styled.div`
    font-size: 2vw;
    padding-bottom: 4vw;
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
    font-family: 'Alfa Slab One', cursive;
    position: relative;
    display: inline-block;
    color: ${props => props.color || '#000'};
    text-transform: uppercase;
    animation: ${waviyAnimation} 4.6s infinite;
    animation-delay: calc(0.1s * var(--i));
`;
