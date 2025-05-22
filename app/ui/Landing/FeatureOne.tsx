export default function FeatureOne() {
  return (
    <>
      <div className="flex items-center p-6 w-[80%] mx-auto justify-between">
        <div className="w-[100%]">
          <h1 className="text-4xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Made for modern product teams</h1>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Linear is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.
          </p>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center">
        <div className="w-[300px] h-auto">
            <img src="/img/RSTY9.png"/>
        </div>
      </div>
    </>
  );
}
