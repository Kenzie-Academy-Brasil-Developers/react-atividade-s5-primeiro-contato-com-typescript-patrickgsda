import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
}

export const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <input placeholder={placeholder} {...rest} />
    </Container>
  );
};
