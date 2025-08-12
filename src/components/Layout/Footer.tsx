import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Youtube,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t("about"), href: "/about" },
    { name: t("team"), href: "/team" },
    { name: t("events"), href: "/events" },
    { name: t("contact"), href: "/contact" },
  ];

  const socialLinks = [
    // { name: 'Tiktok', icon: Facebook, href: '#' },
    {
      name: "Youtube",
      icon: Youtube,
      href: "https://youtube.com/@aru_ai_hub?si=6JNOyWKZXmC8Gw18",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aru-ai-hub-6b9a66344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/aru_ai_hub?igsh=N3libDU1c2sxMnBw",
    },
  ];

  return (
    <footer className="bg-[#000068] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IH</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Innovation Hub</h3>
                <p className="text-gray-300 text-sm">Ardhi University</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t("footerDescription")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFA500] transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-600">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-orange-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-orange-600">
              {t("contactInfo")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Innovation Hub, Department of Computer Systems & Mathematics
                  <br />
                  Ardhi University
                  <br />
                  P.O. Box 35176, Observation Hill, Plot No.3, Block L,
                  <br />
                  University Road
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  (+255)-738 357 310
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  innovation@aru.ac.tz
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-300 text-sm text-center">
              © {new Date().getFullYear()} Innovation Hub, Ardhi University. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
