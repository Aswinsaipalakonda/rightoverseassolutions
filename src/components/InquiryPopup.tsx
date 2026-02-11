import { useState, useEffect, useRef } from 'react';
import { X, Send, Loader2, CheckCircle, GraduationCap } from 'lucide-react';

const InquiryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Study Abroad',
  });
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Show popup after a short delay every time the component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwGlEtdSySsdYQNYSZsWGJd5W8wQpm0lOw7EXX9QIdzu0Bx25j1lGxO0C8EGClCTTyR/exec';

    try {
      // Note: mode 'no-cors' yields an opaque response so we cannot inspect status.
      // Success status reflects that the request was sent, not confirmed by the server.
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'popup'
        }),
      });

      setSubmitStatus('success');

      setFormData({ name: '', email: '', phone: '', interest: 'Study Abroad' });

      closeTimerRef.current = setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
        {/* Top gradient accent */}
        <div className="h-1.5 bg-gradient-to-r from-primary via-amber-400 to-primary" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-4 text-center bg-gradient-to-b from-amber-50/80 to-white">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary/20 to-amber-100 rounded-2xl flex items-center justify-center mb-3">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">
            Start Your <span className="text-primary">Journey</span> Today!
          </h2>
          <p className="text-sm text-gray-500">
            Fill in your details and our experts will reach out to you
          </p>
        </div>

        {/* Form */}
        <div className="px-6 pb-6">
          {submitStatus === 'success' ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Thank You!</h3>
              <p className="text-sm text-gray-500">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                  Something went wrong. Please try again.
                </div>
              )}

              <div>
                <label htmlFor="popup-name" className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="popup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="popup-email" className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="popup-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="popup-phone" className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="popup-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="popup-interest" className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                  I'm interested in *
                </label>
                <select
                  name="interest"
                  id="popup-interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary focus:bg-white transition-all"
                >
                  <option value="Study Abroad">Study Abroad</option>
                  <option value="Work Abroad">Work Abroad</option>
                  <option value="Travel / Visit">Travel / Visit</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-primary to-amber-500 hover:from-amber-500 hover:to-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-gray-400 mt-2">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiryPopup;
