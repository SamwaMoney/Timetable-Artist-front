import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';
import { COURSE_TIME, DAYS_OF_WEEK } from '../../consts/timeTableInput';
import { useState, useEffect } from 'react';
import { S } from './M_CreateTimeTable.style';
import { PickerOptions } from '../../utils/picker-options';
import { Navigation, Pagination } from 'swiper/modules';

//시간 고르는 창//
const TimePicker = ({
    setIsTimePickerOpen,
    selectedDateTime,
    isTimePickerOpen,
    setSelectedDateTime,
    setPlusSelectedDateTime,
}) => {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0); // 초기값은 월(0)로 설정
    const [selectedTimeStartIndex, setSelectedTimeStartIndex] = useState(0);
    const [selectedTimeEndIndex, setSelectedTimeEndIndex] = useState(0);

    //요일을 감지해 바꿔주는 함수
    const onChangeDay = swiper => {
        setSelectedDayIndex(swiper.activeIndex);
    };

    //시작시간을 감지해 바꿔주는 함수
    const onChangeStartTime = swiper => {
        setSelectedTimeStartIndex(swiper.activeIndex);
    };

    //끝시간을 감지해 바꿔주는 함수
    const onChangeEndTime = swiper => {
        setSelectedTimeEndIndex(swiper.activeIndex);
    };

    //picker닫음 (취소 버튼)
    const onPickerClose = () => {
        setIsTimePickerOpen(false);
    };

    //picker 다 선택후 완성 (확인 버튼)
    //선택한 시간을 객체로 만들어 저장하는 로직
    const onPickerComplete = () => {
        if (isTimePickerOpen[1] === 1) {
            setSelectedDateTime({
                day: DAYS_OF_WEEK[selectedDayIndex],
                startTime: COURSE_TIME[selectedTimeStartIndex],
                endTime: COURSE_TIME[selectedTimeEndIndex],
            });
            setIsTimePickerOpen(false);
        } else if (isTimePickerOpen[1] === 2) {
            setPlusSelectedDateTime({
                day: DAYS_OF_WEEK[selectedDayIndex],
                startTime: COURSE_TIME[selectedTimeStartIndex],
                endTime: COURSE_TIME[selectedTimeEndIndex],
            });
            setIsTimePickerOpen(false);
        }
    };

    return (
        <Wrapper>
            <S.PickerBtnWrapper>
                <S.MPickerSmallBtn
                    color={'var(--light-gray)'}
                    onClick={onPickerClose}
                >
                    취소
                </S.MPickerSmallBtn>
                <S.MPickerSmallBtn
                    color={'var(--green)'}
                    onClick={onPickerComplete}
                >
                    확인
                </S.MPickerSmallBtn>
            </S.PickerBtnWrapper>
            <S.PickerWrapper>
                {/*하얀색 부분*/}
                <S.SelectedContainer />
                <Swiper {...PickerOptions} onSlideChange={onChangeDay}>
                    {DAYS_OF_WEEK.map((day, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                textAlign: 'center',
                                color:
                                    selectedDayIndex === index
                                        ? 'black'
                                        : 'gray',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '5vw',
                                }}
                            >
                                {day}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper {...PickerOptions} onSlideChange={onChangeStartTime}>
                    {COURSE_TIME.map((time, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                textAlign: 'center',
                                color:
                                    selectedTimeStartIndex === index
                                        ? 'black'
                                        : 'gray',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '5vw',
                                }}
                            >
                                {time}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper {...PickerOptions} onSlideChange={onChangeEndTime}>
                    {COURSE_TIME.map((time, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                textAlign: 'center',
                                color:
                                    selectedTimeEndIndex === index
                                        ? 'black'
                                        : 'gray',
                            }}
                        >
                            {' '}
                            <div
                                style={{
                                    fontSize: '5vw',
                                }}
                            >
                                {time}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.PickerWrapper>
        </Wrapper>
    );
};

export default TimePicker;

const Wrapper = styled.div``;
