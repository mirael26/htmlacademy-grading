import { PropsWithChildren } from 'react';
import * as S from './button.styled';

interface IButtonProps {
  onClick?: (args: any) => void,
  type?: 'button' | 'submit',
}

const Button = ({ children, ...props }: PropsWithChildren<IButtonProps>) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
