/**
 * Centralized asset map.
 *
 * The original spec pointed at third-party CDNs (motionsites.ai, figma.site,
 * higgs.ai/cloudfront) that this environment's network policy blocks, so every
 * AssetRef below is a local placeholder SVG under /public/assets. `sourceUrl` is
 * kept for reference -- download the real file and drop it at `local`
 * (same path, any raster format) to swap it in, no code changes needed.
 */

export interface AssetRef {
  local: string;
  sourceUrl: string;
}

export const heroHead = {
  plain: "/assets/hero/head.webp",
  shades: "/assets/hero/head-shades.webp",
};

export const aboutDecorations = {
  moon: {
    local: "/assets/about/moon.svg",
    sourceUrl:
      "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
  } as AssetRef,
  p59: {
    local: "/assets/about/p59.svg",
    sourceUrl:
      "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
  } as AssetRef,
  lego: {
    local: "/assets/about/lego.svg",
    sourceUrl:
      "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
  } as AssetRef,
  group134: {
    local: "/assets/about/group-134.svg",
    sourceUrl:
      "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
  } as AssetRef,
};

const MOTIONSITES_BASE = "https://motionsites.ai/assets";

export const marqueeRow1: AssetRef[] = [
  { local: "/assets/marquee/hero-space-voyage.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-space-voyage-preview-eECLH3Yc.gif` },
  { local: "/assets/marquee/hero-codenest.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-codenest-preview-Cgppc2qV.gif` },
  { local: "/assets/marquee/hero-vex-ventures.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-vex-ventures-preview-BczMFIiw.gif` },
  { local: "/assets/marquee/hero-stellar-ai-v2.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-stellar-ai-v2-preview-DjvxjG3C.gif` },
  { local: "/assets/marquee/hero-asme.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-asme-preview-B_nGDnTP.gif` },
  { local: "/assets/marquee/hero-transform-data.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-transform-data-preview-Cx5OU29N.gif` },
  { local: "/assets/marquee/hero-vitara.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-vitara-preview-Cjz2QYyU.gif` },
  { local: "/assets/marquee/hero-terra.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-terra-preview-BFjrCr7T.gif` },
  { local: "/assets/marquee/hero-skyelite.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-skyelite-preview-DHaZIgUv.gif` },
  { local: "/assets/marquee/hero-aethera.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-aethera-preview-DknSlcTa.gif` },
  { local: "/assets/marquee/hero-designpro.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-designpro-preview-D8c5_een.gif` },
];

export const marqueeRow2: AssetRef[] = [
  { local: "/assets/marquee/hero-stellar-ai.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-stellar-ai-preview-D3HL6bw1.gif` },
  { local: "/assets/marquee/hero-xportfolio.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-xportfolio-preview-D4A8maiC.gif` },
  { local: "/assets/marquee/hero-orbit-web3.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-orbit-web3-preview-BXt4OttD.gif` },
  { local: "/assets/marquee/hero-nexora.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-nexora-preview-cx5HmUgo.gif` },
  { local: "/assets/marquee/hero-evr-ventures.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-evr-ventures-preview-DZxeVFEX.gif` },
  { local: "/assets/marquee/hero-planet-orbit.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-planet-orbit-preview-DWAP8Z1P.gif` },
  { local: "/assets/marquee/hero-new-era.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-new-era-preview-CocuDUm9.gif` },
  { local: "/assets/marquee/hero-wealth.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-wealth-preview-B70idl_u.gif` },
  { local: "/assets/marquee/hero-luminex.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-luminex-preview-CxOP7ce6.gif` },
  { local: "/assets/marquee/hero-celestia.svg", sourceUrl: `${MOTIONSITES_BASE}/hero-celestia-preview-0yO3jXO8.gif` },
];

export interface ProjectData {
  number: string;
  name: string;
  category: "Client" | "Personal";
  col1: [AssetRef, AssetRef];
  col2: AssetRef;
}

export const projects: ProjectData[] = [
  {
    number: "01",
    name: "Nextlevel Studio",
    category: "Client",
    col1: [
      {
        local: "/assets/projects/nextlevel-studio-1.svg",
        sourceUrl:
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      },
      {
        local: "/assets/projects/nextlevel-studio-2.svg",
        sourceUrl:
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      },
    ],
    col2: {
      local: "/assets/projects/nextlevel-studio-3.svg",
      sourceUrl:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
  },
  {
    number: "02",
    name: "Aura Brand Identity",
    category: "Personal",
    col1: [
      {
        local: "/assets/projects/aura-brand-identity-1.svg",
        sourceUrl:
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      },
      {
        local: "/assets/projects/aura-brand-identity-2.svg",
        sourceUrl:
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      },
    ],
    col2: {
      local: "/assets/projects/aura-brand-identity-3.svg",
      sourceUrl:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
  },
  {
    number: "03",
    name: "Solaris Digital",
    category: "Client",
    col1: [
      {
        local: "/assets/projects/solaris-digital-1.svg",
        sourceUrl:
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      },
      {
        local: "/assets/projects/solaris-digital-2.svg",
        sourceUrl:
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      },
    ],
    col2: {
      local: "/assets/projects/solaris-digital-3.svg",
      sourceUrl:
        "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
  },
];
