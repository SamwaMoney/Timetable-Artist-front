import { S } from './Score.style';
import { useState, useEffect } from 'react';
import { useScript } from './useScript';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { TwitterShareButton } from 'react-share';
import { RWebShare } from 'react-web-share';
import {
    GetTimetableId,
    FindTable,
    ScoreTable,
    UploadTable,
} from '../../api/scores';

import Timetable from '../createpage/TimeTable';
import ScoreLoading from '../_common/ScoreLoading';
import sharing_icon from '../../assets/scorepage/sharing_option.svg';
import sharing_none from '../../assets/scorepage/sharing_none.svg';
import share from '../../assets/scorepage/share.svg';
import kakaotalk from '../../assets/scorepage/kakaotalk.svg';
import twitter from '../../assets/scorepage/twitter.svg';
import Hamburger from '../_common/Hamburger';
import RangkingModal from '../_common/RankingModal';
import EditModal from '../_common/EditModal';
import type1 from '../../assets/scorepage/typeImg/type1.png';
import type2 from '../../assets/scorepage/typeImg/type2.png';
import type3 from '../../assets/scorepage/typeImg/type3.png';
import type4 from '../../assets/scorepage/typeImg/type4.png';
import type5 from '../../assets/scorepage/typeImg/type5.png';
import type6 from '../../assets/scorepage/typeImg/type6.png';
import type7 from '../../assets/scorepage/typeImg/type7.png';
import type8 from '../../assets/scorepage/typeImg/type8.png';
import type9 from '../../assets/scorepage/typeImg/type9.png';
import type10 from '../../assets/scorepage/typeImg/type10.png';
import type11 from '../../assets/scorepage/typeImg/type11.png';
import type12 from '../../assets/scorepage/typeImg/type12.png';
import type13 from '../../assets/scorepage/typeImg/type13.png';
import type14 from '../../assets/scorepage/typeImg/type14.png';
import { addMyScore } from '../../reducer/action';

const Score = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isScored, setIsScored] = useState(true);
    const [data, setData] = useState(null);
    const [timetableId, setTimeTableId] = useState(null);
    const [isRankingModalOpen, setRankingModalOpen] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [height, setHeight] = useState('70%');
    const [width, setWidth] = useState('70%');

    const mainURL = window.location.href.slice(0, -5);
    const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const memberId = localStorage.getItem('memberId');
    const typeImage = [
        type1,
        type2,
        type3,
        type4,
        type5,
        type6,
        type7,
        type8,
        type9,
        type10,
        type11,
        type12,
        type13,
        type14,
    ];

    const handleRankingClick = () => {
        setRankingModalOpen(true);
        setIsUploaded(true);
    };

    const handleEditClick = e => {
        e.preventDefault();
        setIsEditModalOpen(true);
    };

    const onCapture = () => {
        html2canvas(document.getElementById('capture')).then(canvas => {
            let resultImg = canvas.toDataURL('image/png');
            onSaveAs(resultImg, 'timetable-result.png');
        });
        setHeight('70%');
    };

    const onSaveAs = (uri, fileName) => {
        let link = document.createElement('a');
        document.body.appendChild(link);
        link.href = uri;
        link.download = fileName;
        link.click();
        document.body.removeChild(link);
    };

    const handleKakaoBtn = () => {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '시간표 아티스트',
                description:
                    '시간표 아티스트: 저는 시간표 망한 대학생이 아니라 시간표 아티스트예요',
                imageUrl:
                    'https://drive.google.com/uc?id=18ZyvFcQzvbXVzI6CrOfCGCuRmv1-QtWM',
                link: {
                    mobileWebUrl: mainURL,
                },
            },
            buttons: [
                {
                    title: '내 시간표 점수 알아보기',
                    link: {
                        mobileWebUrl: mainURL,
                    },
                },
            ],
        });
    };

    const dataURLtoBlob = dataurl => {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    };

    const onUploadBtnClick = async () => {
        const canvas = await html2canvas(document.getElementById('tableImage'));
        let timetableImg = canvas.toDataURL('image/png');
        timetableImg = await dataURLtoBlob(timetableImg);

        timetableImg = new File([timetableImg], `timetable_${memberId}.png`, {
            type: 'image/png',
        });
        console.log(timetableImg);
        const dto = {
            classHide: isHidden,
            ranking: true,
        };
        console.log(dto);

        const res = await UploadTable(timetableImg, dto, timetableId);
        handleRankingClick();
        setWidth('70%');
    };

    const CallGetTimetableId = async memberId => {
        const res = await GetTimetableId(memberId);
        setTimeTableId(res.data.timetableId);
        console.log(res);
        if (res.data.timetableId === null) setIsLoading(false);
    };

    const CallScoreTable = async timetableId => {
        const res = await ScoreTable(timetableId);
        console.log('채점됨');
        setIsScored(true);
    };

    const CallFindTable = async (memberId, timetableId) => {
        const res = await FindTable(memberId, timetableId);
        console.log(res.data);
        if (res.data.tableType === null) {
            setIsScored(false);
        } else {
            setData(res.data);
            setIsLoading(false);
            setIsUploaded(res.data.ranking);
            dispatch(addMyScore(res.data.score));
            console.log(res.data.score);
        }
    };

    useEffect(() => {
        if (isLoading) {
            if (timetableId === null) CallGetTimetableId(memberId);
            else {
                if (!isScored) CallScoreTable(timetableId);
                else CallFindTable(memberId, timetableId);
            }
        }
        if (status === 'ready' && window.Kakao) {
            // 중복 initialization 방지
            if (!window.Kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                window.Kakao.init('81f4f8b9cbc538a663be91f33d013ba1');
            }
        }
        if (height === 'auto') onCapture();
        if (width === '320px') onUploadBtnClick();
    }, [height, width, status, isLoading, isScored, timetableId]);

    return (
        <S.Wrapper>
            {/*햄버거*/}
            <Hamburger />
            {isLoading ? (
                // <Loading title='채점결과' />
                <ScoreLoading />
            ) : (
                <S.Container id='capture' height={height}>
                    {timetableId !== null ? (
                        <>
                            <S.SmallContainer>
                                <S.Title>내 시간표의 점수는...</S.Title>
                                <S.Score>{data.score}점!</S.Score>
                                <S.TimeTable id='tableImage' width={width}>
                                    <Timetable
                                        isScorePage={true}
                                        classList={data.classList}
                                        isHidden={isHidden}
                                    />
                                </S.TimeTable>

                                <S.Save
                                    onClick={() => {
                                        setHeight('auto');
                                    }}
                                >
                                    📁 결과_이미지_저장하기
                                </S.Save>
                            </S.SmallContainer>
                            <S.SmallContainer>
                                <S.Title>내 시간표 유형은?</S.Title>
                                <S.Score>
                                    <div className='type'>
                                        {data.tableTypeContent}
                                    </div>
                                </S.Score>
                                <S.TypeImg
                                    src={typeImage[data.tableType]}
                                ></S.TypeImg>
                                {data.plusComments.length > 0 && (
                                    <S.ResultContainer>
                                        <S.Part>
                                            <div className='good'>
                                                {'짱!\n\n\nദി(☆⸝⸝ᵔ‿ᵔ⸝⸝)\n\n'}
                                            </div>
                                        </S.Part>
                                        <S.ResultBox>
                                            {data.plusComments.map(item => {
                                                return (
                                                    <div
                                                        className='text'
                                                        key={item.commentId}
                                                    >
                                                        <span className='plus'>
                                                            +{' '}
                                                        </span>
                                                        {item.content}
                                                    </div>
                                                );
                                            })}
                                        </S.ResultBox>
                                    </S.ResultContainer>
                                )}
                                {data.minusComments.length > 0 && (
                                    <S.ResultContainer>
                                        <S.Part>
                                            <div className='bad'>
                                                {'음...\n\n\n(?・・);σ   \n\n'}
                                            </div>
                                        </S.Part>
                                        <S.ResultBox>
                                            {data.minusComments.map(item => {
                                                return (
                                                    <div
                                                        className='text'
                                                        key={item.commentId}
                                                    >
                                                        <span className='minus'>
                                                            -{' '}
                                                        </span>
                                                        {item.content}
                                                    </div>
                                                );
                                            })}
                                        </S.ResultBox>
                                    </S.ResultContainer>
                                )}
                                {data.specialComments.length > 0 && (
                                    <>
                                        <S.Special>
                                            *。・✩━스페-셜━ ✩・*。
                                        </S.Special>
                                        <S.SpecialBox>
                                            {data.specialComments.map(item => {
                                                return (
                                                    <div className='text'>
                                                        ✔ {item.content}
                                                    </div>
                                                );
                                            })}
                                        </S.SpecialBox>
                                    </>
                                )}
                                {height === '70%' && (
                                    <>
                                        <S.Hide>
                                            {isHidden ? (
                                                <button
                                                    onClick={() => {
                                                        setIsHidden(false);
                                                    }}
                                                    style={{
                                                        background: 'none',
                                                    }}
                                                >
                                                    <S.Icon
                                                        src={sharing_icon}
                                                        width={'1.5vw'}
                                                    />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        setIsHidden(true);
                                                    }}
                                                    style={{
                                                        background: 'none',
                                                    }}
                                                >
                                                    <S.Icon
                                                        src={sharing_none}
                                                        width={'1.5vw'}
                                                    />
                                                </button>
                                            )}
                                            <div className='text'>
                                                강의명을 숨기고 게시할래요.
                                            </div>
                                        </S.Hide>
                                        {isUploaded ? (
                                            <S.UploadedBtn disabled>
                                                이미 랭킹보드에 게시
                                                완료되었어요
                                            </S.UploadedBtn>
                                        ) : (
                                            <S.UploadBtn
                                                onClick={() => {
                                                    setWidth('320px');
                                                }}
                                            >
                                                랭킹보드에 게시하기
                                            </S.UploadBtn>
                                        )}

                                        <S.BasicFont
                                            style={{ fontWeight: '700' }}
                                        >
                                            SNS에 공유하기
                                        </S.BasicFont>
                                        <S.IconContainer>
                                            <RWebShare
                                                data={{
                                                    text: '저는 시간표 망한 대학생이 아니라 시간표 아티스트예요',
                                                    url: mainURL,
                                                    title: '시간표 아티스트',
                                                }}
                                            >
                                                <S.Icon
                                                    src={share}
                                                    width={'38'}
                                                />
                                            </RWebShare>

                                            <S.Icon
                                                src={kakaotalk}
                                                width={'38'}
                                                onClick={handleKakaoBtn}
                                            />

                                            <TwitterShareButton
                                                url={mainURL}
                                                title={
                                                    '시간표 아티스트: 저는 시간표 망한 대학생이 아니라 시간표 아티스트예요'
                                                }
                                            >
                                                <S.Icon
                                                    src={twitter}
                                                    width={'38'}
                                                    style={{
                                                        marginTop: '0.1vw',
                                                    }}
                                                />
                                            </TwitterShareButton>
                                        </S.IconContainer>
                                        {isUploaded && (
                                            <S.UploadBtn
                                                onClick={e =>
                                                    handleEditClick(e)
                                                }
                                            >
                                                시간표 수정하기
                                            </S.UploadBtn>
                                        )}
                                    </>
                                )}
                            </S.SmallContainer>
                        </>
                    ) : (
                        <S.NoData>
                            <S.NoDataText>Σ(‘⊙ₒ ⊙’；)</S.NoDataText>
                            <S.NoDataText>아직 시간표가 없어요!</S.NoDataText>
                            <S.Button
                                onClick={() => {
                                    navigate('/create');
                                }}
                            >
                                시간표 만들러 가기
                            </S.Button>
                        </S.NoData>
                    )}
                </S.Container>
            )}
            {isRankingModalOpen && (
                <RangkingModal setRankingModalOpen={setRankingModalOpen} />
            )}
            {isEditModalOpen && (
                <EditModal setIsEditModalOpen={setIsEditModalOpen} />
            )}
        </S.Wrapper>
    );
};
export default Score;
