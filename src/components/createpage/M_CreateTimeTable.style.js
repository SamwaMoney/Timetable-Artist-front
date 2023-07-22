import styled from 'styled-components';

const S = {};

S.BasicContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

S.MWrapper = styled.div`
    background-color: var(--background);
    width: 100%;
`;

S.MInnerContainer = styled(S.BasicContainer)`
    padding-top: 4vw;
`;

S.MButtonDiv = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 20vw;

    &.delete {
        display: none;
    }
`;

S.MResetBtn = styled.button`
    width: 13.84vw;
    height: 3vh;

    border-radius: 72px;
    border: 0.05rem solid var(--black);
    background: var(--red, #f22b02);

    font-size: 3vw;
    font-weight: 500;
`;

S.MCompleteBtn = styled.button`
    font-size: 4vw;
    font-weight: 700;

    width: 29.38vw;
    height: 5vh;
    border-radius: 72px;
    border: 0.05rem solid var(--black, #171717);
    background: var(--green, #b0ff00);
`;

S.MTimeTableText = styled.div`
    width: 80%;
    font-size: 5.5vw;
    font-weight: 700;
    padding-top: 10vw;
    padding-bottom: 10%;

    &.delete {
        display: none;
    }
`;

S.MNicknameText = styled.span`
    font-size: 5.5vw;
    font-weight: 700;
    border-bottom: 0.05rem solid black;
    /* padding-bottom: 4px; */
`;

S.MAddButtonDiv = styled.div`
    width: 80%;
    margin-top: 6%;
    margin-bottom: 35%;

    display: flex;
    justify-content: flex-end;
`;

S.MAddButton = styled.img`
    width: 15vw;
    cursor: pointer;
`;

//타임피커
S.PickerWrapper = styled.div`
    position: fixed;
    padding-left: 1vw;
    bottom: 0;
    width: 100vw;
    z-index: 100;
    background-color: var(--background);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    div {
        font-weight: 500;
    }
`;

//장소 피커
S.PlacePickerWrapper = styled.div`
    z-index:200;
    position: fixed;
    bottom: 0;
    background-color:var(--background);
    height: 20vw;
    display: flex;
    flex-direction: column;

    div {
        font-weight: 500;
    }
`;

S.SelectedContainer = styled.div`
    background-color: white;
    width: 80%;
    border-radius: 10vw;
    height: 10vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`;

//타임피커

// S.PickerBtnWrapper = styled.div`
//     padding-bottom: 30vw;
// `;

S.PlacePickerBtnWrapper = styled.div`
    padding-bottom: 20vw;
`;
//장소피커 버튼
S.PlacePickerBtnWrapper = styled.div``;

S.CompleteBtn = styled.button``;
S.PickerWrapper = styled.div`
    padding-top: 10vw;
    overflow: hidden;
    position: fixed;
    padding-left: 4vw;
    bottom: 0;
    width: 100vw;
    left: 0;
    height: 75vw;
    z-index: 100;
    background-color: var(--background);
    display: flex;
    justify-content: space-around;
    div {
        font-weight: 500;
    }
`;

S.SelectedContainer = styled.div`
    background-color: white;
    width: 90%;
    border-radius: 10vw;
    height: 10vw; /* 50px 흰색 배경을 위해 높이 설정 */
    position: absolute; /* 절대 위치로 설정 */
    top: 50%; /* 상단으로 50% 이동 */
    left: 50%; /* 좌측으로 50% 이동 */
    transform: translate(-50%, -50%); /* 가운데 정렬을 위한 변형 */
    z-index: -1; /* 하단으로 이동하여 PickerWrapper 아래에 위치 */
`;

S.MPickerSmallBtn = styled.button`
    /* margin-left: 20vw; */
    margin-top: 4vw;
    width: 18vw;
    height: 8vw;
    margin-bottom: 30vw;
    border-radius: 10vw;
    border: 0.09rem solid var(--black);
    background-color: ${props => (props.color ? props.color : 'red')};
    color: black;
    font-size: 3vw;
    font-weight: 500;
`;
S.TimePickerBtnWrapper = styled.div`
    bottom: 60vw;
    width: 100vw;
    height: 30vw;
    background-color: var(--background);
    position: fixed;
    left: 0;
`;

S.PickerBtnWrapper = styled.div`
    bottom: 70vw;
    width: 100vw;
    height: 19vw;
    background-color: var(--background);
    position: fixed;
    left: 0;
    z-index: 2000;
    display: flex;
    justify-content: space-around;
`;
export { S };
