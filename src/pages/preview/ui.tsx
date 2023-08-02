import { Warning } from 'entities/warning';
import { Phone } from 'widgets/phone';

export const PreviewPage = () => {
  return (
    <>
      <Phone variant="preview" />
      <Warning />
    </>
  );
};
