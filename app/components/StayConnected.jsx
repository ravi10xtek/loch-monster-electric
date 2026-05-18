export default function StayConnected() {
  return (
    <section className="stay-connected" id="stay-connected">
      <div className="wrap">
        <p className="eyebrow-center">Social</p>
        <h2 className="center-heading stay-connected-heading">Stay <span className="text-orange">Connected</span></h2>
        <p className="stay-connected-sub">Follow us on Facebook for project updates, tips, and behind-the-scenes moments.</p>
        <div className="fb-page-wrap">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/lochmonsterelectric"
            data-tabs="timeline"
            data-width="500"
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          />
        </div>
      </div>
      <div id="fb-root" />
      {/* Facebook SDK */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `,
        }}
      />
    </section>
  )
}
