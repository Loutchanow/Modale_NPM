import styled from 'styled-components';
import Button from './Button';
import { useEffect, useState } from 'react';

interface ModaleProps {
  // Open or close the modale
  open: boolean;
  // both action you can create triggered by buttonOne and buttonTwo
  actionButtonOne: () => void;
  actionButtonTwo: () => void;
  // both lable of those 2 actions buttons
  labelButtonOne: string;
  labelButtonTwo: string;
  //Message for your modale
  message: string;
  //Title for your modale
  title: string;
  // SOme style
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0;
  }
`;
const ModaleCross = styled.div`
cursor: pointer;
padding: 5px;
font-size: 1.5rem;
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
    const [isClosed, setIsClosed] = useState(false);
    useEffect(() => {
      if (open) {
        setIsClosed(false);
      }
    }, [open]);
  
    const closeModale = () => {
      setIsClosed(true);
    };

    if (!open || isClosed) return null;


  return (
    <ModaleOverlay >
      <ModaleContent backgroundcolor={backgroundcolor} textcolor={textcolor} bordercolor={bordercolor}>
        <ModaleHeader>
          <h2>{title}</h2>
          <ModaleCross onClick={closeModale} >
            <p> ✕ </p>
          </ModaleCross>
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