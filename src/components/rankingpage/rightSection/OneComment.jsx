import { S, M } from '../Ranking.style';
import { TiDelete } from 'react-icons/ti';
import CmtLikeBtn from './CmtLikeBtn';

//자신 댓글인지 확인해서 맞으면 삭제 버튼 & 색상 다르게 보여주기
//현재 시간을 0시간전으로 계산해서 보여주기
const OneComment = ({ isMobile, data }) => {
    const { content, createdAt, heart, replyCount } = data;
    return isMobile ? (
        <M.OneCommentContainer>
            <M.CommentInfo>
                <M.IconContainer>
                    <M.CommentUserName>익명</M.CommentUserName>
                    <M.CommentDate>3시간 전</M.CommentDate>
                </M.IconContainer>
                <M.IconContainer>
                    <TiDelete size='8vw' color='var(--background)' />
                    <CmtLikeBtn isMobile={true} />
                </M.IconContainer>
            </M.CommentInfo>
            <M.CommentText>
                그래 내가 봐도 난 퀀카 i'm hot My boob and booty is hot
                Spotlight 날 봐 I'm a star star star
            </M.CommentText>
        </M.OneCommentContainer>
    ) : (
        <S.OneCommentContainer>
            <S.CommentInfo>
                <S.CommentTextWrapper>
                    <S.CommentUserName>익명</S.CommentUserName>
                    <S.CommentDate>2023.7.9</S.CommentDate>
                </S.CommentTextWrapper>
            </S.CommentInfo>
            <S.CommentText>
                그래 내가 봐도 난 퀀카 i'm hot My boob and booty is hot
                Spotlight 날 봐 I'm a star star star
            </S.CommentText>
            <div style={{ position: 'absolute', right: '3rem', top: '0.4rem' }}>
                <TiDelete size='2rem' color='var(--background)' />
            </div>
            <div
                style={{ position: 'absolute', right: '0.5rem', top: '0.4rem' }}
            >
                <CmtLikeBtn isMobile={false} />
            </div>
        </S.OneCommentContainer>
    );
};

export default OneComment;
