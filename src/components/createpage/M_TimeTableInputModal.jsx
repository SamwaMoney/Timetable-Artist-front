import { S } from './M_TimeTableInputModal.style';
import { useState, useEffect } from 'react';
import ic_x from '../../assets/createpage/ic_x.png';
import add_course_mobile from '../../assets/createpage/add_course_mobile.png';
import TimePicker from './M_TimePicker';
import PlacePicker from './M_PlacePicker';
import subtract_course from '../../assets/createpage/subtract_course.png';
import { useDispatch } from 'react-redux';
import { addSelectedData } from '../../reducer/action';

const MTimeTableInputModal = ({ isModalOpen, setIsModalOpen }) => {
    // 지정된 시간 없음 체크박스 선택
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    //시간 정하는 타임 픽커 열리는지
    //두번쨰 인자 숫자는 몇번째 인풋의 타임픽커 인지 알려줌
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    //장소 정하는 장소 픽커 열리는지
    const [isPlacePickerOpen, setIsPlacePickerOpen] = useState(false);
    //두번째 시간 인풋창이 열려있는지
    const [isSecondTimeInputOpen, setIsSecondTimeInputOpen] = useState(false);

    // 선택된 요일, 시작 시간, 끝 시간
    const [selectedDateTime, setSelectedDateTime] = useState({
        day: '월',
        startTime: '8:00',
        endTime: '9:30',
    });

    // 두번째 선택된 요일, 시작 시간, 끝 시간
    //두번째 인풋창이 열려있으면 기본값, 아니면 null
    const [plusSelectedDateTime, setPlusSelectedDateTime] = useState({
        day: '월',
        startTime: '8:00',
        endTime: '9:30',
    });

    //장소 선택
    const [selectedPlace, setSelectedPlace] = useState('ECC');

    //강의명 input
    const [courseName, setCourseName] = useState('');

    //두번째 인풋의 경우 열려있지 않으면 null로 처리해야 함 (아직 안함)

    //결과 확인용
    useEffect(() => {
        console.log('________________________');
        console.log('시간확인', selectedDateTime);
        console.log('두번째시간확인', plusSelectedDateTime);
        console.log('장소확인', selectedPlace);
        console.log('강의명', courseName);
    }, [selectedDateTime, selectedPlace, plusSelectedDateTime, courseName]);

    //강의명 onChange
    const onChangeCourseName = e => {
        setCourseName(e.target.value);
    };

    const handleCheckBox = e => {
        setIsChecked(e.target.checked);
    };

    //타임 피커를 열음
    const onTimePickerOpen = num => {
        if (!isTimePickerOpen) {
            return setIsTimePickerOpen([true, num]);
        }
    };

    //장소 피커를 열음
    const onPlacePickerOpen = () => {
        if (!isPlacePickerOpen) {
            return setIsPlacePickerOpen(true);
        }
    };

    //플러스 버튼을 눌러서 2번쨰 input 창이 생기게 함
    const onAddTimeInput = () => {
        if (!isSecondTimeInputOpen) {
            return setIsSecondTimeInputOpen(true);
        }
    };

    //마이너스 버튼을 눌러서 2번쨰 input이 닫히게 함
    const onCloseTimeInput = () => {
        if (isSecondTimeInputOpen) {
            return setIsSecondTimeInputOpen(false);
        }
    };

    //시간표에 추가
    const handleButtonClick = () => {
        // 객체 형태로 가공하여 새로운 데이터 생성
        const newData = {
            day: selectedDateTime.day,
            startTime: selectedDateTime.startTime,
            endTime: selectedDateTime.endTime,
            place: selectedPlace,
            name: courseName,
        };

        console.log(newData);

        // 액션을 디스패치하여 Redux Store의 selectedData 배열에 추가
        dispatch(addSelectedData(newData));
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
                                    onClick={() => {
                                        onTimePickerOpen(1);
                                    }}
                                >
                                    {/*첫번째 시간input => 선택한 결과값이 인풋에 반영됨*/}
                                    <div>{selectedDateTime.day}</div>
                                    <div>
                                        {selectedDateTime.startTime} -
                                        {selectedDateTime.endTime}
                                    </div>
                                </S.MTimeInput>
                                {/*두번째 인풋 창을 열면 새로운 시간 인풋창이 생성*/}
                                {!isSecondTimeInputOpen ? (
                                    <>
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
                                    </>
                                ) : (
                                    <div
                                        style={{
                                            paddingTop: '1.7vh',
                                            display: 'flex',
                                        }}
                                    >
                                        {plusSelectedDateTime && (
                                            <S.MTimeInput
                                                className={
                                                    isChecked === true
                                                        ? 'ischecked'
                                                        : ''
                                                }
                                                onClick={() => {
                                                    onTimePickerOpen(2);
                                                }}
                                            >
                                                {/*두번째 input => 선택한 결과값이 인풋에 반영됨*/}
                                                <div>
                                                    {plusSelectedDateTime.day}
                                                </div>
                                                <div>
                                                    {
                                                        plusSelectedDateTime.startTime
                                                    }
                                                    -{' '}
                                                    {
                                                        plusSelectedDateTime.endTime
                                                    }
                                                </div>
                                            </S.MTimeInput>
                                        )}
                                        <S.MinusBtn
                                            src={subtract_course}
                                            alt='-버튼'
                                            onClick={onCloseTimeInput}
                                        />
                                    </div>
                                )}

                                {/*타임 픽커*/}
                                {!isTimePickerOpen ? null : (
                                    <TimePicker
                                        setIsTimePickerOpen={
                                            setIsTimePickerOpen
                                        }
                                        setSelectedDateTime={
                                            setSelectedDateTime
                                        }
                                        isTimePickerOpen={isTimePickerOpen}
                                        selectedDateTime={selectedDateTime}
                                        setIsSecondTimeInputOpen={
                                            setIsSecondTimeInputOpen
                                        }
                                        setPlusSelectedDateTime={
                                            setPlusSelectedDateTime
                                        }
                                    />
                                )}
                            </S.MTimeInputDiv>
                        </S.MInputContainer>

                        <S.MInputContainer>
                            <S.MMainTextDiv>
                                <S.MMainText>강의장소</S.MMainText>
                                <S.MRedCircle />
                            </S.MMainTextDiv>
                            <S.MPlaceInput onClick={onPlacePickerOpen}>
                                {selectedPlace}
                            </S.MPlaceInput>
                            {isPlacePickerOpen ? (
                                <>
                                    <PlacePicker
                                        setIsPlacePickerOpen={
                                            setIsPlacePickerOpen
                                        }
                                        isPlacePickerOpen={isPlacePickerOpen}
                                        setSelectedPlace={setSelectedPlace}
                                    />
                                </>
                            ) : null}
                        </S.MInputContainer>

                        <S.MInputContainer>
                            <S.MMainTextDiv>
                                <S.MMainText>강의명</S.MMainText>
                            </S.MMainTextDiv>
                            <S.MNameInput
                                value={courseName}
                                onChange={onChangeCourseName}
                                placeholder='강의명을 입력하세요'
                            />
                        </S.MInputContainer>
                    </div>

                    <S.MCompleteButtonDiv>
                        <S.MCompleteButton onClick={handleButtonClick}>
                            시간표에 추가
                        </S.MCompleteButton>
                    </S.MCompleteButtonDiv>
                </S.MModal>
            </S.MModalContainer>
        </>
    );
};

export default MTimeTableInputModal;
