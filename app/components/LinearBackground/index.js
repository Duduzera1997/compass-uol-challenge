import LinearGradiend from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { darkPurple, red } from '~/styles/colors';

export default styled(LinearGradiend).attrs({
  colors: [darkPurple, red],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1.05 },
})`
  flex: 1;
`;
