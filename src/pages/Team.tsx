import React from "react";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollAnimation from "../components/UI/ScrollAnimation";
import { teamMembers, partners } from "../data/mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Team: React.FC = () => {
  const { t } = useLanguage();

  const coreTeam = teamMembers.filter((member) => member.category === "core");
  const mentors = teamMembers.filter((member) => member.category === "mentors");
  const coordinators = teamMembers.filter(
    (member) => member.category === "coordinator"
  );
  const members = teamMembers.filter((member) => member.category === "member");

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t("teamTitle")}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals driving innovation and excellence
              at the Innovation Hub.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Coordinators Section (Slider) */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Coordinators
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The coordinators who ensure smooth operations and collaboration
                across teams.
              </p>
            </div>
          </ScrollAnimation>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            loop={true}
            className="!pb-12 px-4"
          >
            {coordinators.map((member, index) => (
              <SwiperSlide key={member.id}>
                <ScrollAnimation delay={0.1 * index}>
                  <div className="max-w-md mx-auto h-full">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-[#000068] mb-2">
                          {member.name}
                        </h3>
                        <p className="text-orange-600 font-medium mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                          {member.bio}
                        </p>

                        <div className="flex space-x-3 mt-auto">
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900/80 transition-colors"
                            >
                              <Mail className="w-5 h-5 text-white" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-600/80 transition-colors"
                            >
                              <Linkedin className="w-5 h-5 text-white" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Mentors Section (Slider) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16 ">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 item-center">
                {t("mentors")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced advisors providing guidance and industry expertise
                to our innovation ecosystem.
              </p>
            </div>
          </ScrollAnimation>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            className="!pb-12"
          >
            {mentors.map((member, index) => (
              <SwiperSlide key={member.id}>
                <ScrollAnimation delay={0.1 * index}>
                  <div className="bg-white rounded-lg justify-center  shadow-lg  overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-orange-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <div className="flex space-x-3">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900/80 transition-colors"
                          >
                            <Mail className="w-5 h-5 text-white" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-600/80 transition-colors"
                          >
                            <Linkedin className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Core Team Section (Slider) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                {t("coreTeam")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The leadership team guiding our innovation initiatives and
                research programs.
              </p>
            </div>
          </ScrollAnimation>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            loop={true}
            className="!pb-12"
          >
            {coreTeam.map((member, index) => (
              <SwiperSlide key={member.id}>
                <ScrollAnimation delay={0.1 * index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-orange-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <div className="flex space-x-3">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900/80 transition-colors"
                          >
                            <Mail className="w-5 h-5 text-white" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-600/80 transition-colors"
                          >
                            <Linkedin className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Team Members Section (Slider) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Team Members
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our talented team members contributing to our projects and
                initiatives.
              </p>
            </div>
          </ScrollAnimation>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            loop={true}
            className="!pb-12"
          >
            {members.map((member, index) => (
              <SwiperSlide key={member.id}>
                <ScrollAnimation delay={0.1 * index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      {member.images && member.images.length > 1 ? (
                        <Swiper
                          spaceBetween={0}
                          slidesPerView={1}
                          loop={true}
                          autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                          }}
                          modules={[Autoplay]}
                          className="h-64"
                        >
                          {member.images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                              <img
                                src={img}
                                alt={member.name}
                                className="w-full h-64 object-cover"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      ) : (
                        <img
                          src={member.images ? member.images[0] : member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-orange-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Partners Section (Slider) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                {t("partners")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Collaborating with leading organizations to drive innovation and
                create impact.
              </p>
            </div>
          </ScrollAnimation>

          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1280: { slidesPerView: 1 },
            }}
            loop={partners.length > 1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="!pb-12"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={partner.id}>
                <ScrollAnimation delay={0.1 * index}>
                  <div className="flex flex-col items-center justify-center min-h-[340px]">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="rounded-full bg-white shadow-lg flex items-center justify-center w-40 h-40 overflow-hidden border-4 border-orange-600">
                        {typeof partner.logo === 'string' ? (
                          <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain" />
                        ) : (
                          <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {partner.description}
                    </p>
                    {partner.website && (
                      <a
                        href={partner.website}
                        className="inline-flex items-center space-x-2 text-orange-600 hover:text-blue-900 transition-colors font-semibold"
                      >
                        <span className="text-sm">Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </ScrollAnimation>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Interested in being part of our innovation journey? We're always
              looking for talented individuals to join our team and contribute
              to technological advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600/90 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="mailto:innovation@aru.ac.tz"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 border border-white/20"
              >
                Send Your CV
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Team;
