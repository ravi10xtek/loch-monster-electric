"use client";

import { useEffect } from "react";

const NIGHT_MAP_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
  { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#4b6878" }] },
  { featureType: "administrative.land_parcel", elementType: "labels.text.fill", stylers: [{ color: "#64779e" }] },
  { featureType: "administrative.province", elementType: "geometry.stroke", stylers: [{ color: "#4b6878" }] },
  { featureType: "landscape.man_made", elementType: "geometry.stroke", stylers: [{ color: "#334e87" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#023e58" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#283d6a" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#6f9ba5" }] },
  { featureType: "poi", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
  { featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#023e58" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#3C7680" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#304a7d" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#98a5be" }] },
  { featureType: "road", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#2c6675" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#255763" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#b0d5ce" }] },
  { featureType: "road.highway", elementType: "labels.text.stroke", stylers: [{ color: "#023e58" }] },
  { featureType: "transit", elementType: "labels.text.fill", stylers: [{ color: "#98a5be" }] },
  { featureType: "transit", elementType: "labels.text.stroke", stylers: [{ color: "#1d2c4d" }] },
  { featureType: "transit.line", elementType: "geometry.fill", stylers: [{ color: "#283d6a" }] },
  { featureType: "transit.station", elementType: "geometry", stylers: [{ color: "#3a4762" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1626" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4e6d70" }] }
];

function loadGoogleMapsScript(apiKey) {
  if (!apiKey) return Promise.reject(new Error("Missing Google Maps API key"));
  if (window.google?.maps) return Promise.resolve(window.google.maps);

  return new Promise((resolve, reject) => {
    const existing = document.getElementById("google-maps-script");
    if (existing) {
      existing.addEventListener("load", () => resolve(window.google.maps), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.google.maps);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const REVIEWS_PLACE_QUERY = "Loch Monster Electric, Shoreview, MN";

function fetchGooglePlace(maps) {
  return new Promise((resolve) => {
    if (!maps?.places) return resolve(null);
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const service = new maps.places.PlacesService(document.createElement("div"));

    const detailsFields = ["reviews", "rating", "user_ratings_total", "url", "name", "place_id"];

    const getDetails = (id) => {
      service.getDetails(
        { placeId: id, fields: detailsFields, reviewsSort: "newest" },
        (place, status) => {
          if (status !== maps.places.PlacesServiceStatus.OK || !place) return resolve(null);
          resolve(place);
        }
      );
    };

    if (placeId) return getDetails(placeId);

    service.findPlaceFromQuery(
      { query: REVIEWS_PLACE_QUERY, fields: ["place_id"] },
      (results, status) => {
        if (status !== maps.places.PlacesServiceStatus.OK || !results?.[0]) return resolve(null);
        getDetails(results[0].place_id);
      }
    );
  });
}

function buildReviewCard(review) {
  const card = document.createElement("div");
  card.className = "review-card";

  const head = document.createElement("div");
  head.className = "rc-head";

  const avatar = document.createElement("div");
  avatar.className = "rc-avatar";
  if (review.profile_photo_url) {
    const img = document.createElement("img");
    img.src = review.profile_photo_url;
    img.alt = review.author_name || "";
    img.referrerPolicy = "no-referrer";
    img.loading = "lazy";
    avatar.appendChild(img);
  } else {
    avatar.textContent = (review.author_name || "?").trim().charAt(0).toUpperCase();
  }

  const meta = document.createElement("div");
  meta.className = "rc-meta";
  const name = document.createElement("div");
  name.className = "rc-name";
  name.textContent = review.author_name || "Google User";
  const time = document.createElement("div");
  time.className = "rc-time";
  time.textContent = review.relative_time_description || "";
  meta.append(name, time);

  head.append(avatar, meta);

  const stars = document.createElement("div");
  stars.className = "rc-stars";
  const rating = Math.max(1, Math.min(5, Math.round(review.rating || 5)));
  stars.setAttribute("aria-label", `${rating} stars`);
  stars.textContent = "\u2605".repeat(rating) + "\u2606".repeat(5 - rating);

  const text = document.createElement("div");
  text.className = "rc-text";
  text.textContent = review.text || "";

  card.append(head, stars, text);
  return card;
}

function rankReviews(reviews) {
  return [...reviews].sort((a, b) => {
    const byRating = (b.rating || 0) - (a.rating || 0);
    if (byRating !== 0) return byRating;
    return (b.time || 0) - (a.time || 0);
  });
}

function renderReviews(track, reviews) {
  if (!track || !reviews?.length) return false;
  track.innerHTML = "";
  rankReviews(reviews).forEach((r) => track.appendChild(buildReviewCard(r)));
  track.dataset.state = "loaded";
  return true;
}

function setupCarousel(track, prevBtn, nextBtn) {
  if (!track) return () => {};
  let cur = 0;

  const cards = () => Array.from(track.children);
  const visCount = () => {
    const w = window.innerWidth;
    if (w < 480) return 1;
    if (w < 768) return 2;
    if (w < 1024) return 3;
    return 4;
  };
  const maxIdx = () => Math.max(0, cards().length - visCount());

  const updateButtons = () => {
    const max = maxIdx();
    if (prevBtn) prevBtn.disabled = cur <= 0;
    if (nextBtn) nextBtn.disabled = cur >= max;
  };

  const trackGap = () => {
    const g = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0");
    return Number.isFinite(g) ? g : 0;
  };

  const goTo = (n) => {
    cur = Math.max(0, Math.min(n, maxIdx()));
    const first = cards()[0];
    const w = first ? first.offsetWidth + trackGap() : 0;
    track.style.transform = `translateX(-${cur * w}px)`;
    updateButtons();
  };

  const onPrev = () => goTo(cur - 1);
  const onNext = () => goTo(cur + 1);
  const onResize = () => goTo(Math.min(cur, maxIdx()));

  prevBtn?.addEventListener("click", onPrev);
  nextBtn?.addEventListener("click", onNext);
  window.addEventListener("resize", onResize);

  goTo(0);

  return () => {
    prevBtn?.removeEventListener("click", onPrev);
    nextBtn?.removeEventListener("click", onNext);
    window.removeEventListener("resize", onResize);
  };
}

export default function HomeInteractions() {
  useEffect(() => {
    const cleanups = [];

    document.querySelectorAll(".tab").forEach((btn) => {
      const onClick = () => {
        const id = btn.dataset.tab;
        document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
        document.querySelectorAll(".tab-pane").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("tab-" + id)?.classList.add("active");
      };
      btn.addEventListener("click", onClick);
      cleanups.push(() => btn.removeEventListener("click", onClick));
    });

    document.querySelectorAll(".acc-btn").forEach((btn) => {
      const onClick = () => {
        const body = btn.nextElementSibling;
        const isOpen = btn.classList.contains("open");
        document.querySelectorAll(".acc-btn").forEach((b) => {
          b.classList.remove("open");
          b.nextElementSibling?.classList.remove("open");
        });
        if (!isOpen) {
          btn.classList.add("open");
          body?.classList.add("open");
        }
      };
      btn.addEventListener("click", onClick);
      cleanups.push(() => btn.removeEventListener("click", onClick));
    });

    const hamburger = document.getElementById("hamburger");
    const mobileClose = document.getElementById("mobileClose");
    const mobileNav = document.getElementById("mobileNav");

    const openMobile = () => mobileNav?.classList.add("open");
    const closeMobile = () => mobileNav?.classList.remove("open");

    hamburger?.addEventListener("click", openMobile);
    mobileClose?.addEventListener("click", closeMobile);
    cleanups.push(() => hamburger?.removeEventListener("click", openMobile));
    cleanups.push(() => mobileClose?.removeEventListener("click", closeMobile));

    document.querySelectorAll(".mobile-nav a").forEach((a) => {
      const onClick = () => closeMobile();
      a.addEventListener("click", onClick);
      cleanups.push(() => a.removeEventListener("click", onClick));
    });

    const cityButtons = document.querySelectorAll(".city-btn");
    const mapCanvas = document.getElementById("saMap");
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    let googleMap = null;
    let marker = null;
    let geocoder = null;

    const fallbackToEmbed = (location) => {
      if (!mapCanvas) return;
      mapCanvas.innerHTML = "";
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
      iframe.style.border = "0";
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.loading = "lazy";
      mapCanvas.appendChild(iframe);
    };

    const reviewsTrack = document.getElementById("whyTrack");
    const wPrev = document.getElementById("wPrev");
    const wNext = document.getElementById("wNext");
    const reviewBtn = document.getElementById("reviewGoogleBtn");

    let teardownCarousel = setupCarousel(reviewsTrack, wPrev, wNext);
    cleanups.push(() => teardownCarousel?.());

    const journalTrack = document.getElementById("journalTrack");
    const jPrev = document.getElementById("jPrev");
    const jNext = document.getElementById("jNext");
    const teardownJournal = setupCarousel(journalTrack, jPrev, jNext);
    cleanups.push(() => teardownJournal?.());

    loadGoogleMapsScript(apiKey)
      .then(async (maps) => {
        if (mapCanvas) {
          googleMap = new maps.Map(mapCanvas, {
            center: { lat: 45.0572, lng: -93.1475 }, // Shoreview
            zoom: 11,
            styles: NIGHT_MAP_STYLE,
            disableDefaultUI: false,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
          });

          const markerIcon = {
            path: "M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z",
            fillColor: "#ff6a2a",
            fillOpacity: 1,
            strokeColor: "#191919",
            strokeWeight: 1.3,
            scale: 1.75,
            anchor: new maps.Point(12, 22),
          };

          marker = new maps.Marker({
            position: { lat: 45.0572, lng: -93.1475 },
            map: googleMap,
            icon: markerIcon,
          });

          geocoder = new maps.Geocoder();
        }

        const place = await fetchGooglePlace(maps);
        if (place?.reviews?.length && renderReviews(reviewsTrack, place.reviews)) {
          teardownCarousel?.();
          teardownCarousel = setupCarousel(reviewsTrack, wPrev, wNext);
        }
        if (place && reviewBtn) {
          reviewBtn.href = place.place_id
            ? `https://search.google.com/local/writereview?placeid=${place.place_id}`
            : place.url || reviewBtn.href;
        }
      })
      .catch(() => {
        const active = document.querySelector(".city-btn.active");
        fallbackToEmbed(active?.dataset.location || "Shoreview, MN");
      });

    cityButtons.forEach((btn) => {
      const onClick = () => {
        cityButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const location = btn.dataset.location;
        if (!location) return;

        if (googleMap && geocoder && marker) {
          geocoder.geocode({ address: location }, (results, status) => {
            if (status === "OK" && results?.[0]?.geometry?.location) {
              const loc = results[0].geometry.location;
              googleMap.panTo(loc);
              marker.setPosition(loc);
            }
          });
          return;
        }

        fallbackToEmbed(location);
      };
      btn.addEventListener("click", onClick);
      cleanups.push(() => btn.removeEventListener("click", onClick));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
