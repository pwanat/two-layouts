import ThemeA from '../themes/ThemeA/theme';
import ThemeB from '../themes/ThemeB/theme';

export default (searchName = '') => {
  const themes = [ThemeA, ThemeB];
  return themes.find(t => t.name === searchName);
};
