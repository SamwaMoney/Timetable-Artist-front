import { S } from './M_TimeTableInputModal.style';
import ic_x from '../../assets/createpage/ic_x.png';
import add_course_mobile from '../../assets/createpage/add_course_mobile.png';

const MTimeTableInputModal = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <>
            <S.MModalContainer>
                <S.MModal>
                    <S.MModalHeader>
                        {/* handle부분 */}
                        <S.MModalHandleContainer>
                            <S.MModalHandle></S.MModalHandle>
                        </S.MModalHandleContainer>
                        {/* x버튼 */}
                        <S.MModalXContainer>
                            {/* <S.MModalTitleText>강의 추가</S.MModalTitleText> */}
                            <S.MModalXImg
                                src={ic_x}
                                alt='x버튼'
                                onClick={() => {
                                    setIsModalOpen(false);
                                }}
                            />
                        </S.MModalXContainer>
                    </S.MModalHeader>

                    {/* content */}
                    <div>
                        <S.MInputContainer className='timeinput'>
                            <S.MMainTextDiv>
                                <S.MMainText>강의시간</S.MMainText>
                                <S.MRedCircle />
                            </S.MMainTextDiv>
                            <S.MTimeInputDiv>
                                <S.MTimeInput>
                                    <div>월</div>
                                    <div>8:00 - 9:30</div>
                                </S.MTimeInput>
                                <S.MAddButtonDiv>
                                    <S.MAddButton
                                        src={add_course_mobile}
                                        alt='+버튼'
                                    />
                                    <S.MCheckBoxDiv>
                                        <S.MCheckBox type='checkbox' />
                                        <S.MCheckBoxText>
                                            지정된 시간 없음
                                        </S.MCheckBoxText>
                                    </S.MCheckBoxDiv>
                                </S.MAddButtonDiv>
                            </S.MTimeInputDiv>
                        </S.MInputContainer>

                        <S.MInputContainer>
                            <S.MMainTextDiv>
                                <S.MMainText>강의장소</S.MMainText>
                                <S.MRedCircle />
                            </S.MMainTextDiv>
                            <S.MPlaceInput>ECC</S.MPlaceInput>
                        </S.MInputContainer>

                        <S.MInputContainer>
                            <S.MMainTextDiv>
                                <S.MMainText>강의명</S.MMainText>
                            </S.MMainTextDiv>
                            <S.MNameInput placeholder='강의명을 입력하세요' />
                        </S.MInputContainer>
                    </div>

                    <S.MCompleteButtonDiv>
                        <S.MCompleteButton>시간표에 추가</S.MCompleteButton>
                    </S.MCompleteButtonDiv>
                </S.MModal>
            </S.MModalContainer>
        </>
    );
};

export default MTimeTableInputModal;
