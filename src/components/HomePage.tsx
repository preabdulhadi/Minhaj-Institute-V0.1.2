import { Hero } from './Hero';
import { About } from './About';
import { Courses } from './Courses';
import { WhyChooseUs } from './WhyChooseUs';
import { EnrollmentForm } from './EnrollmentForm';
import { Footer } from './Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <EnrollmentForm />
      <Footer />
    </div>
  );
}
