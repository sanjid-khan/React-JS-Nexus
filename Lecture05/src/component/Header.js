// export default function Header(){
//     return(
//         <div className="header">
//            <img className="images" src="https://img-cdn.thepublive.com/filters:format(webp)/afaqs/media/post_attachments/b846276869df8372f476a9c0c9a4599aa272fe5ec8d7d2880f64ff301fe5d425.png" height="80px" width="80px"/>
//            <div className="option">
//             <button className="but">Men</button>
//             <button className="but">Women</button>
//             <button className="but">Kids</button>
//             <button className="but">Home and Living</button>
//             <button className="but">Beauty</button>
//             <button className="but">Studio</button>
//            </div>
//            <input className="searchbar" placeholder="Search for products and more"></input>

//            <div className="Profile">
//             <button className="pro">Profiles</button>
//             <button className="pro">Wishlist</button>
//             <button className="pro">Bag</button>
//            </div>
//         </div>
//     )
// }




export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 30px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        flexWrap: "wrap",
        gap: "10px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Logo */}
      <img
        src="https://img-cdn.thepublive.com/filters:format(webp)/afaqs/media/post_attachments/b846276869df8372f476a9c0c9a4599aa272fe5ec8d7d2880f64ff301fe5d425.png"
        height="60px"
        width="60px"
        style={{ borderRadius: "8px", cursor: "pointer" }}
      />

      {/* Nav Buttons */}
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {["Men", "Women", "Kids", "Home and Living", "Beauty", "Studio"].map(
          (item) => (
            <button
              key={item}
              style={{
                background: "none",
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                color: "#333",
                cursor: "pointer",
                padding: "8px 12px",
                borderRadius: "4px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#ff3f6c";
                e.target.style.borderBottom = "2px solid #ff3f6c";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#333";
                e.target.style.borderBottom = "none";
              }}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Profile Buttons */}
      <div style={{ display: "flex", gap: "15px" }}>
        {[
          { label: "👤 Profile" },
          { label: "❤️ Wishlist" },
          { label: "🛍️ Bag" },
        ].map((item) => (
          <button
            key={item.label}
            style={{
              background: "none",
              border: "none",
              fontSize: "13px",
              fontWeight: "600",
              color: "#333",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#ff3f6c")}
            onMouseLeave={(e) => (e.target.style.color = "#333")}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
