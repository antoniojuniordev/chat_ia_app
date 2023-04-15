import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-left: 10px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled.Image`
  margin-right: 2px;
`;
