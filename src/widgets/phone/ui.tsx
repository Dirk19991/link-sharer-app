import { PhoneProps } from './model/types';
import { ProfilePhone } from './variants/profilePhone';
import { PreviewPhone } from './variants/previewPhone';
import { DatabasePhone } from './variants/databasePhone';

export const Phone = ({ variant }: PhoneProps) => {
  if (variant === 'profile') {
    return <ProfilePhone />;
  }
  if (variant === 'preview') {
    return <PreviewPhone variant="preview" />;
  }
  if (variant === 'database') {
    return <DatabasePhone variant="database" />;
  }
};
