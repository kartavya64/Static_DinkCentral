import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users, Award, Star } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { useTournaments } from "@/hooks/use-tournaments";
import { useCoachingLocations } from "@/hooks/use-coaching-locations";

// Asset imports
import defaultImg from "@assets/default_1771658535869.jpg";
import goldenLogo from "@assets/golden_1771658535870.png";
import rrcatLogo from "@assets/rrcat_1771658535870.png";

const imageMap: Record<string, string> = {
  "@assets/default_1771658535869.jpg": defaultImg,
  "@assets/golden_1771658535870.png": goldenLogo,
  "@assets/rrcat_1771658535870.png": rrcatLogo,
};

// Hero Component
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Sports Action" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent border border-accent/30 font-bold text-sm tracking-wide mb-6 backdrop-blur-sm">
              PREMIER SPORTS COACHING
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-8 tracking-tight leading-tight">
              ELEVATE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">YOUR GAME</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Professional coaching, world-class tournaments, and a community dedicated to sports excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/tournaments" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 hover:-translate-y-1 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                Join a Tournament <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/coaching" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all flex items-center justify-center">
                Find a Coach
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats ticker at bottom */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-md py-6 hidden md:block">
        <div className="container mx-auto px-6 flex justify-around text-white/80">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-accent" />
            <span className="font-bold text-xl">50+ Tournaments</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-400" />
            <span className="font-bold text-xl">1000+ Athletes</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-emerald-400" />
            <span className="font-bold text-xl">20+ Coaches</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tournament Section
function TournamentSection() {
  const { data: tournaments, isLoading } = useTournaments();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Upcoming Tournaments" 
          subtitle="Compete & Win" 
          alignment="left"
        />

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map(i => (
              <div key={i} className="h-64 bg-slate-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid gap-8">
            {tournaments?.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-slate-100"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Side */}
                  <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500" />
                    <img 
                      src={imageMap[tournament.imageUrl] || defaultImg} 
                      alt={tournament.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                      <span className="font-bold text-primary text-sm tracking-wide uppercase">Registration Open</span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {tournament.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 mb-6">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        {tournament.dateLocation}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      {tournament.description}
                    </p>
                    <div>
                      <button className="px-6 py-3 rounded-xl font-bold bg-slate-900 text-white hover:bg-primary transition-colors flex items-center gap-2 group/btn">
                        Register Now
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {tournaments?.length === 0 && (
              <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-600">No upcoming tournaments</h3>
                <p className="text-slate-500">Check back soon for new events!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// Coaching Section
function CoachingSection() {
  const { data: locations, isLoading } = useCoachingLocations();

  return (
    <section className="py-24 bg-slate-900 text-white relative">
      {/* Texture overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} 
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader 
          title="Training Centers" 
          subtitle="Where Champions are Made" 
          light={true}
        />

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-white/5 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations?.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 text-center"
              >
                <div className="w-32 h-32 mx-auto bg-white rounded-full p-2 mb-6 shadow-xl shadow-black/20 group-hover:shadow-accent/20 transition-all overflow-hidden flex items-center justify-center">
                  <img 
                    src={imageMap[location.logoUrl] || defaultImg} 
                    alt={location.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold font-display mb-2">{location.name}</h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold border border-accent/20">
                  <Star className="w-3 h-3 fill-current" />
                  {location.sport}
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="text-sm font-bold text-white hover:text-accent flex items-center justify-center gap-2 w-full">
                    View Programs <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
          Whether you're looking to compete at the highest level or just getting started, Dink Central has a place for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-50 shadow-lg shadow-black/10 transition-all hover:scale-105"
          >
            Contact Us Today
          </Link>
          <Link 
            href="/about" 
            className="px-8 py-4 bg-blue-700/50 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all border border-blue-400/30"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <TournamentSection />
        <CoachingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
