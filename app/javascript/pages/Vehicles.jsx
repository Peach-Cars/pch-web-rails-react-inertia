export default function Vehicles({ vehicles }) {
  return (
    <div>
      <h1 className="font-semibold mb-2">Vehicles</h1>
      <div>
        {vehicles.length ? (
          vehicles.map((vehicle) => (
            <div key={vehicle.id}>
              <h3>{vehicle.registration_number}</h3>
              <h3>{vehicle.make}</h3>
              <h3>{vehicle.model}</h3>
              <h3>{Number(vehicle.price)}</h3>
              <h3>{vehicle.chassis_number}</h3>
            </div>
          ))
        ) : (
          <div>No vehicles found</div>
        )}
      </div>
    </div>
  );
}
