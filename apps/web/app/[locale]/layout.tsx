import { notFound } from 'next/navigation';
import '../../styles/global.css';
import { Roboto } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
});
const locales = ['en', 'vi'];

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale} className={roboto.className}>
      <body>
        <NextTopLoader color="#5aa7ff" showSpinner={false} height={4} />
        {children}
      </body>
    </html>
  );
}
