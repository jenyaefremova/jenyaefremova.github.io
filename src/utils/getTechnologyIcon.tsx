import React from 'react';
import IconReact from '../components/shared/Icons/IconReact';
import IconGit from '../components/shared/Icons/IconGit';
import IconCSS from '../components/shared/Icons/IconCss';
import IconJs from '../components/shared/Icons/IconJs';
import IconCheck from '../components/shared/Icons/IconCheck';
import IconLint from '../components/shared/Icons/IconLint';
import IconData from '../components/shared/Icons/IconData';
import IconEye from '../components/shared/Icons/IconEye';
import IconTeam from '../components/shared/Icons/IconTeam';
import IconZip from '../components/shared/Icons/IconZip';

export function getTechnologyIcon(icon: string) {
  switch (icon) {
  case 'react':
    return (<IconReact />);
  case 'git':
    return (<IconGit />);
  case 'css':
    return (<IconCSS />);
  case 'js':
    return (<IconJs />);
  case 'jira':
    return (<IconCheck />);
  case 'lint':
    return (<IconLint />);
  case 'data':
    return (<IconData />);
  case 'pixel':
    return (<IconEye />);
  case 'team':
    return (<IconTeam />);
  case 'gulp':
    return (<IconZip />);
  default:
    return <IconCheck />;
  }
}