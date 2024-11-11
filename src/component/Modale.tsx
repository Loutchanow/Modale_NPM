import styled from 'styled-components';
import Button from './Button';

interface ModaleProps {
  open: boolean;
  actionButtonOne: () => void;
  actionButtonTwo: () => void;
  message: string;
  labelButtonOne: string;
  labelButtonTwo: string;
  title: string;
  backgroundcolor?: string;
  textcolor?: string;
  bordercolor?: string;
}
interface ModaleContentProps {
  backgroundcolor?: string;
  textcolor?: string;
  bordercolor?: string;
}


const ModaleOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  `;
  

const ModaleContent = styled.div<ModaleContentProps>`
  background-color: ${({ backgroundcolor }) => backgroundcolor || 'white'};
  border: ${({ bordercolor }) => `1px solid ${bordercolor || 'red'}`};
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  position: relative;
  color: ${({ textcolor }) => textcolor || 'white'};
`;


const ModaleHeader = styled.div`
  margin-bottom: 10px;
  h2 {
    margin: 0;
  }
`;
const ModaleBody = styled.div`
  margin-bottom: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  button {
    margin-right: 10px;
  } 
`;

const Modale: React.FC<ModaleProps> = ({ open, message, title, backgroundcolor, textcolor, bordercolor, actionButtonOne, actionButtonTwo, labelButtonOne, labelButtonTwo }) => {
  if (!open) return null;

  return (
    <ModaleOverlay >
      <ModaleContent backgroundcolor={backgroundcolor} textcolor={textcolor} bordercolor={bordercolor}>
        <ModaleHeader>
          <h2>{title}</h2>
        </ModaleHeader>
        <ModaleBody>
          <p>{message}</p> 
        </ModaleBody>
        <ButtonContainer>
          <Button onClick={actionButtonOne} label={labelButtonOne} bordercolor={bordercolor} backgroundcolor={backgroundcolor} textcolor={textcolor} />
          <Button onClick={actionButtonTwo} label={labelButtonTwo} bordercolor={bordercolor} backgroundcolor={backgroundcolor} textcolor={textcolor} />
        </ButtonContainer>
      </ModaleContent>
    </ModaleOverlay>
  );
};

export default Modale;