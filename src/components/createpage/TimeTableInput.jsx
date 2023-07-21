import { S } from './TimeTableInput.style';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSelectedData } from '../../reducer/action';
import add_course from '../../assets/createpage/add_course.png';
import subtract_course from '../../assets/createpage/subtract_course.png';
import DateTimeDropdown from './DateTimeDropdown';
import PlaceDropdown from './PlaceDropdown';

const TimeTableInput = () => {
    // dropdown open 여부
    const [isOpen, setIsOpen] = useState([false, false, false]);
    const [isSecondOpen, setIsSecondOpen] = useState([false, false, false]);
    const [isPlaceOpen, setIsPlaceOpen] = useState(false);

    console.log('장소 상태');
    console.log(isPlaceOpen);

    // +버튼이 눌린 상태인지
    const [isAddBtnPressed, setIsAddBtnPressed] = useState(false);

    // 지정된 시간 없음 체크박스 선택
    const [isChecked, setIsChecked] = useState(false);

    // 체크박스 상태 관리
    const handleCheckBox = e => {
        setIsChecked(e.target.checked);
    };

    // 선택된 요일, 시작 시간, 끝 시간
    const [selectedDateTime, setSelectedDateTime] = useState({
        day: '월',
        startTime: '8:00',
        endTime: '9:30',
    });

    // 추가로 입력했을 때 요일, 시작시간, 끝 시간
    const [plusSelectedDateTime, setPlusSelectedDateTime] = useState({
        day: '월',
        startTime: '8:00',
        endTime: '9:30',
    });

    // 선택된 강의 장소
    const [selectedPlace, setSelectedPlace] = useState('ECC');

    // 입력받은 강의명
    const [selectedClassName, setSelectedClassName] = useState('');

    // 강의명 input 관리 함수
    const changeNameInput = e => {
        setSelectedClassName(e.target.value);
    };

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        // 객체 형태로 가공하여 새로운 데이터 생성
        // 만약 추가했을 경우 객체 2개를 보내기

        const newData = {
            day: selectedDateTime.day,
            startTime: selectedDateTime.startTime,
            endTime: selectedDateTime.endTime,
            place: selectedPlace,
            name: selectedClassName,
        };

        console.log(newData);

        // 액션을 디스패치하여 Redux Store의 selectedData 배열에 추가
        dispatch(addSelectedData(newData));
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
                    <div style={{width: "72%"}}>
                        <DateTimeDropdown
                            isOpen={isSecondOpen}
                            setIsOpen={setIsSecondOpen}
                            selectedDateTime={plusSelectedDateTime}
                            setSelectedDateTime={setPlusSelectedDateTime}
                            isChecked={isChecked}
                            order='second'
                        />
                        <S.MinusBtn src={subtract_course} alt="-버튼" onClick={() => {
                                setIsAddBtnPressed(false);
                            }}/>
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
                    />
                </S.InputDiv>

                <S.CompleteBtn>시간표 완성</S.CompleteBtn>
            </S.InputContainer>
        </>
    );
};

export default TimeTableInput;
