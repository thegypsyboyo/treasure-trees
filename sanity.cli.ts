import {defineCliConfig} from 'sanity/cli'


const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
  }
})
