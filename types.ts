
export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface MoleculeNode {
  id: string;
  group: number;
  label: string;
}

export interface MoleculeLink {
  source: string;
  target: string;
  value: number;
}
