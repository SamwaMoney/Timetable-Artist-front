import OneComment from './OneComment';
import styled from 'styled-components';
import { useEffect } from 'react';

const CommentList = ({ isMobile, timetableId }) => {
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
    margin-bottom: 0vw;
    width: 85%;
`;

const MCommentContainer = styled.div`
    margin-top: 3vw;
    margin-bottom: 13vw;
    width: 85%;
`;
