import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center p-8 bg-white rounded-3xl shadow-xl border border-border max-w-md w-full mx-4">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10" />
        </div>
        
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">404</h1>
        <h2 className="text-xl font-medium text-slate-600 mb-6">Page Not Found</h2>
        
        <p className="text-slate-500 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link href="/" className="w-full inline-block py-3 px-6 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all">
          Return Home
        </Link>
      </div>
    </div>
  );
}
