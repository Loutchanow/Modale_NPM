import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
  onClick: () => void;
  backgroundcolor?: string;
  textcolor?: string;
  bordercolor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: ${({ backgroundcolor }) => backgroundcolor || '#007bff'};
  color: ${({ textcolor }) => textcolor || 'white'};
  border: ${({ bordercolor }) => `1px solid ${bordercolor || 'transparent'}`};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

`;

const Button: React.FC<ButtonProps> = ({ label, onClick, backgroundcolor, textcolor, bordercolor }) => {
  return (
    <StyledButton
      label={label}
      onClick={onClick}
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      bordercolor={bordercolor}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
