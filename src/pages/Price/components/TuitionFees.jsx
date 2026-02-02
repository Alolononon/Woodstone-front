export default function TuitionFees() {

    const primaryFees = [
    { level: "Primary 1", duration: "1.5 hrs / week", fee: 180 },
    { level: "Primary 2", duration: "1.5 hrs / week", fee: 190 },
    { level: "Primary 3", duration: "1.5 hrs / week", fee: 200 },
    { level: "Primary 4", duration: "2 hrs / week", fee: 220 },
    { level: "Primary 5", duration: "2 hrs / week", fee: 240 },
    { level: "Primary 6", duration: "2 hrs / week", fee: 260 },
  ];

  const secondaryFees = [
    { level: "Secondary 1", duration: "2 hrs / week", fee: 280 },
    { level: "Secondary 2", duration: "2 hrs / week", fee: 300 },
    { level: "Secondary 3", duration: "2 hrs / week", fee: 320 },
    { level: "Secondary 4", duration: "2 hrs / week", fee: 340 },
    { level: "Secondary 5", duration: "2 hrs / week", fee: 360 },
  ];

  return (
    <section className="w-full px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <h2 className="text-5xl font-semibold text-gray-900 text-center">
          Tuition Fees
        </h2>

        {/* Primary School */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">
            Primary School
          </h3>

          <table className="mt-3 w-full border border-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-4 py-2 text-left">Level</th>
                <th className="border px-4 py-2 text-left">Duration</th>
                <th className="border px-4 py-2 text-left">Monthly Fee</th>
              </tr>
            </thead>
            <tbody>
              {primaryFees.map((item) => (
                <tr key={item.level}>
                  <td className="border px-4 py-2">{item.level}</td>
                  <td className="border px-4 py-2">{item.duration}</td>
                  <td className="border px-4 py-2">${item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Secondary School */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-800">
            Secondary School
          </h3>

          <table className="mt-3 w-full border border-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border px-4 py-2 text-left">Level</th>
                <th className="border px-4 py-2 text-left">Duration</th>
                <th className="border px-4 py-2 text-left">Monthly Fee</th>
              </tr>
            </thead>
            <tbody>
              {secondaryFees.map((item) => (
                <tr key={item.level}>
                  <td className="border px-4 py-2">{item.level}</td>
                  <td className="border px-4 py-2">{item.duration}</td>
                  <td className="border px-4 py-2">${item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
