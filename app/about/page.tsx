export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Dr.Care
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in international medical tourism,
            delivering excellence in healthcare since 2020.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Dr.Care, we believe that everyone deserves access to world-class
              medical care. Our mission is to bridge the gap between affordability
              and quality healthcare by connecting international patients with
              top-tier medical facilities and experienced specialists.
            </p>
            <p className="text-gray-600">
              We provide comprehensive support throughout your medical journey,
              from initial consultation to post-treatment care, ensuring a
              seamless and stress-free experience.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Trust Us</h2>
            <ul className="space-y-3">
              {[
                'JCI-accredited partner hospitals',
                'Board-certified international doctors',
                'Transparent pricing with no hidden costs',
                'Multilingual support team available 24/7',
                'Comprehensive travel and accommodation assistance',
                'Post-treatment follow-up care',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Medical Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                specialty: 'Cosmetic Surgery',
                credentials: 'MD, FACS, 15+ years experience',
              },
              {
                name: 'Dr. Michael Chen',
                specialty: 'Orthopedic Surgery',
                credentials: 'MD, PhD, Board Certified',
              },
              {
                name: 'Dr. Emily Rodriguez',
                specialty: 'Dental Surgery',
                credentials: 'DDS, Implant Specialist',
              },
            ].map((doctor, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-center">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 text-center text-sm mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 text-center text-sm">
                  {doctor.credentials}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
