import { BurgerMenu } from 'components';
import {
  HeroSection,
  ProjectsSection,
  RecomendationSection,
  SkillsSection,
} from 'sections';

const App = () => {
  return (
    <>
      <BurgerMenu />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <RecomendationSection />
    </>
  );
};

export default App;
