import { motion } from 'motion/react';
import { Target, Eye, Users } from 'lucide-react';

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#1A0F38] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
            alt="Event Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Crafting seamless, stress-free, and unforgettable event experiences in Niger State.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-serif text-primary mb-6">About EventMart</h2>
              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                <p>
                  EventMart was founded on a simple principle: hosts should be able to enjoy their own events. 
                  Based in the heart of Niger State, we have grown to become the premier event solutions brand, 
                  known for our commitment to elegance, quality, and flawless execution.
                </p>
                <p>
                  From intimate gatherings to grand wedding celebrations, we approach every project with fresh 
                  eyes and an unwavering dedication to your vision. We handle the complexities of coordination, 
                  vendor management, and logistics so you don't have to.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="rounded-2xl w-full h-80 object-cover mt-8"
                 src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1974&auto=format&fit=crop" 
                 alt="Event Setup"
                 referrerPolicy="no-referrer"
              />
              <motion.img 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="rounded-2xl w-full h-80 object-cover"
                 src="https://images.unsplash.com/photo-1530103862676-de8892b0743b?q=80&w=2070&auto=format&fit=crop" 
                 alt="Catering Setup"
                 referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Target, title: 'Mission', desc: 'To provide a one-stop solution for stress-free events, delivering excellence and unmatched quality in every detail.' },
              { icon: Eye, title: 'Vision', desc: 'To be the most trusted and sought-after event management company in Nigeria, setting the standard for luxury celebrations.' },
              { icon: Users, title: 'Client First', desc: 'Your vision is our blueprint. We listen, adapt, and execute with your unique style in mind.' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-8 rounded-3xl bg-[#FAFAFA] border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-serif text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 font-light">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
