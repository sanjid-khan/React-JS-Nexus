
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1a2e",
        color: "#eee",
        padding: "40px 20px",
        marginTop: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        {/* Brand */}
        <div>
          <h2 style={{ color: "#e94560" }}>🛍️ ShopZone</h2>
          <p style={{ color: "#aaa", maxWidth: "200px" }}>
            Best clothing store in Bangladesh. Quality products at best price.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 style={{ color: "#e94560", marginBottom: "10px" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>🏠 Home</li>
            <li>👕 Shop</li>
            <li>📦 Orders</li>
            <li>📞 Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ color: "#e94560", marginBottom: "10px" }}>Contact Us</h3>
          <p>📍 Dhaka, Bangladesh</p>
          <p>📞 +880 1234 567890</p>
          <p>📧 support@shopzone.com</p>
        </div>

        {/* Social */}
        <div>
          <h3 style={{ color: "#e94560", marginBottom: "10px" }}>Follow Us</h3>
          <p>📘 Facebook</p>
          <p>📸 Instagram</p>
          <p>🐦 Twitter</p>
          <p>▶️ YouTube</p>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ borderColor: "#444", marginBottom: "20px" }} />

      {/* Bottom */}
      <div style={{ textAlign: "center", color: "#aaa", fontSize: "14px" }}>
        <p>© 2024 ShopZone. All Rights Reserved.</p>
        <p style={{ marginTop: "5px" }}>
          Made with ❤️ by{" "}
          <span style={{ color: "#e94560", fontWeight: "bold" }}>
            Sanjid Khan
          </span>
        </p>
      </div>
    </footer>
  );
}