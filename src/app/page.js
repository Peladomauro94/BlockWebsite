import Image from "next/image";
import styles from "./page.module.css";
import Introduction from "@/Components/HomeSections/Introduction/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Introduction/>
    </main>
  );
}
