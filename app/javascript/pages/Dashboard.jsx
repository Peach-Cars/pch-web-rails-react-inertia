import { Head, Link } from "@inertiajs/inertia-react";
import { vehicles_path } from "../routes";

export default function Dashboard({ name }) {
  return (
    <>
      <Head>
        <title>Dashboard page</title>
        <meta name="description" content="Welcome to the dashboard" />
      </Head>
      <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900">
        {" "}
        {name}
      </h1>
      <Link href={vehicles_path()}>Vehicles</Link>
    </>
  );
}
