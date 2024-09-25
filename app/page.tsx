import { Pump } from "basehub/react-pump";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <pre>
        <code>
          {JSON.stringify(
            { info: "Next.js auto on-demand revalidation playground" },
            null,
            2
          )}
        </code>
      </pre>

      <Pump
        queries={[
          {
            homepage: {
              heroTitle: true,
            },
          },
        ]}
      >
        {async ([{ homepage }]) => {
          "use server";

          return <h1>{homepage.heroTitle}</h1>;
        }}
      </Pump>
    </div>
  );
}
