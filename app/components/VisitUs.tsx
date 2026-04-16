import { ArrowUpRight } from "lucide-react";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1217594284885!2d106.93819119999999!3d-6.1143063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a21b17ac98757%3A0xf98ffc8f324b66f5!2sKost%2C%20Laundry%20dan%20Cafe%20Satu%20Satu!5e0!3m2!1sid!2sid!4v1776300877408!5m2!1sid!2sid";

export default function VisitUs() {
  return (
    <footer
      className="visit-section"
      id="kontak"
      aria-label="Lokasi dan Kontak"
    >
      <div className="visit-grid">
        <div className="visit-content scroll-reveal">
          <h2 className="visit-headline">
            DISINI KAMI
            <br />
            MENUNGGU.
          </h2>
          <div className="visit-details">
            <p className="visit-address">
              <strong>
                Kost, Laundry &amp; Cafe
                <br />
                Satu Satu
              </strong>
              <br />
              <br />
              Kunjungi kami langsung untuk merasakan kenyamanan kopi, wangi
              cucian yang segar, dan hangatnya suasana kost kami.
            </p>
            <div className="visit-cta-wrapper">
              <a
                href="https://maps.app.goo.gl/..."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-ghost"
              >
                <span>Buka di Maps</span>
                <ArrowUpRight size={24} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className="map-wrapper scroll-reveal">
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            className="map-iframe"
            title="Lokasi Satu Satu"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </div>
      </div>

      <div className="footer-bottom-strip">
        <div className="footer-socials">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Hubungi kami via WhatsApp"
          >
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/kost.satusatu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Kunjungi Instagram kami"
          >
            <span>Instagram</span>
          </a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Kost Laundry &amp; Cafe Satu Satu.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
