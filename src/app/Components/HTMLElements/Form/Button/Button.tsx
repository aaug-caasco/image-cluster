import React from 'react';
import { IButtonProps } from './Button.d';

/**
 * A reusable Button component.
 *
 * @param {IButtonProps} props - The props for the component.
 * @param {string} [props.buttonLabel] - The text to display inside the button.
 * @param {string} [props.buttonClass] - Optional CSS classes to apply to the button.
 * @param {("button" | "submit" | "reset" | undefined)} [props.buttonType] - The HTML button type. Defaults to 'button'.
 * @returns {JSX.Element} The rendered button element.
 */
const Button = ({ buttonLabel, buttonClass, buttonType  }: IButtonProps) => {
  const cardButtonType = buttonType || 'button';

  return (
    <button className={buttonClass} type={cardButtonType}>{buttonLabel}</button>
  );
};

export default Button;
