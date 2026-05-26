/**
 * Author profiles — static fallback data.
 * When a CMS Authors collection is added, replace this with a fetch from cms.js.
 */
export const authors = {
  'bradley-gartner': {
    slug: 'bradley-gartner',
    name: 'Bradley Gartner',
    title: 'Master Electrician, Loch Monster Electric',
    bio: "Bradley is a licensed Master Electrician with over 3+ years of experience serving homeowners, businesses, and HOAs across Minnesota and Wisconsin. His hands-on experience covers everything from upgrading residential service panels and installing modern EV charging stations to executing commercial tenant buildouts and managing common area safety lighting updates. Bradley shares practical insights gained from real, day-to-day electrical troubleshooting and field experience.",
    photo: '/authors/bradley_gartner.png',
    initials: 'BG',
  },
}

/** Returns the default author (used when a post has no explicit author set). */
export const DEFAULT_AUTHOR = authors['bradley-gartner']
