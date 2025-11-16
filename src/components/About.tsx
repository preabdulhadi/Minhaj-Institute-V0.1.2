import { BookOpen, Heart, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
            About Minhaj Institution
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
              <BookOpen className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">Quality Education</h3>
            <p className="text-gray-600">Expert teachers with authentic Islamic knowledge</p>
          </div>
          <div className="text-center p-6">
            <div className="inline-block p-4 bg-amber-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">With Love & Care</h3>
            <p className="text-gray-600">Patient and compassionate teaching approach</p>
          </div>
          <div className="text-center p-6">
            <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">For Everyone</h3>
            <p className="text-gray-600">Suitable for kids, adults, and beginners</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold text-emerald-800">Minhaj Institution</span> is dedicated to providing authentic Islamic education to students of all ages. We teach the fundamentals of Quran reading including <span className="font-semibold">Nazera Quran</span>, <span className="font-semibold">Basic Qaida</span>, and <span className="font-semibold">Tajweed</span> rules.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our curriculum includes memorization of <span className="font-semibold">Short Surahs</span>, learning the <span className="font-semibold">6 Kalmas</span>, <span className="font-semibold">Daily Duas</span>, and practical <span className="font-semibold">Namaz lessons</span>. Whether you're a child starting your Islamic journey or an adult seeking to strengthen your connection with the Quran, we're here to guide you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
