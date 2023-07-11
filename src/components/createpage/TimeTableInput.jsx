import { S } from './TimeTableInput.style';
import { useState } from 'react';
import add_course from '../../assets/createpage/add_course.png';
import ic_dropdown from '../../assets/createpage/ic_dropdown.png';

const TimeTableInput = () => {
    // 요일 배열
    const dayOfWeek = ['월', '화', '수', '목', '금'];
    // 강의 시간 배열
    const courseTime = [
        '8:00',
        '9:30',
        '11:00',
        '12:30',
        '14:00',
        '15:30',
        '17:00',
        '18:30',
        '20:00',
        '21:30',
    ];
    // 강의 장소 배열
    const coursePlace = [
        'ECC',
        '공학관',
        '교육관',
        '학관',
        '국제교육관',
        '대강당',
        '법학관',
        '헬렌관',
        '연구협력관',
        '테니스장',
        '생활관',
        '동창회관',
        '약학관',
        '신세계관',
        'sk텔레콤관(정보관)',
        '조형예술관',
        '체육관',
        '음악관',
        '종합과학관',
        '포스코관',
        '원격/비대면',
    ];

    // dropdown 4개 open 여부 (요일, 시작시간, 끝시간, 장소)
    const [isOpen, setIsOpen] = useState([false, false, false, false]);

    // dropdown open 여부 바꾸기
    const changeOpen = (openIndex, tf) => {
        const copyIsOpen = [...isOpen];
        copyIsOpen[openIndex] = tf;
        setIsOpen(copyIsOpen);
    };

    // 선택된 요일
    const [selectedDay, setSelectedDay] = useState('월');

    // 선택된 시작 시간
    const [selectedStartTime, setSelectedStartTime] = useState('8:00');

    // 선택된 끝 시간
    const [selectedEndTime, setSelectedEndTime] = useState('9:30');

    // 선택된 강의 장소
    const [selectedPlace, setSelectedPlace] = useState('ECC');

    // 장소 업데이트 함수
    const changeContent = (openIndex, category, content) => {
        if (category === 'day') {
            setSelectedDay(content);
            // 요일 업데이트 후 드롭다운 닫기
        } else if (category === 'start') {
            setSelectedStartTime(content);
        } else if (category === 'end') {
            setSelectedEndTime(content);
        } else if (category === 'where') {
            setSelectedPlace(content);
            // 장소 업데이트 후 드롭다운 닫기
        }
        changeOpen(openIndex, false);
    };

    return (
        <>
            <S.InputContainer>
                <S.ButtonDiv>
                    <S.LectureButton bgcolor='#F22B02'>
                        강의 삭제
                    </S.LectureButton>
                    <S.LectureButton bgcolor='#1962ED'>
                        강의 추가
                    </S.LectureButton>
                </S.ButtonDiv>

                <S.InputDiv>
                    <div style={{ display: 'flex' }}>
                        <S.MainText>강의시간</S.MainText>
                        <S.RedCircle />
                    </div>
                    <S.DescDiv style={{ zIndex: '20' }}>
                        {/* 요일 dropdown */}
                        <S.DayDropdownDiv isopen={isOpen[0]}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                                onClick={() => changeOpen(0, true)}
                            >
                                <S.DescDayText>{selectedDay}</S.DescDayText>
                                <S.DownIcon
                                    src={ic_dropdown}
                                    isopen={isOpen[0]}
                                    alt='dropdown버튼'
                                />
                            </div>
                            {isOpen[0] === true
                                ? dayOfWeek.map((day, _) => {
                                      return (
                                          <div
                                              onClick={() =>
                                                  changeContent(0, 'day', day)
                                              }
                                          >
                                              <S.DescDayText>{day}</S.DescDayText>
                                          </div>
                                      );
                                  })
                                : null}
                        </S.DayDropdownDiv>

                        {/* 시작 시간 dropdown */}
                        <S.TimeDropdownDiv isopen={isOpen[1]}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                                onClick={() => changeOpen(1, true)}
                            >
                                <S.DescTimeText>{selectedStartTime}</S.DescTimeText>
                                <S.DownIcon
                                    src={ic_dropdown}
                                    isopen={isOpen[1]}
                                    alt='dropdown버튼'
                                />
                            </div>
                            {isOpen[1] === true
                                ? courseTime.map((time, _) => {
                                      return (
                                          <div
                                              onClick={() =>
                                                  changeContent(
                                                      1,
                                                      'start',
                                                      time,
                                                  )
                                              }
                                          >
                                              <S.DescTimeText>{time}</S.DescTimeText>
                                          </div>
                                      );
                                  })
                                : null}
                        </S.TimeDropdownDiv>
                        <S.DescText>-</S.DescText>
                        {/* 끝 시간 dropdown */}
                        <S.TimeDropdownDiv isopen={isOpen[2]}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                                onClick={() => changeOpen(2, true)}
                            >
                                <S.DescTimeText>{selectedEndTime}</S.DescTimeText>
                                <S.DownIcon
                                    src={ic_dropdown}
                                    isopen={isOpen[2]}
                                    alt='dropdown버튼'
                                />
                            </div>
                            {isOpen[2] === true
                                ? courseTime.map((time, _) => {
                                      return (
                                          <div
                                              onClick={() =>
                                                  changeContent(
                                                      2,
                                                      'end',
                                                      time,
                                                  )
                                              }
                                          >
                                              <S.DescTimeText>{time}</S.DescTimeText>
                                          </div>
                                      );
                                  })
                                : null}
                        </S.TimeDropdownDiv>
                    </S.DescDiv>
                </S.InputDiv>

                <S.ButtonDiv>
                    <S.AddBtn src={add_course} alt='+버튼' />
                </S.ButtonDiv>

                <S.InputDiv>
                    <div style={{ display: 'flex' }}>
                        <S.MainText>강의장소</S.MainText>
                        <S.RedCircle />
                    </div>
                    <S.DescDiv>
                        <S.DropdownDiv isopen={isOpen[3]}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                                onClick={() => changeOpen(3, true)}
                            >
                                <S.DescPlaceText>{selectedPlace}</S.DescPlaceText>
                                <S.DownIcon
                                    src={ic_dropdown}
                                    isopen={isOpen[3]}
                                    alt='dropdown버튼'
                                />
                            </div>
                            {isOpen[3] === true
                                ? coursePlace.map((place, _) => {
                                      return (
                                          <div
                                              onClick={() =>
                                                  changeContent(
                                                      3,
                                                      'where',
                                                      place,
                                                  )
                                              }
                                          >
                                              <S.DescPlaceText>{place}</S.DescPlaceText>
                                          </div>
                                      );
                                  })
                                : null}
                        </S.DropdownDiv>
                    </S.DescDiv>
                </S.InputDiv>

                <S.InputDiv>
                    <S.MainText style={{ width: '3.988rem' }}>
                        강의명
                    </S.MainText>
                    <S.NameInput placeholder='강의명을 입력하세요' />
                </S.InputDiv>

                <S.CompleteBtn>시간표 완성</S.CompleteBtn>
            </S.InputContainer>
        </>
    );
};

export default TimeTableInput;
