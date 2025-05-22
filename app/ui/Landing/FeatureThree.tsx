export default function FeatureThree() {
  return (
    <section className="py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Framed text block */}
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
            Full Invoice View & Actions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-3xl mx-auto">
            Dive into a complete, detailed view of any invoice — from line items and due dates to payment status and notes.
            Take action instantly with options to <span className="font-medium text-gray-800 dark:text-white">edit</span>,
            <span className="font-medium text-gray-800 dark:text-white"> print</span>, 
            <span className="font-medium text-gray-800 dark:text-white"> share</span>, or 
            <span className="font-medium text-gray-800 dark:text-white"> delete</span> — all from one streamlined screen.
            Perfect for quick reviews and professional communication.
          </p>
        </div>

        {/* Single centered image */}
        <div className="flex justify-center">
          <img
            src="/img/SingleInvoiceView.png"
            alt="Invoice Detail View"
            className="w-full max-w-4xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
