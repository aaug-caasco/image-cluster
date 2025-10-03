import React from 'react';
import { BlockElement } from '../BlockLevel/BlockElement';
import Button from '../../HTMLElements/Form/Button/Button';
import { ICardProps } from './Card.d';

/**
 * A reusable card component for displaying content with associated actions.
 * It renders a block element containing the provided content and
 * standard "Edit" and "Delete" buttons.
 *
 * @param {ICardProps} props - The props for the component.
 * @param {React.ReactNode} props.cardContent - The main content to be displayed within the card.
 * @param {string} [props.buttonClass] - Optional CSS classes to be applied to the action buttons.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({ cardContent, buttonClass }: ICardProps) => {
  return (
    <>
      <BlockElement variant="div" className="p-4 w-1/4 border-r-1">
        {cardContent}

        <BlockElement variant="div" className="p-2 flex justify-end">
          <Button buttonLabel="Edit" buttonClass={buttonClass} />
          <Button buttonLabel="Delete" buttonClass={buttonClass} />
        </BlockElement>
      </BlockElement>
    </>
  );
};

export default Card;
