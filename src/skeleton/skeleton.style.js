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
    width: ${props => (props.width ? `${props.width}vw` : '20%')};
    height: ${props => (props.height ? `${props.height}vw` : '14vw')};
    font-size: 8vw;
    ${props => (props.isshowtimetable === 'true' ? 'var(--blue)' : 'black')};
    z-index: 100;
`;

SK.UserInfo = styled(SkeletonDiv)`
    width: 100%;
    ${FlexCenter}
    position: relative;
    height: ${props => (props.height ? `${props.height}vw` : '14vw')};
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
