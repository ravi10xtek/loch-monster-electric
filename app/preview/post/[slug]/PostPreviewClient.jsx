'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { normalizePost } from '../../../lib/normalize'
import JournalPost from '../../../components/JournalPost'

const PAYLOAD_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001'

export default function PostPreviewClient({ initialData }) {
  const { data } = useLivePreview({
    initialData,
    serverURL: PAYLOAD_URL,
    depth: 1,
  })

  if (!data) return <p style={{ padding: '2rem' }}>Loading preview…</p>

  const post = normalizePost(data)

  // Note: body/bodyHtml reflects the last *saved* state.
  // Lexical → HTML conversion happens server-side on save, so
  // unsaved body edits won't appear in the preview until saved.
  return <JournalPost post={post} related={[]} />
}
