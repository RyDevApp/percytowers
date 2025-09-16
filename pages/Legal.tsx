
import React from 'react';
import PageHero from '../components/PageHero';
import SpecialtyCard from '../components/SpecialtyCard';

const GavelIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const BriefcaseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const DocumentSearchIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
    </svg>
);

const Legal: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Legal Executive Search"
        subtitle="Precision, Integrity, and Excellence in Legal Recruitment."
        imageUrl="https://images.unsplash.com/photo-1589216532372-1c2a36790039?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800">Our Legal Specialties</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We connect top-tier law firms and corporate legal departments with exceptional talent across a range of specializations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SpecialtyCard
              icon={<GavelIcon />}
              title="Attorney Search"
              description="Sourcing accomplished associates and partners who are leaders in their field, ensuring a perfect cultural and professional fit."
            />
            <SpecialtyCard
              icon={<BriefcaseIcon />}
              title="Special Counsel"
              description="Identifying highly-specialized legal experts for complex projects, interim leadership, and strategic advisory roles."
            />
            <SpecialtyCard
              icon={<DocumentSearchIcon />}
              title="Paralegal (Litigation Heavy)"
              description="Recruiting experienced, meticulous paralegals with a proven track record in managing complex, high-stakes litigation."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
