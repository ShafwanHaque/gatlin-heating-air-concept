export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Gatlin Heating & Air",
    shortName: "Gatlin",
    logo: "/brand/company-logo.png",
    logoLight: "/brand/company-logo.png",
    region: "Mobile · Baldwin County",

  },

  theme: {
    style: "clean",
    colors: {"brandPrimary": "#293A8F", "brandSecondary": "#2183B7", "brandAccent": "#71B7D0", "page": "#0B1C31", "surfaceDark": "#071426", "surfaceDarkAlt": "#102743", "surfaceElevated": "#1A385D", "surfaceSoft": "#F4F7FA", "textPrimary": "#F7FAFC", "textSecondary": "#D5E0EB", "textMuted": "#9AADC0", "textOnBrand": "#FFFFFF", "borderSubtle": "#293F5D", "borderStrong": "#657B96", "glowPrimary": "#293A8F", "glowSecondary": "#2183B7", "networkLine": "#55A8D0", "success": "#70A982", "service1": "#293A8F", "service2": "#2183B7", "service3": "#67AFCC", "service4": "#E8AA43", "service5": "#6386B8"},

  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 251-649-8626",
    ctaLabel: "Request service",
    mobileEyebrow: "SEMMES · MOBILE · BALDWIN COUNTY",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "SEMMES · MOBILE · BALDWIN COUNTY",
    line1: "Gatlin",
    line2: "Local comfort.",
    detail: "Family-owned heating and air conditioning service for Mobile and Baldwin County. Gatlin highlights AC repair and replacement, heating, indoor air quality, maintenance plans, and emergency availability.",
    location: "Family owned · serving the Gulf Coast since 1996",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "SEMMES · MOBILE · BALDWIN COUNTY · LOCAL HVAC",
    headlineLine1: "Reliable AC repair.",
    headlineLine2: "A phone call away.",
    description: "Family-owned heating and air conditioning service for Semmes, Mobile, Spanish Fort, Daphne, Fairhope, and nearby Gulf Coast communities.",
    primaryCta: "Request service",
    secondaryCta: "Call Gatlin",
    locationLabel: "SEMMES · MOBILE · BALDWIN COUNTY",
    locationValue: "Mobile · Baldwin County",
    edgeLabel: "SEMMES · MOBILE · BALDWIN COUNTY",
    bottomStatement: "AC REPAIR · HEATING · REPLACEMENT · MAINTENANCE",
    sillLabel: "Family owned · serving the Gulf Coast since 1996",
    serviceLabels: ["AC repair", "Heating", "Indoor air"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {"primarySrc": "/hero/client-hero.jpg", "primaryAlt": "Official Gatlin Heating & Air homepage hero image with Gulf Coast shoreline and company emblem", "primaryPosition": "center center", "fit": "cover", "backdrop": "matte", "aspectRatio": "1400 / 1000"},

  },

  seo: {
    title: "Gatlin Heating & Air | HVAC Service in Semmes",
    description: "Family-owned heating and air conditioning service for Mobile and Baldwin County. Gatlin highlights AC repair and replacement, heating, indoor air quality, maintenance plans, and emergency availability.",

  },

  contact: {
    phoneDisplay: "251-649-8626",
    phoneHref: "tel:+12516498626",
    email: "",
    address: "9758 Betty's Way, Semmes, AL 36575",
    contactUrl: "#contact",
    servicesUrl: "#services",

  },

  brandStandard: {
    eyebrow: "Family owned · serving the Gulf Coast since 1996",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Service built around your home.",
    bodyTitle: "Family owned · serving the Gulf Coast since 1996",
    body: "Gatlin Heating & Air is a family-owned Trane dealer serving Mobile and Baldwin County. The company provides residential system replacements, repairs, maintenance, indoor air quality options, and weekend emergency service.",
    callLabel: "Call now",
    availabilityLabel: "Mobile · Baldwin County",
    panelEyebrow: "GATLIN HEATING & AIR",
    panelTitle: "Gatlin Heating & Air is a family-owned Trane dealer serving Mobile and Baldwin County. The company provides residential system replacements, repairs, maintenance, indoor air quality options, and weekend emergency service.",
    panelFooter: "Mobile · Baldwin County",
    handoff: "Explore Gatlin Heating & Air services.",
    items: [{"icon": "cooling", "label": "AC repair & replacement", "detail": "Air conditioning repair, replacement, and installation for Gulf Coast homes."}, {"icon": "heating", "label": "Heat pump & furnace service", "detail": "Heat pump and furnace repair and replacement."}, {"icon": "maintenance", "label": "Indoor air quality", "detail": "Air purification and whole-home dehumidification options."}],

  },

  services: {
    eyebrow: "GATLIN HEATING & AIR · SERVICES",
    introLine1: "Comfort,",
    introLine2: "done right.",
    summaryEyebrow: "SEMMES · MOBILE · BALDWIN COUNTY",
    summaryTitle: "Gatlin Heating & Air is a family-owned Trane dealer serving Mobile and Baldwin County. The company provides residential system replacements, repairs, maintenance, indoor air quality options, and weekend emergency service.",
    summaryBody: "Gatlin Heating & Air is a family-owned Trane dealer serving Mobile and Baldwin County. The company provides residential system replacements, repairs, maintenance, indoor air quality options, and weekend emergency service.",
    summaryCta: "Talk to the team",
    items: [{"name": "AC repair & replacement", "shortName": "AC repair", "image": "/services/01.svg", "description": "Air conditioning repair, replacement, and installation for Gulf Coast homes."}, {"name": "Heat pump & furnace service", "shortName": "Heating", "image": "/services/02.svg", "description": "Heat pump and furnace repair and replacement."}, {"name": "Indoor air quality", "shortName": "Indoor air", "image": "/services/03.svg", "description": "Air purification and whole-home dehumidification options."}, {"name": "Maintenance plans", "shortName": "Maintenance", "image": "/services/04.svg", "description": "Planned maintenance to help keep home comfort equipment ready."}, {"name": "Free in-home estimates", "shortName": "Free estimates", "image": "/services/05.svg", "description": "In-home estimates for new HVAC systems and replacement projects."}],

  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Mobile · Baldwin County",
    featuredLocation: "Semmes, AL",
    locationDetail: "Serving Mobile · Baldwin County.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Mobile · Baldwin County",
    metrics: [{"value": "5 communities", "label": "Coverage shown"}, {"value": "30-mile radius · weekend emergency service", "label": "Service commitment"}, {"value": "Local team", "label": "Mobile · Baldwin County"}],
    locations: [{"name": "Semmes, AL", "kind": "city", "lat": 30.7785, "lng": -88.2591, "hub": true}, {"name": "Mobile, AL", "kind": "city", "lat": 30.6954, "lng": -88.0399, "hub": false}, {"name": "Spanish Fort, AL", "kind": "city", "lat": 30.6749, "lng": -87.9153, "hub": false}, {"name": "Daphne, AL", "kind": "city", "lat": 30.6035, "lng": -87.9036, "hub": false}, {"name": "Fairhope, AL", "kind": "city", "lat": 30.5229, "lng": -87.9033, "hub": false}],

  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Gatlin Heating & Air about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Gatlin",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 251-649-8626 to contact Gatlin Heating & Air.",

  }
};
