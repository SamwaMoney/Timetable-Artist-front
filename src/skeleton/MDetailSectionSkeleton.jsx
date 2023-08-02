import { SK } from './skeleton.style';
import MCommentSkeleton from './MCommentSkeleton';
const MDetailSectionSkeleton = () => {
    return (
        <div
            style={{
                backgroundColor: 'var(--background)',
                height: '100vh',
                width: '100vw',
            }}
        >
            <SK.List margin={0.01}>
                <SK.RankContainer>
                    <SK.RankNum height={15} width={20} />
                    <SK.UserInfo height={15} />
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
