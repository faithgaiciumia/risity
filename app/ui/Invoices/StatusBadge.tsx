export default function StatusBadge({ status }: { status: string }) {
  return (
    <>
      {status === "Paid" && (
        <div className="w-fit text-center px-3 py-1 rounded-xl bg-green-100 text-green-600 border border-green-200 text-sm font-medium">
          <p>{status}</p>
        </div>
      )}
      {status === "Pending" && (
        <div className="w-fit text-center px-3 py-1 rounded-xl bg-amber-100 text-amber-600 border border-amber-200 text-sm font-medium">
          <p>{status}</p>
        </div>
      )}
      {status === "Overdue" && (
        <div className="w-fit text-center px-3 py-1 rounded-xl bg-red-100 text-red-600 border border-red-200 text-sm font-medium">
          <p>{status}</p>
        </div>
      )}
    </>
  );
}
