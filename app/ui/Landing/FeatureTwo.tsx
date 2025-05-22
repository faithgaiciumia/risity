export default function FeatureTwo() {
  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Text on top */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-6">
          Create and Track Invoices
        </h2>
        <p className="max-w-3xl text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10">
          Easily generate <span className="font-medium text-gray-800 dark:text-white">professional invoices</span> and manage their entire lifecycle — from <span className="font-medium text-gray-800 dark:text-white">draft</span> to <span className="font-medium text-gray-800 dark:text-white">paid</span>. Whether you’re sending a one-time bill or tracking multiple transactions, the intuitive invoice builder and powerful filter options give you full control and visibility over your billing.
        </p>

        {/* Images side by side */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 justify-center">
          <img
            src="/img/NewInvoiceForm.png"
            alt="Create New Invoice"
            className="w-full md:w-1/2 rounded-xl"
          />
          <img
            src="/img/InvoicesPage.png"
            alt="Invoices Page with Filters"
            className="w-full md:w-1/2 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
