import styles from "./page.module.css";
import Introduction from "@/Components/HomeSections/Introduction/page";
import MainInfo from "@/Components/HomeSections/Introduction/MainInfo/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Introduction/>
      <MainInfo/>
    </main>
  );
}
