import { styled, css } from 'styled-components';

export const FlexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

//웹 스타일 객체
export const S = {};
//모바일 스타일 객체
export const M = {};

S.BasicContainer = styled.div`
    ${FlexCenter}
`;

M.FlexContainer = styled.div`
    margin-top: 15vw;
    font-style: var(--korean);
    ${FlexCenter}
    flex-direction: column;
    background-color: var(--background);
`;

S.Wrapper = styled(S.BasicContainer)`
    font-family: Montserrat;
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

//시간표 등록하기 버튼
const NewButton = styled.div`
    border: 0.1rem solid var(--blue);
    font-weight: 500;
    ${FlexCenter}
    color: var(--blue);
    background-color: var(--green);
    width: 50%;
`;

S.NewButton = styled(NewButton)`
    margin-top: 7%;
    padding: 4%;
    border-radius: 44px;
    font-size: 0.9rem;
`;

M.NewButton = styled(NewButton)`
    margin-top: 10vw;
    padding: 4vw;
    border-radius: 10vw;
    font-size: 4vw;
`;

//rank
const RankNum = styled.div`
    ${FlexCenter}
    margin-right: 1%;
    border-radius: 50%;
    font-weight: 600;
    font-family: Montserrat;
    background-color: ${({ isCurrentUser }) =>
        isCurrentUser ? 'var(--green)' : 'white'};
    color: ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
    border: 0.1rem solid
        ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
`;
S.RankNum = styled(RankNum)`
    width: 5rem;
    height: 4rem;
    font-size: 2rem;
`;

M.RankNum = styled(RankNum)`
    width: 20%;
    height: 14vw;
    font-size: 8vw;
`;

//UserInfo
const UserInfo = styled.div`
    width: 100%;
    background-color: ${({ isCurrentUser }) =>
        isCurrentUser ? 'var(--green)' : 'white'};
    color: ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
    border: 0.1rem solid
        ${({ isCurrentUser }) => (isCurrentUser ? 'var(--blue)' : 'black')};
    ${FlexCenter}
    position: relative;
`;

S.UserInfo = styled(UserInfo)`
    height: 4rem;
    border-radius: 60px;
    font-size: 1rem;
`;

M.UserInfo = styled(UserInfo)`
    height: 14vw;
    border-radius: 7vw;
`;

M.OneRankWrapper = styled.div`
    width: 100%;
    position: relative;
    ${FlexCenter}
    flex-direction:column;
`;

//개별 rank
const RankContainer = styled.div`
    font-family: Montserrat;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

S.RankContainer = styled(RankContainer)`
    margin-top: 1rem;
    width: 75%;
    margin-bottom: 3%;
`;

M.RankContainer = styled(RankContainer)`
    width: 85%;
    margin-top: 7vw;
    margin-bottom: 2vw;
`;

//탭
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

const Tab = styled.div`
    width: 50%;
    padding-bottom: 3%;
    font-weight: 500;
    ${FlexCenter};
    border-bottom: ${({ active }) =>
        active ? '5px solid black' : '2.5px solid black'};
    cursor: pointer;
`;

S.Tab = styled(Tab)`
    font-size: 1rem;
`;
M.Tab = styled(Tab)`
    font-size: 4vw;
`;

//토글
const ToggleWrapper = styled.div`
    ${FlexCenter}
    width:100%;
`;
S.ToggleWrapper = styled(ToggleWrapper)`
    height: 4rem;
`;

M.ToggleWrapper = styled(ToggleWrapper)`
    margin-top: 5vw;
    height: 100%;
`;

S.ToggleContainer = styled.div`
    ${FlexCenter}
    margin-left: -30%;
    width: 12vw;
    height: 6vw;
`;

const ToggleButton = styled.div`
    position: relative;
    background-color: white;
    cursor: pointer;
`;

S.ToggleButton = styled(ToggleButton)`
    width: 2.2rem;
    height: 1.2rem;
    border: 1.3px solid black;
    border-radius: 19px;
`;

M.ToggleButton = styled(ToggleButton)`
    width: 100%;
    height: 100%;
    border: 0.1rem solid black;
    border-radius: 3.5vw;
`;

//토글 슬라이더
const Slider = styled.div`
    background-color: ${props =>
        props.sort === 'lowest' ? '#f22b02' : '#1962ed'};
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translate(0, -50%);
    transition: left 0.2s ease;
`;

S.Slider = styled(Slider)`
    width: 15px;
    height: 15px;
    border: 1.3px solid black;
    left: ${props => (props.sort === 'lowest' ? '17px' : '1px')};
`;

M.Slider = styled(Slider)`
    width: 4.5vw;
    height: 4.5vw;
    border: 1.3px solid black;
    left: ${props => (props.sort === 'lowest' ? '6.2vw' : '1vw')};
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
const MyScoreContainer = styled.div`
    margin-top: 10%;
    width: 75%;
    border-radius: 20px;
    border: 0.1rem solid var(--blue);
    color: var(--blue);
    background: var(--background-green);
    ${FlexCenter};
`;

S.MyScoreContainer = styled(MyScoreContainer)`
    height: 5.1rem;
    padding: 0.5rem 0;
`;

M.MyScoreContainer = styled(MyScoreContainer)`
    padding: 2vw 0;
`;

M.MyScoreWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

//FlexBox
S.FlexBox = styled.div`
    margin: 0 2rem;
    ${FlexCenter}
    flex-direction: column;
`;

//내점수 보기 상단 제목
S.Text = styled.div`
    font-size: 1rem;
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
    font-size: 1.7vw;
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

const Score = styled.div`
    font-weight: 500;
    position: absolute;
    left: 5%;
    font-family: Montserrat;
    width: 20%;
`;

S.Score = styled(Score)`
    font-size: 1rem;
`;

M.Score = styled(Score)`
    font-size: 4vw;
`;

S.NameText = styled.div`
    font-size: 0.6rem;
`;

const CategoryContainer = styled.div`
    ${FlexCenter};
    flex-direction: column;
    width: 80%;
`;

S.CategoryContainer = styled(CategoryContainer)`
    padding-left: 1.6rem;
`;

M.CategoryContainer = styled(CategoryContainer)`
    padding-left: 5vw;
`;

S.Category = styled.div`
    font-weight: 600;
    font-size: 1vw;
    margin-bottom: 0.4rem;
`;
M.Category = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 5px;
    font-weight: 600;
    font-size: 4.1vw;
    margin-bottom: 0.2rem;
`;

S.Nickname = styled.div`
    font-size: 1vw;
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

M.ButtonContainer = styled.div`
    position: absolute;
    bottom: 1vw;
    right: 10vw;
    display: flex;
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

M.DetailBtnContainer = styled.div`
    display: flex;
    margin-top: 5vw;
    margin-left: -50vw;
    margin-bottom: 2vw;
`;

const IconButton = styled.button`
    background-color: var(--red);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    font-family: Montserrat;
    font-weight: 500;
`;

S.IconButton = styled(IconButton)`
    width: 4vw;
    height: 2vw;
    border-radius: 5px;
    font-size: 0.9rem;
    margin: 0 5px;
    p {
        font-size: 1rem;
    }
`;

M.IconButton = styled(IconButton)`
    width: 16vw;
    height: 8vw;
    border-radius: 2vw;
    margin-right: 1vw;
    p {
        font-size: 4vw;
    }
`;

S.EventIcon = styled.img`
    width: ${props => (props.width ? props.width : '2vw')}rem;
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.3);
    }
`;

S.NoEventIcon = styled.img`
    width: ${props => (props.width ? props.width : '2vw')}rem;
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

//댓글
const OneCommentContainer = styled.div`
    background-color: white;
    border: 0.1rem solid black;
    border-radius: 7px;
`;

M.OneCommentContainer = styled(OneCommentContainer)`
    margin-top: 1vw;
    margin-bottom: 2.4rem;
    padding: 2vw;
    display: flex;
    flex-direction: column;
`;

S.OneCommentContainer = styled(OneCommentContainer)`
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
    font-size: 1vw;
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
    font-size: 0.9vw;
    width: 80%;
    font-family: 'Gothic A1', sans-serif;
    line-height: normal;
`;

M.CommentText = styled.div`
    font-size: 4vw;
    width: 75%;
    line-height: normal;
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
    padding-top: 0.5rem;
    width: 30vw;
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
