import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        {/* url에 따라 다른 페이지 뷰잉 */}
        <Routes>
          <Route path="/" element={<DayList />}/> {/* 첫 페이지 */}
          <Route path="/day/:day" element={<Day />}/> {/* dynamic page */}
          <Route path="*" element={<EmptyPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
