import * as contentful from 'contentful';
import { BlockElement } from './Components/UI/BlockLevel/BlockElement';
import { Typography } from './Components/UI/Typography/Typography';
import HTMLHeaderComponent from './Components/HTMLElements/Header/Header';
import HTMLMainComponent from './Components/HTMLElements/Main/Main';
import HTMLFooterComponent from './Components/HTMLElements/Footer/Footer';
// It's a good practice to define the shape of your Contentful model
// for type-safety.
export type CrudNoteTakerSkeleton = {
  contentTypeId: 'crudNoteTaker',
  fields: {
    pageTitle: contentful.EntryFieldTypes.Symbol;
    footerCopyrightText: contentful.EntryFieldTypes.Symbol;
    // You can add other fields from your content model here
    // e.g., description: contentful.EntryFieldTypes.Text;
  }
}

// Initialize the Contentful client.
// Make sure CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN are in your .env.local file.
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export default async function Home() {
  // Fetch all entries for the 'crudNoteTaker' content type.
  const entries = await client.getEntries<CrudNoteTakerSkeleton>({
    content_type: 'crudNoteTaker',
  });

  console.log('Fetched entries:', entries.items[0].fields); // Debugging line to check fetched entries

  // Get the pageTitle from the first entry.
  // You might want to handle cases where there are no entries or multiple entries.
  const pageTitle = entries.items[0]?.fields.pageTitle || 'Default Header Title';
  const pageFooterCopyright = entries.items[0]?.fields.footerCopyrightText;

  const headerContent = [pageTitle];
  const mainContent = [pageTitle];
  const footerContent = [pageFooterCopyright];

  return (
    <>
      <HTMLHeaderComponent containerStyles='test' headerChildren={headerContent} />
      <HTMLMainComponent containerStyles='test' mainChildren={mainContent} />
      <HTMLFooterComponent containerStyles='test' footerChildren={footerContent} />
    </>
  );
}
