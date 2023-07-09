import OneComment from './OneComment';
import styled from 'styled-components';
const CommentList = () => {
    return (
        <CommentContainer>
            <OneComment />
            <OneComment />
            <OneComment />
        </CommentContainer>
    );
};
export default CommentList;

const CommentContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`;
