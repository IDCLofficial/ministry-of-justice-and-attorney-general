import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.ABOUT} />

            {/* Ministry Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
                            <Image
                                src="/photos/statue - Ministry of Justice.webp"
                                alt="Local government administration and community development"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
                            />
                        </AnimatedEntrance>
                        <div className="order-1 lg:order-2">
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={200}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Ministry of Justice & Attorney General in Imo State serves as the cornerstone of the state&apos;s legal and judicial system, dedicated to upholding the rule of law and ensuring equal access to justice for all citizens. Established to safeguard constitutional rights and provide legal guidance to the state government, the ministry plays a pivotal role in maintaining law and order while promoting judicial excellence.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    Through its various departments and agencies, the ministry oversees the administration of justice, legal reforms, and the prosecution of criminal cases. It serves as the legal advisor to the state government, ensuring that all government actions comply with the law while protecting the rights and interests of the people of Imo State.
                                </p>
                            </AnimatedEntrance>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Our Vision */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Our Vision
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    To uphold justice, fairness, and the rule of law in Imo State through a transparent, efficient, and technology-driven judicial system that serves all citizens equally.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Our Mission */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                    To deliver timely and impartial justice, promote legal reform, and ensure the protection of individual rights through an independent judiciary and an accountable Ministry of Justice.
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Ensure access to fair and efficient justice for all citizens</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Promote legal reforms and modernization of judicial processes</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Uphold the rule of law and protect constitutional rights</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Provide legal counsel and representation for the state government</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedEntrance>
                    </div>
                </div>
            </section>

            {/* Attorney General's Profile Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Hon. [Attorney General&apos;s Name], SAN
                            </h2>
                            <p className="text-lg sm:text-xl text-green-600 font-semibold mb-4 sm:mb-6">
                                Honorable Attorney General & Commissioner for Justice
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                A distinguished legal luminary with over two decades of experience in legal practice and public service. As the Chief Law Officer of Imo State, the Honorable Attorney General is committed to upholding the rule of law, ensuring justice is accessible to all citizens, and implementing judicial reforms that enhance the efficiency and transparency of the state&apos;s legal system.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                Under their leadership, the Ministry of Justice has prioritized judicial reforms, legal system modernization, and human rights protection. The Attorney General has been instrumental in driving policy changes that strengthen the state&apos;s legal framework and improve access to justice for all residents of Imo State.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Image
                                src="/assets/commissioner-local-govt.png"
                                alt="Hon. (Mrs.) Rubby Emele - Honourable Commissioner"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Responsibilities Section */}
            <section id="coreResponsibilities" className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Core Responsibilities
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Justice Access & Efficiency */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Justice Access & Efficiency
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Expand access to justice by improving court infrastructure, digital case management, and legal aid services.
                            </p>
                        </div>

                        {/* Judicial Reform & Innovation */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Judicial Reform & Innovation
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Drive reforms that modernize court procedures, introduce automation, and promote alternative dispute resolution.
                            </p>
                        </div>

                        {/* Institutional Capacity */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Institutional Capacity
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Strengthen performance through staff training, legal tool upgrades, and cross-agency collaboration.
                            </p>
                        </div>

                        {/* Transparency & Accountability */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Transparency & Accountability
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Promote openness in legal processes through digitized records, case tracking, and stakeholder engagement.
                            </p>
                        </div>

                        {/* Human Rights Protection */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Human Rights Protection
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Ensure constitutional safeguards are upheld for all individuals, especially vulnerable groups.
                            </p>
                        </div>

                        {/* Law Reform & Policy */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Law Reform & Policy
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Review outdated laws, propose modern legal frameworks, and promote public legal education.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Goals Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Objectives</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry is committed to these key strategic objectives to strengthen the justice system, uphold the rule of law, and ensure access to justice for all citizens of Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Justice Access & Efficiency: Expand access to justice through improved court infrastructure and digital case management.",
                            "Judicial Reform & Innovation: Modernize court procedures and promote alternative dispute resolution.",
                            "Institutional Capacity: Strengthen performance through staff training and technology upgrades.",
                            "Transparency & Accountability: Promote openness in legal processes through digitized records.",
                            "Human Rights Protection: Uphold constitutional safeguards for all individuals.",
                            "Law Reform: Review and update outdated laws and legal frameworks.",
                            "Digital Transformation: Implement e-filing and digital case tracking systems.",
                            "Community Legal Education: Increase public awareness of legal rights and procedures.",
                            "Judicial Infrastructure: Upgrade court facilities and equipment statewide.",
                            "Professional Development: Continuous training for legal and judicial personnel."
                        ].map((goal, index) => (
                            <AnimatedEntrance
                                key={index}
                                {...ANIMATION_PRESETS.CARD_FADE_UP}
                                delay={0.1 * index}
                            >
                                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-semibold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700">{goal}</p>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Judicial Leadership</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the distinguished legal professionals leading the Ministry of Justice in upholding the rule of law and ensuring justice for all in Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Attorney General & Commissioner for Justice */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/assets/no-image.png"
                                    alt="Hon. Attorney General & Commissioner for Justice"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">[Attorney General&apos;s Name]</h3>
                                <p className="text-green-700 font-medium mt-1">Hon. Attorney General & Commissioner for Justice</p>
                            </div>
                        </div>

                        {/* Permanent Secretary */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/Gloria Egwuagu. Solicitor General:Permanent Secretary. Ministry of Justice, Imo State.jpeg"
                                    alt="Gloria Egwuagu. Solicitor General:Permanent Secretary. Ministry of Justice, Imo State"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Gloria Egwuagu</h3>
                                <p className="text-green-700 font-medium mt-1">Solicitor General/Permanent Secretary.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Structure Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-900 grid-bg text-white">
                <div className="max-w-7xl mx-auto px-4 space-y-10 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                Our Structure
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                                The Imo State Ministry of Justice operates through a well-defined judicial structure
                                that ensures the effective administration of justice across the state. Our organizational
                                framework is designed to uphold the rule of law and provide accessible legal services
                                to all citizens of Imo State.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/photos/Mace - Ministry of Justice.png"
                                alt="Imo State High Court Complex"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto object-contain aspect-[2/1]"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 sm:gap-6">
                        {/* Level 1 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">1</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Chief Judge of Imo State</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Head of Courts and Chairman, Judicial Service Commission. Provides leadership and oversees the administration of justice across the state.</p>
                        </div>

                        {/* Level 2 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">2</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Judicial Service Commission</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Comprising legal and public officers, responsible for the appointment, promotion, and discipline of judicial officers.</p>
                        </div>

                        {/* Level 3 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">3</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Registrar of the High Court</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Oversees administrative functions of the court system, ensuring smooth operations and case management.</p>
                        </div>

                        {/* Level 4 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">4</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">President, Customary Court of Appeal</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Leads the appellate court that handles appeals from the Customary Courts across the state.</p>
                        </div>

                        {/* Level 5 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">5</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Heads of Courts</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Lead the Magistrates&apos; Courts and Customary Courts across all 27 Local Government Areas, ensuring justice delivery at the grassroots.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
