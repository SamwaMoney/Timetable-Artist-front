import { S } from './M_Score.style';
import { useState } from 'react';
import timetable from '../../assets/scorepage/timetable.png';
import type from '../../assets/scorepage/Rectangle 98.png';
import sharing_icon from '../../assets/scorepage/sharing_option.svg';
import sharing_none from '../../assets/scorepage/sharing_none.svg';
import instagram from '../../assets/scorepage/instagram.svg';
import kakaotalk from '../../assets/scorepage/kakaotalk.svg';
import twitter from '../../assets/scorepage/twitter.svg';
import Hamburger from '../_common/Hamburger';
import RangkingModal from '../_common/RankingModal';
import EditModal from '../_common/EditModal';
import MHamburgerButton from '../_common/M_HamburgerBtn';
const M_Score = () => {
    const [data, setData] = useState([1]);
    const [isRankingModalOpen, setRankingModalOpen] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const handleRankingClick = () => {
        setRankingModalOpen(true);
        setIsUploaded(true);
    };

    const handleEditClick = e => {
        e.preventDefault();
        setIsEditModalOpen(true);
    };

    return (
        <S.Wrapper>
            <S.ScoreContainer>
                <MHamburgerButton />
                <S.Title>
                    <div className='score'>내 시간표의 점수는...</div>
                </S.Title>
                <S.Score>76점!</S.Score>
                <S.Img src={timetable} />
                <S.Save>📁 시간표_이미지_저장하기</S.Save>
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
                            <span className='plus'>+ </span>1교시 제로
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
                    <div className='text'>✔ 아침잠 사수! 저녁형 시간표</div>
                    <div className='text'>
                        ✔ 채플? 그게 뭐죠. -.- 채플자유인
                    </div>
                    <div className='text'>✔ 6전공! 전공마스터</div>
                </S.SpecialBox>
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
                    <div className='text'>강의명을 숨기고 게시할래요.</div>
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
                    <S.Icon src={instagram} width={'12vw'} />
                    <S.Icon src={kakaotalk} width={'12vw'} />
                    <S.Icon src={twitter} width={'12vw'} />
                </S.IconContainer>
                {isUploaded && (
                    <S.UploadBtn onClick={e => handleEditClick(e)}>
                        시간표 수정하기
                    </S.UploadBtn>
                )}
            </S.TypeContainer>
        </S.Wrapper>
    );
};
export default M_Score;
