
import React from 'react';
import PageHero from '../components/PageHero';
import SpecialtyCard from '../components/SpecialtyCard';

const CalculatorIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);
const ChartBarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);
const LibraryIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
);

const Accounting: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Accounting & Tax"
        subtitle="Delivering the Financial Acumen Your Business Needs to Thrive."
        imageUrl="https://images.unsplash.com/photo-1640622300473-977435c26c04?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800">Expertise in Finance</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              In a world of complex regulations and financial landscapes, precision is paramount. We specialize in sourcing top-tier accounting and tax professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SpecialtyCard
              icon={<CalculatorIcon />}
              title="Tax Professionals"
              description="Connecting companies with skilled tax accountants, managers, and directors for compliance, strategy, and advisory roles."
            />
            <SpecialtyCard
              icon={<ChartBarIcon />}
              title="Corporate Accounting"
              description="Sourcing financial controllers, analysts, and staff accountants who form the backbone of a strong finance department."
            />
            <SpecialtyCard
              icon={<LibraryIcon />}
              title="Audit & Assurance"
              description="Recruiting internal and external auditors who uphold integrity and provide critical insights for financial governance."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accounting;
