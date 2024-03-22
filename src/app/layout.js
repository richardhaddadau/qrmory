import "./globals.css";
import MainFooter from "@/sections/MainFooter";

export const metadata = {
  title: "QRmory - Generate an arsenal of QR Codes",
  description: "",
};

export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}
