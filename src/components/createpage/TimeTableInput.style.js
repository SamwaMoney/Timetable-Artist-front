import styled from 'styled-components';

const S = {};

S.InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    width: 35%;
    /* height: 69.5%; */
`;

S.MainText = styled.div`
    font-family: Gothic A1;
    font-size: 0.84vw;
    font-weight: 700;
`;

S.DescText = styled.span`
    font-family: Gothic A1;
    font-size: 0.84vw;
    font-weight: 500;
    line-height: 2rem;

    @media screen and (max-height: 500px) {
        line-height: 1.5rem;
    }
`;

S.DescDayText = styled(S.DescText)`
    margin-left: 23%;
`;

S.DescTimeText = styled(S.DescText)`
    margin-left: 14.3%;
`;

S.DescPlaceText = styled(S.DescText)`
    margin-left: 9.1%;
`;

S.LectureButton = styled.button`
    width: 5.2rem;
    height: 1.9rem;
    /* padding: 0.25rem 0.75rem; */
    background-color: ${props => props.bgcolor};
    border-radius: 19px;
    border: 0.08rem solid var(--black);

    font-family: Gothic A1;
    font-size: 0.84vw;
    font-weight: 500;
    color: white;

    @media screen and (max-height: 500px) {
        height: 1.4rem;
    }
`;

S.LectureButtonDiv = styled.div`
    /* width: 14.45rem; */
    width: 72%;
    display: flex;
    justify-content: flex-end;
`;

S.ButtonDiv = styled.div`
    /* width: 14.45rem; */
    width: 72%;
    display: flex;
    justify-content: space-between;

    margin-top: 5.5%;
`;

S.InputDiv = styled.div`
    display: flex;
    align-items: center;
    /* gap: 1.648rem; */
    width: 100%;
    justify-content: space-between;

    margin-top: 7.7%;
`;

S.DescDiv = styled.div`
    /* width: 14.45rem; */
    width: 72%;
    height: 2rem;
    z-index: 10;

    display: flex;
    justify-content: space-between;

    @media screen and (max-height: 500px) {
        height: 1.5rem;
    }
`;

S.DayDropdownDiv = styled.div`
    width: 4.1rem;
    height: ${props => (props.isopen ? '10rem' : '2rem')};

    border-radius: ${props => (props.isopen ? '18px' : '35px')};
    border: 0.08rem solid var(--black);
    background: #fff;

    overflow-y: ${props => (props.isopen ? 'scroll' : 'unset')};

    @media screen and (max-height: 500px) {
        height: ${props => (props.isopen ? '7.5rem' : '1.5rem')};
    }
`;

S.TimeDropdownDiv = styled(S.DayDropdownDiv)`
    width: 4.5rem;
`;

S.DropdownDiv = styled.div`
    width: 14.45rem;
    height: ${props => (props.isopen ? '10rem' : '2rem')};

    border-radius: ${props => (props.isopen ? '18px' : '28px')};
    border: 0.08rem solid var(--black);
    background: #fff;

    overflow-y: ${props => (props.isopen ? 'scroll' : 'unset')};

    @media screen and (max-height: 500px) {
        height: ${props => (props.isopen ? '7.5rem' : '1.5rem')};
    }
`;

S.NameInput = styled.input`
    /* width: 14.45rem; */
    width: 72%;
    height: 2rem;

    border-radius: 28px;
    border: 0.08rem solid var(--black);
    background: #fff;

    padding-left: 6.475%;
    font-family: Gothic A1;
    font-size: 0.84vw;
    font-weight: 500;
    line-height: normal;

    @media screen and (max-height: 500px) {
        height: 1.5rem;
    }
`;

S.CheckBoxDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

S.AddBtn = styled.img`
    width: 16%;
`;

S.CheckBox = styled.input`
    width: 15px;
    height: 15px;
`;

S.CheckBoxText = styled.div`
    font-size: 0.84vw;
    font-weight: 500;
`;

S.DownIcon = styled.img`
    width: 0.8rem;
    margin-right: 0.75rem;

    rotate: ${props => (props.isopen ? '180deg' : '0deg')};
`;

S.CompleteBtn = styled.button`
    /* width: 16.5rem; */
    width: 83%;
    /* height: 4rem; */
    height: 8.9vh;

    border-radius: 17.6px;
    border: 0.08rem solid var(--black);
    background-color: #b0ff00;

    font-family: Gothic A1;
    font-size: 1.25vw;
    font-weight: 600;
    line-height: normal;

    margin-top: 11.5%;
`;

S.RedCircle = styled.div`
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background-color: red;

    margin-left: 0.4rem;
    margin-top: -0.64rem;
`;

export { S };
