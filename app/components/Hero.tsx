import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            World-Class Medical Care,
            <br />
            <span className="text-blue-600">Exceptional Value</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience premium healthcare services with our international medical tourism program.
            Expert doctors, modern facilities, and comprehensive care packages tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/services"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
