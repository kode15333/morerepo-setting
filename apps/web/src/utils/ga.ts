export const pageview = (url: string) => {
  window.gtag("config", "GA_TRACKING_ID", {
    page_path: url,
  });
};

export const gaEvent = ({ action, category, label, value }: any) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
