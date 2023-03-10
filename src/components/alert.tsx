import React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface IAlertProps extends AlertProps {
  children: React.ReactNode;
}

const Alert: React.FC<IAlertProps> = ({ children, ...rest }) => {
  return (
    <MuiAlert elevation={6} variant="filled" {...rest}>
      {children}
    </MuiAlert>
  );
};

export default Alert;
