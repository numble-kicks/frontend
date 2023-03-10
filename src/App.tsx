import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import {
  AdminLayout,
  AppLayout,
  ContentsEdit,
  KakaoRedirectHandler
} from 'components';
import * as P from 'pages';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import defaultTheme from 'styles/DefaultTheme';

function App() {
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem('kicks-user');

  useEffect(() => {
    if (!isLoggedIn) navigate('/login');
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes>
        {/* with Navigation */}
        <Route path="/" element={<AppLayout navbar={true} />}>
          <Route path="/chats" element={<P.ChatListPage />} />
          <Route path="/notice" element={<P.NotificationPage />} />
          <Route index element={<P.MainPage />} />
          <Route path="/profile/:username" element={<P.ProfilePage />} />
          <Route path="search" element={<P.SearchPage />} />
          <Route path="search_result" element={<P.SearchResultPage />} />
          <Route path="/profile/:username/:follow" element={<P.FollowPage />} />
          <Route path="/video/:videoId" element={<P.PlayPage />} />
          <Route path="/oauth/callback" element={<KakaoRedirectHandler />} />
        </Route>

        {/* without Navigation */}
        <Route path="/" element={<AppLayout navbar={false} />}>
          <Route path="/login" element={<P.LoginPage />} />
          <Route path="/upload" element={<P.VideoUploadPage />} />
          <Route path="/onboard" element={<P.OnBoardingPage />} />
          <Route path="/onboard/profile" element={<P.NewProfilePage />} />
          <Route path="/profile/edit" element={<P.ProfileEditPage />} />
          <Route path="/chat/:user" element={<P.ChatRoomPage />} />
        </Route>

        {/* Admin Page (Web) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="contents" element={<P.AdminContentPage />} />
          <Route path="contents/edit/:videoId" element={<ContentsEdit />} />
          <Route path="users" element={<P.AdminUserPage />} />
          <Route
            path="users/dashboard/:userId"
            element={<P.AdminDashBoard />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
