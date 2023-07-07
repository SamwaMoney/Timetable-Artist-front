import { styled } from 'styled-components';
import { FlexCenter } from '../Ranking.style';
import Like from '../../../assets/rankingpage/like.png';
import Comment from '../../../assets/rankingpage/comment.png';

const ButtonContainer = () => {
    return (
        <Wrapper>
            <IconButton>
                <img src={Like} alt='하트' />
                11
            </IconButton>
            <IconButton>
                <img src={Comment} alt='하트' />
                11
            </IconButton>
        </Wrapper>
    );
};

export default ButtonContainer;

const Wrapper = styled.div`
    width: 200px
    height: 25px;
    border-radius: 5px;
    display:flex;
    position:relative;
    left:-100px;
    margin-top:19px;

`;

const IconButton = styled.button`
    width: 55px;
    height: 25px;
    background-color: var(--red);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 600;
    margin: 0 5px;
`;
