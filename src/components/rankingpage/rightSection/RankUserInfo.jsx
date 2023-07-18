import { S } from '../Ranking.style';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
//오른쪽 섹션에 나오는 웹의 디테일 페이지
//기본은 1, 쿼리스트링의 id가 바뀔 때마다 해당 id로 api 요청해서 보여주기
//commentList와 따로 해야한다?
const RankUserInfo = ({ data }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const {
        timetableId,
        owner,
        score,
        tableType,
        ranking,
        tableImg,
        likeCount,
        replyCount,
    } = data ? data : {};

    // const id = searchParams.get('id') | 1;
    // useEffect(() => {
    //     //해당 id에 따른 api 요청하기
    //     console.log('id api 요청!');
    // }, [id]);

    //처음에는 data의 인덱스 0번쨰 정보를 보여주고
    //클릭해서 쿼리스트링 바뀌면 해당 데이터에서 id와 일치하는 것 찾기
    //또는 해당 tableId로 api요청보내서 받아오기 => 문제는 랭킹 정보가 없다는 것
    return (
        <S.RankContainer>
            <S.RankNum>{ranking}</S.RankNum>
            <S.UserInfo>
                <S.Score>{score}</S.Score>
                <S.CategoryContainer>
                    <S.Category>{tableType}</S.Category>
                    <S.Nickname>{owner}</S.Nickname>
                </S.CategoryContainer>
            </S.UserInfo>
        </S.RankContainer>
    );
};
export default RankUserInfo;
