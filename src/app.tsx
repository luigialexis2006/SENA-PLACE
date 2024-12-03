import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { motion } from 'framer-motion';

interface CarouselItem {
  title: string;
  discount: string;
  collectionDiscount: string;
  cta: string;
}

const StudioFCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items: CarouselItem[] = [
    {
      title: 'BLACK SALE',
      discount: 'al 50% refs. seleccionadas',
      collectionDiscount: '30% en última colección',
      cta: 'COMPRAR'
    },
    {
      title: 'NUEVAS LLEGADAS',
      discount: 'Descuentos de hasta 40%',
      collectionDiscount: 'En toda la colección',
      cta: 'EXPLORAR'
    },
    {
      title: 'REBAJAS',
      discount: 'Hasta 70% de descuento',
      collectionDiscount: 'En selección de productos',
      cta: 'VER OFERTAS'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h1>{items[currentIndex].title}</h1>
        <p>{items[currentIndex].discount}</p>
        <p>{items[currentIndex].collectionDiscount}</p>
        <a href="#">{items[currentIndex].cta}</a>
      </motion.div>
    </div>
  );
};

render(<StudioFCarousel />, document.getElementById('root'));