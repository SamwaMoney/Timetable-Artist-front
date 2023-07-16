import OneComment from './OneComment';
import styled from 'styled-components';
const CommentList = ({ isMobile }) => {
    return (
        <CommentContainer>
            <OneComment isMobile={isMobile} />
            <OneComment isMobile={isMobile} />
            <OneComment isMobile={isMobile} />
        </CommentContainer>
    );
};
export default CommentList;

const CommentContainer = styled.div`
    margin-top: 5%;
    width: 75%;
`;
