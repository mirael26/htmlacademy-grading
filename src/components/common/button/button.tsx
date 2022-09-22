import { PropsWithChildren } from 'react';
import * as S from './button.styled';

interface ButtonProps {
  onClick?: (args: any) => void,
  type?: 'button' | 'submit',
}

const Button = ({ children, ...props }: PropsWithChildren<ButtonProps>) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
