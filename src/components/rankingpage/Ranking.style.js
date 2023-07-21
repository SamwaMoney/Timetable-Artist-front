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

export const S = {};
export const M = {};
S.BasicContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

M.FlexContainer = styled.div`
    margin-top: 15vw;
    font-style: var(--korean);
    ${FlexCenter}
    flex-direction: column;
    background-color: var(--background);
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
    border: 0.1rem solid black;
`;

S.Header = styled.div`
    margin-top: 7%;
    height: 20%;
    display: block;
`;

S.NewButton = styled.div`
    margin-top: 7%;
    width: 50%;
    padding: 4%;
    border: 0.1rem solid var(--blue);
    font-weight: 500;
    ${FlexCenter}
    color: var(--blue);
    border-radius: 44px;
    background-color: var(--green);
    font-size: 0.9rem;
`;

M.NewButton = styled.div`
    margin-top: 10vw;
    width: 65%;
    padding: 4vw;
    border: 0.1rem solid var(--blue);
    font-weight: 500;
    ${FlexCenter}
    color: var(--blue);
    border-radius: 10vw;
    background-color: var(--green);
    font-size: 4.5vw;
`;

//rank
S.RankNum = styled.div`
    margin-right: 1%;
    width: 60px;
    height: 50px;
    border-radius: 50%;
    ${FlexCenter}
    font-size: 1.8rem;
    font-weight: 700;
    font-family: Montserrat;
    background-color: ${({ isCurrentUser }) =>
        isCurrentUser ? 'var(--green)' : 'white'};
    color: ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
    border: 0.1rem solid
        ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
`;

M.RankNum = styled.div`
    margin-right: 1%;
    width: 20%;
    height: 14vw;
    border-radius: 50%;
    ${FlexCenter}
    font-size: 8vw;
    font-weight: 700;
    font-family: Montserrat;
    background-color: ${({ isCurrentUser }) =>
        isCurrentUser ? 'var(--green)' : 'white'};
    color: ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
    border: 0.1rem solid
        ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
`;

S.UserInfo = styled.div`
    width: 100%;
    height: 3.4rem;
    background-color: ${({ isCurrentUser }) =>
        isCurrentUser ? 'var(--green)' : 'white'};
    border: 0.1rem solid black;
    border-radius: 60px;
    ${FlexCenter}
    position: relative;
    color: ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
    border: 0.1rem solid
        ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
    font-size: 1rem;
`;
M.UserInfo = styled.div`
    width: 100%;
    height: 14vw;
    background-color: ${({ isCurrentUser }) =>
        isCurrentUser ? 'var(--green)' : 'white'};
    border: 0.1rem solid black;
    border-radius: 7vw;
    ${FlexCenter}
    position: relative;
    color: ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
    border: 0.1rem solid
        ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
`;
M.OneRankWrapper = styled.div`
    width: 100%;
    position: relative;
    ${FlexCenter}
    flex-direction:column;
`;
S.RankContainer = styled.div`
    margin-top: 5%;
    font-family: Montserrat;
    width: 80%;
    height: 100%;
    margin-bottom: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

M.RankContainer = styled.div`
    font-family: Montserrat;
    width: 85%;
    height: 100%;
    margin-top: 7vw;
    margin-bottom: 2vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

//탭 css
S.TabContainer = styled.div`
    margin-top: 6%;
    width: 75%;
    ${FlexCenter};
`;
M.TabContainer = styled.div`
    margin-top: 7%;
    width: 75%;
    ${FlexCenter};
`;

S.Tab = styled.div`
    width: 50%;
    padding-bottom: 3%;
    font-size: 0.8rem;
    font-weight: 500;
    ${FlexCenter};
    border-bottom: ${({ active }) =>
        active ? '5px solid black' : '2.5px solid black'};
    cursor: pointer;
`;
M.Tab = styled.div`
    width: 50%;
    padding-bottom: 3%;
    font-size: 4vw;
    font-weight: 500;
    ${FlexCenter};
    border-bottom: ${({ active }) =>
        active ? '1.2vw solid black' : '0.6vw solid black'};
    cursor: pointer;
`;

//토글 css
S.ToggleContainer = styled.div`
    ${FlexCenter}
    margin-top: 10%;
    margin-left: -30%;
`;
M.ToggleWrapper = styled.div`
    ${FlexCenter}
    width:100%;
    height: 100%;
    margin-top: 10%;
`;
M.ToggleContainer = styled.div`
    margin-left: -30%;
    width: 12vw;
    height: 6vw;
    ${FlexCenter}
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

M.ToggleButton = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 0.1rem solid black;
    border-radius: 3.5vw;
    cursor: pointer;
`;

S.Slider = styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: ${props =>
        props.sort === 'lowest' ? '#f22b02' : '#1962ed'};
    border: 1.3px solid black;
    border-radius: 50%;
    top: 50%;
    left: ${props => (props.sort === 'lowest' ? '17px' : '1px')};
    transform: translate(0, -50%);
    transition: left 0.2s ease;
`;

M.Slider = styled.div`
    position: absolute;
    width: 4.5vw;
    height: 4.5vw;
    background-color: ${props =>
        props.sort === 'lowest' ? '#f22b02' : '#1962ed'};
    border: 1.3px solid black;
    border-radius: 50%;
    top: 50%;
    left: ${props => (props.sort === 'lowest' ? '6.2vw' : '1vw')};
    transform: translate(0, -50%);
    transition: left 0.2s ease;
`;

S.ToggleText = styled.div`
    font-size: 0.7rem;
    margin-left: 10px;
    color: black;
`;

M.ToggleText = styled.div`
    font-size: 3.5vw;
    margin-left: 3vw;
    color: black;
`;

//내 점수 보기
S.MyScoreContainer = styled.div`
    margin-top: 10%;
    width: 77%;
    height: 5.1rem;
    border-radius: 20px;
    border: 0.1rem solid var(--blue);
    color: var(--blue);
    background: var(--background-green);
    ${FlexCenter};
    padding: 0.5rem 0;
`;
M.MyScoreWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
M.MyScoreContainer = styled.div`
    background-color: blue;
    margin-top: 10%;
    width: 75%;
    border-radius: 20px;
    border: 0.1rem solid var(--blue);
    color: var(--blue);
    background: var(--background-green);
    ${FlexCenter};
    padding: 2vw 0;
`;

//FlexBox
S.FlexBox = styled.div`
    margin: 0 2rem;
    ${FlexCenter}
    flex-direction: column;
`;

M.FlexBox = styled.div`
    margin: 0 2rem;
    ${FlexCenter}
    flex-direction: column;
`;

//내점수 보기 상단 제목
S.Text = styled.div`
    font-family: Montserrat;
    font-size: 0.9rem;
    font-weight: 500;
`;

M.Text = styled.div`
    font-family: Montserrat;
    font-size: 3.5vw;
    font-weight: 500;
    margin-bottom: 5%;
`;

S.RankText = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 5%;
`;
M.RankText = styled.div`
    font-weight: 700;
    font-size: 7vw;
    margin-top: 5%;
`;

//점수 list
S.List = styled.div`
    ${FlexCenter}
    flex-direction:column;
    margin-bottom: 10%;
    width: 100%;
`;
M.List = styled.div`
    ${FlexCenter}
    flex-direction:column;
    margin-bottom: 10%;
    width: 100%;
`;

//rightSection : 개별 유저 section

S.RankUserContainer = styled.div`
    font-family: Montserrat;
    ${FlexCenter}
    margin-top:10%;
    width: 70%;
    justify-content: space-between;
`;

S.NameContainer = styled.div`
    position: absolute;
    left: 5%;
`;

S.Score = styled.div`
    font-size: 1rem;
    font-weight: 500;
    position: absolute;
    left: 5%;
`;

M.Score = styled.div`
    font-family: Montserrat;
    font-size: 4vw;
    font-weight: 500;
    position: absolute;
    left: 5%;
`;

S.NameText = styled.div`
    font-size: 0.6rem;
`;

S.CategoryContainer = styled.div`
    ${FlexCenter}
    flex-direction: column;
    padding-left: 1.6rem;
`;

M.CategoryContainer = styled.div`
    padding-left: 5vw;
    display: flex;
    ${FlexCenter}
    flex-direction: column;
`;

S.Category = styled.div`
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.2rem;
`;
M.Category = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 5px;
    font-weight: 700;
    font-size: 4.1vw;
    margin-bottom: 0.2rem;
`;
S.Nickname = styled.div`
    font-size: 1rem;
`;
M.Nickname = styled.div`
    font-size: 4.2vw;
    margin-bottom: 2vw;
`;

//버튼 컨테이너
S.ButtonContainer = styled.div`
    width: 85%;
    border-radius: 5px;
    display: flex;
    position: relative;
    margin-top: 1.2rem;
`;
M.TimeTableWrapper = styled.div`
    ${FlexCenter}
    position: relative;
    margin-left: 15%;
    img {
        width: 80%;
        height: 80%;
    }
`;

M.ButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 10vw;
    height: 10vw;
    display: flex;
    div {
        width: 40vw;
    }
    img {
        width: 5vw;
        height: 5vw;
    }
    p {
        border-radius: 40%;
        font-size: 4.5vw;
    }
`;

M.DetailBtnContainer = styled.div`
    display: flex;
    margin-top: 5vw;
    margin-left: -55vw;
    margin-bottom: 2vw;
    div {
        width: 200vw;
    } */
`;
S.IconButton = styled.button`
    width: 18%;
    height: 100%;
    background-color: var(--red);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    font-family: Montserrat;
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 5px;
`;

M.IconButton = styled.button`
    width: 13vw;
    height: 7vw;
    background-color: var(--red);
    border-radius: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    font-family: Montserrat;
    font-weight: 500;
    margin-right: 1vw;
    p {
        font-size: 4vw;
    }
`;

S.Icon = styled.img`
    z-index: 10;
    width: 1.5rem;
    height: 1.5rem;
`;
M.IconContainer = styled.div`
    ${FlexCenter}
`;

M.HeartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4vw;
    padding-left: 2.5vw;
    div {
        font-size: 4vw;
        padding-top: 1vw;
    }
`;
M.Icon = styled.img`
    width: 7vw;
    height: 7vw;
`;

S.CommentIcon = styled.img`
    width: 7vw;
    height: 7vw;
    right: 3vw;
`;

M.CommentIcon = styled.img`
    width: 6vw;
    height: 6vw;
`;

//댓글
M.OneCommentContainer = styled.div`
    background-color: var(--white);
    border-radius: 7px;
    border: 0.1rem solid black;
    margin-top: 2vw;
    margin-bottom: 2.4rem;
    padding: 2vw;
    display: flex;
    flex-direction: column;
`;

S.OneCommentContainer = styled.div`
    background-color: white;
    border-radius: 7px;
    border: 0.1rem solid black;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.5rem;
    position: relative;
`;

S.CommentInfo = styled.div`
    display: flex;
    padding-bottom: 0.5rem;
    width: 100%;
    position: relative;
`;
M.CommentInfo = styled.div`
    ${FlexCenter}
    justify-content:space-between;
    width: 100%;
    height: 10vw;
`;

S.CommentUserName = styled.div`
    padding-right: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
`;

M.CommentUserName = styled.div`
    font-size: 4vw;
    font-weight: 600;
`;

S.CommentDate = styled.div`
    font-size: 0.8rem;
`;

M.CommentDate = styled.div`
    font-size: 4vw;
    padding-left: 3vw;
    color: var(--grey);
`;

S.CommentText = styled.div`
    font-size: 0.9rem;
    padding-bottom: 0rem;
    width: 80%;
`;

M.CommentText = styled.div`
    font-size: 4vw;
    width: 75%;
`;

S.FlexContainer = styled.div`
    display: flex;
`;

//시간표 목업 사진
S.TimeTable = styled.img`
    width: 95%;
    height: 95%;
    background-color: #888;
    border: 1px solid black;
    margin-top: 0.8rem;
`;

//댓글 쓰기 컴포넌트
S.NewCommentWrapper = styled.div`
    margin-top: 5%;
    margin-bottom: 3%;
    width: 85%;
    font-size: 1.4rem;
    padding: 0.5rem 0.5rem;
    border-radius: 2rem;
    border: none;
    display: flex;
    align-items: center;
    background-color: white;
    position: relative;
`;
M.NewCommentWrapper = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: var(--background);
    ${FlexCenter}
    height: 16vw;
    z-index: 100;
`;
M.NewCommentContainer = styled.div`
    width: 90%;
    background-color: white;
    height: 70%;
    border-radius: 10vw;
`;

S.CommentInput = styled.input`
    border: none;
    height: 2rem;
`;

M.CommentInput = styled.input`
    padding-left: 10vw;
    font-size: 4.3vw;
    border: none;
    border-radius: 5rem;
    z-index: 10;
    padding: 3vw;
    width: 80%;
`;
S.UploadImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 5rem;
    position: absolute;
    right: 1rem;
`;
M.UploadImg = styled.img`
    position: absolute;
    top: 4vw;
    right: 6.5vw;
    height: 7.7vw;
`;

S.OneUserName = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--blue);
    margin-top: 0.8rem;
`;

S.OneUserNameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

S.TimeTableText = styled.div`
    font-size: 1rem;
    margin-left: 0.4rem;
    margin-top: 0.8rem;
`;

S.RankUserName = styled.div`
    font-size: 20px;
`;

//모바일 디테일 페이지
M.DetailWrapper = styled.div`
    width: 100%;
    padding-top: 15vw;
    ${FlexCenter}
    flex-direction: column;
    background-color: var(--background);
`;

M.CommentWrapper = styled.div`
    ${FlexCenter}
    div {
        width: 85vw;
        padding: 1vw;
        font-size: 4vw;
    }
`;

S.CommentTextWrapper = styled.div`
    display: flex;
    padding-top: 1vw;
    width: 30vw;
`;

M.CommentTextWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 5vw;
    background-color: skyblue;
`;

S.CommentLikeWrapper = styled.div`
    display: absolute;
    top: 0.2vw;
    right: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
S.CommentLikeNum = styled.div`
    padding-top: 0.25rem;
    position: absolute;
    top: 2rem;
`;

M.CommentLikeWrapper = styled.div`
    display: flex;
`;
