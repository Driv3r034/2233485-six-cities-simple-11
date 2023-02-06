import MainPage from '../../pages/main-page/main-page';
import offersCards from '../../mocks/offers-cards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage offersCards={offersCards} />} />
      <Route path={'/offer/:id'} element={<RoomPage offersCards={offersCards} />} />
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'*'} element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
