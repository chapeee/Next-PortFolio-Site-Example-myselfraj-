// pages/index.tsx

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

console.warn("hiifa-inverse");

type Repo = {
  body: any;
  id: any;
  title: any;
};

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('Fetching data...');
  try {
    // Fetch data from an external API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
      console.error('Failed to fetch data. Status:', res.status);
      return { props: { repo: [] } };
    }

    const repo: Repo[] = await res.json();

    // Log the entire JSON response
    console.log('JSON response:', repo);

    // Pass data to the page via props
    return { props: { repo } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { repo: [] } }; // Set an empty array as a fallback
  }
};

const Page = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main>
     
    </main>
  );
};

export default Page;
