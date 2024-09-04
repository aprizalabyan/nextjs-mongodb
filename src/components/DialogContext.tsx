"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import DialogConfirmation from './DialogConfirmation';

interface DialogContextProps {
  showDialog: (message: string, onConfirm: () => void, onCancel: () => void) => void;
  hideDialog: () => void;
  dialogState: {
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
  };
}

const DialogContext = createContext<DialogContextProps | undefined>(undefined);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    message: '',
    onConfirm: () => {},
    onCancel: () => {},
  });

  const showDialog = (message: string, onConfirm: () => void, onCancel: () => void) => {
    setDialogState({ isOpen: true, message, onConfirm, onCancel });
  };

  const hideDialog = () => {
    setDialogState({ ...dialogState, isOpen: false });
  };

  return (
    <DialogContext.Provider value={{ showDialog, hideDialog, dialogState }}>
      {children}
      <DialogConfirmation
        isOpen={dialogState.isOpen}
        message={dialogState.message}
        onConfirm={() => {
          dialogState.onConfirm();
          hideDialog();
        }}
        onCancel={() => {
          dialogState.onCancel();
          hideDialog();
        }}
      />
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};
