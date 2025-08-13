"use client";
import { useState, useCallback, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function Contact() {
    const [formValues, setFormValues] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<
        Partial<Record<"name" | "company" | "phone" | "email" | "subject" | "message", string>>
    >({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormValues((prev) => ({ ...prev, [name]: value }));
            if (errors[name as keyof typeof errors]) {
                setErrors((prev) => {
                    const next = { ...prev };
                    delete next[name as keyof typeof next];
                    return next;
                });
            }
        },
        [errors]
    );

    const validate = useCallback((values: typeof formValues) => {
        const nextErrors: Partial<Record<keyof typeof formValues, string>> = {};
        if (!values.name.trim()) nextErrors.name = "Name is required";
        if (!values.email.trim()) nextErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email";
        if (values.phone && !/^[\d\s()+-]{7,20}$/.test(values.phone)) nextErrors.phone = "Enter a valid phone";
        if (!values.subject.trim()) nextErrors.subject = "Subject is required";
        if (!values.message.trim() || values.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters";
        return nextErrors;
    }, []);

    const handleSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const validationErrors = validate(formValues);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                toast.error("Please fix the highlighted fields.");
                return;
            }
            setIsSubmitting(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 1200));
                toast.success("Message sent successfully!");
                setFormValues({ name: "", company: "", phone: "", email: "", subject: "", message: "" });
                setErrors({});
            } finally {
                setIsSubmitting(false);
            }
        },
        [formValues, validate]
    );

    return (
        <div className="min-h-screen bg-white">
            {/* Green Header Bar */}
            <div className="bg-green-600 h-20"></div>

            {/* Main Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column - Contact Information */}
                        <div>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                    Let&rsquo;s talk
                                </h1>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                                <p className="text-gray-600 mb-12 leading-relaxed">
                                    We welcome your questions, suggestions, or inquiries related to legal matters, justice administration, and judicial services in Imo State.
                                </p>
                            </AnimatedEntrance>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {/* Email */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                        <a href="mailto:info@imojudiciary.gov.ng" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">info@imojudiciary.gov.ng</a>
                                    </div>
                                </AnimatedEntrance>
                                
                                {/* Phone */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                        <a href="tel:+2347046242007" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">+2347046242007</a>
                                    </div>
                                </AnimatedEntrance>

                                {/* Office */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                                        <p className="text-gray-600">
                                            Justice Oputa High Court Complex, New Owerri (off Port-Harcourt Road), Owerri
                                        </p>
                                    </div>
                                </AnimatedEntrance>

                                {/* Socials */}
                                {/* <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Socials</h3>
                                    <div className="flex space-x-3">
                                        <a href="#" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    </div>
                                </AnimatedEntrance> */}


                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={400}>
                            <div className="bg-white rounded-lg lg:p-8 p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEND US A MESSAGE</h3>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        NAME
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.name)}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}`}
                                        placeholder="Your name"
                                    />
                                    {errors.name && <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        COMPANY
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formValues.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Your company"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        PHONE
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.phone)}
                                        aria-describedby={errors.phone ? "phone-error" : undefined}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}`}
                                        placeholder="Your phone number"
                                    />
                                    {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.email)}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}`}
                                        placeholder="Your email address"
                                    />
                                    {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        SUBJECT
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formValues.subject}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.subject)}
                                        aria-describedby={errors.subject ? "subject-error" : undefined}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.subject ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}`}
                                        placeholder="Message subject"
                                    />
                                    {errors.subject && <p id="subject-error" className="mt-2 text-sm text-red-600">{errors.subject}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        MESSAGE OR COMPLAIN
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        value={formValues.message}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.message)}
                                        aria-describedby={errors.message ? "message-error" : undefined}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent resize-none ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}`}
                                        placeholder="Your message..."
                                    ></textarea>
                                    {errors.message && <p id="message-error" className="mt-2 text-sm text-red-600">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:transform hover:scale-105 duration-300 ${isSubmitting ? "opacity-80 cursor-not-allowed" : ""}`}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                            </div>
                        </AnimatedEntrance>
                    </div>
                    
                    {/* Map Integration */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
                        <div className="aspect-w-16 aspect-h-9 w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.705450421551!2d7.000337541103373!3d5.461590583297768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425b43ae2a2ccd%3A0xc25ee54d57318713!2sIMO%20STATE%20HIGH%20COURT%20JUSTICE%20OPUTA%20COURT%20COMPLEX!5e0!3m2!1sen!2sng!4v1754558342084!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ministry of Justice & Attorney General Location"
                            ></iframe>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            <a
                                href="https://maps.app.goo.gl/QfbjYmoKdRdcEnfZ7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                View on Google Maps
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
