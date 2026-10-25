import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cookie, Settings, Check, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'enduro_cookie_consent_v1';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  const [preferences, setPreferences] = useState({
    essential: true, // Always true & disabled
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user already made a choice
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      // Small delay for smooth entry after page loads
      const timer = setTimeout(() => setShowBanner(true), 900);
      return () => clearTimeout(timer);
    }

    const handleOpenPreferences = () => {
      setShowBanner(true);
      setShowPreferences(true);
    };

    window.addEventListener('open_cookie_preferences', handleOpenPreferences);
    return () => window.removeEventListener('open_cookie_preferences', handleOpenPreferences);
  }, []);

  const saveConsent = (consentData) => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        ...consentData,
        date: new Date().toISOString(),
      })
    );
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const handleDeclineOptional = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-[480px] z-[9999]"
          role="region"
          aria-label="Cookie consent banner"
        >
          <div className="bg-[#0A1217]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-5 md:p-6 shadow-2xl text-white relative overflow-hidden">
            
            {/* Top subtle orange highlight glow */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F97818] to-transparent" />
            
            {!showPreferences ? (
              /* Main View */
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F97818]/15 border border-[#F97818]/30 flex items-center justify-center shrink-0 text-[#F97818] mt-0.5">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-barlow font-black uppercase text-lg tracking-wider text-white flex items-center gap-2">
                      Cookie Preferences
                    </h3>
                    <p className="font-inter text-xs md:text-sm text-white/70 leading-relaxed mt-1">
                      We use cookies to enhance your experience, analyze site usage, and ensure seamless tour bookings. See our{' '}
                      <Link to="/privacy" className="text-[#F97818] hover:underline">
                        Privacy Policy
                      </Link>{' '}
                      for full details.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-2 pt-1 font-barlow font-bold text-xs uppercase tracking-wider">
                  <button
                    onClick={handleAcceptAll}
                    className="w-full sm:flex-1 bg-[#F97818] hover:bg-[#ff8929] text-[#070B0D] py-3 px-4 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    Accept All
                  </button>

                  <button
                    onClick={handleDeclineOptional}
                    className="w-full sm:flex-1 bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 py-3 px-4 rounded-xl transition-all duration-200 active:scale-[0.98]"
                  >
                    Essential Only
                  </button>

                  <button
                    onClick={() => setShowPreferences(true)}
                    className="w-full sm:w-auto p-3 text-white/50 hover:text-[#F97818] bg-transparent rounded-xl transition-colors flex items-center justify-center"
                    aria-label="Customize cookie settings"
                    title="Customize Preferences"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="sm:hidden ml-2">Customize</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Preference Modal / Detailed Options View */
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="font-barlow font-black uppercase text-base tracking-wider text-white flex items-center gap-2">
                    <Settings className="w-4 h-4 text-[#F97818]" />
                    Customize Cookies
                  </h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-white/40 hover:text-white p-1"
                    aria-label="Close preferences"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3 font-inter text-xs text-white/80 max-h-[220px] overflow-y-auto pr-1">
                  
                  {/* Essential */}
                  <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-white flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                        Strictly Necessary
                      </div>
                      <p className="text-white/50 text-[11px] mt-0.5">Required for navigation, security, and cart bookings.</p>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider px-2 py-1 bg-white/5 rounded">
                      Required
                    </span>
                  </div>

                  {/* Analytics */}
                  <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-white">Performance & Analytics</div>
                      <p className="text-white/50 text-[11px] mt-0.5">Helps us understand how visitors interact with our tours.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#F97818]"></div>
                    </label>
                  </div>

                  {/* Marketing */}
                  <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-between gap-3">
                    <div>
                      <div className="font-bold text-white">Marketing & Retargeting</div>
                      <p className="text-white/50 text-[11px] mt-0.5">Used to provide relevant offers and social promotions.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#F97818]"></div>
                    </label>
                  </div>

                </div>

                <div className="flex gap-2 pt-1 font-barlow font-bold text-xs uppercase tracking-wider">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-[#F97818] hover:bg-[#ff8929] text-[#070B0D] py-2.5 px-3 rounded-xl transition-all active:scale-[0.98]"
                  >
                    Save My Choices
                  </button>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="bg-white/5 hover:bg-white/10 text-white/70 py-2.5 px-3 rounded-xl border border-white/10"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
