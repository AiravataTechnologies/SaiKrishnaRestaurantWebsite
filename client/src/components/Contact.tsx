import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Send,
  User,
  Smartphone,
  Users,
  Calendar,
  MessageSquare,
  FileText,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    seats: "",
    timing: "",
    purpose: "",
    other: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // TODO: Replace with actual EmailJS credentials when provided
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      const templateParams = {
        to_email: "info@saikrishnarestaurant.com",
        from_name: formData.name,
        customer_name: formData.name,
        mobile_number: formData.mobile,
        number_of_seats: formData.seats,
        timing: formData.timing,
        purpose: formData.purpose,
        other_details: formData.other,
        restaurant_name: "Sai Krishna Restaurant",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({
        name: "",
        mobile: "",
        seats: "",
        timing: "",
        purpose: "",
        other: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative ornament */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="text-orange-500 text-2xl sm:text-3xl">✦ ❋ ✦</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Contact Us
          </h2>
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="text-orange-500 text-2xl sm:text-3xl">❋ ✦ ❋</div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Visit us for an authentic South Indian dining experience. We're here
            to serve you!
          </p>
        </div>

        {/* Table Reservation Form */}
        <div
          className={`bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-green-100 transition-all duration-1000 delay-300 mb-12 lg:mb-16 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              {/* <div className="text-orange-500 text-xl sm:text-2xl">🍽️ ✦ 🍽️</div> */}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Table Reservation
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Reserve your table for an unforgettable dining experience
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <User className="w-4 h-4 mr-2 text-green-600" />
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                placeholder="Enter your full name"
                data-testid="input-name"
              />
            </div>

            {/* Mobile Number Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Smartphone className="w-4 h-4 mr-2 text-green-600" />
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                placeholder="Enter 10-digit mobile number"
                data-testid="input-mobile"
              />
            </div>

            {/* Number of Seats Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Users className="w-4 h-4 mr-2 text-green-600" />
                Number of Seats *
              </label>
              <select
                name="seats"
                value={formData.seats}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                data-testid="select-seats"
              >
                <option value="">Select number of seats</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8 People</option>
                <option value="9">9 People</option>
                <option value="10">10 People</option>
                <option value="more">More than 10</option>
              </select>
            </div>

            {/* Timing Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <Calendar className="w-4 h-4 mr-2 text-green-600" />
                Preferred Timing *
              </label>
              <input
                type="datetime-local"
                name="timing"
                value={formData.timing}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().slice(0, 16)}
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                data-testid="input-timing"
              />
            </div>

            {/* Purpose Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <MessageSquare className="w-4 h-4 mr-2 text-green-600" />
                Purpose of Booking *
              </label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                data-testid="select-purpose"
              >
                <option value="">Select purpose</option>
                <option value="family-dinner">Family Dinner</option>
                <option value="birthday-celebration">
                  Birthday Celebration
                </option>
                <option value="anniversary">Anniversary</option>
                <option value="business-meeting">Business Meeting</option>
                <option value="date-night">Date Night</option>
                <option value="casual-dining">Casual Dining</option>
                <option value="festival-celebration">
                  Festival Celebration
                </option>
                <option value="group-gathering">Group Gathering</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Other Details Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-semibold text-gray-700">
                <FileText className="w-4 h-4 mr-2 text-green-600" />
                Other Details
              </label>
              <textarea
                name="other"
                value={formData.other}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                placeholder="Any special requirements, dietary preferences, or additional information..."
                data-testid="textarea-other"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600"
              }`}
              data-testid="button-submit-reservation"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Reserve Table</span>
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center">
                🎉 Your table reservation request has been sent successfully!
                We'll contact you shortly.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-center">
                ❌ Failed to send reservation. Please try again or call us
                directly.
              </div>
            )}
          </form>
        </div>

        {/* Contact Information and Map Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Address
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Ground Floor, Plot No 31, Mahakali Caves Rd,
                  <br />
                  opp. Hanuman Mandir, Dhawalgiri,
                  <br />
                  Sher E Punjab Colony, Andheri East,
                  <br />
                  Mumbai, Maharashtra 400093
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  +91 90049 89629
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Email
                </h3>
                <p className="text-gray-600 text-sm sm:text-base break-all">
                  info@saikrishnarestaurant.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Hours
                </h3>
                <div className="text-gray-600 space-y-1 text-sm sm:text-base">
                  <p>
                    <strong>Daily:</strong> 9:00 AM - 12:00 AM
                  </p>
                  <p>
                    <em>Open 7 days a week</em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div
            className={`relative mt-8 lg:mt-0 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-2xl h-64 sm:h-80 lg:h-full overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.663891441743!2d72.85896131490247!3d19.125683087058236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c828efcd1171%3A0xb19718840f42d2a0!2sSai%20krishna%20Restaurant!5e0!3m2!1sen!2sin!4v1692345678901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Krishna Restaurant Location"
                data-testid="google-maps-embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
