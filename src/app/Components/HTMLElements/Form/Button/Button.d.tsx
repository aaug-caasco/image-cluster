/**
 * Props for the Button component.
 * @interface IButtonProps
 * @property {string} [buttonLabel] - The text to be displayed on the button.
 * @property {string} [buttonClass] - Optional CSS classes to apply to the button for styling.
 * @property {("button" | "submit" | "reset" | undefined)} [buttonType] - The type of the button, corresponding to the HTML `type` attribute. Defaults to "button".
 */
export interface IButtonProps {
  buttonLabel?: string;
  buttonClass?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
}
