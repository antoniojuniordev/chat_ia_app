import styled from 'styled-components/native';

interface MessageProp {
  userSend: boolean;
}

export const Load = styled.ActivityIndicator`
  margin-top: 20px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #ece6df;
  padding-left: 20px;
  padding-right: 20px;
`;

export const MessagesFlatList = styled.FlatList`
  flex: 1;
`;

export const ViewMessage = styled.View<MessageProp>`
  margin-left: ${({ userSend }) => (userSend ? '40px' : '0px')};
  margin-right: ${({ userSend }) => (userSend ? '0px' : '40px')};
  background-color: ${({ userSend }) => (userSend ? '#E7FED8' : '#fff')};
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Message = styled.Text`
  color: #171717;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 16px;
`;

export const Time = styled.Text`
  color: #171717;
  text-align: right;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 13px;
  opacity: 0.6;
`;

export const ContainerFooter = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;
