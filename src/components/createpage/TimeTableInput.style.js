import styled from 'styled-components';

const S = {};

S.InputContainer = styled.div`
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

S.MainText = styled.div`
    font-family: Gothic A1;
    font-size: 13px;
    font-weight: 700;
`;

S.DescText = styled.span`
    font-family: Gothic A1;
    font-size: 13px;
    font-weight: 500;
    line-height: 2rem;
`;

S.DescDayText = styled(S.DescText)`
    margin-left: 15px;
`;

S.DescTimeText = styled(S.DescText)`
    margin-left: 10px;
`;

S.DescPlaceText = styled(S.DescText)`
    margin-left: 20.8px;
`;

S.LectureButton = styled.button`
    width: 45%;
    height: 2rem;
    padding: 0.25rem 0.75rem;
    background-color: ${props => props.bgcolor};
    border-radius: 19px;
    border: 0.08rem solid var(--black);

    font-family: Gothic A1;
    font-size: 0.7rem;
    font-weight: 500;
    color: white;
`;

S.ButtonDiv = styled.div`
    margin-left: 30%;
    margin-top: 5%;
    width: 50%;
    display: flex;
    justify-content: space-between;
`;

S.InputDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1.648rem;

    margin-top: 5%;
    padding-left: 5%;
`;

S.DescDiv = styled.div`
    width: 60%;
    height: 2rem;
    z-index: 10;

    display: flex;
    justify-content: space-between;
`;

S.DayDropdownDiv = styled.div`
    width: 4.1rem;
    height: ${props => (props.isopen ? '10rem' : '2rem')};

    border-radius: ${props => (props.isopen ? '18px' : '35px')};
    border: 0.08rem solid var(--black);
    background: #fff;

    overflow-y: ${props => (props.isopen ? 'scroll' : 'unset')};
`;

S.TimeDropdownDiv = styled(S.DayDropdownDiv)`
    width: 4.5rem;
`;

S.DropdownDiv = styled.div`
    width: 10rem;
    height: ${props => (props.isopen ? '10rem' : '2rem')};

    border-radius: ${props => (props.isopen ? '18px' : '28px')};
    border: 0.08rem solid var(--black);
    background: #fff;

    overflow-y: ${props => (props.isopen ? 'scroll' : 'unset')};
`;

S.NameInput = styled.input`
    height: 2rem;

    border-radius: 28px;
    border: 0.08rem solid var(--black);
    background: #fff;

    padding-left: 20.8px;
    font-family: Gothic A1;
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
`;

S.AddBtn = styled.img`
    width: 32px;
    margin-top: 0.8rem;
`;

S.DownIcon = styled.img`
    width: 0.8rem;
    margin-right: 0.75rem;

    rotate: ${props => (props.isopen ? '180deg' : '0deg')};
`;

S.CompleteBtn = styled.button`
    margin-left: 30%;
    width: 40%;
    height: 15%;

    border-radius: 17.6px;
    border: 0.08rem solid var(--black);
    background-color: #b0ff00;

    font-family: Gothic A1;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: normal;
    margin-top: 5%;
`;

S.RedCircle = styled.div`
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background-color: red;
    margin-left: 0.4rem;
    margin-top: -0.64rem;
`;

S.InputText = styled.div`
    width: 20%;
    display: flex;
`;
S.InputBox = styled.div`
    width: 70%;
`;
export { S };