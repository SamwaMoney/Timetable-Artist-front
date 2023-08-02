import { SK } from './skeleton.style';

const MDetailSectionSkeleton = () => {
    return (
        <div
            style={{
                backgroundColor: 'var(--background)',
                height: '100vh',
                width: '100vw',
            }}
        >
            <SK.List>
                <SK.RankContainer>
                    <SK.RankNum height={4} width={5} />
                    <SK.UserInfo height={4} />
                </SK.RankContainer>
                <SK.TimaTableImg height={25} />
            </SK.List>
        </div>
    );
};
export default MDetailSectionSkeleton;
