import HeroBlock from './blocks/HeroBlock'
import WhenDoYouNeedBlock from './blocks/WhenDoYouNeedBlock'
import ServicesGridBlock from './blocks/ServicesGridBlock'
import FAQBlock from './blocks/FAQBlock'
import CTABannerBlock from './blocks/CTABannerBlock'
import RichTextBlock from './blocks/RichTextBlock'
import ImageTextBlock from './blocks/ImageTextBlock'
import WhyChooseUsBlock from './blocks/WhyChooseUsBlock'
import ServiceAreasBlock from './blocks/ServiceAreasBlock'
import ExpectBlock from './blocks/ExpectBlock'

const BLOCK_MAP = {
  'hero': HeroBlock,
  'when-do-you-need': WhenDoYouNeedBlock,
  'services-grid': ServicesGridBlock,
  'faq': FAQBlock,
  'cta-banner': CTABannerBlock,
  'rich-text': RichTextBlock,
  'image-text': ImageTextBlock,
  'why-choose-us': WhyChooseUsBlock,
  'service-areas': ServiceAreasBlock,
  'expect': ExpectBlock,
}

export default function BlockRenderer({ blocks = [] }) {
  if (!blocks.length) return null
  return (
    <>
      {blocks.map((block, i) => {
        const Component = BLOCK_MAP[block.blockType]
        if (!Component) {
          console.warn(`[BlockRenderer] Unknown block type: ${block.blockType}`)
          return null
        }
        return <Component key={block.id || i} {...block} />
      })}
    </>
  )
}
