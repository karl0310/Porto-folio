import "./globals.css";

export const metadata = {
  title: "Tchoupe Pembe Karl Bryan — Portfolio",
  description:
    "Portfolio de Tchoupe Pembe Karl Bryan : développement web, informatique, cybersécurité et installations électroniques.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
