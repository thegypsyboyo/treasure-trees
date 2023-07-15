import { buildLegacyTheme } from "sanity"

const props = {
    "--my-white": "#fff",
    // "--my-black": "#1a1a1a",
    "--my-black": "#062018",
    // "--papafam-brand": "#f7ab0a",
    "--papafam-brand": "#2a7d2e",
    "--my-red": "#db4437",
    "--my-yellow": "#f4b400",
    "--my-green": "#2a7d2e",
};

export const myTheme = buildLegacyTheme({
     /*Base color theme */
     "--black": props["--my-black"],
     "--white": props["--my-white"],
     

     "--gray": "#665",
     "--gray-base": "#666",

     "--component-bg": props["--my-black"],
     "--component-text-color": props["--my-white"],

    /* Brand */
    "--brand-primary": props["--papafam-brand"],
    
    // Default buttons
    "--default-button-color": "#666",
    "--default-button-primary-color": props["--papafam-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-red"],

    /* States */
    
    "--state-info-color": props["--papafam-brand"],
    "--state-success-color": props["--my-green"],
    "--state-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    /* Navabr*/
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"], 

    "--focus-color": props["--papafam-brand"]
});