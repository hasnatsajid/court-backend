import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChartPie,
  cilTask,
  cilSearch,
  cilNewspaper,
  cilBriefcase,
  cilSmilePlus,
  cilClock,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavItem,
    name: 'Search',
    to: '/search',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pending Tasks',
    to: '/pending_tasks',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'New Client',
    to: '/forms/new-client',
    icon: <CIcon icon={cilSmilePlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'New Case',
    to: '/forms/new-case',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'New Task',
    to: '/forms/new-task',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'New Schedule',
    to: '/forms/new-schedule',
    icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Generate Reports',
    to: '/generate_reports',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
  },
]

export default _nav
