import React from 'react';
import './MembershipTiers.css'; // Make sure to create this CSS file

const MembershipTiers = () => {
  const tiers = [
    {
      name: "Urban Explorer",
      price: "$5/month or $35/year",
      color: "#70a9a1",
      benefits: [
        "Digital membership card",
        "15% discount at park stores and online shop",
        "Access to members-only mobile app features",
        "Quarterly digital newsletter",
        "Exclusive member hiking & events series access",
        "Personalized digital address labels"
      ],
      target: "Young adults, digital-first audiences, diverse communities",
      icon: "🌱"
    },
    {
      name: "Urban Connector",
      price: "$65/year",
      color: "#40798c",
      benefits: [
        "All Explorer benefits",
        "Family membership (valid for 2 adults + children under 18)",
        "Quarterly 'Family Adventure Pack'",
        "Four free parking passes annually",
        "20% discount on family-oriented park programs",
        "Printed Gateways Magazine subscription"
      ],
      target: "Families, residents of underperforming counties",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      name: "Urban Steward",
      price: "$125/year",
      color: "#1f363d",
      benefits: [
        "All Connector benefits",
        "Two complimentary passes to exclusive member events",
        "Recognition on digital donor wall",
        "Annual 'Parks Passport' with challenges across 37 parks",
        "Invitation to seasonal member appreciation events",
        "Commemorative gift featuring park artwork"
      ],
      target: "Engaged supporters, park enthusiasts",
      icon: "🌳"
    },
    {
      name: "Urban Guardian",
      price: "$250/year",
      color: "#046582",
      benefits: [
        "All Steward benefits",
        "Early access to special events and programs",
        "Annual guided tour with park experts",
        "Reciprocal benefits with other urban park conservancies",
        "Personalized impact report showing how your donation helps",
        "Limited edition park artwork print"
      ],
      target: "Dedicated conservationists, longtime supporters",
      icon: "🦅"
    },
    {
      name: "37 Parks Circle",
      price: "$500+/year",
      color: "#2c2c54",
      benefits: [
        "All Guardian benefits",
        "Invitation to annual 'State of the Parks' fireside chat",
        "Recognition at visitor centers",
        "Exclusive access to leadership events",
        "Private tour for up to 4 guests at your favorite park site",
        "VIP access to annual Trails Forever dinner",
        "Reciprocal discount at other national park partner stores"
      ],
      target: "Leadership donors, high-capacity supporters",
      icon: "🏞️"
    }
  ]
  const featuredIdeas = [
    {
      title: "Quarterly Digital Newsletter",
      content: [
        "Trail of the Season: Featuring lesser-known trails across all 37 park sites",
        "Wildlife Watch: Seasonal wildlife viewing opportunities with expert tips",
        "Park Project Spotlights: Behind-the-scenes updates on restoration work",
        "Member Stories: How members connect with and support the parks",
        "Climate Action: Updates on GGNPC climate resilience initiatives",
        "Digital Ranger: Virtual tours of seasonal highlights and hidden gems",
        "Volunteer Opportunities: Upcoming stewardship days and events"
      ]
    },
    {
      title: "37 Parks Passport Challenges",
      content: [
        "Seasonal Explorer: Visit 5 different park sites in each season",
        "Habitat Champion: Experience all 19 distinct ecosystems in the parks",
        "History Hunter: Discover 10 historical landmarks across the parks",
        "Watershed Wanderer: Visit all 7 watersheds within the GGNRA",
        "Birding Expedition: Spot and document 25 bird species in the parks",
        "Family Adventure: Complete 12 family-friendly activities across the parks",
        "Social Justice Journey: Visit sites highlighting social justice and equity stories",
        "Climate Resilience Trail: Explore areas showcasing climate adaptation"
      ]
    },
    {
      title: "Recognition Elements",
      content: [
        "Digital Badge System: Collectible digital badges for your member profile when completing challenges",
        "Park Steward Recognition Wall: Interactive digital display at visitor centers showing member names",
        "Anniversary Acknowledgment: Special recognition for membership milestones (1, 5, 10, 20+ years)",
        "Member Spotlight: Featured stories in Gateways Magazine and social media",
        "Commemorative Items: Sustainable, mission-related items like native seed packets or custom trail maps",
        "Donor Honor Roll: Annual recognition in GGNPC's annual report",
        "Park Partner Certificate: Personalized digital certificate highlighting your impact"
      ]
    }
  ];

  

  return (
    <div className="membership-container">
      <h2 className="membership-title">Proposed GGNPC Membership Tiers</h2>
      
      <p className="membership-intro">
        The proposed membership structure streamlines the current 8-tier system into 5 focused tiers that better serve target audiences while maintaining clear value progression.
      </p>
      
      {/* Key Changes Section */}
      <div className="key-changes-section">
        <h3 className="key-changes-title">Key Changes:</h3>
        <ul className="key-changes-list">
          <li>Simplified pricing structure (5 tiers instead of 8)</li>
          <li>Added monthly payment option at entry level</li>
          <li>Created dedicated family tier with family-specific benefits</li>
          <li>Enhanced digital benefits for younger, tech-savvy audiences</li>
          <li>Clearer benefit progression between tiers</li>
          <li>Named tiers to emphasize urban parkland conservation mission</li>
        </ul>
      </div>
      
      {/* Membership Tiers */}
      <div className="tiers-container">
        {tiers.map((tier, index) => (
          <div 
            key={index}
            className="tier-card"
            style={{borderTopColor: tier.color}}
          >
            <div className="tier-header">
              <div className="tier-header-content">
                <h3 className="tier-name">{tier.name}</h3>
                <span className="tier-icon">{tier.icon}</span>
              </div>
              <p className="tier-price">{tier.price}</p>
            </div>
            
            <div className="tier-body">
              <h4 className="benefits-title">BENEFITS:</h4>
              <ul className="benefits-list">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="benefit-item">
                    <span className="benefit-check">✓</span>
                    <span className="benefit-text">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="target-audience">
                <strong>Target audience:</strong> {tier.target}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="featured-ideas-section">
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-6 text-center">Featured Membership Program Elements</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredIdeas.map((idea, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-5">
              <h4 className="text-lg font-bold mb-3 text-blue-800">{idea.title}</h4>
              <ul className="list-disc ml-4 space-y-2">
                {idea.content.map((item, i) => (
                  <li key={i} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
      
      {/* Tier Consolidation Rationale */}
      <div className="rationale-section">
        <h3 className="rationale-title">Tier Consolidation Rationale</h3>
        <p className="rationale-intro">The current 8-tier structure was streamlined by:</p>
        
        <ol className="rationale-list">
          <li>
            <strong>Combining monthly and annual entry options</strong> — Golden Gate Keeper ($5/month) and Park Partner ($35/year) consolidated into "Urban Explorer" with both payment options
          </li>
          <li>
            <strong>Creating a dedicated family-focused mid-tier</strong> — "Urban Connector" fills the gap between basic and premium tiers with family-specific benefits
          </li>
          <li>
            <strong>Maintaining the core mid-tier</strong> — Park Steward ($125/year) becomes "Urban Steward" with enhanced benefits
          </li>
          <li>
            <strong>Consolidating upper-mid tiers</strong> — Park Conservator ($250/year) and Park Guardian ($500/year) consolidated into two distinct tiers with clearer value separation
          </li>
          <li>
            <strong>Simplifying leadership giving</strong> — Park Conservancy Leadership Circle ($1000-$9999) and PCLC Park Heroes ($10000+) consolidated into a single premium tier that starts at $500 with opportunities for higher giving levels
          </li>
        </ol>
      </div>
    </div>
  );
};

export default MembershipTiers;