import MainFooter from "@/sections/MainFooter";

export default function PublicLayout({ children }) {
  return (
    <body>
      {children}
      <MainFooter />
    </body>
  );
}
