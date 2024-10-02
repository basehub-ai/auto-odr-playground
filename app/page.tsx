import { RichText } from "basehub/react-rich-text";
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
              heroSubtitle: {
                json: { content: true },
              },
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
              <div style={{ maxWidth: "700px", fontSize: "13px" }}>
                <RichText
                  content={homepage.heroSubtitle?.json?.content}
                  components={{
                    p: (props) => <p {...props} style={{ margin: "8px 0" }} />,
                  }}
                />
              </div>
            </>
          );
        }}
      </Pump>
    </div>
  );
}
