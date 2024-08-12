import { Head, Link } from "@inertiajs/inertia-react";
import { vehicle_path } from "../routes";

export default function Vehicles({ vehicles }) {
  return (
    <div className="">
      <Head>
        <title>Buy a car in Nairobi</title>
        <meta name="description" content="The easiest way to buy a car in Nairobi" />
      </Head>
      <h1 className="mb-2 font-semibold">Vehicles</h1>
      <div className="flex gap-6">
        {vehicles.length ? (
          vehicles.map((vehicle) => (
            <Link
              href={vehicle_path(vehicle.id)}
              className="relative block px-5 pt-4 bg-gray-50"
              key={vehicle.id}
            >
              <div className="absolute top-0 left-0 w-1/3 h-[6px] bg-pink-600"></div>
              <h3>{vehicle.registration_number}</h3>
              <p>{vehicle.make}</p>
              <p>{vehicle.model}</p>
              <p>{Number(vehicle.price)}</p>
              <p>{vehicle.chassis_number}</p>
            </Link>
          ))
        ) : (
          <div>No vehicles found</div>
        )}
      </div>
    </div>
  );
}
