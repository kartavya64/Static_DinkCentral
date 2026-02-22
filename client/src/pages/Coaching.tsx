import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useCoachingLocations } from "@/hooks/use-coaching-locations";
import { motion } from "framer-motion";
import { MapPin, Star, Award, CheckCircle } from "lucide-react";

export default function Coaching() {
  const { data: locations, isLoading } = useCoachingLocations();

  const features = [
    { title: "Expert Coaches", desc: "Learn from certified professionals with years of experience." },
    { title: "Modern Facilities", desc: "Train in top-tier environments designed for athlete development." },
    { title: "Personalized Plans", desc: "Custom training programs tailored to your specific goals." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <div className="pt-32 pb-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6"
          >
            <Award className="w-8 h-8 text-accent" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Elite Coaching Programs
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Take your skills to the next level with our comprehensive training programs at premier locations.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 -mt-10 relative z-20 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Locations Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">Our Training Centers</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-80 bg-slate-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations?.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center group"
              >
                <div className="w-40 h-40 rounded-full p-4 bg-slate-50 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <img 
                    src={location.logoUrl} 
                    alt={location.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                  {location.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded-full">
                    {location.sport}
                  </span>
                </div>
                
                <div className="mt-auto w-full pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>View on Map</span>
                  </div>
                  <button className="w-full py-3 rounded-xl border-2 border-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors">
                    View Schedule
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
