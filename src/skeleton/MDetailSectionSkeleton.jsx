import { SK } from './skeleton.style';

const MDetailSectionSkeleton = () => {
    return (
        <div
            style={{
                backgroundColor: 'var(--background)',
                minHeight: '100vh',
                width: '100vw',
            }}
        >
            <SK.List margin={0.01}>
                <SK.RankContainer>
                    <SK.RankNum width={4.5} />
                    <SK.UserInfo />
                </SK.RankContainer>
                <SK.TimaTableImg height={25} margin={2} />
                <SK.BtnContainer>
                    <SK.Button />
                    <SK.Button />
                </SK.BtnContainer>
                <div style={{ width: '80%', paddingTop: '3vw' }}>
                    <SK.CommentInfo />
                    <SK.CommentInfo />
                </div>
            </SK.List>
        </div>
    );
};
export default MDetailSectionSkeleton;
