/**
 * Author profiles — static fallback data.
 * When a CMS Authors collection is added, replace this with a fetch from cms.js.
 */
export const authors = {
  'ryan-solberg': {
    slug: 'ryan-solberg',
    name: 'Ryan Solberg',
    title: 'Master Electrician, Loch Monster Electric',
    bio: 'Ryan Solberg is a master electrician at Loch Monster Electric with years of hands-on experience across residential, commercial, and HOA electrical work in the Twin Cities metro. He writes about electrical safety, code changes, and practical advice for Minnesota and Wisconsin homeowners.',
    photo: '/authors/ryan-solberg.png',
    initials: 'RS',
  },
}

/** Returns the default author (used when a post has no explicit author set). */
export const DEFAULT_AUTHOR = authors['ryan-solberg']
