/**
 * Props for the Card component.
 * @interface ICardProps
 * @property {React.ReactNode} cardContent - The main content to be displayed within the card.
 * @property {string} [buttonClass] - Optional CSS classes to be applied to the action buttons inside the card.
 */
export interface ICardProps {
  cardContent: React.ReactNode;
  buttonClass?: string;
}
