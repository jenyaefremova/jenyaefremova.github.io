import React from 'react';
import IconReact from '../shared/Icons/IconReact';
import IconGit from '../shared/Icons/IconGit';
import IconCSS from '../shared/Icons/IconCss';
import IconJs from '../shared/Icons/IconJs';
import IconCheck from '../shared/Icons/IconCheck';
import IconLint from '../shared/Icons/IconLint';
import IconData from '../shared/Icons/IconData';
import IconEye from '../shared/Icons/IconEye';
import IconTeam from '../shared/Icons/IconTeam';
import IconZip from '../shared/Icons/IconZip';

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