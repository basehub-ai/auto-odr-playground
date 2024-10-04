import { Pump } from "basehub/react-pump";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Pump
        queries={[
          {
            homepage: {
              heroTitle: true,
              info: true,
            },
          },
        ]}
      >
        {async ([{ homepage }]) => {
          "use server";

          return (
            <>
              <pre>
                <code>{JSON.stringify({ info: homepage.info }, null, 2)}</code>
              </pre>
              <h1>{homepage.heroTitle}</h1>
            </>
          );
        }}
      </Pump>
    </div>
  );
}
