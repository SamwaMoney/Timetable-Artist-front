import { SK } from './skeleton.style';

const CommentSkeleton = () => {
    return (
        <div style={{ paddingTop: '1vw' }}>
            <SK.CommentInfo height={5} radius={1} />
            <SK.CommentInfo height={5} radius={1} />
        </div>
    );
};

export default CommentSkeleton;
