import { S, M } from '../Ranking.style';
import NoLike from '../../../assets/rankingpage/heart1.png';
import GetLike from '../../../assets/rankingpage/heart2.png';
import { useState } from 'react';

const OneComment = ({ isMobile }) => {
    const [isLike, setIsLike] = useState(true);
    return isMobile ? (
        <M.OneCommentContainer>
            {/* <S.CommentInfo>
                <S.CommentLikeWrapper>
                    <S.CommentUserName>익명</S.CommentUserName>
                    <S.CommentDate>2023.7.9</S.CommentDate>
                </S.CommentLikeWrapper>
                <S.CommentLikeWrapper>
                    <M.Icon src={NoLike} />
                    <M.LikeNum>0</M.LikeNum>
                </S.CommentLikeWrapper>
            </S.CommentInfo> */}
            <S.CommentText>
                그래 내가 봐도 난 퀀카 i'm hot My boob and booty is hot
                Spotlight 날 봐 I'm a star star star
            </S.CommentText>
        </M.OneCommentContainer>
    ) : (
        <S.OneCommentContainer>
            <S.CommentInfo>
                <S.CommentTextWrapper>
                    <S.CommentUserName>익명</S.CommentUserName>
                    <S.CommentDate>2023.7.9</S.CommentDate>
                </S.CommentTextWrapper>
                <S.CommentLikeWrapper>
                    <S.Icon src={NoLike} />
                    <p>0</p>
                </S.CommentLikeWrapper>
            </S.CommentInfo>
            <S.CommentText>
                그래 내가 봐도 난 퀀카 i'm hot My boob and booty is hot
                Spotlight 날 봐 I'm a star star star
            </S.CommentText>
        </S.OneCommentContainer>
    );
};

export default OneComment;
