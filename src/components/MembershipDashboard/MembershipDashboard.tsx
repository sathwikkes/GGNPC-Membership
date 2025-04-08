import React, { useState } from 'react';
import './MembershipDashboard.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Line, ComposedChart, Cell } from 'recharts';

const data = [
  {
    "name": "GGNPC",
    "budget": 57,
    "members": 9000,
    "revenuePerMember": 6333.33,
    "tiers": 8,
    "avgBenefits": 6.25
  },
  {
    "name": "Sempervirens Fund",
    "budget": 17,
    "members": 15000,
    "revenuePerMember": 1133.33,
    "tiers": 2,
    "avgBenefits": 5.00
  },
  {
    "name": "Marine Mammal",
    "budget": 21,
    "members": 20000,
    "revenuePerMember": 1050,
    "tiers": 5,
    "avgBenefits": 5.60
  },
  {
    "name": "Yosemite",
    "budget": 25,
    "members": 56000,
    "revenuePerMember": 446.43,
    "tiers": 8,
    "avgBenefits": 13.63
  },
  {
    "name": "Surfrider",
    "budget": 14,
    "members": 50000,
    "revenuePerMember": 280,
    "tiers": 4,
    "avgBenefits": 4.75
  },
  {
    "name": "CA State Parks",
    "budget": 10,
    "members": 77000,
    "revenuePerMember": 129.87,
    "tiers": 3,
    "avgBenefits": 7.00
  }
];

const uniqueBenefits = [
  "Personalized Membership Cards",
  "15% Discount on park stores and webstores",
  "Personalized address labels",
  "Exclusive Member Hiking & Events Series",
  "Subscription to Gateways Magazine",
  "Reciprocal discount - Public Lands Alliance",
  "Annual Fourth of July Celebration",
  "Annual State of the Parks Fireside Chat",
  "E-newsletters with exclusive park events",
  "Trails Forever Dinner and Family Campfire"
];

const otherOrgBenefits = [
  "Virtual webinars and panel discussions",
  "Discounted tours",
  "Quarterly newsletter",
  "Discount on gift store purchases",
  "Animal release celebration",
  "Donor Passport",
  "Outdoor Adventures discounts",
  "Discounted stays at special locations",
  "Email updates", 
  "Recognition on Honor Wall"
];

const MembershipDashboard = () => {
  const [activeChart, setActiveChart] = useState('revenuePerMember');
  const [showGGNPC, setShowGGNPC] = useState(true);
  const [isUniqueBenefitsOpen, setIsUniqueBenefitsOpen] = useState(false);
  const [isConsiderBenefitsOpen, setIsConsiderBenefitsOpen] = useState(false);

  


const getBarFill = (name: string): string => {
    if (name === 'GGNPC') return '#2e7d32';
    return '#1976d2';
};
  
  const chartData = data.filter(item => showGGNPC || item.name !== 'GGNPC');
  
  const renderChart = () => {
    switch(activeChart) {
      case 'revenuePerMember':
        return (
            <ResponsiveContainer width="100%" height={800}> 
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Revenue per Member ($)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `$${typeof value === 'number' ? value.toFixed(2) : value}`} />
              <Legend />
              <Bar dataKey="revenuePerMember" name="Revenue per Member" fill="#1976d2">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarFill(entry.name)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      case 'members':
        return (
          <ResponsiveContainer width="100%" height={800}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Number of Members', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Legend />
              <Bar dataKey="members" name="Member Count" fill="#1976d2">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarFill(entry.name)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      case 'budget':
        return (
          <ResponsiveContainer width="100%" height={800}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Budget ($ millions)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => `$${value} million`} />
              <Legend />
              <Bar dataKey="budget" name="Budget (millions)" fill="#1976d2">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarFill(entry.name)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      case 'tiers':
        return (
          <ResponsiveContainer width="100%" height={800}>
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" label={{ value: 'Number of Tiers', angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: 'Avg Benefits per Tier', angle: 90, position: 'insideRight' }} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="tiers" name="Membership Tiers" fill="#1976d2">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarFill(entry.name)} />
                ))}
              </Bar>
              <Line yAxisId="right" type="monotone" dataKey="avgBenefits" name="Avg Benefits per Tier" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Membership Program Comparison Dashboard</h2>
      
      <div className="mb-4 flex flex-wrap gap-2">
        <button 
          className={`px-3 py-1 rounded ${activeChart === 'revenuePerMember' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveChart('revenuePerMember')}
        >
          Revenue per Member
        </button>
        <button 
          className={`px-3 py-1 rounded ${activeChart === 'members' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveChart('members')}
        >
          Member Count
        </button>
        <button 
          className={`px-3 py-1 rounded ${activeChart === 'budget' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveChart('budget')}
        >
          Budget
        </button>
        <button 
          className={`px-3 py-1 rounded ${activeChart === 'tiers' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveChart('tiers')}
        >
          Tiers & Benefits
        </button>
        
        <label className="ml-4 flex items-center">
          <input 
            type="checkbox" 
            checked={showGGNPC} 
            onChange={() => setShowGGNPC(!showGGNPC)}
            className="mr-2"
          />
          Include GGNPC in comparison
        </label>
      </div>
      
      {renderChart()}
      
      {/* <div className="mt-10 flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-1/2">
        <div className="bg-gray-100 p-4 rounded mb-4">
            <h3 className="text-lg font-bold mb-2">GGNPC Unique Benefits</h3>
            <ul className="list-disc pl-5">
            {uniqueBenefits.map((benefit, index) => (
                <li key={index} className="mb-1">{benefit}</li>
            ))}
            </ul>
        </div>

            
            <div className="bg-gray-100 p-4 rounded">
        <h3 className="text-lg font-bold mb-2">Benefits to Consider Adding</h3>
        <ul className="list-disc pl-5">
        {otherOrgBenefits.map((benefit, index) => (
            <li key={index} className="mb-1">{benefit}</li>
        ))}
        </ul>
        </div>
        </div>
        </div> */}
        <div className="benefit-section">
        <div className="mt-4">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <div className="bg-gray-100 rounded mb-4">
            <button 
              className="w-full p-4 text-left font-bold text-lg flex justify-between items-center"
              onClick={() => setIsUniqueBenefitsOpen(!isUniqueBenefitsOpen)}
            >
              <span>GGNPC Unique Benefits</span>
              <span>{isUniqueBenefitsOpen ? '▼' : '▶'}</span>
            </button>
            {isUniqueBenefitsOpen && (
              <div className="p-4 pt-0">
                <ul className="list-disc list-inside text-left">
                  {uniqueBenefits.map((benefit, index) => (
                    <li key={index} className="mb-1 text-left">{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          </div>

          <div className="benefit-section">
          <div className="bg-gray-100 p-4 rounded text-left">
            <button 
              className="w-full p-4 text-left font-bold text-lg flex justify-between items-center"
              onClick={() => setIsConsiderBenefitsOpen(!isConsiderBenefitsOpen)}
            >
              <span>Benefits to Consider Adding</span>
              <span>{isConsiderBenefitsOpen ? '▼' : '▶'}</span>
            </button>
            {isConsiderBenefitsOpen && (
              <div className="p-4 pt-0">
                <ul className="list-disc list-inside text-left">
                  {otherOrgBenefits.map((benefit, index) => (
                    <li key={index} className="mb-1 text-left">{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default MembershipDashboard;




