import styled from 'styled-components';
import add_course from '../../assets/createpage/add_course.png';

const TimeTableInput = () => {
    return (
        <>
            <InputContainer>
                <ButtonDiv>
                    <LectureButton bgColor='#F22B02'>강의 삭제</LectureButton>
                    <LectureButton bgColor='#1962ED'>강의 추가</LectureButton>
                </ButtonDiv>
                <InputDiv>
                    <div style={{ display: 'flex' }}>
                        <MainText>강의시간</MainText>
                        <RedCircle />
                    </div>
                    <DescDiv>
                        <DescText>월</DescText>
                        <DescText>9:30 - 11:00</DescText>
                    </DescDiv>
                </InputDiv>
                <ButtonDiv>
                    <AddBtn src={add_course} alt='+버튼' />
                </ButtonDiv>
                <InputDiv>
                    <div style={{ display: 'flex' }}>
                        <MainText>강의장소</MainText>
                        <RedCircle />
                    </div>
                    <DescDiv>
                        <DescText>ECC</DescText>
                    </DescDiv>
                </InputDiv>
                <InputDiv>
                    <MainText style={{width: "3.988rem"}}>강의명</MainText>
                    <NameInput placeholder='강의명을 입력하세요' />
                </InputDiv>
                <CompleteBtn>시간표 완성</CompleteBtn>
            </InputContainer>
        </>
    );
};

export default TimeTableInput;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const MainText = styled.div`
    font-family: Gothic A1;
    font-size: 13px;
    font-weight: 700;
`;
const DescText = styled.span`
    font-family: Gothic A1;
    font-size: 13px;
    font-weight: 500;
    line-height: normal;

    margin-left: 32px;
`;

const LectureButton = styled.button`
    width: 5.2rem;
    height: 1.9rem;
    padding: 0.25rem 0.75rem;
    background-color: ${props => props.bgColor};
    border-radius: 19px;
    border: 0.08rem solid var(--black);

    font-family: Gothic A1;
    font-size: 13px;
    font-weight: 500;
    color: white;
`;

const ButtonDiv = styled.div`
    width: 14.45rem;
    display: flex;
    justify-content: space-between;
`;

const InputDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1.648rem;

    margin-top: 25.6px;
`;

const DescDiv = styled.div`
    width: 14.45rem;
    height: 2rem;

    border-radius: 28px;
    border: 0.08rem solid var(--black);
    background: #fff;

    display: flex;
    align-items: center;
`;

const NameInput = styled.input`
    width: 14.45rem;
    height: 2rem;

    border-radius: 28px;
    border: 0.08rem solid var(--black);
    background: #fff;

    padding-left: 32px;
    font-family: Gothic A1;
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
`;

const AddBtn = styled.img`
    width: 32px;
    margin-top: 0.8rem;
`;

const CompleteBtn = styled.button`
    width: 16.5rem;
    height: 4rem;

    border-radius: 17.6px;
    border: 0.08rem solid var(--black);
    background-color: #b0ff00;

    font-family: Gothic A1;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;

    margin-top: 2.304rem;
`;

const RedCircle = styled.div`
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background-color: red;

    margin-left: 0.4rem;
    margin-top: -0.64rem;
`;
