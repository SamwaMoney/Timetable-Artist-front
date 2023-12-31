import { S } from './TimeTableInput.style';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedData, resetSelectedData } from '../../reducer/action';
import add_course from '../../assets/createpage/add_course.png';
import subtract_course from '../../assets/createpage/subtract_course.png';
import DateTimeDropdown from './DateTimeDropdown';
import PlaceDropdown from './PlaceDropdown';
import { CLASS_BLOCK_COLOR } from '../../consts/timeTableInput';
import {
    isValidateTime,
    isNoTimeOverlapped,
    isNotTwoTimeOverlapped,
} from '../../utils/time-validation';
import { TimeResetObj } from '../../utils/time-helper';
import { CreateClasses, CreateTable } from '../../api/timetables';
import { useNavigate } from 'react-router-dom';

const TimeTableInput = ({ setIsLoading }) => {
    // dropdown open 여부
    const [isOpen, setIsOpen] = useState([false, false, false]);
    const [isSecondOpen, setIsSecondOpen] = useState([false, false, false]);
    const [isPlaceOpen, setIsPlaceOpen] = useState(false);

    // +버튼이 눌린 상태인지
    const [isAddBtnPressed, setIsAddBtnPressed] = useState(false);

    // 지정된 시간 없음 체크박스 선택
    const [isChecked, setIsChecked] = useState(false);

    // 체크박스 상태 관리
    const handleCheckBox = e => {
        setIsChecked(e.target.checked);
    };

    // 선택된 요일, 시작 시간, 끝 시간
    //⭐️기본 시간 값 디스트럭쳐로 수정
    const [selectedDateTime, setSelectedDateTime] = useState({
        ...TimeResetObj,
    });

    // 추가로 입력했을 때 요일, 시작시간, 끝 시간
    const [plusSelectedDateTime, setPlusSelectedDateTime] = useState({
        ...TimeResetObj,
    });

    // 선택된 강의 장소
    const [selectedPlace, setSelectedPlace] = useState('ECC');

    // 입력받은 강의명
    const [selectedClassName, setSelectedClassName] = useState('');

    // 강의명 input 관리 함수
    const changeNameInput = e => {
        setSelectedClassName(e.target.value);
    };

    // backgroundColor 적용 용도 변수
    const [countColorIndex, setCountColorIndex] = useState(0);

    //⭐️색상 바꿔주는 함수
    const onChangeColor = index => {
        if (index >= 8) {
            return setCountColorIndex(0);
        }
        return setCountColorIndex(index + 1);
    };

    const dispatch = useDispatch();

    //⭐️redux에 있는 시간표 데이터. 시간 검증할 때 사용
    const timetableData = useSelector(
        state => state.timeTableReducer,
    ).selectedData;

    const handleButtonClick = () => {
        // 객체 형태로 가공하여 새로운 데이터 생성
        // 만약 추가했을 경우 객체 2개를 보내기
        //⭐️강의명 입력 안했을 시 리턴
        if (!selectedClassName) {
            return alert('강의명을 입력해주세요!');
        }

        let newData1, newData2;

        if (isChecked) {
            // 지정된 시간 없음인 경우
            newData1 = {
                weekday: null,
                startTime: null,
                endTime: null,
                location: selectedPlace,
                className: selectedClassName,
                bgColor: null,
            };

            // 액션을 디스패치하여 Redux Store의 selectedData 배열에 추가
            dispatch(addSelectedData(newData1));
        } else if (isAddBtnPressed) {
            // 강의 시간이 2개인 경우
            newData1 = {
                //⭐️디스트럭쳐로 수정
                ...selectedDateTime, //선택한 요일, 시작시간, 끝시간
                location: selectedPlace,
                className: selectedClassName,
                bgColor: CLASS_BLOCK_COLOR[countColorIndex],
            };

            newData2 = {
                //⭐️디스트럭쳐로 수정
                ...plusSelectedDateTime, //선택한 요일, 시작시간, 끝시간
                location: selectedPlace,
                className: selectedClassName,
                bgColor: CLASS_BLOCK_COLOR[countColorIndex],
            };

            //⭐️두개의 시간인풋의 시간이 겹치는지 확인하는 로직
            if (!isNotTwoTimeOverlapped(newData1, newData2)) {
                return alert('두 시간표 입력란의 시간이 겹칩니다!');
            }
            //⭐️시간 검사 로직
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
            onChangeColor(countColorIndex);
        } else {
            // 일반적인 경우 (강의 시간 1개)
            newData1 = {
                //⭐️디스트럭쳐로 수정
                ...selectedDateTime, //선택한 요일, 시작시간, 끝시간
                location: selectedPlace,
                className: selectedClassName,
                bgColor: CLASS_BLOCK_COLOR[countColorIndex],
            };

            //⭐️시간 검사 로직
            if (
                isValidateTime(newData1.startTime, newData1.endTime) &&
                isNoTimeOverlapped(newData1, timetableData)
            ) {
                //검사 성공시 dispatch
                dispatch(addSelectedData(newData1));
                onChangeColor(countColorIndex);
            } else if (!isValidateTime(newData1.startTime, newData1.endTime)) {
                alert('종료시간이 시작시간보다 늦어야 합니다!');
            } else {
                alert('시간표에 겹치는 시간이 있습니다!');
            }
        }
        //⭐️초기화 로직
        setSelectedDateTime({ ...TimeResetObj });
        setSelectedClassName('');
        setSelectedPlace('ECC');
        setIsAddBtnPressed(false);
    };

    // 엔터 키 입력 시 강의 추가
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            handleButtonClick();
        }
    };

    // navigate
    const navigate = useNavigate();

    // 시간표 완성 버튼 클릭 시 제출하는 함수
    const handleSubmitClassData = async () => {

        // 만약 수업 개수가 없으면 강의가 없습니다 alert 띄우기
        if (timetableData.length <= 0) {
            alert('현재 추가된 강의가 없습니다. 강의를 추가해주세요!');
            return;
        }

        setIsLoading(true);

        // memberId, timetableId 받아오기
        const memberId = localStorage.getItem('memberId');
        const timeTableId = await CreateTable();

        // - 반복문 돌면서 memberId, timetableId 추가, startTime, endTime 시간과 분 분리, startTime, endTime 삭제
        const finalTimeTableData = timetableData.map(classData => {
            // 새로운 객체를 생성하여 원본 객체의 프로퍼티를 복사
            const newClassData = { ...classData };

            // memberId, timetableId 추가
            newClassData.memberId = parseInt(memberId, 10);
            newClassData.timetable = parseInt(timeTableId, 10);

            // startTime에서 시간과 분 분리하여 숫자 형태로 프로퍼티 추가
            if (newClassData.startTime) {
                const startTimeParts = newClassData.startTime.split(':');
                newClassData.startH = parseInt(startTimeParts[0], 10);
                newClassData.startM = parseInt(startTimeParts[1], 10);
            } else {
                newClassData.startH = null;
                newClassData.startM = null;
            }

            // endTime에서 시간과 분 분리하여 숫자 형태로 프로퍼티 추가
            if (newClassData.endTime) {
                const endTimeParts = newClassData.endTime.split(':');
                newClassData.endH = parseInt(endTimeParts[0], 10);
                newClassData.endM = parseInt(endTimeParts[1], 10);
            } else {
                newClassData.endH = null;
                newClassData.endM = null;
            }

            // startTime, endTime 삭제
            delete newClassData.startTime;
            delete newClassData.endTime;

            return newClassData;
        });

        // post
        const res = await CreateClasses(finalTimeTableData);

        // post 성공 시 결과 페이지로 이동
        if (res.status === 200 || res.status === 201) {
            setIsLoading(false);
            dispatch(resetSelectedData());
            navigate('/score');
        } else {
            alert("수업 생성 오류가 발생하였습니다");
        }
    };

    return (
        <>
            <S.InputContainer>
                <S.LectureButtonDiv>
                    <S.LectureButton
                        bgcolor='#1962ED'
                        onClick={handleButtonClick}
                    >
                        강의 추가
                    </S.LectureButton>
                </S.LectureButtonDiv>

                <S.InputDiv>
                    <div style={{ display: 'flex' }}>
                        <S.MainText>강의시간</S.MainText>
                        <S.RedCircle />
                    </div>
                    <DateTimeDropdown
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        selectedDateTime={selectedDateTime}
                        setSelectedDateTime={setSelectedDateTime}
                        isChecked={isChecked}
                        order='first'
                    />
                </S.InputDiv>

                {isAddBtnPressed === true ? (
                    <div style={{ width: '72%' }}>
                        <DateTimeDropdown
                            isOpen={isSecondOpen}
                            setIsOpen={setIsSecondOpen}
                            selectedDateTime={plusSelectedDateTime}
                            setSelectedDateTime={setPlusSelectedDateTime}
                            isChecked={isChecked}
                            order='second'
                        />
                        <S.MinusBtn
                            src={subtract_course}
                            alt='-버튼'
                            onClick={() => {
                                setIsAddBtnPressed(false);
                            }}
                        />
                    </div>
                ) : (
                    <S.ButtonDiv>
                        <S.AddBtn
                            src={add_course}
                            className={isChecked === true ? 'ischecked' : ''}
                            alt='+버튼'
                            onClick={() => {
                                setIsAddBtnPressed(true);
                            }}
                        />
                        <S.CheckBoxDiv>
                            <S.CheckBox
                                type='checkbox'
                                onChange={handleCheckBox}
                            />
                            <S.CheckBoxText>지정된 시간 없음</S.CheckBoxText>
                        </S.CheckBoxDiv>
                    </S.ButtonDiv>
                )}

                <S.InputDiv>
                    <div style={{ display: 'flex' }}>
                        <S.MainText>강의장소</S.MainText>
                        <S.RedCircle />
                    </div>
                    <PlaceDropdown
                        isPlaceOpen={isPlaceOpen}
                        setIsPlaceOpen={setIsPlaceOpen}
                        selectedPlace={selectedPlace}
                        setSelectedPlace={setSelectedPlace}
                    />
                </S.InputDiv>

                <S.InputDiv>
                    <S.MainText style={{ width: '3.988rem' }}>
                        강의명
                    </S.MainText>
                    <S.NameInput
                        type='text'
                        placeholder='강의명을 입력하세요'
                        onChange={changeNameInput}
                        onKeyDown={handleKeyDown}
                        value={selectedClassName}
                    />
                </S.InputDiv>

                <S.CompleteBtn onClick={handleSubmitClassData}>
                    시간표 완성
                </S.CompleteBtn>
            </S.InputContainer>
        </>
    );
};

export default TimeTableInput;
