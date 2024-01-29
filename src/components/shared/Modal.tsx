import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="w-[300px] lg:w-[500px] p-5 rounded bg-white"
        onClick={e => e.stopPropagation()}>
        <h1 className="text-2xl mb-2">{title}</h1>
        {children}
      </div>
    </div>
  );
}
