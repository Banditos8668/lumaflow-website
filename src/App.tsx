import { LanguageProvider } from './context/LanguageContext';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import DemoShowcase from './components/DemoShowcase';
import PricingSection from './components/PricingSection';
import QuickCheckSection from './components/QuickCheckSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <LanguageProvider>
      <style>{`
        /* Prevent content hiding behind sticky bar on mobile */
        @media (max-width: 768px) {
          .lf-main-content {
            padding-bottom: 80px;
          }
        }
      `}</style>
      <NavBar />
      <main className="lf-main-content">
        <HeroSection />
        <BeforeAfterSection />
        <ProblemSection />
        <SolutionSection />
        <DemoShowcase />
        <PricingSection />
        <QuickCheckSection />
        <HowItWorksSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
      <FloatingButtons />
    </LanguageProvider>
  );
}
