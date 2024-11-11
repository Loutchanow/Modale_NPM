import { useEffect } from 'react';

export default function Modale(props: { message: string }) {
  const { message } = props;

  useEffect(() => {
    alert(message);
  }, [message]);

  return null;
}