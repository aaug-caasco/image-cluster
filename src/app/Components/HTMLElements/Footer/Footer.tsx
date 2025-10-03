import React from 'react';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import { IFooterProps } from './Footer.d';

const HTMLFooterComponent = ({ containerStyles, footerChildren }: IFooterProps) => {
  console.log(`➡️ footerChildren: ${footerChildren}`);

  const year = new Date().getFullYear();

  return (
    <BlockElement variant="footer" className={containerStyles}>{
      <Typography className=''>&copy; {year || '2025'} {footerChildren[0] || 'Default Footer Text'}</Typography>
    }</BlockElement>
  );
};

export default HTMLFooterComponent;
