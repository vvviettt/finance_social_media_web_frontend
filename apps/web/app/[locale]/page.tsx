import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Title',
  description: 'Home Page',
};

export default function Page(): JSX.Element {
  return (
    <main>
      <Link href={'/rooms'}>GO TO</Link>
    </main>
  );
}
