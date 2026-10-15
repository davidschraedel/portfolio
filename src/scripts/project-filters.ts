const FILTER_ROOT_SELECTOR = "[data-project-filters]";
const ITEM_SELECTOR = "[data-project-filter-item]";
const BUTTON_SELECTOR = "[data-project-filter]";
const CATEGORY_PARAM = "category";

let listenersAbort: AbortController | null = null;
let popstateBound = false;

function getAllowedSlugs(root: Element): Set<string> {
  const slugs = new Set<string>();
  for (const button of root.querySelectorAll<HTMLButtonElement>(BUTTON_SELECTOR)) {
    const slug = button.dataset.projectFilter;
    if (slug && slug !== "all") {
      slugs.add(slug);
    }
  }
  return slugs;
}

function slugFromButtonValue(slug: string | undefined): string | null {
  return slug === "all" || !slug ? null : slug;
}

function parseCategoryFromUrl(allowed: Set<string>): string | null {
  const raw = new URLSearchParams(window.location.search).get(CATEGORY_PARAM);
  if (!raw || !allowed.has(raw)) {
    return null;
  }
  return raw;
}

function applyProjectFilter(slug: string | null) {
  const items = document.querySelectorAll<HTMLElement>(ITEM_SELECTOR);
  for (const item of items) {
    const categories = item.dataset.projectCategories ?? "";
    const matches =
      slug === null ||
      (categories.length > 0 && categories.split(",").includes(slug));
    item.hidden = !matches;
  }
}

function setActiveFilterButton(
  buttons: NodeListOf<HTMLButtonElement>,
  filterSlug: string | null,
) {
  for (const button of buttons) {
    const buttonSlug = slugFromButtonValue(button.dataset.projectFilter);
    const isActive = buttonSlug === filterSlug;
    button.setAttribute("aria-checked", isActive ? "true" : "false");
  }
}

function applyFilterState(
  filterSlug: string | null,
  buttons: NodeListOf<HTMLButtonElement>,
) {
  applyProjectFilter(filterSlug);
  setActiveFilterButton(buttons, filterSlug);
}

function buildProjectsUrl(filterSlug: string | null): string {
  const url = new URL(window.location.href);
  if (filterSlug === null) {
    url.searchParams.delete(CATEGORY_PARAM);
  } else {
    url.searchParams.set(CATEGORY_PARAM, filterSlug);
  }
  return url.pathname + url.search + url.hash;
}

function syncUrl(filterSlug: string | null) {
  const hadCategory = new URLSearchParams(window.location.search).has(
    CATEGORY_PARAM,
  );
  const nextUrl = buildProjectsUrl(filterSlug);

  if (nextUrl === window.location.pathname + window.location.search + window.location.hash) {
    return;
  }

  if (filterSlug === null) {
    history.replaceState(null, "", nextUrl);
    return;
  }

  if (!hadCategory) {
    history.pushState(null, "", nextUrl);
  } else {
    history.replaceState(null, "", nextUrl);
  }
}

function cleanInvalidCategoryParam() {
  const url = new URL(window.location.href);
  if (!url.searchParams.has(CATEGORY_PARAM)) {
    return;
  }
  url.searchParams.delete(CATEGORY_PARAM);
  history.replaceState(null, "", url.pathname + url.search + url.hash);
}

function initProjectFilters() {
  listenersAbort?.abort();
  listenersAbort = new AbortController();
  const { signal } = listenersAbort;

  const root = document.querySelector(FILTER_ROOT_SELECTOR);
  if (!root) {
    return;
  }

  const buttons = root.querySelectorAll<HTMLButtonElement>(BUTTON_SELECTOR);
  const allowed = getAllowedSlugs(root);

  let filterSlug = parseCategoryFromUrl(allowed);
  if (
    new URLSearchParams(window.location.search).has(CATEGORY_PARAM) &&
    filterSlug === null
  ) {
    cleanInvalidCategoryParam();
  }

  applyFilterState(filterSlug, buttons);

  for (const button of buttons) {
    button.addEventListener(
      "focus",
      () => {
        button.scrollIntoView({ inline: "nearest", block: "nearest" });
      },
      { signal },
    );

    button.addEventListener(
      "click",
      () => {
        filterSlug = slugFromButtonValue(button.dataset.projectFilter);
        applyFilterState(filterSlug, buttons);
        syncUrl(filterSlug);
      },
      { signal },
    );
  }

  if (!popstateBound) {
    popstateBound = true;
    window.addEventListener("popstate", () => {
      const activeRoot = document.querySelector(FILTER_ROOT_SELECTOR);
      if (!activeRoot) {
        return;
      }
      const activeButtons =
        activeRoot.querySelectorAll<HTMLButtonElement>(BUTTON_SELECTOR);
      const activeAllowed = getAllowedSlugs(activeRoot);
      const slug = parseCategoryFromUrl(activeAllowed);
      applyFilterState(slug, activeButtons);
    });
  }
}

initProjectFilters();

document.addEventListener("astro:page-load", initProjectFilters);
