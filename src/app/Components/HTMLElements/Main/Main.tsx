import React from "react";
import { BlockElement } from "@/app/Components/UI/BlockLevel/BlockElement";
import { IMainProps } from "./Main.d";

const HTMLMainComponent = ({ containerStyles, mainChildren }: IMainProps) => {
  console.log(`➡️ mainChildren: ${mainChildren}`);

  return (
    <BlockElement variant="main" className={containerStyles}>{
      // mainChildren
      <section>
        <h1 className="text-3xl font-bold">{mainChildren[0] || 'Default Main Content'}</h1>
        <textarea name="" id="" className="bg-gray-500 w-full h-24"></textarea>
        <div className="flex justify-end mt-2">
          <button>Save</button>
        </div>
      </section>
    }</BlockElement>
  );
};

export default HTMLMainComponent;
