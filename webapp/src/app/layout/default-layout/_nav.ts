import { INavData } from '@coreui/angular';

interface INavDataEco extends INavData {
    roles?: string[];
}

export const navItems: INavDataEco[] = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        iconComponent: { name: 'cil-speedometer' },
        title: false,
        roles: ['User', 'Admin'],
    },
    {
        title: true,
        name: 'Gestión',
        roles: ['User', 'Admin'],
    },
    {
        name: 'Integrantes',
        url: '/users',
        iconComponent: { name: 'cil-people' },
        roles: ['Admin'],
    },
    {
        name: 'Inversiones',
        url: '/investments',
        iconComponent: { name: 'cil-dollar' },
        roles: ['Admin'],
    },
    {
        name: 'Ofertas',
        url: '/offers',
        iconComponent: { name: 'cil-tags' },
        roles: ['User', 'Admin'],
    },
    {
        name: 'Actividades',
        url: '/activities',
        iconComponent: { name: 'cil-notes' },
        roles: ['User', 'Admin'],
    },
    {
        name: 'Notificaciones',
        url: '/notifications',
        iconComponent: { name: 'cil-bell' },
        roles: ['User', 'Admin'],
    },
    {
        title: true,
        name: 'Estadísticas',
        roles: ['Admin'],
    },
    {
        name: 'Por empresas',
        url: '/graphiccompanies',
        iconComponent: { name: 'cil-chart' },
        roles: ['Admin'],
    },
    {
        name: 'Por usuarios',
        url: '/graphicusers',
        iconComponent: { name: 'cil-chart' },
        roles: ['Admin'],
    },
    {
        name: 'Por actividad',
        url: '/graphicactivities',
        iconComponent: { name: 'cil-chart-pie' },
        roles: ['Admin'],
    },
    {
        title: true,
        name: 'Extras',
        roles: ['User', 'Admin'],
    },
    {
        name: 'Configuración',
        url: '/settings',
        iconComponent: { name: 'cil-settings' },
        roles: ['User', 'Admin'],
    },
];
