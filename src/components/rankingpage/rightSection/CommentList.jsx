import OneComment from './OneComment';
import styled from 'styled-components';
import { useEffect } from 'react';

const CommentList = ({ isMobile, timetableId }) => {
    //좋아요 변경되면 순서도 바뀜
    //백 api 다시 불러와서 순서 변경할 것

    useEffect(() => {
        //timetableID로 댓글을 불러오는 api 로직
    }, []);

    return isMobile ? (
        <MCommentContainer>
            <OneComment isMobile={true} />
            <OneComment isMobile={true} />
            <OneComment isMobile={true} />
        </MCommentContainer>
    ) : (
        <CommentContainer>
            <OneComment />
            <OneComment />
            <OneComment />
        </CommentContainer>
    );
};
export default CommentList;

const CommentContainer = styled.div`
    margin-top: 0vw;
    margin-bottom: 1vw;
    width: 85%;
`;

const MCommentContainer = styled.div`
    margin-top: 1vw;
    margin-bottom: 15vw;
    width: 85%;
`;
