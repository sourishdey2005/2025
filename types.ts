
export interface Memory {
  id: number;
  text: string;
  icon: string;
}

export interface Reason {
  id: number;
  text: string;
  icon: 'Heart' | 'Star' | 'Moon';
}
