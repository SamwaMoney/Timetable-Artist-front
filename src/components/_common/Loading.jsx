import React from 'react';
import { FlexCenter, S } from '../rankingpage/Ranking.style';
import styled, { keyframes } from 'styled-components';
//☆ƪ(˘⌣˘)ʃ☆
const Loading = props => {
    return (
        <S.Container>
            <LoadingWrapper>
                <Emoticon> ٩( ᐛ )و </Emoticon>

                <div className='waviy'>
                    <Waviy style={{ '--i': 1 }} color='blue'>
                        {props.title[0]}
                    </Waviy>
                    <Waviy style={{ '--i': 2 }} color='blue'>
                        {props.title[1]}
                    </Waviy>
                    <Waviy style={{ '--i': 3 }} color='blue'>
                        {props.title[2]}
                    </Waviy>
                    <Waviy style={{ '--i': 4 }} color='blue'>
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
    position: relative;
    display: inline-block;
    color: ${props => props.color || '#000'};
    text-transform: uppercase;
    animation: ${waviyAnimation} 6s infinite;
    animation-delay: calc(0.1s * var(--i));
    padding: 1px;
`;
