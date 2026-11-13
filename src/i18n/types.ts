export type SiteLanguage = 'en' | 'hi' | 'ta';

export interface LocalizedTripCategory {
  name: string;
  groupLabel: string;
  shortDescription: string;
  alt: string;
}

export interface LocalizedTourPackage {
  name: string;
  shortDescription: string;
  fullDescription: string;
  popularDestinations: string[];
  recommendedVehicles: string[];
  highlights: string[];
  alt: string;
}

export interface LocalizedVehicle {
  name: string;
  groupLabel: string;
  description: string;
  bestFor: string;
  alt: string;
}

export interface LocalizedGalleryItem {
  title: string;
  categoryLabel: string;
  location: string;
  caption: string;
  alt: string;
}

export interface TranslationBundle {
  brand: {
    name: string;
    tagline: string;
    subTagline: string;
    experience: string;
    experienceBadge: string;
    cityRegion: string;
    address: string;
  };
  nav: {
    home: string;
    about: string;
    tripCategories: string;
    tourPackages: string;
    vehicles: string;
    gallery: string;
    contact: string;
    bookNow: string;
    languageLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  contacts: {
    generalLabel: string;
    generalDesc: string;
    hindiLabel: string;
    hindiDesc: string;
    englishLabel: string;
    englishDesc: string;
    hindiShort: string;
    englishShort: string;
    generalShort: string;
    callNow: string;
    callHindi: string;
    callEnglish: string;
    callGeneral: string;
    whatsappChat: string;
    whatsappHindi: string;
    whatsappEnglish: string;
    emailUs: string;
    sendEmail: string;
  };
  aboutHighlights: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  home: {
    seoTitle: string;
    seoDescription: string;
    heroDescription: string;
    explorePackages: string;
    aboutKicker: string;
    aboutHeading: string;
    aboutP1: string;
    aboutP2: string;
    readStory: string;
    planJourney: string;
    tripCategoriesKicker: string;
    tripCategoriesHeading: string;
    tripCategoriesSub: string;
    openCategoriesPage: string;
    packagesKicker: string;
    packagesHeading: string;
    packagesSub: string;
    viewAllPackages: string;
    viewDetails: string;
    vehiclesKicker: string;
    vehiclesHeading: string;
    vehiclesSub: string;
    exploreFleet: string;
    capacityLabel: string;
  };
  quickBooking: {
    kicker: string;
    heading: string;
    subtitle: string;
    customerName: string;
    customerNamePlaceholder: string;
    mobileNumber: string;
    mobilePlaceholder: string;
    tripType: string;
    customPackageOption: string;
    preferredDesk: string;
    englishDeskOption: string;
    hindiDeskOption: string;
    pickupLocation: string;
    pickupPlaceholder: string;
    destination: string;
    destinationPlaceholder: string;
    travelDate: string;
    passengers: string;
    additionalRequirements: string;
    additionalPlaceholder: string;
    submitViaWhatsapp: string;
    readyPrefix: string;
    continueWhatsapp: string;
    errName: string;
    errPhone: string;
    errRoute: string;
    errDate: string;
  };
  bookingModal: {
    title: string;
    closeLabel: string;
    serviceLabel: string;
    languageLabel: string;
    langEnglish: string;
    langHindi: string;
    pickupPlaceholder: string;
    destinationPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    routingTo: string;
    callPrefix: string;
    cancel: string;
    submitBtn: string;
    preparedTitle: string;
    preparedHint: string;
    openWhatsappBtn: string;
    errName: string;
    errPhone: string;
    errRoute: string;
    errDate: string;
  };
  languageStrip: {
    kicker: string;
    heading: string;
    subtitle: string;
  };
  whatsappWidget: {
    deskTitle: string;
    chooseLanguage: string;
    closeAria: string;
    openAria: string;
    buttonLabel: string;
    generalCallLabel: string;
  };
  footer: {
    summary: string;
    quickLinksHeading: string;
    desksHeading: string;
    contactHeading: string;
    generalLabel: string;
    emailLabel: string;
    addressLabel: string;
    copyright: string;
  };
  aboutPage: {
    seoTitle: string;
    seoDescription: string;
    kicker: string;
    title: string;
    heroSub: string;
    p1: string;
    p2: string;
    bookTrip: string;
    contactTeam: string;
    whyHeading: string;
    pillars: Array<{ title: string; desc: string }>;
  };
  tripCategoriesPage: {
    seoTitle: string;
    seoDescription: string;
    kicker: string;
    title: string;
    heroSub: string;
    showingPrefix: string;
    showingOf: string;
    showingSuffix: string;
    groupTabs: {
      All: string;
      'Point-to-Point': string;
      'Rentals & Time-Based': string;
      'Tours & Occasions': string;
    };
  };
  tourPackagesPage: {
    seoTitle: string;
    seoDescription: string;
    kicker: string;
    title: string;
    heroSub: string;
    quoteNote: string;
  };
  packageDetailPage: {
    notFoundTitle: string;
    notFoundDesc: string;
    backToPackages: string;
    allPackagesLink: string;
    kicker: string;
    overviewHeading: string;
    highlightsHeading: string;
    destinationsHeading: string;
    vehiclesHeading: string;
    sidebarKicker: string;
    sidebarTitle: string;
    sidebarDesc: string;
    requestQuoteBtn: string;
    directSupportHeading: string;
  };
  vehiclesPage: {
    seoTitle: string;
    seoDescription: string;
    kicker: string;
    title: string;
    heroSub: string;
    bestForLabel: string;
    capacityLabel: string;
    capacityFallback: string;
    categorySingular: string;
    categoryPlural: string;
    groupTabs: {
      All: string;
      Cars: string;
      'Family & SUV/MUV': string;
      'Vans & Coaches': string;
    };
  };
  galleryPage: {
    seoTitle: string;
    seoDescription: string;
    kicker: string;
    title: string;
    heroSub: string;
    photoSingular: string;
    photoPlural: string;
    closePreview: string;
    prevPhoto: string;
    nextPhoto: string;
    categoryTabs: {
      All: string;
      Destinations: string;
      Vehicles: string;
      'Family Trips': string;
      'Group Tours': string;
      'Pilgrimage Trips': string;
    };
  };
  contactPage: {
    seoTitle: string;
    seoDescription: string;
    kicker: string;
    title: string;
    heroSub: string;
    officeAddressLabel: string;
    emailLabel: string;
    sendEmailBtn: string;
    formKicker: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    langLabel: string;
    enquiryTypeLabel: string;
    enquiryTypes: string[];
    detailsLabel: string;
    detailsPlaceholder: string;
    submitWhatsapp: string;
    sendViaEmail: string;
    preparedText: string;
    openWhatsappNow: string;
    errName: string;
    errPhone: string;
    errEmail: string;
    errMessage: string;
    mapGeneralPrefix: string;
    mapOpenBtn: string;
  };
  tripCategories: Record<string, LocalizedTripCategory>;
  tourPackages: Record<string, LocalizedTourPackage>;
  vehicles: Record<string, LocalizedVehicle>;
  galleryItems: Record<string, LocalizedGalleryItem>;
}
