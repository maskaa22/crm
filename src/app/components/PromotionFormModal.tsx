'use client';

import React from 'react';
import Modal, { ModalProps } from './Modal';
import PromotionForm from './PromotionForm';


export interface PromotionFormModal extends ModalProps {
  companyId: string;
}

export default function PromotionFormModal({
  companyId,
  onClose,
  ...rest
}: PromotionFormModal) {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
}