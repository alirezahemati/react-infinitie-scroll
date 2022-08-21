import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/home';
import Profile from './pages/profile';
import Search from './pages/search';
import Feed from './pages/feed';
import BottomNav from './components/layout/BottomNav';
import PageWrapper from './components/layout/PageWrapper';
import Header from './components/layout/Header';

function App() {
  const location = useLocation();

  return (
    <PageWrapper>
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<Search />} />
          <Route path="feed" element={<Feed />} />
        </Routes>
      </AnimatePresence>
      <BottomNav />
    </PageWrapper>
  );
}

export default App;
