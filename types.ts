
export interface trophies {
  id: string;
  title: string;
  image: string;
}

export interface Profile {
  id: string;
  name: string;
  role: 'trainer' | 'champion';
  specialty: Record<string, string>;
  image: string;
  description: Record<string, string>;
  trophies: trophies[];
}

export interface EnrollmentData {
  fullName: string;
  phone: string;
  discipline: string;
  experience: string;
}

export type Language = 'ru' | 'uz';
