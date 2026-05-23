import './globals.css';

export const metadata = {
  title: 'Nexus - Landing Page',
  description: 'Una landing page moderna creada con Grok',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
