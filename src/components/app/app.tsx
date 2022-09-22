import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFound from 'components/not-found/not-found';
import { appTheme } from './common';
import { AppUrl } from 'consts';
import * as S from './app.styled';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppUrl.Quest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppUrl.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppUrl.Home}>
          <Home />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
