import { motion } from 'motion/react';

export function Gallery() {
  // We use reliable Unsplash URLs with seed to get consistent high quality masonry
  const images = [
    { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80', aspect: 'aspect-[4/3]' },
    { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80', aspect: 'aspect-[3/4]' },
    { url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80', aspect: 'aspect-[1/1]' },
    { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80', aspect: 'aspect-[4/5]' },
    { url: 'https://images.unsplash.com/photo-1530103862676-de8892b0743b?auto=format&fit=crop&w=800&q=80', aspect: 'aspect-[16/9]' },
    { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4f1c7d?auto=format&fit=crop&w=800&q=80', aspect: 'aspect-[3/4]' },
    { url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80', aspect: 'aspect-[1/1]' },
    { url: 'https://images.unsplash.com/photo-1533174000255-598cc8b14e38?auto=format&fit=crop&w=800&q=80', aspect: 'aspect-[4/3]' },
    { url: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&w=800&q=80', aspect: 'aspect-[3/2]' },
  ];

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-primary mb-4 font-bold"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto font-light"
          >
             Glimpses of the magical moments we've crafted. Beautiful setups, exquisite food, and happy clients.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl group break-inside-avoid shadow-sm hover:shadow-xl transition-shadow ${image.aspect}`}
            >
              <img 
                src={image.url} 
                alt={`EventMart Gallery Item ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-white font-serif italic text-xl tracking-wider">EventMart</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
