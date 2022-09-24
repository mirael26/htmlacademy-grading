import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  Router,
  Redirect,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFound from 'components/not-found/not-found';
import { appTheme } from './common';
import { AppUrl } from 'consts';
import * as S from './app.styled';
import { createBrowserHistory } from "history";

export const customHistory = createBrowserHistory();

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router history={customHistory}>
      <Switch>
        <Route exact path={`${AppUrl.Quest}/:id`}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppUrl.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppUrl.Home}>
          <Home />
        </Route>
        <Route exact path={AppUrl.NotFound}>
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to={AppUrl.NotFound} />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
