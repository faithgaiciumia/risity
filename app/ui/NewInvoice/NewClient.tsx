import { poppins } from "../fonts";

export default function NewClient() {
  return (
    <div className="mx-4">
      {/* client name */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className} text-sm`}>
            Client Name
          </label>
        </div>
        <div>
          <input
            type="text"
            required
            name="name"
            placeholder="eg. Tom Baraka"
            className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
          />
        </div>
      </div>
      {/* client email */}
      <div>
        <div>
          <label className={`mb-4 font-bold ${poppins.className} text-sm`}>
            Client Email
          </label>
        </div>
        <div>
          <input
            type="email"
            required
            name="email"
            placeholder="eg. baraka@gmail.com"
            className={`w-full border p-2 mt-2 border-gray-700 text-sm ${poppins.className}`}
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="mt-2 border bg-green-400 text-white px-2 py-2 rounded text-sm">
          Save
        </button>
      </div>
    </div>
  );
}
