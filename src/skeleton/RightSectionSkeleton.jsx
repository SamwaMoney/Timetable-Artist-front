import { SK } from './skeleton.style';

const RightSectionSkeleton = () => {
    return (
        <SK.SmallContainer>
            <SK.RankContainer padding={3}>
                <SK.RankNum height={4} width={5} />
                <SK.UserInfo height={4} />
            </SK.RankContainer>
            <SK.TimaTableImg height={110} />
        </SK.SmallContainer>
    );
};
export default RightSectionSkeleton;
