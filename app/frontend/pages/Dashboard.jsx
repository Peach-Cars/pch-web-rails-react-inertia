import { Head } from '@inertiajs/inertia-react';

export default function Dashboard({name}) {
  return (
    <>
     <Head>
      <title>Dashboard page</title>
      <meta name="description" content="Welcome to the dashboard" />
    </Head>
      <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-4">Hello {name}!</h1>
    </>
  )
}
