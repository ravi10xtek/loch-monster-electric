/**
 * FAQBlock — accordion FAQ section.
 * Reuses FaqAccordion which already handles the 'use client' boundary.
 */
import FaqAccordion from '../FaqAccordion'

export default function FAQBlock({
  heading = 'FREQUENTLY ASKED QUESTIONS',
  items = [],
}) {
  return <FaqAccordion title={heading} items={items} />
}
