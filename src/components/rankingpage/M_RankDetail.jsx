import OneRanking from './leftSection/OneRanking';
import { useParams } from 'react-router-dom';
const MRankDetail = () => {
    const params = useParams();
    const id = params();
    console.log('da', id);
    const isMobile = true;
    return (
        <div>
            <OneRanking isMobile={isMobile} />
        </div>
    );
};
export default MRankDetail;
