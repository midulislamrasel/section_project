import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const metadata = {
  title: "APIXcel a web solution",
  description: "Generated by create next app",
};
export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
