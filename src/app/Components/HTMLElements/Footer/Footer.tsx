import React from 'react';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import { IFooterProps } from './Footer.d';

/**
 * Renders the footer section of the page.
 * It displays the copyright notice including the current year and copyright text.
 *
 * @param {IFooterProps} props - The props for the component.
 * @param {string} [props.containerStyles] - Optional CSS classes to apply to the footer container.
 * @param {React.ReactNode[]} props.footerChildren - An array of child elements.
 *   - `footerChildren[0]` is expected to be the copyright text.
 *   - `footerChildren[1]` is expected to be the copyright year.
 * @returns {JSX.Element} The rendered footer component.
 */
const HTMLFooterComponent = ({ containerStyles, footerChildren }: IFooterProps) => {
  console.log(`➡️ footerChildren: ${footerChildren}`);

  const footerCopyrightText = footerChildren[0];
  const footerYear = footerChildren[1];

  return (
    <BlockElement variant="footer" className={containerStyles}>{
      <Typography className=''>&copy; {footerYear} {footerCopyrightText}</Typography>
    }</BlockElement>
  );
};

export default HTMLFooterComponent;
