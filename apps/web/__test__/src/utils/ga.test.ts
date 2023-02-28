import { gaEvent, pageview } from "@/utils/ga";

describe("GA util", () => {
  it("pageview", () => {
    const url = "https://www.example.com";
    window.gtag = jest.fn();

    pageview(url);
    expect(window.gtag).toHaveBeenCalledWith("config", "GA_TRACKING_ID", {
      page_path: url,
    });
  });

  it("event", () => {
    const action = "click";
    const category = "button";
    const label = "click me";
    const value = 1;
    window.gtag = jest.fn();

    gaEvent({ action, category, label, value });
    expect(window.gtag).toHaveBeenCalledWith("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  });
});
