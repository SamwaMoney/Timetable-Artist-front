import styled from 'styled-components';

const OneComment = () => {
    return (
        <Wrapper>
            <div>댓글1</div>
        </Wrapper>
    );
};

export default OneComment;

const Wrapper = styled.div`
    width: 320px;
    height: 100px;
    background-color: var(--green);
    border-radius: 7px;
    border: 0.1rem solid black;
    margin-top: 20px;
`;
