import { BookOpen, Volume2, Languages, Star, Sparkles, Heart } from 'lucide-react';

const courses = [
  {
    title: 'Nazera Quran',
    description: 'Learn to read the Holy Quran with proper pronunciation and fluency',
    icon: BookOpen,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Qaida for Beginners',
    description: 'Master Arabic alphabets and basic reading fundamentals step by step',
    icon: Languages,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Tajweed Basics',
    description: 'Perfect your Quranic recitation with authentic Tajweed rules',
    icon: Volume2,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Kalmas of Islam',
    description: 'Learn and memorize all 6 Kalmas with meanings and understanding',
    icon: Star,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Short Surah Memorization',
    description: 'Memorize essential Surahs for daily prayers with proper recitation',
    icon: Sparkles,
    gradient: 'from-rose-500 to-red-600',
  },
  {
    title: 'Daily Duas',
    description: 'Master important daily supplications and prayers for every occasion',
    icon: Heart,
    gradient: 'from-green-500 to-emerald-600',
  },
];

export function Courses() {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
            Our Courses
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose from our comprehensive range of Islamic education courses designed for all levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`}></div>
                <div className="p-8">
                  <div className={`inline-block p-4 bg-gradient-to-r ${course.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <button
                    onClick={scrollToEnroll}
                    className={`w-full py-3 bg-gradient-to-r ${course.gradient} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Start Course
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
