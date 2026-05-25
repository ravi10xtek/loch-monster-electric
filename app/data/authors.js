/**
 * Author profiles — static fallback data.
 * When a CMS Authors collection is added, replace this with a fetch from cms.js.
 */
export const authors = {
  'joseph-loch': {
    slug: 'joseph-loch',
    name: 'Joseph Loch',
    title: 'Owner & Master Electrician, Loch Monster Electric',
    bio: 'Joseph Loch is the founder and master electrician behind Loch Monster Electric. With years of hands-on experience across residential, commercial, and HOA electrical work in the Twin Cities metro, he started Loch Monster with one goal: do the kind of work he\'d want done in his own home. He writes about electrical safety, code changes, and practical advice for Minnesota and Wisconsin homeowners.',
    photo: null, // Replace with image path when available, e.g. '/authors/joseph-loch.jpg'
    initials: 'JL',
  },
}

/** Returns the default author (used when a post has no explicit author set). */
export const DEFAULT_AUTHOR = authors['joseph-loch']
