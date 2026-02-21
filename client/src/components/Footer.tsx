import { Link } from "wouter";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import dinkLogo from "@assets/dink_central_logo_1771658535870.jpeg";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white/10 p-0.5">
                 <img src={dinkLogo} alt="Dink Central" className="h-full w-full object-cover rounded-full" />
              </div>
              <span className="text-xl font-display font-bold text-white">Dink Central</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your Game, Our Grid. Premier coaching, tournaments, and community events.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.instagram.com/dink_.central?igsh=MWxhOWJyNDZuanB4eA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-500 hover:to-orange-500 transition-all duration-300 group"
              >
                <Instagram className="h-5 w-5 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 font-display">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors cursor-pointer">Home</a></li>
              <li><a href="#tournaments" className="hover:text-accent transition-colors cursor-pointer">Tournaments</a></li>
              <li><a href="#coaching" className="hover:text-accent transition-colors cursor-pointer">Coaching</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold mb-4 font-display">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-400">Junior Development</span></li>
              <li><span className="text-slate-400">Elite Performance</span></li>
              <li><span className="text-slate-400">School Partnerships</span></li>
              <li><span className="text-slate-400">Summer Camps</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 font-display">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>Indore, Madhya Pradesh<br />India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@dinkcentral.com" className="hover:text-accent transition-colors">info@dinkcentral.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dink Central. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
