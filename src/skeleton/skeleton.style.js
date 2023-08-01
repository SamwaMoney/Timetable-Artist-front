import { styled, css } from 'styled-components';
import { FlexCenter } from '../components/rankingpage/Ranking.style';

export const SK = {};

const SkeletonAnimation = css`
    @keyframes skeleton-gradient {
        0% {
            background-color: rgba(165, 165, 165, 0.1);
        }
        50% {
            background-color: rgba(165, 165, 165, 0.3);
        }
        100% {
            background-color: rgba(165, 165, 165, 0.1);
        }
    }

    -webkit-animation: skeleton-gradient 1.2s infinite ease-in-out;
    animation: skeleton-gradient 1.2s infinite ease-in-out;
`;

export const SkeletonDiv = styled.div`
    ${SkeletonAnimation}
    z-index:100;
`;

SK.RankNum = styled(SkeletonDiv)`
    ${FlexCenter}
    margin-right: 1%;
    border-radius: 50%;
    width: ${props => (props.width ? `${props.width}rem` : '20%')};
    height: ${props => (props.height ? `${props.height}rem` : '14vw')};
    font-size: 8vw;
    ${props => (props.isshowtimetable === 'true' ? 'var(--blue)' : 'black')};
    z-index: 100;
`;

SK.RankContainer = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    padding-top: 15vw;
`;
SK.UserInfo = styled(SkeletonDiv)`
    width: 100%;
    ${FlexCenter}
    position: relative;
    height: ${props => (props.height ? `${props.height}rem` : '14vw')};
    border-radius: 7vw;
    ${props => (props.isshowtimetable === 'true' ? 'var(--blue)' : 'black')};
    z-index: 100;
`;

SK.List = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10%;
    width: 100%;
    margin-top: ${props => (props.margin ? `${props.margin}vw` : '8vw')};
`;

SK.CommentInfo = styled(SkeletonDiv)`
    ${FlexCenter}
    justify-content:space-between;
    width: 100%;
    height: ${props => (props.height ? `${props.height}vw` : '15vw')};
    border-radius: ${props => (props.height ? `${props.radius}vw` : '3vw')};
    margin-bottom: 3vw;
`;

SK.SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 49.5%;
    height: 100%;
    border: 0.1rem solid black;
`;

SK.TimaTableImg = styled(SkeletonDiv)`
    width: 90%;
    height: ${props => (props.height ? `${props.height}rem` : '40rem')};
    margin-top: 3vw;
    border-radius: 1vw;
`;
