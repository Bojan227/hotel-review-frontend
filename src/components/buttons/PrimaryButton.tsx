import React, { MouseEvent } from 'react';
import Button from './Button';

export const PrimaryButton = ({
  children,
  disabled,
  className,
}: {
  children: React.ReactNode;
  disabled: boolean;
  className?: string | undefined;
}) => {
  return (
    <Button disabled={disabled} className={className}>
      {children}
    </Button>
  );
};
