import { TechnologyScreen, ScienceScreen } from '~/views';

export const appRoutes = [
  {
    name: 'TechnologyScreen',
    component: TechnologyScreen,
    label: 'Technology',
    icon: 'cpu',
  },
  {
    name: 'ScienceScreen',
    component: ScienceScreen,
    label: 'Science',
    icon: 'activity',
  },
];
