export default function Breadcrumb({ parent, current }) {
  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
      <div className="wrap">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          <li><a href={parent.href}>{parent.label}</a></li>
          <li aria-current="page">{current}</li>
        </ol>
      </div>
    </nav>
  );
}
