import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Qualified Quran teachers with Ijazah certification',
  'Audio + visual lessons for enhanced learning',
  'Kids-friendly curriculum with engaging methods',
  'One-on-one & group class options available',
  'Free starter lessons + flexible premium plans',
  'Progress tracking and regular assessments',
  'Flexible timing to fit your schedule',
  'Interactive online classes with live feedback',
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experience the difference with our comprehensive Islamic education platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-white rounded-xl hover:shadow-lg transition-shadow duration-300 border border-emerald-100"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
