const GEMINI_LINKS = {
  units: {
    tutor: "https://gemini.google.com/gem/d63bcb5ab5aa?usp=sharing",
    activity: "https://gemini.google.com/share/2e084d571d43"
  },
  "vector-properties": {
    tutor: "https://gemini.google.com/gem/4df1de5e2dd1?usp=sharing",
    activity: "https://gemini.google.com/share/267ad893a285"
  },
  "vector-addition": {
    tutor: "https://gemini.google.com/gem/1eFLsXO9N6NoVZEOuteOBukaqtISqi00d?usp=sharing",
    activity: "https://gemini.google.com/share/78c3670a85b0"
  },
  "scalar-vector": {
    tutor: "https://gemini.google.com/gem/1YjlhPpoeijj9ZyWqABr2AHbm_-ucGFhv?usp=sharing",
    activity: "https://gemini.google.com/share/7a2b6a58f0a6"
  },
  "distance-displacement": {
    tutor: "https://gemini.google.com/gem/1POnUV_iH2gZnqC4ebdhouWY-n004Z3zb?usp=sharing",
    activity: "https://gemini.google.com/share/0166b06acdcd"
  },
  conversions: {
    tutor: "https://gemini.google.com/gem/1d0XVDz5f2jAoSST2u3xZj5G_CcgcnEK7?usp=sharing",
    activity: "https://gemini.google.com/share/b7a6c299db34"
  },
  "constant-acceleration": {
    tutor: "https://gemini.google.com/gem/1H_Mhu10peDWgynWt795XkdSZMgy6PjZL?usp=sharing",
    activity: "https://gemini.google.com/share/101ef39fe447"
  },
  "motion-graphs": {
    tutor: "https://gemini.google.com/gem/1OI7ZJSKifloGOKyGXBd0OvrFROHIqGH1?usp=sharing",
    activity: "https://gemini.google.com/share/e345c95364d2"
  },
  "vertical-projectile": {
    tutor: "https://gemini.google.com/gem/1LqMnAlUcKr6BXnj7pEXSloTTPnRU55u-?usp=sharing",
    activity: "https://gemini.google.com/share/924d1b760655"
  },
  "free-fall": {
    tutor: "https://gemini.google.com/gem/1_eD1XpEVljXqfz1QuI_79m-AOi3ENIXC?usp=sharing",
    activity: "https://gemini.google.com/share/fef7520ed0ac"
  },
  forces: {
    tutor: "https://gemini.google.com/gem/1Fn4ORKyjFNEhh7YxoVV7yKa1sZfMqf0F?usp=sharing",
    activity: "https://gemini.google.com/share/d0bc32ed0864"
  },
  "centripetal-force": {
    tutor: "https://gemini.google.com/gem/1BAPI8iFgeDRZPZD1QY5WbEXac1ZVxE2u?usp=sharing",
    activity: "https://gemini.google.com/share/60a837b324d1"
  },
  "newton-third": {
    tutor: "https://gemini.google.com/gem/1bgNGeooqheNQk16KHH8__2WUSBhhjFbk?usp=sharing",
    activity: "https://gemini.google.com/share/ab4639e28ce3"
  }
};

(function () {
  const selector = {
    currentTab: "[data-lesson-tab].is-current",
    title: "[data-lesson-title]",
    assistantWidget: ".assistant-widget",
    miniActivity: "[data-mini-activity]",
    lessonTabs: "[data-lesson-tabs]",
    prev: "[data-prev-lesson]",
    next: "[data-next-lesson]"
  };

  const makeLink = (className) => {
    const link = document.createElement("a");
    link.className = `gemini-link ${className}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  };

  const ensurePanel = () => {
    let panel = document.querySelector("[data-gemini-panel]");
    if (!panel) {
      panel = document.createElement("div");
      panel.className = "gemini-panel";
      panel.dataset.geminiPanel = "";
      panel.appendChild(makeLink("gemini-tutor-link"));
      panel.appendChild(makeLink("gemini-activity-link"));
      document.querySelector(selector.assistantWidget)?.appendChild(panel);
    }
    return panel;
  };

  const ensureActivityCallout = () => {
    let callout = document.querySelector("[data-gemini-activity-callout]");
    if (!callout) {
      callout = document.createElement("div");
      callout.className = "gemini-activity-callout";
      callout.dataset.geminiActivityCallout = "";
      callout.appendChild(makeLink("gemini-activity-main-link"));
      const miniActivity = document.querySelector(selector.miniActivity);
      miniActivity?.parentElement?.insertBefore(callout, miniActivity);
    }
    return callout;
  };

  const currentLessonId = () => document.querySelector(selector.currentTab)?.dataset.lessonTab || "home";
  const currentTitle = () => document.querySelector(selector.title)?.textContent?.trim() || "الدرس";

  const updateGeminiLinks = () => {
    const lessonId = currentLessonId();
    const title = currentTitle();
    const links = GEMINI_LINKS[lessonId];
    const panel = ensurePanel();
    const callout = ensureActivityCallout();
    if (!links) {
      panel.hidden = true;
      callout.hidden = true;
      return;
    }

    const tutor = panel.querySelector(".gemini-tutor-link");
    const activity = panel.querySelector(".gemini-activity-link");
    const mainActivity = callout.querySelector(".gemini-activity-main-link");

    tutor.href = links.tutor;
    tutor.textContent = `المعلم الخصوصي لدرس ${title}`;
    activity.href = links.activity;
    activity.textContent = `المعلم الخصوصي لنشاط ${title}`;
    mainActivity.href = links.activity;
    mainActivity.textContent = `المعلم الخصوصي لنشاط ${title}`;
    panel.hidden = false;
    callout.hidden = false;
  };

  const scheduleUpdate = () => window.setTimeout(updateGeminiLinks, 0);

  document.addEventListener("DOMContentLoaded", () => {
    updateGeminiLinks();
    document.querySelector(selector.lessonTabs)?.addEventListener("click", scheduleUpdate);
    document.querySelector(selector.prev)?.addEventListener("click", scheduleUpdate);
    document.querySelector(selector.next)?.addEventListener("click", scheduleUpdate);

    const title = document.querySelector(selector.title);
    if (title && "MutationObserver" in window) {
      new MutationObserver(updateGeminiLinks).observe(title, {
        childList: true,
        characterData: true,
        subtree: true
      });
    }
  });
})();
