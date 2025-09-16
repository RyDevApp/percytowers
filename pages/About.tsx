import React from 'react';
import PageHero from '../components/PageHero';

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="flex justify-center items-center mb-4 h-12 w-12 rounded-full bg-blue-100 text-blue-600 mx-auto">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-serif mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const TeamMemberCard: React.FC<{ imageUrl: string; name: string; title: string; }> = ({ imageUrl, name, title }) => (
    <div className="text-center">
        <img
            className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg"
            src={imageUrl}
            alt={`Portrait of ${name}`}
        />
        <div className="mt-4">
            <h4 className="text-lg font-bold text-gray-800 font-serif">{name}</h4>
            <p className="text-sm text-blue-600">{title}</p>
        </div>
    </div>
);


const IntegrityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PartnershipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ExcellenceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);


const About: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="About Percy Towers"
        subtitle="Architects of Leadership, Building Success Since Inception."
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded on the principle that exceptional leadership is the cornerstone of any successful enterprise, Percy Towers, LLC was established to serve as more than just a recruiting firm. We are strategic partners dedicated to building the most effective leadership teams for our clients.
              </p>
              <p className="mt-4 text-gray-600">
                Our journey began with a focus on the legal sector, where our meticulous approach and deep industry knowledge quickly set a new standard. Over the years, we've expanded our expertise to include the vital sectors of Healthcare and Accounting, bringing the same commitment and precision to each search. We believe a company's greatest asset is its people, and we are passionate about finding the right individuals to lead, innovate, and drive growth.
              </p>
            </div>
            <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop" alt="Our team in a meeting" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-4">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Our values are the foundation of our firm. They guide our actions, define our character, and drive our success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard 
                    icon={<IntegrityIcon />} 
                    title="Integrity" 
                    description="We operate with the highest ethical standards, ensuring transparency, honesty, and confidentiality in every interaction." 
                />
                <ValueCard 
                    icon={<PartnershipIcon />} 
                    title="Partnership" 
                    description="We build lasting relationships, working collaboratively with clients and candidates to achieve shared goals." 
                />
                <ValueCard 
                    icon={<ExcellenceIcon />} 
                    title="Excellence" 
                    description="We are relentless in our pursuit of outstanding results, committed to delivering exceptional quality and value." 
                />
            </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-4">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            The driving force behind our success is our dedicated team of experienced professionals, each committed to building the future of leadership.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMemberCard
              imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
              name="John Percy"
              title="Founder & Managing Partner"
            />
            <TeamMemberCard
              imageUrl="https://images.unsplash.com/photo-1580852300654-03c803a15e35?q=80&w=400&auto=format&fit=crop"
              name="Jane Doe"
              title="Director, Legal Search"
            />
            <TeamMemberCard
              imageUrl="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=400&auto=format&fit=crop"
              name="Michael Smith"
              title="Lead, Healthcare Division"
            />
            <TeamMemberCard
              imageUrl="https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=400&auto=format&fit=crop"
              name="David Chen"
              title="Principal, Accounting & Tax"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;