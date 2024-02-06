import {createClient} from '@sanity/client'

const sanityclient = createClient({
  projectId: '1vkh2vq0',
  dataset: 'production',
  useCdn: false, // Disable CDN to ensure SSR
});

export default sanityclient