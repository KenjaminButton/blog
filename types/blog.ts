export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  slug: string;
  coverImage?: string;
  content?: string;
  tags?: string[];
}
