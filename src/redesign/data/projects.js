import ssHome from "src/pages/shapeshop/img/shop-home.png";
import ssProducts from "src/pages/shapeshop/img/shop-products.png";
import ssCheckout from "src/pages/shapeshop/img/shop-checkout.png";
import ssAdmin from "src/pages/shapeshop/img/shop-admin-products.png";
import ssAdminEdit from "src/pages/shapeshop/img/shop-admin-edit-product.png";
import ssAdminOrders from "src/pages/shapeshop/img/shop-admin-orders.png";
import bisHome from "src/pages/bis/img/bis-home.png";
import bisStory from "src/pages/bis/img/bis-story.png";
import bisCalendar from "src/pages/bis/img/bis-calendar.png";
import bisShop from "src/pages/bis/img/bis-shop.png";
import bisAdmin from "src/pages/bis/img/bis-admin-bookings.png";
import psMap from "src/pages/petsitter/img/petsitter-map.png";
import psProfile from "src/pages/petsitter/img/petsitter-profile.png";
import psEdit from "src/pages/petsitter/img/petsitter-edit-profile.png";
import art from "src/pages/artGallery/art1.png";
import ic1 from "src/pages/icharts/samples/TestDataArea_2_Multiple_Layered.PNG";
import ic2 from "src/pages/icharts/samples/TestDataArea_4_Multiple_Stacked.PNG";
import ic3 from "src/pages/icharts/samples/TestDataXY_Simple.PNG";
import ic4 from "src/pages/icharts/samples/TestDataXY_Simple_Series.PNG";
import ic5 from "src/pages/icharts/samples/TestDataBar_1_Simple.PNG";
import ic6 from "src/pages/icharts/samples/TestDataBar_2Y.PNG";
import ic7 from "src/pages/icharts/samples/TestDataBar_4_GradientColor.PNG";
import ic8 from "src/pages/icharts/samples/TestDataBar_5_PosNegColor.PNG";
import ic9 from "src/pages/icharts/samples/TestDataBar_FontFun.PNG";
import ic10 from "src/pages/icharts/samples/TestDataBar_MultiBar_SideBySide.PNG";
import ic11 from "src/pages/icharts/samples/TestDataBar_MultiBar_Stacked.PNG";
import ic12 from "src/pages/icharts/samples/TestDataBubble_1_guns.PNG";
import ic13 from "src/pages/icharts/samples/TestDataGrids_4_alternateGridFillY.PNG";
import ic14 from "src/pages/icharts/samples/TestDataGrids_5_Gradiant.PNG";

export const AKS_URL = "https://shapeshop-aks.eastus.cloudapp.azure.com/";

// `images` rotate through the Work page gallery in order; the first is also the
// home page card. Taglines are under rd.projects.<id> in translations.js; the description is the
// old Previous Work text (`textKey`, in i18n.js) and `bullets` are its old lists.
export const projects = [
  {
    id: "shapeshop",
    name: "Shape Shop",
    featured: true,
    images: [ssHome, ssProducts, ssCheckout, ssAdmin, ssAdminEdit, ssAdminOrders],
    stack: ["React", "TypeScript", "Redux Toolkit", "MUI", "Spring Boot", "MySQL", "Stripe", "Azure AKS"],
    textKey: "previous-ss",
    bullets: ["React, Hooks, TypeScript, MUI", "Spring Boot", "MySQL", "Azure Cloud"],
    links: [
      { kind: "projectPage", href: "/shapeshop/" },
      { kind: "liveDemo", href: AKS_URL, external: true, mayBeOffline: true },
    ],
  },
  {
    id: "petsit",
    name: "Petsit!",
    featured: true,
    images: [psMap, psProfile, psEdit],
    stack: ["React", "TypeScript", "Apollo GraphQL", "Google Maps", "NestJS", "TypeORM", "MySQL"],
    textKey: "previous-ps",
    bullets: ["React, TypeScript, MUI", "Apollo GraphQL, Google Maps", "NestJS, TypeORM", "MySQL"],
    links: [],
  },
  {
    id: "art",
    name: "Oliver Watkins Art",
    images: [art],
    textKey: "previous-artgallery",
    links: [{ kind: "visitSite", href: "https://www.oliver-watkins.art/", external: true }],
  },
  {
    id: "icharts",
    name: "Iceberg Charts",
    images: [ic1, ic2, ic3, ic4, ic5, ic6, ic7, ic8, ic9, ic10, ic11, ic12, ic13, ic14],
    textKey: "previous-ic",
    bullets: [
      "XY Charts", "Pie Charts", "Area Charts", "Bubble Charts",
      "Candlestick Charts", "Bar Charts", "Stacked Charts",
    ],
    links: [{ kind: "projectPage", href: "/icharts/" }],
  },
  {
    id: "bis",
    name: "Berlin Industrial Stories",
    featured: true,
    images: [bisHome, bisStory, bisCalendar, bisShop, bisAdmin],
    stack: ["React", "TypeScript", "RTK Query", "MUI", "Spring Boot", "MySQL", "Stripe", "Azure AKS"],
    textKey: "previous-bis",
    bullets: [
      "React, TypeScript, Redux Toolkit, MUI",
      "Spring Boot",
      "MySQL",
      "Stripe, Azure Blob Storage",
      "Azure Cloud (AKS)",
    ],
    links: [{ kind: "liveDemo", href: AKS_URL + "bis/", external: true, mayBeOffline: true }],
  },
];

// The three shown as cards on the home page.
export const featuredProjects = projects.filter((p) => p.featured);

export const toolbox = [
  "React", "TypeScript", "Redux Toolkit", "MUI", "Vite", "Playwright",
  "Java", "Kotlin", "Spring Boot", "Node", "NestJS", "GraphQL",
  "MySQL", "PostgreSQL", "Oracle", "Docker", "Kubernetes", "Azure", "Stripe",
];

export { art as artImage };
