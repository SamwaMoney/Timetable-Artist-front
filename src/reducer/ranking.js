//ranking에 관한 reducer입니다.
// import TimeTable from '../assets/timetable.png';
import TimeTable from '../assets/scorepage/timetable.png';
//초기 데이터로 initialState를 만들어 넣었습니다.
const initialState = [
    {
        id: 11,
        nickname: '피카츄1',
        category: '연강연강수업을 모으자',
        score: 10,
        tableImg: TimeTable,
    },
    {
        id: 22,
        nickname: '피카츄2',
        category: '나는한건물만판다',
        score: 30,
        tableImg: TimeTable,
    },
    {
        id: 33,
        nickname: '피카츄3',
        category: '이화사랑산악회',
        score: 20,
        tableImg: TimeTable,
    },
    {
        id: 44,
        nickname: '피카츄4',
        category: '학교가밥먹여주냐',
        score: 100,
        tableImg: TimeTable,
    },
    {
        id: 55,
        nickname: '피카츄5',
        category: '상여자 특) 점심 먹고 등교함',
        score: 60,
        tableImg: TimeTable,
    },
    {
        id: 66,
        nickname: '피카츄6',
        category: '쉬는시간에 치타가 되는 사람',
        score: 43,
    },
    {
        id: 77,
        nickname: '피카츄7',
        category: '점심은 포기 못해',
        score: 43,
        tableImg: TimeTable,
    },
    {
        id: 88,
        nickname: '피카츄8',
        category: '“밥은 먹고 다니냐?”',
        score: 39,
        tableImg: TimeTable,
    },
    {
        id: 99,
        nickname: '피카츄9',
        category: '이대 지박령을 뵙습니다',
        score: 50,
        tableImg: TimeTable,
    },
];

//정렬 기준에 따라서 state의 정렬을 다시하는 로직
const rankReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'worst':
            const _worstState = [...state];
            _worstState.sort((a, b) => a.score - b.score);
            const worstState = _worstState.map((user, index) => {
                return { ...user, rank: index + 1 };
            });
            return worstState;
        case 'best':
            const _bestState = [...state];
            _bestState.sort((a, b) => b.score - a.score);
            const bestState = _bestState.map((user, index) => {
                return { ...user, rank: index + 1 };
            });
            return bestState;
        case 'popular':
            return state;
        default:
            return state;
    }
};

export default rankReducer;
