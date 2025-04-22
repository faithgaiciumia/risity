export default function StatusBadge({ status }: { status: string }) {
  return (
    <>
      <div className="w-fit text-center px-3 py-1 rounded-xl bg-red-100 text-red-600 border border-red-200 text-sm font-medium">
        <p>{status}</p>
      </div>
    </>
  );
}
