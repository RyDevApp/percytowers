
import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const SectorCard: React.FC<{ to: string, title: string, description: string, imageUrl: string }> = ({ to, title, description, imageUrl }) => (
    <Link to={to} className="group relative block bg-black rounded-lg shadow-xl overflow-hidden">
        <img alt={title} src={imageUrl} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />
        <div className="relative p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
                Practice Area
            </p>
            <p className="text-2xl font-bold text-white font-serif">{title}</p>
            <div className="mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </Link>
);


const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="Percy Towers"
        subtitle="Constructing the Future of Leadership. Your premier partner in executive search, connecting exceptional talent with transformative opportunities."
        imageUrl="https://images.unsplash.com/photo-1583443649178-16f3c3a38b1a?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800">Our Foundation of Expertise</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We build successful teams from the ground up, specializing in key sectors that drive our economy. Explore our core practice areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SectorCard 
                to="/legal" 
                title="Legal" 
                description="Placing elite legal professionals from seasoned attorneys to litigation-heavy paralegals." 
                imageUrl="https://images.unsplash.com/photo-1589216532372-1c2a36790039?q=80&w=800&auto=format&fit=crop"
              />
              <SectorCard 
                to="/healthcare" 
                title="Healthcare" 
                description="Connecting heroic nurses and healthcare leaders with institutions that value their dedication." 
                imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
              />
              <SectorCard 
                to="/accounting" 
                title="Accounting & Tax" 
                description="Sourcing meticulous and strategic financial experts for top-tier accounting and tax roles." 
                imageUrl="https://images.unsplash.com/photo-1640622300473-977435c26c04?q=80&w=800&auto=format&fit=crop"
              />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="Professional meeting" className="rounded-lg shadow-xl"/>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800">Why Percy Towers?</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Like a well-constructed tower, a successful career is built on a strong foundation. At Percy Towers, we don't just fill positions; we forge lasting partnerships. Our bespoke approach ensures a precise match of skills, culture, and ambition.
                </p>
                <ul className="mt-6 space-y-4 text-gray-600">
                    <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">&#10003;</span>
                        <span><strong className="font-semibold">Unmatched Insight:</strong> Deep industry knowledge and an extensive network of top-tier candidates.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">&#10003;</span>
                        <span><strong className="font-semibold">Discreet & Professional:</strong> Upholding the highest standards of confidentiality and integrity.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">&#10003;</span>
                        <span><strong className="font-semibold">Long-Term Vision:</strong> Focused on placements that foster growth for both candidates and companies.</span>
                    </li>
                </ul>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
