
import React from 'react';
import { 
  Cpu, 
  Globe, 
  MessageSquare, 
  Eye, 
  BrainCircuit, 
  Bot, 
  LineChart 
} from 'lucide-react';
import { Publication, TeamMember, ResearchArea } from './types';

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'nlp',
    title: '자연어 처리 (NLP)',
    description: '대규모 언어 모델(LLM)의 효율성 개선 및 다국어 추론 능력 고도화를 연구합니다.',
    icon: 'MessageSquare'
  },
  {
    id: 'cv',
    title: '컴퓨터 비전 (CV)',
    description: '실시간 객체 인식, 3D 재구성 및 비디오 이해를 위한 딥러닝 아키텍처를 설계합니다.',
    icon: 'Eye'
  },
  {
    id: 'robotics',
    title: '로보틱스 및 제어',
    description: '물리적 환경에서의 지능적 상호작용을 위한 강화 학습 및 경로 계획 알고리즘을 연구합니다.',
    icon: 'Bot'
  },
  {
    id: 'xai',
    title: '설명 가능한 AI (XAI)',
    description: 'AI 모델의 의사결정 과정을 인간이 이해할 수 있도록 투명성을 확보하는 기술을 개발합니다.',
    icon: 'BrainCircuit'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    title: 'Efficient Multi-modal Transformers for Edge Computing',
    authors: ['김철수', '박지민', '이영희'],
    venue: 'NeurIPS 2024',
    year: 2024,
    category: 'NLP'
  },
  {
    id: 'pub2',
    title: 'Real-time 3D Scene Reconstruction with Sparse Voxel Octrees',
    authors: ['최민석', '정우성'],
    venue: 'CVPR 2024',
    year: 2024,
    category: 'Computer Vision'
  },
  {
    id: 'pub3',
    title: 'Safe Reinforcement Learning for Human-Robot Collaboration',
    authors: ['이영희', 'David Miller'],
    venue: 'ICRA 2023',
    year: 2023,
    category: 'Robotics'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 't1',
    name: '김철수 교수',
    role: '연구소장 / 주임 교수',
    bio: '인공지능 및 딥러닝 분야에서 20년 이상의 경력을 보유하고 있으며, 넥서스 AI 연구소를 설립했습니다.',
    imageUrl: 'https://picsum.photos/seed/prof1/400/400',
    specialties: ['Deep Learning', 'Strategic AI', 'Ethical AI']
  },
  {
    id: 't2',
    name: '이영희 박사',
    role: '수석 연구원',
    bio: '로보틱스 및 강화학습 전문가로, 다수의 글로벌 프로젝트를 성공적으로 이끌어왔습니다.',
    imageUrl: 'https://picsum.photos/seed/res1/400/400',
    specialties: ['Reinforcement Learning', 'Robotics Control']
  },
  {
    id: 't3',
    name: '박지민',
    role: '박사 과정 연구원',
    bio: '자연어 처리의 효율성 극대화를 목표로 최신 트랜스포머 구조를 연구 중입니다.',
    imageUrl: 'https://picsum.photos/seed/stud1/400/400',
    specialties: ['NLP', 'Transformers', 'Optimization']
  }
];
