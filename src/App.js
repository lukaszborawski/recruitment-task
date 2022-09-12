import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { theme } from './assets/styles/Theme'
import './assets/styles/fonts.css'
import GlobalStyle from './assets/styles/GlobalStyle'
import UsersList from './pages/UsersList';
import UserDetails from './pages/UserDetails';
import PostDetails from './pages/PostDetails';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<UsersList />} />
              <Route path='/user/:id' element={<UserDetails />} />
              <Route path='/user/:id/:postID' element={<PostDetails />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </ThemeProvider>
    </>

  )
}

export default App;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
`
