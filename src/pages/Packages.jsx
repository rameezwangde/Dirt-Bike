import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PackagesHero from '../components/PackagesHero';
import PackageCard from '../components/PackageCard';
import TourDetailsModal from '../components/TourDetailsModal';
import { allPackages, packageCategories } from '../data/packagesData';
import { Search, Sparkles, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Packages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync category with URL if query parameter changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && ['all', 'buggy', 'dirt-bike', 'quad-bike', 'safari'].includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const handleOpenDetails = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  // Filter packages based on activeCategory and searchQuery
  const filteredPackages = useMemo(() => {
    return allPackages.filter((pkg) => {
      const matchesCategory =
        activeCategory === 'all' || pkg.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group by category for section display when 'all' is selected and no search
  const categoriesToRender = useMemo(() => {
    if (searchQuery.trim() !== '') {
      return [
        {
          id: 'search-results',
          name: `SEARCH RESULTS (${filteredPackages.length})`,
          packages: filteredPackages
        }
      ];
    }

    if (activeCategory !== 'all') {
      const catObj = packageCategories.find((c) => c.id === activeCategory);
      return [
        {
          id: activeCategory,
          name: catObj ? catObj.name : 'TOURS',
          packages: filteredPackages
        }
      ];
    }

    // Default 'all' view: show sections for each category beforehand
    return [
      {
        id: 'buggy',
        name: 'BUGGY TOURS',
        subtitle: 'High performance desert buggies with unrestricted open keys',
        packages: allPackages.filter((p) => p.category === 'buggy')
      },
      {
        id: 'dirt-bike',
        name: 'DIRT BIKE TOURS',
        subtitle: 'Pro-grade KTM 450cc motocross machines with pro coaching & full gear',
        packages: allPackages.filter((p) => p.category === 'dirt-bike')
      },
      {
        id: 'quad-bike',
        name: 'QUAD BIKE TOURS',
        subtitle: 'High-octane ATV quad adventures for solo riders and dune seekers',
        packages: allPackages.filter((p) => p.category === 'quad-bike')
      },
      {
        id: 'safari',
        name: 'DESERT SAFARI TOURS',
        subtitle: 'Complete Arabian desert experience with BBQ dinners and dune adventures',
        packages: allPackages.filter((p) => p.category === 'safari')
      }
    ];
  }, [activeCategory, searchQuery, filteredPackages]);

  // Counts for tabs
  const getCategoryCount = (catId) => {
    if (catId === 'all') return allPackages.length;
    return allPackages.filter((p) => p.category === catId).length;
  };

  return (
    <div className="bg-[#080C0F] text-white min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <PackagesHero />

      {/* Main Tours Section */}
      <section className="relative w-full bg-[#080C0F] px-4 sm:px-6 md:px-12 lg:px-16 pt-12 pb-24">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-[#F97818]/8 blur-[130px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-[1440px] mx-auto">
          {/* Header Title & Controls */}
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F97818]/10 border border-[#F97818]/30 text-[#F97818] text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Booking · No Middlemen</span>
            </div>

            <h2 className="font-barlow font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
              EXPLORE OUR <span className="text-[#F97818]">ALL PACKAGES</span>
            </h2>
            <p className="font-inter text-gray-400 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
              All vehicles are unlocked with open keys and fully inspected. Choose your ride below and book instantly via WhatsApp or phone.
            </p>
          </div>

          {/* Interactive Filter Bar & Search */}
          <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#11161B]/90 border border-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-md">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {packageCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = getCategoryCount(cat.id);
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`whitespace-nowrap font-barlow font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#F97818] text-[#070B0D] shadow-lg shadow-[#F97818]/25'
                        : 'bg-[#181D23] hover:bg-white/10 text-gray-300 border border-white/5'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                        isActive ? 'bg-black/25 text-[#070B0D] font-black' : 'bg-black/50 text-gray-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-[280px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vehicle (e.g. Can-Am, KTM)..."
                className="w-full bg-[#181D23] border border-white/10 focus:border-[#F97818] text-white text-xs sm:text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none transition-colors placeholder:text-gray-500 font-inter"
              />
            </div>
          </div>

          {/* Tours Render Sections */}
          <div className="space-y-16">
            {categoriesToRender.map((categorySection) => (
              <div key={categorySection.id} className="space-y-6">
                {/* Category Section Heading (Exact match to reference site screenshot) */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4 gap-2">
                  <div>
                    <h3 className="font-barlow font-black text-3xl sm:text-4xl uppercase text-white tracking-tight flex items-center gap-3">
                      <span className="w-2.5 h-8 bg-[#F97818] rounded-full inline-block" />
                      {categorySection.name}
                    </h3>
                    {categorySection.subtitle && (
                      <p className="font-inter text-xs sm:text-sm text-gray-400 mt-1 pl-5">
                        {categorySection.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-xs uppercase font-bold text-gray-500 tracking-wider">
                    {categorySection.packages.length} Available Packages
                  </span>
                </div>

                {/* Horizontal Package Cards Grid (Image on Left) */}
                {categorySection.packages.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {categorySection.packages.map((pkg, idx) => (
                      <PackageCard
                        key={pkg.id}
                        pkg={pkg}
                        index={idx}
                        onOpenDetails={handleOpenDetails}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-gray-400 font-inter">
                    No packages match your search criteria. Try a different search keyword.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details Modal */}
      <TourDetailsModal
        pkg={selectedTour}
        isOpen={isModalOpen}
        onClose={handleCloseDetails}
      />

      <Footer />
    </div>
  );
};

export default Packages;
