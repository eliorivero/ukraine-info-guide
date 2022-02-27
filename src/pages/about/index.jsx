import { useTranslation, Trans } from "react-i18next";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import NewTabLink from "../../components/NewTabLink";
import { GITHUB_URL } from "../../configs/constants";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("About us")} />}>
      <p>
        <Trans t={t} i18nKey="Join us <1>on Github</1>">
          Join us <NewTabLink
            href={GITHUB_URL}
            className="link"
          >on Github</NewTabLink>
        </Trans>
      </p>
    </Layout>
  );
};

export default AboutPage;
