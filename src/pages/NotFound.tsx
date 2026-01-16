import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center py-20">
         <div className="text-center px-4">
            <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
               Oops! The page you are looking for might have been removed or doesn't exist.
            </p>
            <Link 
               to="/" 
               className="inline-flex items-center justify-center px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
               Return to Home
            </Link>
         </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
