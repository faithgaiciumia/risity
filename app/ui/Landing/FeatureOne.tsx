export default function FeatureOne() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            Get Smart Insights at a Glance
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Track your performance with instant access to key business metrics. From your
            <span className="font-medium text-gray-800 dark:text-white"> 6-month revenue trends </span>,
            <span className="font-medium text-gray-800 dark:text-white"> client growth </span>, to your
            <span className="font-medium text-gray-800 dark:text-white"> recent invoice activity</span>, 
            you’ll always have a clear picture of your progress. Stay informed, make better decisions, and 
            plan ahead.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src="/img/InsightsFeature.png"
            alt="Dashboard Insights"
            className="w-full rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>
    </section>
  );
}
