// 요일 - 시작시간 - 끝시간 dropdown
import { S } from './Dropdown.style';
import ic_dropdown from '../../assets/createpage/ic_dropdown.png';
import {
    DAYS_OF_WEEK,
    COURSE_TIME,
    END_COURSE_TIME,
} from '../../consts/timeTableInput';

const DateTimeDropdown = ({
    isOpen,
    setIsOpen,
    selectedDateTime,
    setSelectedDateTime,
    isChecked,
    order,
}) => {
    // dropdown 여부 바꾸기
    const changeOpen = (openIndex, tf) => {
        console.log(isOpen);
        const copyIsOpen = [...isOpen];
        copyIsOpen[openIndex] = tf;
        setIsOpen(copyIsOpen);
    };

    // state 업데이트 함수
    const changeContent = (openIndex, category, content) => {
        if (category === 'day') {
            setSelectedDateTime({ ...selectedDateTime, day: content });
            // 요일 업데이트 후 드롭다운 닫기
        } else if (category === 'start') {
            setSelectedDateTime({ ...selectedDateTime, startTime: content });
        } else if (category === 'end') {
            setSelectedDateTime({ ...selectedDateTime, endTime: content });
        }
        changeOpen(openIndex, false);
    };
    // 드롭다운을 토글하는 함수
    const toggleDropdown = openIndex => {
        changeOpen(openIndex, !isOpen[openIndex]);
    };

    return (
        <>
            <S.DescDiv
                className={
                    isChecked === true
                        ? 'ischecked'
                        : order === 'first'
                        ? 'first'
                        : 'second'
                }
            >
                {/* 요일 dropdown */}
                <S.DayDropdownDiv isopen={isOpen[0]} className='dropdown-div'>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        onClick={() => changeOpen(0, true)}
                    >
                        <S.DescDayText>{selectedDateTime.day}</S.DescDayText>
                        <S.DownIcon
                            src={ic_dropdown}
                            isopen={isOpen[0]}
                            alt='dropdown버튼'
                        />
                    </div>
                    {isOpen[0] === true
                        ? DAYS_OF_WEEK.map((day, _) => {
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
                <S.TimeDropdownDiv isopen={isOpen[1]} className='dropdown-div'>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        onClick={() => changeOpen(1, true)}
                    >
                        <S.DescTimeText>
                            {selectedDateTime.startTime}
                        </S.DescTimeText>
                        <S.DownIcon
                            src={ic_dropdown}
                            isopen={isOpen[1]}
                            alt='dropdown버튼'
                        />
                    </div>
                    {isOpen[1] === true
                        ? COURSE_TIME.map((time, _) => {
                              return (
                                  <div
                                      onClick={() =>
                                          changeContent(1, 'start', time)
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
                <S.TimeDropdownDiv isopen={isOpen[2]} className='dropdown-div'>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        onClick={() => changeOpen(2, true)}
                    >
                        <S.DescTimeText>
                            {selectedDateTime.endTime}
                        </S.DescTimeText>
                        <S.DownIcon
                            src={ic_dropdown}
                            isopen={isOpen[2]}
                            alt='dropdown버튼'
                        />
                    </div>
                    {isOpen[2] === true
                        ? END_COURSE_TIME.map((time, _) => {
                              return (
                                  <div
                                      onClick={() =>
                                          changeContent(2, 'end', time)
                                      }
                                  >
                                      <S.DescTimeText>{time}</S.DescTimeText>
                                  </div>
                              );
                          })
                        : null}
                </S.TimeDropdownDiv>
            </S.DescDiv>
        </>
    );
};

export default DateTimeDropdown;
