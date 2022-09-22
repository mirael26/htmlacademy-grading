import 'styled-components';

import { AppTheme } from 'components/app/common';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}