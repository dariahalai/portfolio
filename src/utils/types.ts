export interface Recomendation {
  id: string;
  gender: string;
  name: string;
  position: string;
  text: string;
}
export interface ProjectTabPanel {
  images: string[] | string;
  description: string;
  link?: string;
  project: string;
  techStack: string;
}
