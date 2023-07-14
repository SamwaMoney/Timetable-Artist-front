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
    border: 1px solid black;
`;

S.Header = styled.div`
    margin-top: 7%;
    height: 20%;
    display: block;
`;

S.NewButton = styled.div`
    width: 160%;
    margin-left: -30%;
    padding: 10% 10% 10% 10%;
    border: 0.1rem solid var(--blue);
    font-weight: 500;
    ${FlexCenter}
    color: var(--blue);
    border-radius: 44px;
    background-color: var(--green);
    font-size: 0.9rem;
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
    height: 13vw;
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
    padding: 8%;
    background-color: ${({ isCurrentUser }) =>
        isCurrentUser ? 'var(--green)' : 'white'};
    border: 0.1rem solid black;
    border-radius: 70px;
    ${FlexCenter}
    position: relative;
    color: ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
    border: 0.1rem solid
        ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
    font-size: 1rem;
`;

S.RankContainer = styled.div`
    font-family: Montserrat;
    width: 80%;
    height: 100%;
    margin-top: 5%;
    margin-bottom: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

M.RankContainer = styled.div`
    font-family: Montserrat;
    width: 80%;
    height: 100%;
    margin-top: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

//탭 css
S.TabContainer = styled.div`
    margin-top: 6%;
    height: 15%;
    width: 75%;
    ${FlexCenter};
`;
M.TabContainer = styled.div`
    margin-top: 6%;
    height: 15%;
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
    font-size: 2.2vw;
    font-weight: 500;
    ${FlexCenter};
    border-bottom: ${({ active }) =>
        active ? '5px solid black' : '2.5px solid black'};
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
    margin-left: -50%;
    width: 13.5%;
    height: 60px;
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
    border-radius: 30px;
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

M.Slider = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: ${props =>
        props.sort === 'worst' ? '#f22b02' : '#1962ed'};
    border: 1.3px solid black;
    border-radius: 50%;
    top: 50%;
    left: ${props => (props.sort === 'worst' ? '95px' : '5px')};
    transform: translate(0, -50%);
    transition: left 0.2s ease;
`;

S.ToggleText = styled.div`
    font-size: 0.7rem;
    margin-left: 10px;
    color: black;
`;

M.ToggleText = styled.div`
    font-size: 2vw;
    margin-left: 10px;
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
    font-size: 3vw;
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
    font-size: 6vw;
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
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 23%;
    padding-right: 3%;
`;

M.CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 23%;
    padding-right: 3%;
`;

S.Category = styled.div`
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
`;
M.Category = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: 700;
    font-size: 3.7vw;
    margin-bottom: 0.2rem;
`;
S.Nickname = styled.div`
    font-size: 0.9rem;
    margin-left: 2rem;
`;
M.Nickname = styled.div`
    font-family: Montserrat;
    font-size: 2.5rem;
`;

//버튼 컨테이너
S.ButtonContainer = styled.div`
    width: 75%;
    border-radius: 5px;
    display: flex;
    position: relative;
    margin-top: 1.2rem;
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
    font-size: 10px;
    font-weight: 600;
    margin: 0 5px;
`;

S.Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`;

//댓글
S.OneCommentContainer = styled.div`
    background-color: var(--green);
    border-radius: 7px;
    border: 0.1rem solid black;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
`;

S.CommentInfo = styled.div`
    display: flex;
    width: 80%;
    padding-bottom: 0.5rem;
`;

S.CommentUserName = styled.div`
    padding-right: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
`;

S.CommentDate = styled.div`
    font-size: 0.8rem;
`;

S.CommentText = styled.div`
    font-size: 0.9rem;
`;

//시간표 목업 사진
S.TimeTable = styled.img`
    width: 75%;
    height: 75%;
    background-color: #888;
    border: 1px solid black;
    margin-top: 0.8rem;
`;

//댓글 쓰기 컴포넌트
S.NewCommentWrapper = styled.div`
    margin-top: 5%;
    width: 75%;
    font-size: 1.2vw;
    padding: 0.5rem 0.5rem;
    border-radius: 2rem;
    border: none;
    display: flex;
    align-items: center;
    background-color: white;
`;

S.CommentInput = styled.textarea`
    width: 80%;
    padding-left: 20px;
    font-size: 1.2vw;
    border: none;
`;

S.UploadImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 20px;
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

S.Bedge = styled.div`
    margin-top: 5px;
    height: 20px;
    border: 5px;
    border-radius: 5px;
    padding: 3px;
    font-weight: 500;
    background-color: red;
    color: white;
    margin-left: 10px;
`;
S.Bedge2 = styled.div`
    margin-top: 5px;
    height: 20px;
    border: 5px;
    border-radius: 5px;
    padding: 3px;
    font-weight: 500;
    background-color: violet;
    color: white;
    margin-left: 10px;
`;
S.Bedge3 = styled.div`
    margin-top: 5px;
    height: 20px;
    border: 5px;
    border-radius: 5px;
    padding: 3px;
    font-weight: 500;
    background-color: yellowgreen;
    color: white;
    margin-left: 10px;
`;
S.BedgeContainer = styled.div`
    ${FlexCenter}
    width: 80%;
    height: 30px;
    margin-top: 10px;
`;
S.RankUserName = styled.div`
    font-size: 20px;
`;
