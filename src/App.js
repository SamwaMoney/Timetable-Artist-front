import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';
import GlobalStyles from './style/global';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import CreatePage from './pages/CreatePage';
import ScorePage from './pages/ScorePage';
import RankingPage from './pages/RankingPage';
import AboutUsPage from './pages/AboutUsPage';
import MenuPage from './pages/M_MenuPage';
import MError from './components/_common/M_Error';
import Error from './components/_common/Error';
import ErrorPage from './pages/ErrorPage';
import MRankDetail from './components/rankingpage/M_RankDetail';
import { Provider } from 'react-redux';
import store from './store/store';
import MRankingListSkeleton from './skeleton/MRankingListSkeleton';
import CommentSkeleton from './skeleton/CommentSkeleton';
function App() {
    return (
        <>
            {/*redux*/}
            <Provider store={store}>
                {/*초기 css 제거*/}
                <GlobalStyles />
                <BrowserRouter>
                    <Routes>
                        {/* 메인 페이지 */}
                        <Route exact path='/' element={<MainPage />} />
                        {/* 회원가입/로그인 페이지 */}
                        <Route exact path='/login' element={<LoginPage />} />
                        {/* 시간표 생성/수정 페이지 */}
                        <Route exact path='/create' element={<CreatePage />} />
                        {/* 시간표 점수 확인 페이지 */}
                        <Route exact path='/score' element={<ScorePage />} />
                        {/* 랭킹보드 페이지 */}
                        <Route
                            exact
                            path='/ranking'
                            element={<RankingPage />}
                        />
                        <Route
                            exact
                            path='/ranking/detail/:id'
                            element={<MRankDetail />}
                        />
                        {/* About us 페이지 */}
                        <Route
                            exact
                            path='/aboutus'
                            element={<AboutUsPage />}
                        />
                        <Route path='/menu' element={<MenuPage />} />
                        <Route path='/*' element={<ErrorPage />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
