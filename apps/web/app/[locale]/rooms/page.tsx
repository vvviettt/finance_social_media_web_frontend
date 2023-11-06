import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Title',
  description: 'Home Page',
};

export default function Page(): JSX.Element {
  return (
    <main>
      <p>Page</p>
    </main>
  );
}
