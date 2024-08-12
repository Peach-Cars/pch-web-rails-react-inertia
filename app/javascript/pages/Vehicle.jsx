import React from "react";
import { vehicles_path } from "../routes";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Vehicle({ vehicle }) {
  return (
    <div>
      <Head title={` ${vehicle?.make} ${vehicle?.model} in Nairobi`}>
        <meta
          name="description"
          content={`View ${vehicle.make} ${vehicle.model} in Nairobi`}
        />
      </Head>
      <Link
        className="block mb-4 font-medium text-pink-600 hover:underline"
        href={vehicles_path()}
      >
        &larr;All vehicles
      </Link>
      <h2>{vehicle.registration_number}</h2>
      <p>{vehicle.make}</p>
      <p>{vehicle.model}</p>
      <p>{Number(vehicle.price)}</p>
      <p>{vehicle.chassis_number}</p>
    </div>
  );
}
