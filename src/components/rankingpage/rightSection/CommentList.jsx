import OneComment from './OneComment';
import styled from 'styled-components';
const CommentList = () => {
    return (
        <Wrapper>
            <OneComment />
            <OneComment />
            <OneComment />
            <OneComment />
            <OneComment />
            <OneComment />
            <OneComment />
            <OneComment />
        </Wrapper>
    );
};
export default CommentList;

const Wrapper = styled.div`
    margin-top: 0 16px;
`;
