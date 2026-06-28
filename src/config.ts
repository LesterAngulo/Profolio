// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "laal - QuickNotes";
export const SITE_DESCRIPTION = "Personal Profolio";

export interface NavLink {
  title: string;
  id?: string;
  url?: string;
  redirect?: string;
  tooltip?: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    title: "index.html",
    id: "home",
    url: "/",
    tooltip: "Home",
  },
];

export type SocialPlatform =  "github" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/lester-angulo/",
    label: "In",
  },
  {
    platform: "github",
    url: "https://github.com/LesterAngulo",
    label: "Github",
  },
];