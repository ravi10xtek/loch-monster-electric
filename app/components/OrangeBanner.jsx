import { getGlobal } from '../lib/cms'
import OrangeBannerView from './OrangeBannerView'

const FALLBACK = {
  heading: 'WHERE <span class="ob-white">MINNESOTA</span> &amp; WISCONSIN<br /><span class="ob-white">LIVE, WORK &amp; MANAGE</span>&mdash;WE\'RE THERE',
  body: "If you've got an emergency—sparking wires, no power, or something that just doesn't feel right—call our 24/7 emergency line. We'll get someone out as soon as possible.",
  note: 'WE RESPOND FAST. NO RUNAROUND.',
  ctaLabel: 'CALL NOW!  763-292-1191',
}

export default async function OrangeBanner() {
  const data = await getGlobal('shared-sections')
  return (
    <OrangeBannerView
      heading={data?.orangeBannerHeading || FALLBACK.heading}
      body={data?.orangeBannerBody || FALLBACK.body}
      note={data?.orangeBannerNote || FALLBACK.note}
      ctaLabel={data?.orangeBannerCtaLabel || FALLBACK.ctaLabel}
    />
  )
}
