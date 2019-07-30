import app from '../app';

const { name, url } = app;
const description = '';

const SEO = {
  title: name,
  description,
  keywords: '',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url,
    title: name,
    description,
    image: `${url}/static/images/open-graph.png`,
    imageWidth: 1200,
    imageHeight: 630,
    site_name: 'sniffles-client',
  },
  twitter: {
    handle: '',
    cardType: 'summary_large_image',
  },
  richText: {
    openingHours: 'Mo,Tu,We,Th,Fr 07:00-14:00',
    streetAddress: '',
    addressLocality: '',
    postalCode: '0000',
    addressCountry: '',
    priceRange: '$$$',
  },
};

export default SEO;
