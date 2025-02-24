const mockBooks = [
  {
    id: '1',
    title: 'React 入門',
    author: 'John Doe',
    borrowedDate: new Date('2025-02-01'),
    dueDate: new Date('2025-03-01'),
    returned: false,
  },
  {
    id: '2',
    title: 'Next.js 実践',
    author: 'Jane Smith',
    borrowedDate: new Date('2025-02-10'),
    dueDate: new Date('2025-03-10'),
    returned: true,
  },
  {
    id: '3',
    title: 'JavaScript 深掘り',
    author: 'Alex Johnson',
    borrowedDate: new Date('2025-02-15'),
    dueDate: new Date('2025-03-15'),
    returned: false,
  },
  {
    id: '4',
    title: 'TypeScript のすべて',
    author: 'Chris Evans',
    borrowedDate: new Date('2025-02-20'),
    dueDate: new Date('2025-03-20'),
    returned: false,
  },
  {
    id: '5',
    title: 'GraphQL 完全ガイド',
    author: 'Sarah Connor',
    borrowedDate: new Date('2025-02-25'),
    dueDate: new Date('2025-03-25'),
    returned: true,
  },
  {
    id: '6',
    title: 'フルスタック開発',
    author: 'Michael Lee',
    borrowedDate: new Date('2025-03-01'),
    dueDate: new Date('2025-04-01'),
    returned: true,
  },
  {
    id: '7',
    title: 'クラウドネイティブアプリ',
    author: 'Emily Davis',
    borrowedDate: new Date('2025-03-05'),
    dueDate: new Date('2025-04-05'),
    returned: false,
  },
  {
    id: '8',
    title: 'AI と機械学習',
    author: 'Robert Brown',
    borrowedDate: new Date('2025-03-10'),
    dueDate: new Date('2025-04-10'),
    returned: false,
  },
  {
    id: '9',
    title: 'データベース設計入門',
    author: 'Jessica Wilson',
    borrowedDate: new Date('2025-03-15'),
    dueDate: new Date('2025-04-15'),
    returned: false,
  },
  {
    id: '10',
    title: 'DevOps 実践ガイド',
    author: 'Kevin Martin',
    borrowedDate: new Date('2025-03-20'),
    dueDate: new Date('2025-04-20'),
    returned: true,
  },
];

export default mockBooks;
