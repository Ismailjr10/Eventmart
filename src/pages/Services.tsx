import { motion } from 'motion/react';
import { Utensils, GlassWater, Crown, Gift, Tent, LayoutTemplate } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      id: 'catering',
      title: 'Catering',
      icon: Utensils,
      description: 'Delight your guests with our customized menus. We offer a mix of local and continental dishes prepared by expert chefs. From buffets to plated dinners, our culinary team ensures a feast to remember.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'drinks',
      title: 'Drinks & Bar Setup',
      icon: GlassWater,
      description: 'Premium bar management offering signature cocktails, fine wines, and chilled beverages. We provide professional mixologists and stylish bar setups to keep the celebration flowing.',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4f1c7d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'decoration',
      title: 'Event Decoration',
      icon: Crown,
      description: 'Transforming ordinary venues into magical spaces. Our design team works with your vision to create stunning floral arrangements, lighting designs, and thematic structures.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'souvenirs',
      title: 'Souvenirs & Gifts',
      icon: Gift,
      description: 'Thoughtful and personalized mementos for your guests. We source, package, and distribute premium souvenirs that leave a lasting impression of your special day.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop'
    },
    {
      id: 'rentals',
      title: 'Rentals & Logistics',
      icon: Tent,
      description: 'High-quality equipment rentals including marquees, chairs, tables, luxury seating, sound systems, and mobile restrooms to support every aspect of your event.',
      image: 'https://images.unsplash.com/photo-1533174000255-598cc8b14e38?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 'coordination',
      title: 'Event Coordination',
      icon: LayoutTemplate,
      description: 'Our flagship service. We manage the vendor timelines, ushering, seating arrangements, and overall flow of the event so you can enjoy your day completely stress-free.',
      image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=1965&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary pt-24 pb-32 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-6 font-bold"
        >
          Our Premium <span className="text-accent italic">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg font-light"
        >
          Comprehensive event solutions designed to elevate your celebration. Mix and match our services to create your perfect package.
        </motion.p>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="space-y-12 md:space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-3xl font-serif text-primary font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
                    {service.description}
                  </p>
                  <Link 
                    to={`/booking?service=${service.id}`}
                    className="inline-flex max-w-max items-center font-medium text-secondary hover:text-primary transition-colors border-b-2 border-secondary pb-1 hover:border-primary"
                  >
                    Request this service
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Call to action */}
      <section className="mt-32 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-primary mb-6">Ready to plan your event?</h2>
        <p className="text-gray-600 mb-8 font-light">Contact us today to discuss a custom package tailored specifically to your needs and budget.</p>
        <Link to="/booking" className="bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl inline-block">
          Get a Custom Quote
        </Link>
      </section>
    </div>
  );
}
