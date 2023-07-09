import { styled, css } from 'styled-components';

export const FlexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FlexMiddle = css`
    display: flex;
    justify-content: center;
`;

const S = {};

S.BasicContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

S.Wrapper = styled(S.BasicContainer)`
    background-color: var(--background);
    height: 100vh;
    width: 100vw;
`;

S.Container = styled(S.BasicContainer)`
    margin-left: 1%;
    width: 60%;
    height: 70%;
    display: flex;
    justify-content: space-between;
`;

S.SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 49.5%;
    height: 100%;
    overflow-y: scroll;
    border: 1px solid black;
`;

S.Header = styled.div`
    margin-top: 1.7rem;
`;

S.NewButton = styled.div`
    margin-top: 46px;
    width: 194px;
    height: 44px;
    border: 0.1rem solid black;
    font-weight: 500;
    ${FlexCenter}
    color: var(--blue);
    border-radius: 44px;
    background-color: var(--green);
    text-align: center;
    font-size: 14px;
`;

//탭 css
S.TabContainer = styled.div`
    margin-top: 1.7rem;
    height: 2.3rem;
    ${FlexCenter};
`;

S.Tab = styled.div`
    width: 12.3rem;
    height: 1.65rem;
    font-size: 14px;
    font-weight: 500;
    ${FlexCenter};
    border-bottom: ${({ active }) =>
        active ? '5px solid black' : '3px solid black'};
    cursor: pointer;
`;

//토글 css
S.ToggleContainer = styled.div`
    ${FlexCenter}
    margin-top: 1.7rem;
    margin-left: -10rem;
    margin-bottom: 1rem;
`;

S.ToggleButton = styled.div`
    position: relative;
    width: 2.2rem;
    height: 1.2rem;
    background-color: white;
    border: 1.3px solid black;
    border-radius: 19px;
    cursor: pointer;
`;

S.Slider = styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: ${props =>
        props.sort === 'worst' ? '#f22b02' : '#1962ed'};
    border: 1.3px solid black;
    border-radius: 50%;
    top: 50%;
    left: ${props => (props.sort === 'worst' ? '17px' : '1px')};
    transform: translate(0, -50%);
    transition: left 0.2s ease;
`;

S.Text = styled.div`
    font-size: 10px;
    margin-left: 6px;
`;

//내 점수 보기
S.MyScoreContainer = styled.div`
    width: 20.1rem;
    height: 5.1rem;
    border-radius: 20px;
    border: 0.1rem solid var(--black, #171717);
    background: var(--background-green);
    ${FlexCenter};
`;

S.TextBox = styled.div`
    margin: 0 2rem;
`;

S.Text = styled.div`
    color: var(--blue);
    text-align: center;
    font-family: Gothic A1;
    font-size: 14px;
    font-weight: 600;
`;

S.RankText = styled.div`
    color: var(--blue);
    text-align: center;
    font-family: Montserrat;
    font-size: 36px;
    font-weight: 600;
`;

//점수 list
S.List = styled.div`
    ${FlexCenter}
    flex-direction:column;
    margin-bottom: 2rem;
`;

//rightSection : 개별 유저 section

//RankUser
S.RankNum = styled.div`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: var(--green);
    border: 0.1rem solid var(--blue);
    ${FlexCenter}
    font-size:36px;
    font-weight: 700;
    color: var(--blue);
    font-family: Montserrat;
`;

S.UserInfo = styled.div`
    width: 294px;
    height: 60.588px;
    background-color: var(--green);
    border: 0.1rem solid var(--blue);
    border-radius: 60px;
    ${FlexCenter}
    position:relative;
    color: var(--blue);
`;

S.RankUserContainer = styled.div`
    font-family: Montserrat;
    height: 60.588px;
    ${FlexCenter}
    margin-top:32px;
    width: 361px;
    justify-content: space-between;
`;

S.NameContainer = styled.div`
    position: absolute;
    left: 20px;
`;

S.Score = styled.div`
    font-size: 17px;
`;

S.NameText = styled.div`
    font-size: 12px;
`;

S.Category = styled.div`
    width: 180px;

    position: absolute;
    left: 90px;
`;

//버튼 컨테이너
S.ButtonContainer = styled.div`
    width: 200px
    height: 25px;
    border-radius: 5px;
    display:flex;
    position:relative;
    left:-100px;
    margin-top:19px;

`;

S.IconButton = styled.button`
    width: 55px;
    height: 25px;
    background-color: var(--red);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 600;
    margin: 0 5px;
`;

//댓글
S.OneCommentContainer = styled.div`
    width: 320px;
    height: 100px;
    background-color: var(--green);
    border-radius: 7px;
    border: 0.1rem solid black;
    margin-top: 10px;
    padding: 0.5rem 1rem;
`;

S.CommentInfo = styled.div`
    display: flex;
    width: 80%;
    padding-bottom: 0.5rem;
`;

S.CommentUserName = styled.div`
    padding-right: 0.5rem;
    font-weight: 600;
`;

S.CommentDate = styled.div``;

S.CommentText = styled.div``;

//시간표 목업 사진
S.TimeTable = styled.img`
    width: 358px;
    height: 385px;
    background-color: #888;
    border: 1px solid black;
    margin-top: 26px;
`;

export default S;
