import styled from 'styled-components';

const S = {};

const INPUTWIDTH = 65;
const INPUTHEIGHT = 2.4;
const FONTBASICSIZE = 3.5;

S.MModalContainer = styled.div`
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    align-items: flex-end;
`;

S.MModal = styled.div`
    width: 100vw;
    height: 160vw;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;

    border-radius: 27px 27px 0 0;
    flex-direction: column;

    overflow-y: auto;
`;

// 모달 헤더 부분

S.MModalHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

S.MModalHandleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2.5% 0;
`;

S.MModalHandle = styled.div`
    width: 14vw;
    height: 0.7vh;
    background-color: #e2e2e2;
`;

S.MModalXContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80vw;
    margin-left: auto;
    margin-right: auto;

    cursor: pointer;
`;

S.MModalTitleText = styled.span`
    font-size: 5vw;
    font-weight: 700;
`;

S.MModalXImg = styled.img`
    width: 6%;
`;

// 모달 content 부분

S.MInputContainer = styled.div`
    width: 70vw;
    display: flex;

    margin-top: 7.5%;
    &.timeinput {
        align-items: flex-start;
    }
`;

S.MBasicText = styled.div`
    font-size: ${FONTBASICSIZE}vw;
    font-weight: 500;
`;

S.MMainText = styled(S.MBasicText)`
    font-weight: 600;
    line-height: ${INPUTHEIGHT}rem;
`;

S.MMainTextDiv = styled.div`
    display: flex;
    width: 25vw;
`;

S.MRedCircle = styled.div`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: red;

    margin-left: 3%;
`;

S.MPlaceInput = styled.div`
    width: ${INPUTWIDTH}%;
    height: ${INPUTHEIGHT}rem;

    border-radius: 60px;
    border: 0.05rem solid var(--black);
    background: #fff;
    padding-left: 6%;
    font-size: ${FONTBASICSIZE}vw;
    font-weight: 500;

    display: flex;
    align-items: center;
`;

S.MTimeInputDiv = styled.div`
    width: 50vw;
`;

S.MTimeInput = styled(S.MPlaceInput)`
    margin-left: 6vw;
    padding: 0 14%;
    justify-content: space-between;
    /* width: 100%; */
    width: 44vw;

    &.ischecked {
        pointer-events: none;
        opacity: 0.7;
    }
`;

S.MNameInput = styled.input`
    /* width: 14.45rem; */
    width: ${INPUTWIDTH}%;
    height: ${INPUTHEIGHT}rem;

    border-radius: 60px;
    border: 0.05rem solid var(--black);
    background: #fff;

    padding-left: 6%;
    font-family: Gothic A1;
    font-size: ${FONTBASICSIZE}vw;
    font-weight: 500;
    line-height: normal;
`;

S.MAddButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-top: 6%;
`;

S.MAddButton = styled.img`
    width: 17%;
    cursor: pointer;

    &.ischecked {
        visibility: hidden;
    }
`;

S.MCheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

S.MCheckBox = styled.input`
    width: 20px;
    height: 20px;
`;

S.MCheckBoxText = styled.div`
    font-size: 3vw;
    font-weight: 500;
`;

S.MCompleteButtonDiv = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 50%;
`;

S.MCompleteButton = styled.button`
    font-size: 4vw;
    font-weight: 700;
    color: white;

    width: 66vw;
    height: 6vh;

    border: 0.05rem solid var(--black, #171717);
    border-radius: 100px;
    background-color: var(--blue, #1962ed);
`;

export { S };
