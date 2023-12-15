import "./globals.css";

export const metadata = {
  title: "QRmory - Generate an arsenal of QR Codes",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
