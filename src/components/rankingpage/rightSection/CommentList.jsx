import OneComment from './OneComment';
import styled from 'styled-components';
const CommentList = ({ isMobile }) => {
    console.log(isMobile);
    return isMobile ? (
        <MCommentContainer>
            <OneComment isMobile={isMobile} />
            <OneComment isMobile={isMobile} />
            <OneComment isMobile={isMobile} />
        </MCommentContainer>
    ) : (
        <CommentContainer>
            <OneComment isMobile={isMobile} />
            <OneComment isMobile={isMobile} />
            <OneComment isMobile={isMobile} />
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
