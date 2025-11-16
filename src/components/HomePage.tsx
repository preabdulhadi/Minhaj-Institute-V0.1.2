import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Courses } from './Courses';
import { WhyChooseUs } from './WhyChooseUs';
import { EnrollmentForm } from './EnrollmentForm';
import { Footer } from './Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <EnrollmentForm />
      <Footer />
    </div>
  );
}
