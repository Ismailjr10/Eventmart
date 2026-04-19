import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-secondary font-serif text-2xl font-bold">E</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white leading-none tracking-tight">EventMart</span>
                <span className="text-[0.6rem] font-medium tracking-widest text-accent uppercase">Where Every Event Shines</span>
              </div>
            </Link>
            <p className="text-purple-200 text-sm leading-relaxed">
              Your one-stop solution for stress-free events in Niger State. We bring elegance, precision, and unforgettable moments to your special occasions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/18neApWVqe/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/eventmart.ng01?igsh=bHFuNTNhNzJub3Vp" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-purple-200 hover:text-accent transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-purple-200 hover:text-accent transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/gallery" className="text-purple-200 hover:text-accent transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/booking" className="text-purple-200 hover:text-accent transition-colors text-sm">Book an Event</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-purple-200 text-sm">Event Planning</li>
              <li className="text-purple-200 text-sm">Event Decoration</li>
              <li className="text-purple-200 text-sm">Food Catering</li>
              <li className="text-purple-200 text-sm">Drinks & Bar Setup</li>
              <li className="text-purple-200 text-sm">Rentals</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-purple-200 text-sm">Minna, Niger State, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:09165315436" className="text-purple-200 hover:text-white transition-colors text-sm">09165315436</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:eventmart.ng@gmail.com" className="text-purple-200 hover:text-white transition-colors text-sm break-all">eventmart.ng@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-purple-300">
          <p>&copy; {new Date().getFullYear()} EventMart. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
