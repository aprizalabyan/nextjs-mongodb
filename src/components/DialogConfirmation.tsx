"use client"

import React from 'react';
import ButtonDefault from './ButtonDefault';

interface ConfirmationDialogProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-lg font-semibold mb-4">{message}</h3>
        <div className="flex justify-end space-x-2">
          <ButtonDefault onClick={onCancel} className='bg-gray-300 text-gray-500 text-sm'>Cancel</ButtonDefault>
          <ButtonDefault onClick={onConfirm} className='bg-gray-600 text-gray-100 text-sm'>Confirm</ButtonDefault>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
