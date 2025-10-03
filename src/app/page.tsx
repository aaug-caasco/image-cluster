import * as contentful from 'contentful';
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

/**
 * Configuration object for the page's HTML container styles and static values.
 * This object centralizes the CSS classes and static data for the main
 * layout components (`Header`, `Main`, `Footer`), making it easier to manage
 * the page's visual structure and non-CMS content.
 * It includes global styles for elements like buttons, as well as specific
 * styles for each layout section.
 */
const pageHTMLContainerConfig = {
  global: {
    form: {
      button: {
        buttonClass: 'bg-blue-500 text-white px-4 py-2 rounded border border-white',
      }
    }
  },
  header: {
    headerParentStyles: 'p-4 basis-14 flex items-center',
  },
  main: {
    mainParentStyles: 'flex-1 p-4',
  },
  footer: {
    footerParentStyles: 'p-4 basis-14 flex items-center',
  }
};

const buttonClass = pageHTMLContainerConfig.global.form.button.buttonClass;

const { headerParentStyles } = pageHTMLContainerConfig.header;
const { mainParentStyles } = pageHTMLContainerConfig.main;
const { footerParentStyles } = pageHTMLContainerConfig.footer;


export default async function Home() {
  // Fetch all entries for the 'crudNoteTaker' content type.
  const entries = await client.getEntries<CrudNoteTakerSkeleton>({
    content_type: 'crudNoteTaker',
  });

  console.log('Fetched entries:', entries.items[0].fields); // Debugging line to check fetched entries

  /**
   * Configuration object for page content.
   * This object structures the data fetched from Contentful and provides
   * default fallback values for the header, main, and footer sections,
   * ensuring the application can render even if the CMS data is unavailable.
   */
  const pageContentConfig = {
    header: {
      content: {
        siteName: entries.items[0]?.fields.pageTitle || 'Default Header Title',
      },
    },
    main: {
      content: {
        pageTitle: entries.items[0]?.fields.pageTitle || 'Default Main Title',
      },
    },
    footer: {
      content: {
        currentYear: new Date().getFullYear(),
        pageFooterCopyright: entries.items[0]?.fields.footerCopyrightText || 'Default Footer Text',
      }
    }
  };

  const { siteName } = pageContentConfig.header.content;
  const { pageTitle } = pageContentConfig.main.content;
  const { currentYear, pageFooterCopyright } = pageContentConfig.footer.content;

  const headerContent = [siteName];
  const mainContent = [pageTitle, buttonClass];
  const footerContent = [pageFooterCopyright, currentYear];

  return (
    <>
      <HTMLHeaderComponent containerStyles={headerParentStyles} headerChildren={headerContent} />
      <HTMLMainComponent containerStyles={mainParentStyles} mainChildren={mainContent} />
      <HTMLFooterComponent containerStyles={footerParentStyles} footerChildren={footerContent} />
    </>
  );
}
