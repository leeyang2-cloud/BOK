
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Github, Twitter, Linkedin, Download } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onDownloadProject?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onDownloadProject }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '소개', href: '#hero' },
    { name: '연구 분야', href: '#research' },
    { name: '연구 실적', href: '#publications' },
    { name: '연구진', href: '#team' },
    { name: '문의', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Cpu className="text-indigo-600 w-8 h-8" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              BOK AI LAB
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
              연구 참여하기
            </button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass absolute top-full left-0 w-full border-t border-slate-100 flex flex-col p-6 gap-4 animate-in fade-in slide-in-from-top-5 duration-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-slate-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="text-indigo-400 w-8 h-8" />
              <span className="text-xl font-bold text-white">BOK AI LAB</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              우리는 인공지능 기술의 한계를 넓히고, 인류의 더 나은 미래를 위해 혁신적인 연구를 수행합니다.
            </p>
            <div className="flex gap-4">
              <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">연구소</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#hero" className="hover:text-white">연구소 비전</a></li>
              <li><a href="#team" className="hover:text-white">구성원 소개</a></li>
              <li><a href="#" className="hover:text-white">채용 공고</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">연구 분야</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#research" className="hover:text-white">자연어 처리</a></li>
              <li><a href="#research" className="hover:text-white">컴퓨터 비전</a></li>
              <li><a href="#research" className="hover:text-white">강화 학습</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>서울특별시 관악구 대학동 관악로 1</li>
              <li>contact@bok-ai-lab.edu</li>
              <li>02-1234-5678</li>
              <li className="pt-4">
                <button 
                  onClick={onDownloadProject}
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
                >
                  <Download size={16} /> 프로젝트 소스 다운로드
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-16 mt-16 border-t border-slate-800 text-center text-xs">
          © 2024 BOK AI LAB. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
