import styled from 'styled-components/native';

export const VirtualList = styled.VirtualizedList.attrs({
  initialNumToRender: 10,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
})`
  flex: 1;
`;
