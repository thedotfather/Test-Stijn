import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { BasicTable } from "./components/BasicTable";
import { StickyHeadTable } from "./components/MUI-TableWithStickyHeader";
import { PaperContainer } from "./components/MUI-Paper";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "c7ky1uNfdB6fJXgwy4PcBP",
      token: "SNCeoJx6tdn7Gf6JLWQijznondtZPTQkjAuIcz0B2oQNRmbkOWM8OrLxA3fGFrPAXDBVPIKkixsFlNLQ",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

PLASMIC.registerComponent(BasicTable, {
  name: 'STIJN-BasicTable',
  props: {
    
  }
});

PLASMIC.registerComponent(StickyHeadTable, {
  name: 'STIJN-TableWithStickyHeader',
  props: {
    
  }
});

PLASMIC.registerComponent(PaperContainer, {
  name: 'STIJN-PaperContainter',
  props: {
    elevation: 'number'
  }
});
