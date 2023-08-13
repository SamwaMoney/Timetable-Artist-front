import { S } from './Dropdown.style';
import ic_dropdown from '../../assets/createpage/ic_dropdown.png';
import { COURSE_PLACE } from '../../consts/timeTableInput';

const PlaceDropdown = ({
    isPlaceOpen,
    setIsPlaceOpen,
    selectedPlace,
    setSelectedPlace,
}) => {
    // 장소 업데이트 함수
    const changeContent = content => {
        setSelectedPlace(content);
        setIsPlaceOpen(false);
    };

    return (
        <>
            <S.DescDiv>
                <S.DropdownDiv isopen={isPlaceOpen}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        onClick={() => setIsPlaceOpen(!isPlaceOpen)}
                    >
                        <S.DescPlaceText>{selectedPlace}</S.DescPlaceText>
                        <S.DownIcon
                            src={ic_dropdown}
                            isopen={isPlaceOpen}
                            alt='dropdown버튼'
                        />
                    </div>
                    {isPlaceOpen === true
                        ? COURSE_PLACE.map((place, _) => {
                              return (
                                  <div onClick={() => changeContent(place)}>
                                      <S.DescPlaceText>{place}</S.DescPlaceText>
                                  </div>
                              );
                          })
                        : null}
                </S.DropdownDiv>
            </S.DescDiv>
        </>
    );
};

export default PlaceDropdown;
