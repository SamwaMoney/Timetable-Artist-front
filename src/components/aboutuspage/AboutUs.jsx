import { A } from './AboutUs.style';
import logo from '../../assets/mainpage/시간표아티스트logo.png';
import Hamburger from '../_common/Hamburger';

const AboutUs = () => {
    return (
        <A.Wrapper>
            <Hamburger />
            <A.ContentWrapper>
                <A.Logo src={logo} />
                <A.AboutUsWrapper>
                    <A.TextBox>
                        <p className='title eng'>EFUB</p>
                        <p className='content'>
                            Ewha Frontend UXUI Backend를 줄인 EFUB은
                            이화여자대학교 인재개발원 소속 교내 웹 개발
                            동아리입니다. 프론트엔드 리드 개발자, 프론트엔드
                            인턴 개발자, 백엔드 리드 개발자, 백엔드 인턴 개발자,
                            UXUI 디자이너가 모인 동아리입니다.
                        </p>
                    </A.TextBox>
                    <A.TextBox>
                        <p className='title'>삼와머니</p>
                        <p className='content'>
                            EFUB 3기의 여름 프로젝트 SWS 3팀의 ‘삼’과 돈을
                            의미하는 ‘머니’를 합쳐 만든 팀명입니다. 3팀과 돈, 3
                            & money를 뜻합니다. 다양한 이화인이 모여 시간표
                            아티스트 프로젝트를 완성하기 위해 노력했습니다.
                        </p>
                    </A.TextBox>
                    <A.TextBox>
                        <p className='title'>시간표 아티스트</p>
                        <p className='content'>
                            이화여대 학교 학생들의 시간표를 건물거리,
                            이동난이도, 공강의 유무 등 전반적으로 좋은
                            시간표라고 생각하는 기준을 선별하여 만든 시간표 채점
                            알고리즘으로 채점을 해주는 것이 주요 기능인
                            프로젝트입니다. 시간표마다 좋은 점, 나쁜 점을
                            분석하여 14개의 유형 중 한가지의 유형으로 채점된
                            재미있는 결과표를 제공합니다. 또한 랭킹보드
                            페이지에서 점수별, 인기순으로 정렬된 친구들의
                            시간표를 보며 좋아요와 댓글로 소통할 수 있는
                            커뮤니티 기능도 제공합니다. 웹/모바일 2가지 버전으로
                            만들어져 기기에 상관없이 즐겁게 즐길 수 있습니다.
                        </p>
                    </A.TextBox>
                    <A.TextBox>
                        <p className='title'>팀원</p>
                        <p className='team'>프론트엔드</p>
                        <A.TeamBox>
                            <p>🐬 최한비 (이화여자대학교 컴퓨터공학과)</p>
                            <p>🍮 권태영 (이화여자대학교 컴퓨터공학과)</p>
                            <p>🍔 오혜린(이화여자대학교 경영학과)</p>
                            <p>🌸 김민정(이화여자대학교 컴퓨터공학과)</p>
                        </A.TeamBox>
                        <p className='team'>백엔드</p>
                        <A.TeamBox>
                            <p>🥰 이소정 (이화여자대학교 컴퓨터공학과)</p>
                            <p>🐰 조민서 (이화여자대학교 컴퓨터공학과)</p>
                            <p>🥭차소연 (이화여자대학교 컴퓨터공학과)</p>
                            <p>💣 노하은 (이화여자대학교 컴퓨터공학과)</p>
                            <p>🍀 김혜빈 (이화여자대학교 사회복지학과)</p>
                        </A.TeamBox>
                        <p className='team'>디자인</p>
                        <A.TeamBox>
                            <p>🫧 허지원 (이화여자대학교 조형예술학부)</p>
                            <p>👻 장예원 (이화여자대학교 영어영문학부)</p>
                        </A.TeamBox>
                    </A.TextBox>
                </A.AboutUsWrapper>
            </A.ContentWrapper>
        </A.Wrapper>
    );
};

export default AboutUs;
