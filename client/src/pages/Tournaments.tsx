import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { useTournaments } from "@/hooks/use-tournaments";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

// Asset imports
import defaultImg from "@assets/default_1771658535869.jpg";
const imageMap: Record<string, string> = {
  // Add mappings if specific images are used in future
  "default": defaultImg
};

export default function Tournaments() {
  const { data: tournaments, isLoading } = useTournaments();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Tournament Schedule
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Test your skills against the best. Register for upcoming events and climb the rankings.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {isLoading ? (
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-48 bg-slate-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid gap-8 max-w-5xl mx-auto">
            {tournaments?.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <img 
                      src={imageMap[tournament.imageUrl] || defaultImg} 
                      alt={tournament.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden" />
                  </div>
                  
                  <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {tournament.title}
                        </h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full tracking-wide">
                          Open
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600">
                        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{tournament.dateLocation}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-6 line-clamp-2">
                        {tournament.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-end">
                      <button className="text-primary font-bold hover:text-primary/80 transition-colors flex items-center gap-2 group/btn">
                        Event Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
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
