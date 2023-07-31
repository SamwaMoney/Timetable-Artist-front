import { S } from '../Ranking.style';
import { useSearchParams } from 'react-router-dom';

//오른쪽 섹션에 나오는 웹의 디테일 페이지
//기본은 1, 쿼리스트링의 id가 바뀔 때마다 해당 id로 api 요청해서 보여주기
//commentList와 따로 해야한다?
const RankUserInfo = ({ data,loading }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    
    const { owner, score, tableTypeContent } = data ?? null;
    const rank = searchParams.get('rank');

    return (
        (data || !loading )&& (
            <S.RankUserWrapper>
                <S.RankNum iscurrentuser={'true'}>{rank || 1}</S.RankNum>
                <S.UserInfo iscurrentuser={'true'}>
                    <S.Score>{score}점</S.Score>
                    <S.CategoryContainer>
                        <S.Category>
                            {tableTypeContent || '유형 정보 없음'}
                        </S.Category>
                        <S.Nickname>{owner}</S.Nickname>
                    </S.CategoryContainer>
                </S.UserInfo>
            </S.RankUserWrapper>
        )
    );
};
export default RankUserInfo;
