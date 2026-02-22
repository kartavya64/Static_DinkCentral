import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <div className="pt-32 pb-20 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">About Dink Central</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are passionate about growing the sport and developing the next generation of athletes.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-3" />
            <img 
              src="/coach_1771658920259.png" 
              alt="Coaching Team" 
              className="relative rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 w-full"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Dink Central, we believe sports have the power to transform lives. Our mission is to provide world-class coaching and competitive opportunities for athletes of all levels.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded by passionate sports enthusiasts, we have grown from a small local club to a premier destination for sports development in the region.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <span className="block text-4xl font-bold text-primary mb-2">5+</span>
                <span className="text-slate-600 font-medium">Years of Excellence</span>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <span className="block text-4xl font-bold text-accent mb-2">1k+</span>
                <span className="text-slate-600 font-medium">Students Trained</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
