import { TextInputProps } from 'react-native';

import { Container, StyledTextInput } from './styles';

export default function Input({ placeholder, ...rest }: TextInputProps) {
  return (
    <Container>
      <StyledTextInput
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
}
