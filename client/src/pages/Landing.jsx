import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Logo } from '../components/common/Logo';

export const Landing = () => {
  const features = [
    {
      icon: '🏛️',
      title: 'Premium Function Halls',
      description: 'Discover luxury convention centers, air-conditioned banquet halls, and traditional wedding mandapams.',
    },
    {
      icon: '📍',
      title: 'Hierarchical Location Filter',
      description: 'Easily drill down from State → District → Area across Andhra Pradesh, Telangana, Tamil Nadu, and more.',
    },
    {
      icon: '📅',
      title: 'Real-Time Slot Booking',
      description: 'Check available morning, evening, or full-day slots for your exact date with anti-double-booking protection.',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden charges. Clear breakdowns of hall base price, floral decor, lighting, and catering packages.',
    },
    {
      icon: '🎟️',
      title: 'Unique Booking ID & Receipt',
      description: 'Receive instant confirmation with a unique booking ID, itemized digital receipt, and hassle-free cancellation.',
    },
    {
      icon: '👑',
      title: 'Centralized Control',
      description: 'Powerful dashboard for attendees, venue hosts, and administrators to track reservations and approvals.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Select Location & Date',
      description: 'Pick your preferred State, District, and Area, then choose your exact event date on the calendar.',
    },
    {
      number: '2',
      title: 'Compare Venues & Prices',
      description: 'Browse photos, guest capacities, AC specs, parking facilities, and transparent prices.',
    },
    {
      number: '3',
      title: 'Select Slot & Services',
      description: 'Choose morning, evening, or full-day slots, and customize with floral decor or catering add-ons.',
    },
    {
      number: '4',
      title: 'Instant Confirmation',
      description: 'Receive a unique Booking ID receipt immediately and manage your reservations anytime.',
    },
  ];

  const featuredVenues = [
    {
      name: 'Grand Celebration Hall',
      location: 'Vijayawada, Krishna, Andhra Pradesh',
      capacity: '1,200 Guests',
      price: '₹45,000 / Day',
      rating: '4.9 ★',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Cyber Pearl Convention Center',
      location: 'Hitec City, Hyderabad, Telangana',
      capacity: '2,500 Guests',
      price: '₹1,60,000 / Day',
      rating: '4.9 ★',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Sapphire Grand Convention & Lawns',
      location: 'Indiranagar, Bengaluru, Karnataka',
      capacity: '1,800 Guests',
      price: '₹1,10,000 / Day',
      rating: '4.9 ★',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'The Grand Palladium Bandra',
      location: 'Bandra West, Mumbai, Maharashtra',
      capacity: '3,000 Guests',
      price: '₹2,60,000 / Day',
      rating: '5.0 ★',
      image: 'https://images.unsplash.com/photo-1545232979-fbf68fe9b1a2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Chhatarpur Royal Farmhouse Mandapam',
      location: 'Chhatarpur, South Delhi',
      capacity: '2,500 Guests',
      price: '₹2,20,000 / Day',
      rating: '5.0 ★',
      image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Amaravati Royal Palace Mandapam',
      location: 'Vijayawada, Krishna, Andhra Pradesh',
      capacity: '2,200 Guests',
      price: '₹95,000 / Day',
      rating: '5.0 ★',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Varma',
      role: 'Bride from Vijayawada',
      message: 'Event Pro made booking our wedding venue so seamless! We checked the available slots, selected floral decor packages, and got our confirmation in minutes.',
    },
    {
      name: 'Rajesh Naidu',
      role: 'Corporate Event Organizer, Hyderabad',
      message: 'The hierarchical search (State → District → Area) is brilliant. Finding convention centers with exact capacity in Hitec City took just seconds.',
    },
    {
      name: 'Anand Sundaram',
      role: 'Cultural Festival Director, Chennai',
      message: 'The unique Booking ID system, digital receipts, and transparent pricing eliminate all the stress of venue hunting.',
    },
  ];

  const faqs = [
    {
      question: 'What is Event Pro?',
      answer: 'Event Pro is an all-in-one event and function hall booking platform. It allows users to explore venues and events across India, select exact dates, check slot availability, and book instantly with transparent pricing.',
    },
    {
      question: 'How does the hierarchical location search work?',
      answer: 'You select a State (e.g. Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, Maharashtra), and the platform dynamically loads its Districts. Selecting a District then populates its specific Areas and available function halls.',
    },
    {
      question: 'Can I select an exact date and time slot for my booking?',
      answer: 'Yes! Inside Explore Events, select your exact required date on the calendar, check real-time slot availability (e.g. Morning, Evening, or Full Day), and reserve your slot before someone else takes it.',
    },
    {
      question: 'What is included in the transparent pricing breakdown?',
      answer: 'Before confirming, you will see the base hall price, any selected additional services (like floral decoration, sound system, and catering packages), and the total amount with zero hidden surprises.',
    },
    {
      question: 'What happens after I book?',
      answer: 'You immediately receive a confirmed booking receipt featuring your unique Booking ID (e.g. EP-20260915-XXXX). You can view and manage it under My Bookings at any time.',
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'You can easily cancel an active booking from your dashboard prior to the event date. Refunds are processed according to the cancellation policy within 3 to 5 business days.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col justify-between">
      <Navbar />

      {/* ================= Hero Section ================= */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-blue-200 mb-6"
          >
            <span>👑</span> India's Premier Venue &amp; Event Booking Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
          >
            Discover, Compare &amp; Book Grand{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
              Function Halls &amp; Events
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Event Pro connects you with verified banquet halls, convention centers, and live events across Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, and Maharashtra with instant slot confirmation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/events">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-3.5 shadow-xl shadow-black/25">
                🏛️ Explore Function Halls
              </Button>
            </Link>
            <Link to="/events?tab=events">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold px-8 py-3.5">
                🎟️ Discover Live Events
              </Button>
            </Link>
          </motion.div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 pt-12 border-t border-white/10 text-center">
            <div>
              <span className="text-3xl font-black block">500+</span>
              <span className="text-xs text-blue-200 uppercase font-semibold">Verified Venues</span>
            </div>
            <div>
              <span className="text-3xl font-black block">5 States</span>
              <span className="text-xs text-blue-200 uppercase font-semibold">Hierarchical Search</span>
            </div>
            <div>
              <span className="text-3xl font-black block">10,000+</span>
              <span className="text-xs text-blue-200 uppercase font-semibold">Happy Bookings</span>
            </div>
            <div>
              <span className="text-3xl font-black block">100%</span>
              <span className="text-xs text-blue-200 uppercase font-semibold">Slot Protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Featured Function Halls ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Handpicked Venues
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-1">
              Top Rated Function Halls
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Explore premier convention centers with full air conditioning, grand stages, and valet parking
            </p>
          </div>
          <Link to="/events?tab=halls">
            <Button variant="outline" className="font-bold text-xs">
              View All Venues →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVenues.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden bg-gray-900">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-gray-900 dark:text-white shadow-xs">
                    {v.rating}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {v.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
                    <span>📍</span> {v.location}
                  </p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    👥 Capacity: {v.capacity}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between mt-2">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-semibold block">Starts from</span>
                  <span className="text-lg font-black text-gray-900 dark:text-white">{v.price}</span>
                </div>
                <Link to="/events?tab=halls">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs font-bold">
                    Check Slots
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= How It Works Section ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Seamless Booking Experience
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-1">
              How Event Pro Works
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Four simple steps from location discovery to your confirmed booking receipt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm relative"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-lg mb-4 shadow-md shadow-blue-500/20">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Powerful Platform Features ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-1">
            Built for Perfect Celebrations &amp; Conclaves
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            State-of-the-art booking engine with anti-conflict slot management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 p-7 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= Testimonials ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Verified Host &amp; Guest Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-1">
              Loved by Event Organizers &amp; Families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-7 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed italic mb-6">
                    "{t.message}"
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white">{t.name}</h4>
                  <p className="text-[11px] text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ Section ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Everything you need to know about Event Pro booking platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              className="group bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 cursor-pointer"
            >
              <summary className="font-bold text-sm text-gray-900 dark:text-white flex justify-between items-center select-none">
                <span>{faq.question}</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-3">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
