'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MdMedicalServices,
  MdDashboard,
  MdDevicesOther,
  MdFavorite,
  MdAccessibility,
  MdHealthAndSafety,
  MdOutlineSecurity,
} from 'react-icons/md';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleProduct = () => {
    setProductOpen(!productOpen);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setProductOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '/' },
     { name: 'Our product', href: '/ourproduct/cgmwelcomekit' },
    { name: 'About', href: '/about/about_us' },
    { name: 'Product', href: '#product', hasDropdown: 'product' },
    { name: 'Services', href: '#services', hasDropdown: 'services' },
    { name: 'Benefits', href: '/services/cardsection' },
    { name: 'Contact', href: '/contact/getintouchpage' },
  ];

  const enterpriseItems = [
    {
      icon: <MdMedicalServices className="text-blue-400 text-xl" />,
      title: 'Diagnostic Suite™',
      desc: 'Unified diagnostic workspace with PACS functionality.',
      href: '/product/diagnostic_suite',
    },
    {
      icon: <MdDashboard className="text-blue-400 text-xl" />,
      title: 'Operations Suite™',
      desc: 'Smart operations with RIS and real-time workflow management.',
      href: '/product/operations_suite',
    },
    {
      icon: <MdDevicesOther className="text-blue-400 text-xl" />,
      title: 'TechLive™',
      desc: 'Remote acquisition and collaboration.',
      href: '/product/techlive',
    },
  ];

  const populationItems = [
    {
      icon: <MdFavorite className="text-blue-400 text-xl" />,
      title: 'SmartMammo™',
      desc: 'AI for breast cancer detection.',
      href: '/product/smartmammo',
    },
    {
      icon: <MdAccessibility className="text-blue-400 text-xl" />,
      title: 'DeepHealth Prostate',
      desc: 'Prostate cancer detection with fusion biopsy support.',
      href: '/product/deephealth_prostate',
    },
    {
      icon: <MdDashboard className="text-blue-400 text-xl" />,
      title: 'DeepHealth Lung',
      desc: 'AI-based lung nodule detection.',
      href: '/product/deephealth_lung',
    },
  ];

  const servicesDropdown = [
    {
      icon: <MdHealthAndSafety className="text-blue-400 text-xl" />,
      name: 'Patient Experience',
      href: '/services/patient_experience',
      desc: 'Improve access and affordability.',
    },
    {
      icon: <MdDashboard className="text-blue-400 text-xl" />,
      name: 'Advanced Diagnostics',
      href: '/services/advanced_diagnostics',
      desc: 'Enhance precision and speed using AI.',
    },
    {
      icon: <MdDevicesOther className="text-blue-400 text-xl" />,
      name: 'Digital Health Records',
      href: '/services/digital_health_records',
      desc: 'Secure data sharing for doctors and hospitals.',
    },
    {
      icon: <MdAccessibility className="text-blue-400 text-xl" />,
      name: 'Remote Monitoring',
      href: '/services/remote_monitoring',
      desc: 'Extend care with IoT.',
    },
    {
      icon: <MdMedicalServices className="text-blue-400 text-xl" />,
      name: 'Doctor Enablement',
      href: '/services/doctor_enablement',
      desc: 'Streamline clinical workflows.',
    },
    {
      icon: <MdOutlineSecurity className="text-blue-400 text-xl" />,
      name: 'Data Privacy & Security',
      href: '/services/data_privacy',
      desc: 'Compliance with Blockchain trust.',
    },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">YourLogo</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center relative">
          {navItems.map((item) =>
            item.hasDropdown === 'product' ? (
              <div key={item.name} className="relative">
                <button onClick={toggleProduct} className="text-gray-700 hover:text-blue-400 transition">
                  {item.name}
                </button>
                {productOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-lg border rounded-lg w-[800px] p-6 flex justify-between space-x-8 z-50">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Enterprise Imaging</h4>
                      <ul className="space-y-3">
                        {enterpriseItems.map((item, idx) => (
                          <Link key={idx} href={item.href} className="flex items-start space-x-3 p-2 rounded-md hover:bg-blue-50 transition" onClick={() => setProductOpen(false)}>
                            {item.icon}
                            <div>
                              <h5 className="font-medium text-blue-500">{item.title}</h5>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Population Health</h4>
                      <ul className="space-y-3">
                        {populationItems.map((item, idx) => (
                          <Link key={idx} href={item.href} className="flex items-start space-x-3 p-2 rounded-md hover:bg-blue-50 transition" onClick={() => setProductOpen(false)}>
                            {item.icon}
                            <div>
                              <h5 className="font-medium text-blue-500">{item.title}</h5>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : item.hasDropdown === 'services' ? (
              <div key={item.name} className="relative">
                <button onClick={toggleServices} className="text-gray-700 hover:text-blue-400 transition">
                  {item.name}
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white shadow-lg border rounded-lg p-6 grid grid-cols-2 gap-4 w-[600px] z-50">
                    {servicesDropdown.map((service, idx) => (
                      <Link key={idx} href={service.href} onClick={() => setServicesOpen(false)} className="flex items-start gap-3 hover:bg-blue-50 p-2 rounded-md transition">
                        {service.icon}
                        <div>
                          <p className="font-medium text-blue-500">{service.name}</p>
                          <p className="text-sm text-gray-600">{service.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-blue-400 transition">
                {item.name}
              </Link>
            )
          )}
          <Link href="#contact">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg transition">
              Get In Touch
            </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl text-gray-700 focus:outline-none">
          {isOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3">
          {navItems.map((item) =>
            item.hasDropdown === 'product' ? (
              <div key={item.name}>
                <button onClick={() => setProductOpen(!productOpen)} className="block w-full text-left text-gray-700 hover:text-blue-400">
                  {item.name} {productOpen ? '▲' : '▼'}
                </button>
                {productOpen && (
                  <div className="mt-2 border-l pl-3">
                    <h4 className="text-sm font-bold">Enterprise Imaging</h4>
                    {enterpriseItems.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className="flex items-start gap-2 mb-2">
                        {item.icon}
                        <div>
                          <p className="text-blue-500 font-medium">{item.title}</p>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                    <h4 className="text-sm font-bold mt-3">Population Health</h4>
                    {populationItems.map((item, idx) => (
                      <Link key={idx} href={item.href} onClick={() => setIsOpen(false)} className="flex items-start gap-2 mb-2">
                        {item.icon}
                        <div>
                          <p className="text-blue-500 font-medium">{item.title}</p>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : item.hasDropdown === 'services' ? (
              <div key={item.name}>
                <button onClick={() => setServicesOpen(!servicesOpen)} className="block w-full text-left text-gray-700 hover:text-blue-400">
                  {item.name} {servicesOpen ? '▲' : '▼'}
                </button>
                {servicesOpen && (
                  <div className="mt-2 border-l pl-3">
                    {servicesDropdown.map((service, idx) => (
                      <Link key={idx} href={service.href} onClick={() => setIsOpen(false)} className="flex items-start gap-2 mb-2">
                        {service.icon}
                        <div>
                          <p className="text-blue-500 font-medium">{service.name}</p>
                          <p className="text-gray-600 text-sm">{service.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-400">
                {item.name}
              </Link>
            )
          )}
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg transition">
              Get In Touch
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
