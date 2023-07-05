import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import CreatePage from './pages/CreatePage';
import ScorePage from './pages/ScorePage';
import RankingPage from './pages/RankingPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route exact path="/" element={<MainPage />} />
          {/* 회원가입/로그인 페이지 */}
          <Route exact path="/login" element={<LoginPage />} />
          {/* 시간표 생성/수정 페이지 */}
          <Route exact path="/create" element={<CreatePage />} />
          {/* 시간표 점수 확인 페이지 */}
          <Route exact path="/score" element={<ScorePage />} />
          {/* 랭킹보드 페이지 */}
          <Route exact path="/ranking" element={<RankingPage />} />
          {/* About us 페이지 */}
          <Route exact path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
