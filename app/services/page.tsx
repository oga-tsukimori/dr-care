export default function Services() {
  const services = [
    {
      category: 'Cosmetic Surgery',
      procedures: [
        'Rhinoplasty (Nose Surgery)',
        'Facelift & Neck Lift',
        'Breast Augmentation',
        'Liposuction',
        'Tummy Tuck',
      ],
    },
    {
      category: 'Dental Care',
      procedures: [
        'Dental Implants',
        'Veneers & Teeth Whitening',
        'Full Mouth Reconstruction',
        'Orthodontics (Braces)',
        'Root Canal Treatment',
      ],
    },
    {
      category: 'Orthopedics',
      procedures: [
        'Knee Replacement',
        'Hip Replacement',
        'Spine Surgery',
        'Sports Injury Treatment',
        'Arthroscopy',
      ],
    },
    {
      category: 'Wellness & Preventive Care',
      procedures: [
        'Comprehensive Health Checkup',
        'Executive Health Packages',
        'Cancer Screening',
        'Cardiac Health Assessment',
        'Weight Management Programs',
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions delivered by experienced specialists
            using the latest medical technology and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                {service.category}
              </h2>
              <ul className="space-y-2">
                {service.procedures.map((procedure, pidx) => (
                  <li key={pidx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{procedure}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            All-Inclusive Packages Include:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-blue-600 font-semibold mb-2">Medical Care</div>
              <p className="text-gray-600 text-sm">
                Pre-operative tests, surgery, post-operative care, and follow-ups
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-semibold mb-2">
                Accommodation
              </div>
              <p className="text-gray-600 text-sm">
                Comfortable hotel stay for patient and companion
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-semibold mb-2">
                Transportation
              </div>
              <p className="text-gray-600 text-sm">
                Airport pickup, hospital transfers, and local transport
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
