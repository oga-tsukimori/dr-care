'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is medical tourism?',
          a: 'Medical tourism is traveling to another country to receive medical care. It combines high-quality healthcare with the opportunity to visit a new destination, often at a fraction of the cost of treatment in your home country.',
        },
        {
          q: 'Why should I choose Dr.Care?',
          a: 'Dr.Care partners with JCI-accredited hospitals and board-certified doctors. We provide end-to-end support including treatment coordination, travel arrangements, accommodation, and post-treatment care. Our transparent pricing ensures no hidden costs.',
        },
        {
          q: 'How much can I save?',
          a: 'Patients typically save 40-70% on medical procedures compared to costs in the US, UK, or Australia, while receiving the same or higher quality of care.',
        },
      ],
    },
    {
      category: 'Treatment & Safety',
      questions: [
        {
          q: 'Are the doctors qualified?',
          a: 'Yes. All our partner doctors are board-certified with international training. Many have completed fellowships in the US, UK, or Europe. Our facilities are JCI-accredited, meeting international healthcare standards.',
        },
        {
          q: 'What if something goes wrong?',
          a: 'All our partner facilities carry comprehensive medical malpractice insurance. We also provide 24/7 support throughout your journey and assist with any post-treatment concerns.',
        },
        {
          q: 'How do I know which treatment is right for me?',
          a: 'We offer free consultations with our medical coordinators who review your medical history and connect you with the appropriate specialists for personalized treatment recommendations.',
        },
      ],
    },
    {
      category: 'Travel & Logistics',
      questions: [
        {
          q: 'What is included in the package?',
          a: 'Our packages typically include: medical consultation and treatment, pre and post-operative care, accommodation for patient and companion, airport transfers, local transportation, and 24/7 support. Flights are not included but we can assist with booking.',
        },
        {
          q: 'How long do I need to stay?',
          a: 'It depends on your procedure. Simple dental work may require 3-5 days, while surgical procedures might need 1-3 weeks including recovery time. We provide detailed timelines during consultation.',
        },
        {
          q: 'Can someone accompany me?',
          a: 'Absolutely! We encourage patients to bring a companion. Accommodation for one companion is included in most packages at no extra cost.',
        },
        {
          q: 'What documents do I need?',
          a: 'You will need a valid passport with at least 6 months validity, visa (if required), medical records, and any relevant test results. We provide a complete checklist after consultation.',
        },
      ],
    },
    {
      category: 'Payment & Insurance',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept bank transfers, credit cards, and international payment platforms. Payment schedules vary by treatment - typically a deposit is required to confirm booking, with the balance due before or on arrival.',
        },
        {
          q: 'Will my insurance cover this?',
          a: 'Some insurance providers cover international treatment. We provide detailed invoices and medical reports that you can submit to your insurance company for possible reimbursement. Check with your provider beforehand.',
        },
        {
          q: 'What is your refund policy?',
          a: 'Cancellation policies vary by package and timing. Generally, deposits are non-refundable within 2 weeks of treatment date. Full details are provided in your service agreement.',
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about medical tourism and our services
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={faqIndex}
                      className="bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.q}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 text-gray-600">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our team is here to help you with any concerns
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
