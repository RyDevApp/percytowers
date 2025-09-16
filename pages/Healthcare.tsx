
import React from 'react';
import PageHero from '../components/PageHero';
import SpecialtyCard from '../components/SpecialtyCard';

const HeartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);
const UserGroupIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const ClipboardListIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);

const Healthcare: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Our Heroes in Healthcare"
        subtitle="Connecting compassionate and skilled healthcare professionals with facilities that change lives."
        imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800">Honoring the Caregivers</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We are proud to support the backbone of our healthcare system. Our focus is on placing dedicated nursing professionals where they can make the greatest impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SpecialtyCard
              icon={<HeartIcon />}
              title="Registered Nurses (RNs)"
              description="Placing talented RNs in a variety of settings, from critical care and ER to specialized clinics and long-term care facilities."
            />
            <SpecialtyCard
              icon={<UserGroupIcon />}
              title="Nurse Leadership"
              description="Identifying and recruiting the next generation of nurse managers, directors, and executives who inspire and lead with compassion."
            />
            <SpecialtyCard
              icon={<ClipboardListIcon />}
              title="Specialized Nursing Roles"
              description="Fulfilling demand for specialized roles including Nurse Practitioners (NPs), Clinical Nurse Specialists (CNS), and more."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
