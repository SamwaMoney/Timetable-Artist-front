import { S, M } from '../Ranking.style';
import { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import HeartBtn from './LikeBtn';
import NoLike from '../../../assets/rankingpage/heart1.png';
import GetLike from '../../../assets/rankingpage/heart2.png';
//자신 댓글인지 확인해서 맞으면 삭제 버튼 & 색상 다르게 보여주기
//현재 시간을 0시간전으로 계산해서 보여주기
const OneComment = ({ isMobile }) => {
    const [isLike, setIsLike] = useState(true);
    return isMobile ? (
        <M.OneCommentContainer>
            <M.CommentInfo>
                <M.IconContainer>
                    <M.CommentUserName>익명</M.CommentUserName>
                    <M.CommentDate>3시간 전</M.CommentDate>
                </M.IconContainer>
                <M.IconContainer>
                    <TiDelete size='8vw' color='var(--background)' />
                    <HeartBtn isLike={isLike} />
                    {/* {isLike ? (
                        <M.HeartContainer>
                            <M.Icon src={GetLike} />
                            <div>0</div>
                        </M.HeartContainer>
                    ) : (
                        <M.HeartContainer>
                            <M.Icon src={NoLike} />
                            <div>0</div>
                        </M.HeartContainer>
                    )} */}
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
                <TiDelete
                    size='4vw'
                    style={{ marginTop: '-0.6vw', marginRight: '1vw' }}
                    color='var(--background)'
                />
                {isLike ? (
                    <S.CommentLikeWrapper>
                        <S.Icon src={GetLike} />
                        <div>0</div>
                    </S.CommentLikeWrapper>
                ) : (
                    <S.CommentLikeWrapper>
                        <S.Icon src={NoLike} />
                        <div>0</div>
                    </S.CommentLikeWrapper>
                )}
            </S.CommentInfo>
            <S.CommentText>
                그래 내가 봐도 난 퀀카 i'm hot My boob and booty is hot
                Spotlight 날 봐 I'm a star star star
            </S.CommentText>
            <div style={{ position: 'absolute', left: '15rem', top: '0.3rem' }}>
                <TiDelete size='2rem' color='var(--background)' />
            </div>
        </S.OneCommentContainer>
    );
};

export default OneComment;
