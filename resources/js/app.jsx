import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import Footer from './components/Footer';
// import AdModal from './components/Modal';
import Navbar from './components/Navbar';

const appName = import.meta.env.VITE_APP_NAME || 'QRPay';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const PageComponent = <App {...props} />;

        if (import.meta.env.SSR) {
            hydrateRoot(
                el,
                <div className="flex min-h-screen flex-col">
                    {/* <AdModal /> */}
                    <Navbar />
                    <main className="flex-grow">{PageComponent}</main>
                    <Footer />
                </div>,
            );
            return;
        }

        createRoot(el).render(
            <div className="flex min-h-screen flex-col">
                {/* <AdModal /> */}
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
