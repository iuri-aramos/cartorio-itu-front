import Declaration from "../components/Declaration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import NotificationImages from "../components/NotificationImages";
import TopBar from "../components/TopBar";

export function Home() {
  return (
    <section>
      <TopBar />
      <Header />
      <Main />
      <Declaration />
      <NotificationImages />
      <Footer />
    </section>
  );
}
