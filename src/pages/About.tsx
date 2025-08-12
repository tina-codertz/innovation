import React from "react";
import { Target, Eye, Award, Users, Lightbulb, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollAnimation from "../components/UI/ScrollAnimation";

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t("aboutTitle")}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering innovation through cutting-edge research, collaborative
              partnerships, and sustainable technology solutions for Tanzania
              and beyond.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission Card */}
            <ScrollAnimation delay={0.2}>
              <div className="bg-white shadow-xl rounded-2xl p-8 text-center border hover:shadow-2xl transition duration-300 border-l-8 border-orange-500">
                <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#000068] mb-4">
                  {t("missionTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("missionText")}
                </p>
              </div>
            </ScrollAnimation>

            {/* Vision Card */}
            <ScrollAnimation delay={0.4}>
              <div className="bg-white shadow-xl rounded-2xl p-8 text-center border border-l-8 border-orange-600 hover:shadow-2xl transition duration-300">
                <div className="w-24 h-24 bg-[#708238] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#000068] mb-4">
                  {t("visionTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("visionText")}
                </p>
              </div>
            </ScrollAnimation>

            {/* Goals Card */}
            <ScrollAnimation delay={0.6}>
              <div className="bg-white shadow-xl rounded-2xl p-8 text-center border border-l-8 border-orange-500 hover:shadow-2xl transition duration-300">
                <div className="w-24 h-24 bg-[#000068] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#000068] mb-4">
                  {t("goalsTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We strive to achieve excellence in innovation, research, and
                  education while creating sustainable solutions for societal
                  challenges.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Department Affiliation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Department Affiliation
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  The Innovation Hub is proud to be part of the Department of
                  Computer Systems & Mathematics at Ardhi University, leveraging
                  academic excellence and research expertise to drive
                  technological innovation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
                  <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-orange-600 ">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                      Academic Excellence
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our hub benefits from the strong academic foundation and
                      research expertise of the Department of Computer Systems &
                      Mathematics, ensuring high-quality innovation and
                      education.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-orange-600">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                      Research Integration
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We seamlessly integrate cutting-edge research with
                      practical applications, creating solutions that address
                      real-world challenges in Tanzania and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>


        {/* our coodinators */}

        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center m-12">
              Our Coordinators
            </h2>
          </ScrollAnimation>
        </div>
        <div className="flex flex-wrap justify-center gap-8 m-16">
          {/* Coordinator Card 1 */}
          <ScrollAnimation delay={0.2}>
            <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-lg p-6 text-center  border-l-4 border-orange-600 hover:shadow-xl transition duration-300">
              <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Dr.Godfrey Luwemba
              </h3>
              <p className="text-gray-600">Department Coordinator</p>
            </div>
          </ScrollAnimation>

          {/* Coordinator Card 2 */}
          <ScrollAnimation delay={0.4}>
            <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-lg p-6 text-center  border-l-4 border-orange-600 hover:shadow-xl transition duration-300">
              <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#000068] mb-2">
                Dr.Eunice Likotiko
              </h3>
              <p className="text-gray-600">Department Coordinator</p>
            </div>
          </ScrollAnimation>

          {/* Coordinator Card 3 */}
          {/* <ScrollAnimation delay={0.6}>
            <div className="w-full sm:w-[300px] bg-white shadow-lg rounded-lg p-6 text-center  border-l-4 border-orange-600 hover:shadow-xl transition duration-300">
              <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Dr.Chiristina Kimario
              </h3>
              <p className="text-gray-600">Team Leader</p>
            </div>
          </ScrollAnimation> */}
        </div>
      </section>
    </div>
  );
};

export default About;
