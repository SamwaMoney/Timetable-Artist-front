import { S } from './M_TimeTableInputModal.style';
import { useState } from 'react';
import ic_x from '../../assets/createpage/ic_x.png';
import add_course_mobile from '../../assets/createpage/add_course_mobile.png';
import TimePicker from './M_TimePicker';
import PlacePicker from './M_PlacePicker';
import { AiOutlineMinus } from 'react-icons/ai';

const MTimeTableInputModal = ({ isModalOpen, setIsModalOpen }) => {
    // 지정된 시간 없음 체크박스 선택
    const [isChecked, setIsChecked] = useState(false);

    //시간 정하는 타임 픽커 열리는지
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    //장소 정하는 장소 픽커 열리는지
    const [isPlacePickerOpen, setIsPlacePickerOpen] = useState(false);
    //두번째 시간창이 열려있는지
    const [isSecondTimeInputOpen, setIsSecondTimeInputOpen] = useState(false);

    const handleCheckBox = e => {
        setIsChecked(e.target.checked);
    };

    const onTimePickerOpen = () => {
        if (!isTimePickerOpen) {
            return setIsTimePickerOpen(true);
        }
    };

    const onPlacePickerOpen = prev => {
        if (isTimePickerOpen) {
            return setIsPlacePickerOpen(false);
        } else {
            return setIsPlacePickerOpen(true);
        }
    };

    const onAddTimeInput = () => {
        if (!isSecondTimeInputOpen) {
            return setIsSecondTimeInputOpen(true);
        }
    };

    const onCloseTimeInput = () => {
        if (isSecondTimeInputOpen) {
            return setIsSecondTimeInputOpen(false);
        }
    };
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
                            {/*강의시간이 열리면 타임픽커가 나옴*/}
                            <S.MTimeInputDiv>
                                <S.MTimeInput
                                    className={
                                        isChecked === true ? 'ischecked' : ''
                                    }
                                    onClick={onTimePickerOpen}
                                >
                                    <div>월</div>
                                    {/*나중에 결과값으로 바꿔야 할듯??*/}
                                    <div>00:00 - 00:00</div>
                                </S.MTimeInput>
                                {!isSecondTimeInputOpen ? (
                                    <div>
                                        <S.MAddButtonDiv>
                                            <S.MAddButton
                                                src={add_course_mobile}
                                                alt='+버튼'
                                                className={
                                                    isChecked === true
                                                        ? 'ischecked'
                                                        : ''
                                                }
                                                onClick={onAddTimeInput}
                                            />
                                            <S.MCheckBoxDiv>
                                                <S.MCheckBox
                                                    type='checkbox'
                                                    onChange={handleCheckBox}
                                                />
                                                <S.MCheckBoxText>
                                                    지정된 시간 없음
                                                </S.MCheckBoxText>
                                            </S.MCheckBoxDiv>
                                        </S.MAddButtonDiv>
                                    </div>
                                ) : (
                                    <div
                                        style={{
                                            paddingTop: '2vw',
                                            display: 'flex',
                                            width: '55vw',
                                        }}
                                    >
                                        <S.MTimeInput
                                            className={
                                                isChecked === true
                                                    ? 'ischecked'
                                                    : ''
                                            }
                                            onClick={onTimePickerOpen}
                                        >
                                            <div>월</div>
                                            {/*나중에 결과값으로 바꿔야 할듯??*/}
                                            <div>00:00 - 00:00</div>
                                        </S.MTimeInput>
                                        {/*시간 빼기 버튼*/}
                                        <AiOutlineMinus
                                            size={'7vw'}
                                            color={'red'}
                                            style={{
                                                position: 'absolute',
                                                right: '6vw',
                                            }}
                                            onClick={onCloseTimeInput}
                                        />
                                    </div>
                                )}
                                {isTimePickerOpen ? (
                                    <TimePicker
                                        setIsTimePickerOpen={
                                            setIsTimePickerOpen
                                        }
                                    />
                                ) : null}
                            </S.MTimeInputDiv>
                        </S.MInputContainer>

                        <S.MInputContainer>
                            <S.MMainTextDiv>
                                <S.MMainText>강의장소</S.MMainText>
                                <S.MRedCircle />
                            </S.MMainTextDiv>
                            <S.MPlaceInput onClick={onPlacePickerOpen}>
                                ECC
                            </S.MPlaceInput>
                            {isPlacePickerOpen ? (
                                <>
                                    <PlacePicker
                                        setIsPlacePickerOpen={
                                            setIsPlacePickerOpen
                                        }
                                        isPlacePickerOpen={isPlacePickerOpen}
                                    />
                                </>
                            ) : null}
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
