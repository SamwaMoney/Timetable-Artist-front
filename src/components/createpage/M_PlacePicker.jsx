import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';
import { COURSE_PLACE, PickerOptions } from '../../consts/timeTableInput';
import { useState } from 'react';
import { S } from './M_CreateTimeTable.style';

//요일 고르는 창
const PlacePicker = ({
    setIsPlacePickerOpen,
    isPlacePickerOpen,
    setSelectedPlace,
}) => {
    const [selectedPlaceIndex, setSelectedPlaceIndex] = useState(0); // 초기값은 월(0)로 설정

    //요일을 감지해 바꿔주는 함수
    const onChangeDay = swiper => {
        // 클릭한 슬라이드의 인덱스를 업데이트하여 선택된 슬라이드 표시
        console.log('day', swiper.activeIndex);
        setSelectedPlaceIndex(swiper.activeIndex);
    };

    //picker닫음 (취소 버튼)
    const onPickerClose = () => {
        setIsPlacePickerOpen(prev => !prev);
    };

    //picker 다 선택후 완성 (확인 버튼)
    const onPickerComplete = () => {
        setSelectedPlace(COURSE_PLACE[selectedPlaceIndex]);
        setIsPlacePickerOpen(prev => !prev);
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
                    {COURSE_PLACE.map((place, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                textAlign: 'center',
                                color:
                                    selectedPlaceIndex === index
                                        ? 'black'
                                        : 'gray',
                            }}
                        >
                            {place}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.PickerWrapper>
        </Wrapper>
    );
};

export default PlacePicker;

const Wrapper = styled.div`
    z-index: 100;
`;
