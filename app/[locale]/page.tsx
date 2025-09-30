import HomeClient from './HomeClient';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default function Home() {
  return <HomeClient />;
}

export const dynamicParams = false;
