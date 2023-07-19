import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';
import { COURSE_TIME, DAYS_OF_WEEK } from '../../consts/timeTableInput';
import { useState } from 'react';
import { S } from './M_CreateTimeTable.style';
import { PickerOptions } from '../../consts/timeTableInput';
const TimePicker = ({ setIsTimePickerOpen }) => {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0); // 초기값은 월(0)로 설정
    const [selectedTimeStartIndex, setSelectedTimeStartIndex] = useState(0);
    const [selectedTimeEndIndex, setSelectedTimeEndIndex] = useState(0);

    //요일을 감지해 바꿔주는 함수
    const onChangeDay = swiper => {
        // 클릭한 슬라이드의 인덱스를 업데이트하여 선택된 슬라이드 표시
        console.log('day', swiper.activeIndex);
        setSelectedDayIndex(swiper.activeIndex);
    };

    //시작시간을 감지해 바꿔주는 함수
    const onChangeStartTime = swiper => {
        console.log('startTime', swiper.activeIndex);
        setSelectedTimeStartIndex(swiper.activeIndex);
    };

    //끝시간을 감지해 바꿔주는 함수
    const onChangeEndTime = swiper => {
        console.log('endTime', swiper.activeIndex);
        setSelectedTimeEndIndex(swiper.activeIndex);
    };

    //picker닫음 (취소 버튼)
    const onPickerClose = () => {
        setIsTimePickerOpen(prev => !prev);
    };

    //picker 다 선택후 완성 (확인 버튼)
    const onPickerComplete = () => {
        setIsTimePickerOpen(prev => !prev);
        //선택한 시간을 객체로 만들어 저장하는 로직
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
                        <SwiperSlide key={index}>
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
                        <SwiperSlide key={index}>
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
                        <SwiperSlide key={index}>
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
