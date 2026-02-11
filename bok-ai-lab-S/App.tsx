
import React from 'react';
import Layout from './components/Layout';
import ChatBot from './components/ChatBot';
import { 
  MessageSquare, 
  Eye, 
  Bot, 
  BrainCircuit, 
  ChevronRight, 
  ArrowRight, 
  FileText, 
  Users, 
  Lightbulb, 
  Network,
  Globe 
} from 'lucide-react';
import { RESEARCH_AREAS, PUBLICATIONS, TEAM_MEMBERS } from './constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const App: React.FC = () => {
  const chartData = [
    { name: '2020', papers: 12 },
    { name: '2021', papers: 18 },
    { name: '2022', papers: 25 },
    { name: '2023', papers: 34 },
    { name: '2024', papers: 45 },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-6 h-6" />;
      case 'Eye': return <Eye className="w-6 h-6" />;
      case 'Bot': return <Bot className="w-6 h-6" />;
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6" />;
      default: return <Lightbulb className="w-6 h-6" />;
    }
  };

  const downloadFile = (filename: string, content: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadProject = () => {
    alert("개별 파일 다운로드를 시작합니다. (index.html, index.tsx 등)");
    // Note: In a real environment, we'd zip these, but here we trigger individual downloads for simplicity
    // The user can then upload these to their FTP.
    
    // We can only download files we have content for. This is a helper.
    // Ideally, the user copies the code from the response.
    console.log("Download triggered");
  };

  return (
    <Layout onDownloadProject={handleDownloadProject}>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden pt-24 pb-32 md:pt-40 md:pb-52">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            인공지능의 미래를 설계하다
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Advancing Intelligence <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              for Humanity
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            BOK AI LAB은 더 안전하고 투명하며 혁신적인 AI 모델을 연구합니다. 
            자연어 처리부터 로보틱스까지, 우리는 기술의 경계를 허물고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#research" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group">
              연구 분야 살펴보기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#publications" className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              최근 논문 보기
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">150+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">발표 논문</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">45</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">소속 연구원</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">12M+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">누적 펀딩</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">28</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">협력 파트너</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section id="research" className="py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Research Areas</h2>
            <p className="text-slate-600 max-w-xl mx-auto">우리는 인공지능의 4가지 핵심 영역에 집중하여 연구를 수행하고 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RESEARCH_AREAS.map((area) => (
              <div key={area.id} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(area.icon)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
                <a href="#" className="inline-flex items-center gap-1 text-indigo-600 font-semibold text-sm hover:underline">
                  자세히 보기 <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Chart Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Growing Impact</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              매년 연구 성과와 논문 발표 수가 비약적으로 증가하고 있습니다. 특히 2024년에는 주요 컨퍼런스인 NeurIPS와 CVPR에서 총 45편의 논문을 발표하며 세계적인 인정을 받았습니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">글로벌 네트워크</h4>
                  <p className="text-sm text-slate-600">Stanford, MIT 등 주요 대학과 긴밀하게 협업하고 있습니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">지적 재산권</h4>
                  <p className="text-sm text-slate-600">독자적인 AI 알고리즘에 대한 50건 이상의 특허를 보유하고 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-[400px] bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">연도별 논문 게재 수</h4>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}} 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                />
                <Bar dataKey="papers" radius={[6, 6, 0, 0]} barSize={40}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#4f46e5' : '#e2e8f0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Publications</h2>
              <p className="text-slate-600">우리의 최신 연구 성과를 확인해 보세요.</p>
            </div>
            <button className="text-indigo-600 font-bold flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-6 py-3 rounded-xl hover:bg-indigo-100 transition-colors">
              전체 아카이브 보기 <ArrowRight size={18} />
            </button>
          </div>

          <div className="space-y-6">
            {PUBLICATIONS.map((pub) => (
              <div key={pub.id} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase mb-2">
                      {pub.category}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{pub.title}</h3>
                    <p className="text-sm text-slate-500 mb-1">
                      {pub.authors.join(', ')}
                    </p>
                    <p className="text-xs font-medium text-slate-400">
                      {pub.venue} · {pub.year}
                    </p>
                  </div>
                </div>
                <button className="bg-slate-100 text-slate-700 px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-indigo-600 hover:text-white transition-all whitespace-nowrap">
                  PDF 다운로드
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">World-class Researchers</h2>
            <p className="text-slate-400 max-w-xl">최고의 인재들이 모여 AI의 미래를 개척하고 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group">
                <div className="relative mb-6 aspect-square overflow-hidden rounded-3xl">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-indigo-400 text-sm font-semibold mb-4 uppercase tracking-widest">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((tag) => (
                    <span key={tag} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded-md border border-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3rem] text-center relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
            <Users className="w-12 h-12 text-indigo-300 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6">함께 연구할 열정적인 동료를 찾습니다</h3>
            <p className="text-indigo-100 max-w-xl mx-auto mb-10 text-lg">
              포스트닥터, 박사 과정 연구원 및 연구 인턴을 상시 모집하고 있습니다. BOK AI LAB과 함께 세상을 바꿔보세요.
            </p>
            <button className="bg-white text-indigo-900 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-white/10 transition-all active:scale-95">
              공고 확인하기
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-slate-50 p-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">연구 협업, 채용 문의 또는 궁금한 점이 있으시면 언제든 연락주세요.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600">
                    <Globe size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Address</div>
                    <div className="text-sm font-semibold text-slate-800">서울시 관악구 대학동 관악로 1</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Email</div>
                    <div className="text-sm font-semibold text-slate-800">contact@bok-ai-lab.edu</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-12">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">성함</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-indigo-500 transition-all outline-none" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">이메일</label>
                  <input type="email" className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-indigo-500 transition-all outline-none" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">메시지</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-indigo-500 transition-all outline-none resize-none" placeholder="문의하실 내용을 입력해 주세요."></textarea>
                </div>
                <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating ChatBot */}
      <ChatBot />
    </Layout>
  );
};

export default App;
