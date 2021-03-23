import styled from 'styled-components/native';

export const VirtualList = styled.VirtualizedList.attrs({
  initialNumToRender: 10,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
})`
  flex: 1;
`;
