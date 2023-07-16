import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
const BackBtn = () => {
    const navigate = useNavigate();
    const handleMoveBack = () => {
        navigate(-1);
    };

    return (
        <Wrapper>
            <AiOutlineLeft size='10vw' onClick={handleMoveBack} />
        </Wrapper>
    );
};
export default BackBtn;

const Wrapper = styled.div`
    position: fixed;
    left: 5%;
    top: 3.5%;
`;
