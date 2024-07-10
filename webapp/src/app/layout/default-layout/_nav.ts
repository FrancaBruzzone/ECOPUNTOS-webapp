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
        roles: ['User', 'Company'],
    },
    {
        title: true,
        name: 'Gestión',
        roles: ['User', 'Company'],
    },
    {
        name: 'Integrantes',
        url: '/users',
        iconComponent: { name: 'cil-people' },
        roles: ['Company'],
    },
    {
        name: 'Inversiones',
        url: '/investments',
        iconComponent: { name: 'cil-dollar' },
        roles: ['Company'],
    },
    {
        name: 'Ofertas',
        url: '/offers',
        iconComponent: { name: 'cil-tags' },
        roles: ['User', 'Company'],
    },
    {
        name: 'Actividades',
        url: '/activities',
        iconComponent: { name: 'cil-notes' },
        roles: ['User', 'Company'],
    },
    {
        name: 'Notificaciones',
        url: '/notifications',
        iconComponent: { name: 'cil-bell' },
        roles: ['User', 'Company'],
    },
    {
        title: true,
        name: 'Estadísticas',
        roles: ['Company'],
    },
    {
        name: 'Por empresas',
        url: '/graphiccompanies',
        iconComponent: { name: 'cil-chart' },
        roles: ['Company'],
    },
    {
        name: 'Por usuarios',
        url: '/graphicusers',
        iconComponent: { name: 'cil-chart' },
        roles: ['Company'],
    },
    {
        name: 'Por actividad',
        url: '/graphicactivities',
        iconComponent: { name: 'cil-chart-pie' },
        roles: ['Company'],
    },
    {
        title: true,
        name: 'Extras',
        roles: ['User', 'Company'],
    },
    {
        name: 'Configuración',
        url: '/settings',
        iconComponent: { name: 'cil-settings' },
        roles: ['User', 'Company'],
    },
];
