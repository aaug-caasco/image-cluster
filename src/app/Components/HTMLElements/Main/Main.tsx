import React from "react";
import { BlockElement } from "@/app/Components/UI/BlockLevel/BlockElement";
import { Typography } from "../../UI/Typography/Typography";
import Button from "../Form/Button/Button";
import Card from "../../UI/Card/Card";
import { IMainProps } from "./Main.d";

/**
 * Renders the main content area of the page.
 * This component includes a form for creating notes and a section for displaying existing notes.
 *
 * @param {IMainProps} props - The props for the component.
 * @param {string} [props.containerStyles] - Optional CSS classes to apply to the main container.
 * @param {React.ReactNode[]} [props.mainChildren] - An array of child elements.
 *   - `mainChildren[0]` is expected to be the page title.
 *   - `mainChildren[1]` is expected to be the CSS class string for buttons.
 * @returns {JSX.Element} The rendered main component.
 */
const HTMLMainComponent = ({ containerStyles, mainChildren }: IMainProps) => {
  console.log(`➡️ mainChildren: ${mainChildren?.[1]}`);

  const buttonClass = (mainChildren?.[1] as string) || 'bg-blue-500 text-white px-4 py-2 rounded';

  return (

    <BlockElement variant="main" className={containerStyles}>{
      <>
        {/**
         * Note creation/editing form section.
         * This section includes a title, a textarea for the note content,
         * and a save button.
         */}
        <BlockElement variant="section">
          <Typography variant="h1" className="text-3xl font-bold">{mainChildren?.[0] || 'Default Main Content'}</Typography>

          <textarea name="" id="" className="bg-gray-500 w-full h-24"></textarea>

          <BlockElement variant="div" className="flex justify-end mt-2">
            <Button buttonLabel="Save" buttonClass={buttonClass} />
          </BlockElement>
        </BlockElement>

        {/**
         * Section for displaying saved notes.
         * This is a placeholder and will be replaced with dynamic note data.
         * Each note will have options to be edited or deleted.
         */}
        <BlockElement variant="section" className="flex flex-wrap mt-4 border-t-2 border-b-2 border-gray-300">
          <Card cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit." buttonClass={buttonClass} />

          <Card cardContent="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." buttonClass={buttonClass} />
        </BlockElement>
      </>
    }</BlockElement>
  );
};

export default HTMLMainComponent;
