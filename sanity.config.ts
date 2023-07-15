import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import Logo from './components/SANITY/logo';
import StudioNavbar from './components/SANITY/studio-navbar';
import {myStructure} from "./components/SANITY/deskStructure"


const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;

export default defineConfig({
  basePath: '/studio',
  name: 'TREASURE_TREES_STUDIO',
  title: 'TREASURE TREES STUDIO',


  dataset,
  projectId,

  plugins: [deskTool({structure: myStructure,
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
  theme: myTheme,
})
