import { S } from './M_TimeTableInputModal.style';
import { useState, useEffect } from 'react';
import ic_x from '../../assets/createpage/ic_x.png';
import add_course_mobile from '../../assets/createpage/add_course_mobile.png';
import TimePicker from './M_TimePicker';
import PlacePicker from './M_PlacePicker';
import subtract_course from '../../assets/createpage/subtract_course.png';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedData } from '../../reducer/action';
import { CLASS_BLOCK_COLOR } from '../../consts/timeTableInput';
import { TimeResetObj } from '../../utils/time-helper';
import {
    isValidateTime,
    isNoTimeOverlapped,
    isNotTwoTimeOverlapped,
} from '../../utils/time-validation';

const MTimeTableInputModal = ({
    setIsModalOpen,
    colorIndex,
    setColorIndex,
}) => {
    // 지정된 시간 없음 체크박스 선택
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();
    //기존에 있는 시간표 데이터 가져오기
    const timetableData = useSelector(
        state => state.timeTableReducer,
    ).selectedData;

    //시간 정하는 타임 픽커 열리는지
    //두번쨰 인자 숫자는 몇번째 인풋의 타임픽커 인지 알려줌
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    //장소 정하는 장소 픽커 열리는지
    const [isPlacePickerOpen, setIsPlacePickerOpen] = useState(false);
    //두번째 시간 인풋창이 열려있는지
    const [isSecondTimeInputOpen, setIsSecondTimeInputOpen] = useState(false);

    // 선택된 요일, 시작 시간, 끝 시간
    const [selectedDateTime, setSelectedDateTime] = useState({
        ...TimeResetObj,
    });

    // 두번째 선택된 요일, 시작 시간, 끝 시간
    //두번째 인풋창이 열려있으면 기본값, 아니면 null
    const [plusSelectedDateTime, setPlusSelectedDateTime] = useState({
        ...TimeResetObj,
    });

    //장소 선택
    const [selectedPlace, setSelectedPlace] = useState('ECC');

    //강의명 input
    const [courseName, setCourseName] = useState('');

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

    //2번쨰 input 창이 열리고 닫히게 함(+,-버튼)
    const onToggleInput = () => {
        if (!isSecondTimeInputOpen) {
            return setIsSecondTimeInputOpen(true);
        }
        return setIsSecondTimeInputOpen(false);
    };

    //강의 색상 바꾸기
    const onChangeColor = index => {
        if (index >= 8) {
            return setColorIndex(0);
        }
        return setColorIndex(index + 1);
    };

    //강의 추가 버튼
    const handleButtonClick = () => {
        //강의명 입력 안했을 시 리턴
        if (!courseName) {
            return alert('강의명을 입력해주세요!');
        }
        let newData1;
        let newData2;
        if (isChecked & !isSecondTimeInputOpen) {
            // 지정된 시간 없음인 경우
            newData1 = {
                day: null, //요일도 null
                startTime: null,
                endTime: null,
                place: selectedPlace,
                name: courseName,
                backgroundColor: null,
            };
            // 액션을 디스패치하여 Redux Store의 selectedData 배열에 추가
            dispatch(addSelectedData(newData1));
        } else if (isSecondTimeInputOpen) {
            // 강의 시간이 2개인 경우
            newData1 = {
                ...selectedDateTime, //선택한 요일, 시작시간, 끝시간
                place: selectedPlace,
                name: courseName,
                backgroundColor: CLASS_BLOCK_COLOR[colorIndex],
            };

            newData2 = {
                ...plusSelectedDateTime, //선택한 요일, 시작시간, 끝시간
                place: selectedPlace,
                name: courseName,
                backgroundColor: CLASS_BLOCK_COLOR[colorIndex],
            };

            //두개의 시간인풋의 시간이 겹치는지 확인하는 로직
            if (!isNotTwoTimeOverlapped(newData1, newData2)) {
                return alert('두 시간표 입력란의 시간이 겹칩니다!');
            }
            //시간 검사 로직
            if (
                isValidateTime(newData1.startTime, newData1.endTime) &&
                isNoTimeOverlapped(newData1, timetableData)
            ) {
                dispatch(addSelectedData(newData1));
            } else if (!isNoTimeOverlapped(newData1, timetableData)) {
                alert('첫번째 시간 입력란과 시간표에 겹치는 시간이 있습니다!');
            } else {
                alert('종료시간이 시작시간보다 늦어야 합니다!');
            }
            //두번째 시간 검사 로직
            if (
                isValidateTime(newData2.startTime, newData2.endTime) &&
                isNoTimeOverlapped(newData2, timetableData)
            ) {
                dispatch(addSelectedData(newData2));
            } else if (!isNoTimeOverlapped(newData2, timetableData)) {
                alert('두번째 시간 입력란과 시간표에 겹치는 시간이 있습니다!');
            } else {
                alert('종료시간이 시작시간보다 늦어야 합니다!');
            }

            onChangeColor(colorIndex);
        } else {
            // 일반적인 경우 (강의 시간 1개)
            newData1 = {
                ...selectedDateTime, //선택한 요일, 시작시간, 끝시간
                place: selectedPlace,
                name: courseName,
                backgroundColor: CLASS_BLOCK_COLOR[colorIndex],
            };
            //시간 검사 로직
            if (
                isValidateTime(newData1.startTime, newData1.endTime) &&
                isNoTimeOverlapped(newData1, timetableData)
            ) {
                //검사 성공시 dispatch
                dispatch(addSelectedData(newData1));
                onChangeColor(colorIndex);
            } else if (!isValidateTime(newData1.startTime, newData1.endTime)) {
                alert('종료시간이 시작시간보다 늦어야 합니다!');
            } else {
                alert('시간표에 겹치는 시간이 있습니다!');
            }
        }

        setSelectedDateTime({ ...TimeResetObj });
        setCourseName('');
        setSelectedPlace('ECC');
        setIsSecondTimeInputOpen(false); //두번째 인풋창 다시 닫기
        setIsModalOpen(false);
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
                                                onClick={onToggleInput}
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
                                            onClick={onToggleInput}
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
