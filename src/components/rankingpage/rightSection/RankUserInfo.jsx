import { S } from '../Ranking.style';
import { useSearchParams } from 'react-router-dom';

//오른쪽 섹션에 나오는 웹의 디테일 페이지
const RankUserInfo = ({ data, loading }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const rank = searchParams.get('rank') || 1;

    return (
        (data || !loading) && (
            <S.RankUserWrapper>
                <S.RankNum iscurrentuser={'true'}>{rank}</S.RankNum>
                <S.UserInfo iscurrentuser={'true'}>
                    <S.Score>{data?.score}점</S.Score>
                    <S.CategoryContainer>
                        <S.Category>
                            {data?.tableTypeContent || '유형 정보 없음'}
                        </S.Category>
                        <S.Nickname>{data?.owner}</S.Nickname>
                    </S.CategoryContainer>
                </S.UserInfo>
            </S.RankUserWrapper>
        )
    );
};
export default RankUserInfo;
