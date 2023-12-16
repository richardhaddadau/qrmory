import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import MainFooter from "@/sections/MainFooter";

export const metadata = {
  title: "QRmory - Generate an arsenal of QR Codes",
  description: "",
};

export default function RootLayout({ children }) {
  const clerkPK = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
          <MainFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
