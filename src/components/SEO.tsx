import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

const SEO = ({ 
  title, 
  description = "Take the RIGHT STEP, Make the RIGHT CHOICE, CHOOSE Right Overseas Solutions for your Study, Work, and Travel abroad needs.",
  keywords = "study abroad, work visa, travel visa, overseas consultants, student visa, immigration services"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title} | Right Overseas Solutions</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={`${title} | Right Overseas Solutions`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
