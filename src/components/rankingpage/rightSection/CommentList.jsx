import OneComment from './OneComment';
import styled from 'styled-components';
const CommentList = ({ isMobile }) => {
    console.log(isMobile);
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
    margin-top: 2%;
    margin-bottom: 15vw;
    width: 85%;
`;
