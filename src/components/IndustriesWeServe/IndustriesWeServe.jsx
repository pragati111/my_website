import React from "react";
import "./IndustriesWeServe.css";

const reasons = [
  {
    id: 1,
    title: "Core Website Types (Primary Categories)",
    desc: `• Business / Corporate Websites
• Ecommerce Stores
• Portfolio Websites
• Personal Branding Websites
• Landing Pages
• Booking & Appointment Websites
• Membership Websites
• Directory / Listing Websites
• Marketplace Websites
• Blog / News Websites`,
    bgColor: "#F6EFC8",
    pinColor: "#F4C430",
    icon: "bolt",
  },
  {
    id: 2,
    title: "Professional Services",
    desc: `• Lawyers & Law Firms
• Chartered Accountants
• Financial Consultants
• Insurance Agents
• Real Estate Agents
• Architects
• Interior Designers
• Doctors & Clinics
• Dentists
• Therapists / Counselors
• Astrologers
• Event Planners
• Wedding Planners
• Photographers & Videographers`,
    bgColor: "#E6DDF7",
    pinColor: "#7A4DFF",
    icon: "settings",
  },
  {
    id: 3,
    title: "Retail & Local Businesses",
    desc: `• Jewellery Shops
• Clothing Stores
• Boutiques
• Grocery Stores
• Namkeen / Snacks Brands
• Bakeries
• Sweet Shops
• Dairy Businesses
• Hardware Shops
• Mobile Shops
• Furniture Stores
• Dry Cleaners
• Salons & Spas
• Restaurants & Cafes`,
    bgColor: "#F8D7E9",
    pinColor: "#FF3CAC",
    icon: "chart",
  },
  {
    id: 4,
    title: "Industrial & Manufacturing",
    desc: `• Paint Manufacturers
• Tools Manufacturers
• Machine Sellers
• Spare Parts Dealers
• Steel & Metal Industries
• Chemical Manufacturers
• Packaging Companies
• Printing & Offset Press
• Textile Manufacturers
• Construction Companies`,
    bgColor: "#DCEAF7",
    pinColor: "#2F80ED",
    icon: "trending",
  },
  {
    id: 5,
    title: "Education & Training",
    desc: `• Schools
• Colleges
• Coaching Institutes
• Tuition Classes
• Online Course Creators
• Skill Development Centers
• Computer Institutes
• Music & Dance Academies`,
    bgColor: "#D9F5DC",
    pinColor: "#22C55E",
    icon: "gear",
  },
  {
    id: 6,
    title: "Health & Wellness",
    desc: `• Hospitals
• Clinics
• Diagnostic Centers
• Yoga Studios
• Fitness Trainers
• Nutritionists
• Ayurvedic Centers
• Medical Stores`,
    bgColor: "#FBE1D9",
    pinColor: "#F97316",
    icon: "truck",
  },
  {
    id: 7,
    title: "Technology, Travel & Organizations",
    desc: `• IT Companies
• SaaS Startups
• App Development Companies
• Digital Agencies
• Hotels & Resorts
• Travel Agencies
• NGOs & Trusts
• Religious Organizations
• Community Groups`,
    bgColor: "#E8F0FF",
    pinColor: "#6366F1",
    icon: "shield",
  },
];

const Reasons = () => {
  const renderIcon = (type, color) => {
    const commonProps = {
      width: 24,
      height: 24,
      fill: "none",
      stroke: color,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    switch (type) {
      case "bolt": // Core Website Types → Globe
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15 15 0 0 1 0 20" />
          </svg>
        );

      case "settings": // Professional Services → Briefcase
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5h8v2" />
          </svg>
        );

      case "chart": // Retail → Store
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <path d="M3 9l1-4h16l1 4" />
            <path d="M4 9v10h16V9" />
            <line x1="9" y1="19" x2="9" y2="12" />
          </svg>
        );

      case "trending": // Industrial → Factory
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <rect x="3" y="10" width="18" height="10" />
            <path d="M7 10V6l4 4V6l4 4" />
          </svg>
        );

      case "gear": // Education → Graduation Cap
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <path d="M2 10l10-5 10 5-10 5-10-5z" />
            <path d="M6 12v5c0 2 12 2 12 0v-5" />
          </svg>
        );

      case "truck": // Health → Heart
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />
          </svg>
        );

      case "shield": // Tech + Travel → Laptop
        return (
          <svg {...commonProps} viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="12" rx="2" />
            <line x1="2" y1="20" x2="22" y2="20" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section className="reasons-section">
      <h2 className="reasons-title">
        Industries <span>We Serve</span>
      </h2>
      <p className="reasons-subtitle">
        We create powerful websites across multiple industries and business types.
      </p>

      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={reason.id} className={`reason-card card-${index}`}>
            <div className="white-card">
              <div
                className="pin"
                style={{ backgroundColor: reason.pinColor }}
              ></div>

              <div
                className="colored-card"
                style={{ backgroundColor: reason.bgColor }}
              >
                <div className="icon">
                  {renderIcon(reason.icon, reason.pinColor)}
                </div>

                <h3>{reason.title}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{reason.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;