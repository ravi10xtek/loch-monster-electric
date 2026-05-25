import { DEFAULT_AUTHOR, authors } from '../data/authors'

export default function AuthorCard({ authorSlug }) {
  const author = (authorSlug && authors[authorSlug]) || DEFAULT_AUTHOR

  return (
    <div className="author-card">
      <div className="author-card-avatar">
        {author.photo ? (
          <img src={author.photo} alt={author.name} />
        ) : (
          <span>{author.initials}</span>
        )}
      </div>
      <div className="author-card-body">
        <p className="author-card-label">Written by</p>
        <p className="author-card-name">{author.name}</p>
        <p className="author-card-title">{author.title}</p>
        <p className="author-card-bio">{author.bio}</p>
      </div>
    </div>
  )
}
