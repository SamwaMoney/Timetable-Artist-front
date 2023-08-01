import { S } from './M_Score.style';
import { useState, useEffect } from 'react';
import { useScript } from './useScript';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { TwitterShareButton } from 'react-share';
import { RWebShare } from 'react-web-share';

import timetable from '../../assets/scorepage/timetable.png';
import type from '../../assets/scorepage/Rectangle 98.png';
import sharing_icon from '../../assets/scorepage/sharing_option.svg';
import sharing_none from '../../assets/scorepage/sharing_none.svg';
import share from '../../assets/scorepage/share.svg';
import kakaotalk from '../../assets/scorepage/kakaotalk.svg';
import twitter from '../../assets/scorepage/twitter.svg';
import RangkingModal from '../_common/RankingModal';
import EditModal from '../_common/EditModal';
import M_ScoreHamburgerBtn from './M_ScoreHamburgerBtn';
import BackBtn from '../_common/BackBtn';

const M_Score = () => {
    const [data, setData] = useState([1]);
    const [isRankingModalOpen, setRankingModalOpen] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const mainURL = window.location.href.slice(0, -5);
    const status = useScript('https://developers.kakao.com/sdk/js/kakao.js');
    const navigate = useNavigate();

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

    useEffect(() => {
        if (status === 'ready' && window.Kakao) {
            // 중복 initialization 방지
            if (!window.Kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                window.Kakao.init('81f4f8b9cbc538a663be91f33d013ba1');
            }
        }
    }, [status]);

    return (
        <S.Wrapper>
            {data.length !== 0 ? (
                <>
                    <M_ScoreHamburgerBtn />
                    <div id='capture'>
                        <S.ScoreContainer>
                            <S.Title>
                                <div className='score'>
                                    내 시간표의 점수는...
                                </div>
                            </S.Title>
                            <S.Score>76점!</S.Score>
                            <S.Img src={timetable} />
                            <S.Save onClick={onCapture}>
                                📁 결과_이미지_저장하기
                            </S.Save>
                        </S.ScoreContainer>
                        <S.TypeContainer>
                            <S.Title>
                                <div className='type'>내 시간표 유형은?</div>
                            </S.Title>
                            <S.Score>
                                <div className='type'>전공 마스터</div>
                            </S.Score>
                            <S.TypeImg src={type}></S.TypeImg>
                            <S.ResultContainer>
                                <S.Part>
                                    <div className='good'>
                                        {'짱!\n\n\nദി(☆⸝⸝ᵔ‿ᵔ⸝⸝)\n\n'}
                                    </div>
                                </S.Part>
                                <S.ResultBox>
                                    <div className='text'>
                                        <span className='plus'>+ </span>
                                        최고 인기, 금공강!
                                    </div>
                                    <div className='text'>
                                        <span className='plus'>+ </span>1교시
                                        제로
                                    </div>
                                    <div className='text'>
                                        <span className='plus'>+ </span>
                                        2연강까지만 용납
                                    </div>
                                </S.ResultBox>
                            </S.ResultContainer>
                            <S.ResultContainer>
                                <S.Part>
                                    <div className='bad'>
                                        {'음...\n\n\n(?・・);σ   \n\n'}
                                    </div>
                                </S.Part>
                                <S.ResultBox>
                                    <div className='text'>
                                        <span className='minus'>- </span>
                                        퐁당퐁당 수요일
                                    </div>
                                </S.ResultBox>
                            </S.ResultContainer>
                            <S.Special>*。・✩━스페-셜━ ✩・*。</S.Special>
                            <S.SpecialBox>
                                <div className='text'>
                                    ✔ 아침잠 사수! 저녁형 시간표
                                </div>
                                <div className='text'>
                                    ✔ 채플? 그게 뭐죠. -.- 채플자유인
                                </div>
                                <div className='text'>✔ 6전공! 전공마스터</div>
                            </S.SpecialBox>
                        </S.TypeContainer>
                    </div>
                    <S.ShareContainer>
                        <S.Hide>
                            {isHidden ? (
                                <button
                                    onClick={() => {
                                        setIsHidden(false);
                                    }}
                                    style={{ background: 'none' }}
                                >
                                    <S.Icon src={sharing_icon} width={'5vw'} />
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        setIsHidden(true);
                                    }}
                                    style={{ background: 'none' }}
                                >
                                    <S.Icon src={sharing_none} width={'5vw'} />
                                </button>
                            )}
                            <div className='text'>
                                강의명을 숨기고 게시할래요.
                            </div>
                        </S.Hide>
                        {isUploaded ? (
                            <S.UploadedBtn>
                                이미 랭킹보드에 게시 완료되었어요
                            </S.UploadedBtn>
                        ) : (
                            <S.UploadBtn onClick={handleRankingClick}>
                                랭킹보드에 게시하기
                            </S.UploadBtn>
                        )}

                        <S.BasicFont>SNS에 공유하기</S.BasicFont>
                        <S.IconContainer>
                            <RWebShare
                                data={{
                                    text: '저는 시간표 망한 대학생이 아니라 시간표 아티스트예요',
                                    url: mainURL,
                                    title: '시간표 아티스트',
                                }}
                            >
                                <S.Icon src={share} width={'38px'} />
                            </RWebShare>

                            <S.Icon
                                src={kakaotalk}
                                width={'38px'}
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
                                    width={'38px'}
                                    style={{ marginTop: '0.8vw' }}
                                />
                            </TwitterShareButton>
                        </S.IconContainer>
                        {isUploaded && (
                            <S.UploadBtn onClick={e => handleEditClick(e)}>
                                시간표 수정하기
                            </S.UploadBtn>
                        )}
                    </S.ShareContainer>
                </>
            ) : (
                <S.NoData>
                    <BackBtn />
                    <S.NoDataText>Σ(‘⊙ₒ ⊙’；)</S.NoDataText>
                    <S.NoDataText>아직 시간표가 없어요!</S.NoDataText>
                    <S.Button onClick={() => navigate('/create')}>
                        시간표 만들러 가기
                    </S.Button>
                </S.NoData>
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
export default M_Score;
