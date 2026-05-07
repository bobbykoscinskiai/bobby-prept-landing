import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Heart, TrendingUp, Users, Target } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Athletic Minimalism with Performance Focus
 * - Swiss design meets athletic branding (clean, geometric, professional)
 * - Navy (#1a2332) + Teal (#00d4d4) + Cream (#f5f1e8) color palette
 * - Asymmetric layouts with geometric dividers
 * - Scroll-driven animations for immersive experience
 * - Typography: Poppins for headlines (bold, geometric), Inter for body (readable)
 */

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#f5f1e8', color: '#1a2332' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200" style={{ backgroundColor: 'rgba(245, 241, 232, 0.95)', backdropFilter: 'blur(8px)' }}>
        <div className="container flex items-center justify-between h-16">
          <div className="text-display font-bold text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Bobby
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-body transition-colors" style={{ color: '#1a2332' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4d4')} onMouseLeave={(e) => (e.currentTarget.style.color = '#1a2332')}>About</a>
            <a href="#journey" className="text-body transition-colors" style={{ color: '#1a2332' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4d4')} onMouseLeave={(e) => (e.currentTarget.style.color = '#1a2332')}>Journey</a>
            <a href="#services" className="text-body transition-colors" style={{ color: '#1a2332' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4d4')} onMouseLeave={(e) => (e.currentTarget.style.color = '#1a2332')}>Focus Areas</a>
            <a href="#contact" className="text-body transition-colors" style={{ color: '#1a2332' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#00d4d4')} onMouseLeave={(e) => (e.currentTarget.style.color = '#1a2332')}>Connect</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Scroll Animation */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 scroll-parallax"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663512600346/H5fTaJE9sxqKGTiWnECkMN/hero-background-E6neDptJczaNhHvLKy6Vrt.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26, 35, 50, 0.7), rgba(26, 35, 50, 0.3))' }} />

        {/* Hero Content */}
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-slide-left">
            <div className="h-1 w-12 rounded-full mb-6" style={{ backgroundColor: '#00d4d4' }} />
            <h1 className="text-display mb-4 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Exercise Science<br />
              <span style={{ color: '#00d4d4' }}>@ GVSU</span>
            </h1>
            <p className="text-lg mb-2 font-semibold" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Pre-PT Student | Future Sports PT</p>
            <p className="mb-8 max-w-lg" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Training athletes. Restoring function. Building the future of sports physical therapy. Marathon runner, clinician, and passionate about helping people move better.
            </p>
            <div className="flex gap-4">
              <button className="btn-secondary">
                Explore My Journey <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
              <button className="btn-outline text-white" style={{ borderColor: 'white' }}>
                Connect With Me
              </button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 gap-6 scroll-slide-right">
            <div className="rounded-lg p-6 scroll-stagger-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', borderColor: 'rgba(0, 212, 212, 0.3)', borderWidth: '1px' }}>
              <div className="text-4xl font-bold mb-2" style={{ color: '#00d4d4' }}>42.2K</div>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Marathon Miles</p>
            </div>
            <div className="rounded-lg p-6 scroll-stagger-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', borderColor: 'rgba(0, 212, 212, 0.3)', borderWidth: '1px' }}>
              <div className="text-4xl font-bold mb-2" style={{ color: '#00d4d4' }}>500+</div>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Clinical Hours</p>
            </div>
            <div className="rounded-lg p-6 scroll-stagger-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', borderColor: 'rgba(0, 212, 212, 0.3)', borderWidth: '1px' }}>
              <div className="text-4xl font-bold mb-2" style={{ color: '#00d4d4' }}>100%</div>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Athlete Focused</p>
            </div>
            <div className="rounded-lg p-6 scroll-stagger-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', borderColor: 'rgba(0, 212, 212, 0.3)', borderWidth: '1px' }}>
              <div className="text-4xl font-bold mb-2" style={{ color: '#00d4d4' }}>∞</div>
              <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Growth Mindset</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-slide-left">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663512600346/H5fTaJE9sxqKGTiWnECkMN/clinical-experience-visual-VgDK2aJCVJLCr6VcNWJDpN.webp"
                alt="Clinical Experience"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="scroll-slide-right">
              <div className="h-1 w-12 rounded-full mb-6" style={{ backgroundColor: '#00d4d4' }} />
              <h2 className="text-heading mb-6" style={{ fontFamily: "'Poppins', sans-serif", color: '#1a2332' }}>
                Clinical Excellence Meets Athletic Passion
              </h2>
              <p className="text-body mb-4" style={{ color: '#4a5568' }}>
                I'm a Pre-PT student at Grand Valley State University, pursuing my Doctor of Physical Therapy at Western Michigan University. My journey combines rigorous clinical training with a deep passion for athletic performance and recovery.
              </p>
              <p className="text-body mb-6" style={{ color: '#4a5568' }}>
                Working in clinical settings while training with athletes has given me a unique perspective on what it takes to help people move better, perform stronger, and recover faster. Every patient, every athlete, every mile teaches me something new.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 212, 212, 0.2)' }}>
                    <Zap className="w-6 h-6" style={{ color: '#00d4d4' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#1a2332' }}>Performance Training</h3>
                    <p className="text-sm" style={{ color: '#718096' }}>Optimizing athletic movement and function</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 212, 212, 0.2)' }}>
                    <Heart className="w-6 h-6" style={{ color: '#00d4d4' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#1a2332' }}>Injury Recovery</h3>
                    <p className="text-sm" style={{ color: '#718096' }}>Evidence-based rehabilitation protocols</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 212, 212, 0.2)' }}>
                    <TrendingUp className="w-6 h-6" style={{ color: '#00d4d4' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#1a2332' }}>Athlete Development</h3>
                    <p className="text-sm" style={{ color: '#718096' }}>Long-term athletic success and longevity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Athletic Training Section */}
      <section id="journey" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#f5f1e8' }}>
        {/* Geometric Background */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full -mr-48 -mt-48" style={{ backgroundColor: 'rgba(0, 212, 212, 0.1)' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full -ml-36 -mb-36" style={{ backgroundColor: 'rgba(212, 165, 116, 0.1)' }} />

        <div className="container relative z-10">
          <div className="text-center mb-16 scroll-fade-in">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#00d4d4' }} />
            </div>
            <h2 className="text-heading mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: '#1a2332' }}>
              Training for Excellence
            </h2>
            <p className="text-body" style={{ color: '#4a5568', maxWidth: '32rem', margin: '0 auto' }}>
              Marathon runner. Clinical trainee. Future practice owner. Every experience shapes my approach to helping others achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="scroll-scale bg-white rounded-lg p-8 transition-all duration-300 cursor-pointer"
              style={{ borderWidth: '2px', borderColor: hoveredCard === 0 ? '#00d4d4' : '#f3f4f6', boxShadow: hoveredCard === 0 ? '0 20px 25px -5px rgba(0, 212, 212, 0.1)' : 'none' }}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663512600346/H5fTaJE9sxqKGTiWnECkMN/athletic-training-visual-XTjnJDWe6hcVNWJDpN.webp"
                alt="Marathon Training"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-subheading mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: '#1a2332' }}>
                Marathon Runner
              </h3>
              <p className="text-body" style={{ color: '#4a5568' }}>
                Training for marathons taught me discipline, resilience, and the importance of proper recovery. Every mile is a lesson in performance optimization.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="scroll-scale bg-white rounded-lg p-8 transition-all duration-300 cursor-pointer"
              style={{ borderWidth: '2px', borderColor: hoveredCard === 1 ? '#00d4d4' : '#f3f4f6', boxShadow: hoveredCard === 1 ? '0 20px 25px -5px rgba(0, 212, 212, 0.1)' : 'none', marginTop: hoveredCard === 1 ? '-8px' : '0' }}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663512600346/H5fTaJE9sxqKGTiWnECkMN/clinical-experience-visual-VgDK2aJCVJLCr6VcNWJDpN.webp"
                alt="Clinical Training"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-subheading mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: '#1a2332' }}>
                Clinical Training
              </h3>
              <p className="text-body" style={{ color: '#4a5568' }}>
                Working in clinical settings has given me hands-on experience with diverse patient populations and evidence-based treatment protocols.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="scroll-scale bg-white rounded-lg p-8 transition-all duration-300 cursor-pointer"
              style={{ borderWidth: '2px', borderColor: hoveredCard === 2 ? '#00d4d4' : '#f3f4f6', boxShadow: hoveredCard === 2 ? '0 20px 25px -5px rgba(0, 212, 212, 0.1)' : 'none' }}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663512600346/H5fTaJE9sxqKGTiWnECkMN/future-practice-vision-RVUo6zHEvGUGsfGLFqNQaR.webp"
                alt="Future Practice"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-subheading mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: '#1a2332' }}>
                Future Practice Vision
              </h3>
              <p className="text-body" style={{ color: '#4a5568' }}>
                Building toward owning a sports physical therapy practice focused on athlete performance, injury prevention, and long-term wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16 scroll-fade-in">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#00d4d4' }} />
            </div>
            <h2 className="text-heading mb-4" style={{ fontFamily: "'Poppins', sans-serif", color: '#1a2332' }}>
              What I Focus On
            </h2>
            <p className="text-body" style={{ color: '#4a5568', maxWidth: '32rem', margin: '0 auto' }}>
              My expertise spans athletic performance, injury recovery, and clinical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Athletic Performance",
                description: "Optimizing movement patterns and strength for peak athletic performance",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Injury Prevention",
                description: "Evidence-based strategies to keep athletes healthy and competing",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Recovery & Rehabilitation",
                description: "Comprehensive protocols for returning to sport stronger than before",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Athlete Coaching",
                description: "Personalized guidance for runners, team athletes, and fitness enthusiasts",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Movement Assessment",
                description: "Detailed analysis to identify limitations and optimize mechanics",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Clinical Excellence",
                description: "Patient-centered care grounded in the latest research and best practices",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="scroll-slide-up rounded-lg p-8 transition-all duration-300"
                style={{ backgroundColor: '#f5f1e8', borderWidth: '2px', borderColor: '#f3f4f6' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0, 212, 212, 0.2)', color: '#00d4d4' }}>
                  {item.icon}
                </div>
                <h3 className="text-subheading mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: '#1a2332' }}>
                  {item.title}
                </h3>
                <p className="text-body" style={{ color: '#4a5568' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1a2332', color: '#f5f1e8' }}>
        {/* Geometric shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full -mr-48 -mt-48" style={{ backgroundColor: 'rgba(0, 212, 212, 0.1)' }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full -ml-36 -mb-36" style={{ backgroundColor: 'rgba(212, 165, 116, 0.1)' }} />

        <div className="container relative z-10 text-center scroll-fade-in">
          <div className="flex justify-center mb-6">
            <div className="h-1 w-12 rounded-full" style={{ backgroundColor: '#00d4d4' }} />
          </div>
          <h2 className="text-display mb-6" style={{ fontFamily: "'Poppins', sans-serif", color: '#f5f1e8' }}>
            Let's Connect
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(245, 241, 232, 0.9)', maxWidth: '32rem', margin: '0 auto 2rem' }}>
            Whether you're an athlete looking to optimize performance, someone recovering from injury, or interested in the journey to becoming a sports PT—I'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary">
              Follow My Journey <ArrowRight className="inline ml-2 w-4 h-4" />
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ color: '#f5f1e8', borderColor: '#f5f1e8' }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t" style={{ backgroundColor: 'rgba(26, 35, 50, 0.95)', borderColor: 'rgba(0, 212, 212, 0.2)', color: 'rgba(245, 241, 232, 0.8)' }}>
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2026 Bobby | Pre-PT Student at GVSU</p>
          <p className="text-sm">Exercise Science | Clinical Training | Future Sports PT</p>
        </div>
      </footer>
    </div>
  );
}
