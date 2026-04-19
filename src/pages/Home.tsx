import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Calendar, Utensils, GlassWater, Heart, Gift, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { title: 'Decoration', icon: Heart, description: 'High-end floral and stage setups tailored to your theme.', dark: false },
    { title: 'Coordination', icon: Calendar, description: 'Seamless management for a stress-free experience.', dark: true },
    { title: 'Catering', icon: Utensils, description: 'Exquisite local and international cuisines.', dark: false },
    { title: 'Rentals', icon: Crown, description: 'Premium tables, chairs, and event equipment.', dark: false },
    { title: 'Souvenirs', icon: Gift, description: 'Curated gifts that leave a lasting impression.', dark: true },
    { title: 'Drinks', icon: GlassWater, description: 'Refreshing mobile bars and professional servers.', dark: false },
  ];

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800">
      {/* Hero & Services Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold uppercase tracking-widest border border-purple-100 mb-2">
                Event Solutions • Niger State
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-serif text-primary leading-tight"
            >
              Where Every Event <span className="text-secondary italic">Shines</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed max-w-md"
            >
              Your one-stop solution for stress-free events. From grand weddings to intimate gatherings, we manage every detail with elegance and precision.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link to="/booking" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all text-center">
                Book Your Event
              </Link>
              <Link to="/services" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all text-center">
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Services Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className={`bento-item p-6 flex flex-col justify-between service-card ${
                    service.dark ? 'bg-primary text-white shadow-lg' : 'bg-white shadow-sm'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    service.dark ? 'bg-white/10 text-secondary' : 'bg-purple-50 text-primary'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`font-bold ${service.dark ? '' : 'text-primary'}`}>{service.title}</h3>
                  <p className={`text-xs mt-2 ${service.dark ? 'text-purple-200' : 'text-slate-500'}`}>{service.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white/50 backdrop-blur-sm border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 text-secondary font-bold tracking-widest text-xs uppercase">
               <div className="w-8 h-px bg-secondary" />
               <span>About EventMart</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
               Seamless & Stress-Free <br/><span className="text-secondary italic">Management</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              We believe that hosting an event should be a joyous experience, not a stressful chore. 
              Our expert team handles every intricate detail, from breathtaking decor arrays to 
              mouth-watering culinary delights, ensuring you can actually be a guest at your own party.
            </p>
            <ul className="space-y-4">
              {['Dedicated Event Managers', 'Tailored Vendor Sourcing', 'On-the-day Coordination'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-slate-700">
                  <div className="text-secondary bg-secondary/10 p-1 rounded-full"><CheckCircle2 className="w-4 h-4" /></div>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors mt-4">
              Discover Our Story <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(74,29,110,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1997&auto=format&fit=crop" 
                alt="Event Decoration Details" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 bento-item shadow-xl max-w-xs border border-gray-100">
              <div className="flex space-x-1 text-secondary mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-semibold text-slate-800">"EventMart transformed our wedding day into a literal fairytale."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-secondary border border-white/20 text-xs font-bold uppercase tracking-widest mb-6">
             The EventMart Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-16">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Flawless Execution', desc: 'Meticulous attention to detail ensures your event unfolds exactly as planned.' },
              { num: '02', title: 'Premium Vendors', desc: 'Exclusive access to top-tier local vendors, venues, and caterers in Niger State.' },
              { num: '03', title: 'Stress-Free', desc: 'You enjoy the party while our dedicated coordinators handle the logistics behind the scenes.' }
            ].map((feature, i) => (
              <div key={i} className="bento-item bg-white/5 border border-white/10 p-8 flex flex-col items-center hover:bg-white/10 transition-colors">
                <span className="font-serif text-5xl text-secondary opacity-80 mb-6">{feature.num}</span>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-purple-200 text-sm leading-relaxed max-w-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

