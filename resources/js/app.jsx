import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { hydrateRoot } from 'react-dom/client';
import '../css/app.css';
import './bootstrap';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const appName = import.meta.env.VITE_APP_NAME || 'QRPay';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const PageComponent = <App {...props} />;

        hydrateRoot(
            el,
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-grow">{PageComponent}</main>
                <Footer />
            </div>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
