export interface CardProps {
  badge?: string;
  title: string;
  description: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
}

export interface SectionProps {
  id?: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  dark?: boolean;
}

export interface Article {
  id: string;
  badge: string;
  title: string;
  description: string;
  slug?: string;
}

