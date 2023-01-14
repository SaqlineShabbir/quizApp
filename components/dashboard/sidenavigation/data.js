import ArchivesIcon from './icons/archives';
import CreditsIcon from './icons/credits';
import DocumentationIcon from './icons/documentation';
import HomeIcon from './icons/home';
import SettingsIcon from './icons/settings';
import StatusIcon from './icons/status';

const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/userDashBoard',
  },
  {
    title: 'Give A Quiz Test',
    icon: <StatusIcon />,
    link: '/admin/status',
  },
  {
    title: 'Score & Grade',
    icon: <ArchivesIcon />,
    link: '/admin/archives',
  },
  {
    title: 'Download Certificates',
    icon: <CreditsIcon />,
    link: '/admin/credits',
  },
  {
    title: 'Update Your Profile',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  {
    title: 'Subscriptions',
    icon: <DocumentationIcon />,
    link: '/admin/documentation',
  },
];

export default data;
