import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import NewTabLink from "../NewTabLink";

const transKeys = (() => {
  const t = (s) => s;
  return {
    nameAndTime: t("Data retrieved from <1>{{name}}</1> at {{time}}"),
    name: t("Data retrieved from <1>{{name}}</1>"),
    time: t("Data retrieved at {{time}}"),
  };
})();

const nameFromSource = (source) =>
  source && (new URL(source)).hostname.replace("www.", "");

const formatTime = (timestamp) => {
  if (timestamp) {
    const date = new Date(timestamp);
    return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
  }
}

const Wrapper = ({ children }) => (
  <p className="mt-6 opacity-70 text-right">{children}</p>
);

const InfoAttribution = ({ data }) => {
  const { t } = useTranslation();

  const { source, timestamp } = data;
  const name = nameFromSource(source);
  const time = formatTime(timestamp);

  // There are more elegant ways of performing this logic, but translating it
  // reliably is tough
  if (name && time) {
    return (
      <Wrapper>
        <Trans i18nKey={transKeys.nameAndTime} {...{ t, name, time }}>
          Data retrieved from <NewTabLink href={source} className="link">
            {{name}}
          </NewTabLink> at {{time}}
        </Trans>
      </Wrapper>
    );
  } else if (name) {
    return (
      <Wrapper>
        <Trans i18nKey={transKeys.name} {...{ t, name }}>
          Data retrieved from <NewTabLink href={source} className="link">
            {{name}}
          </NewTabLink>
        </Trans>
      </Wrapper>
    );
  } else if (time) {
    return (
      <Wrapper>{t(transKeys.time, { time })}</Wrapper>
    );
  }

  return null;
}

export default InfoAttribution;
