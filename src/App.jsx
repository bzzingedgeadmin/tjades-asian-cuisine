import React, { useState } from 'react'

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [orderForm, setOrderForm] = useState({ name: '', phone: '', dish: 'Handmade Pork Dumplings', type: 'Dine-In' });

  const handleOrder = (e) => {
    e.preventDefault();
    setToastMessage(`Order placed for ${orderForm.name}! ${orderForm.dish} (${orderForm.type}) is being prepared.`);
    setOrderForm({ name: '', phone: '', dish: 'Handmade Pork Dumplings', type: 'Dine-In' });
    setTimeout(() => setToastMessage(''), 6000);
  };

  return (
    <div className="app-wrapper">
      <header className="navbar">
        <div className="container nav-flex">
          <a href="#" className="logo">
            <span className="brand-name">TJADE'S <span>ASIAN CUISINE</span></span>
          </a>
          <nav className={`nav-links ${mobileNavOpen ? 'active' : ''}`}>
            <a href="#menu">Menu</a>
            <a href="#order">Order & Reserve</a>
          </nav>
          <button className="mobile-toggle" onClick={() => setMobileNavOpen(!mobileNavOpen)}>☰</button>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Authentic Dim Sum, Ramen & Wok Specialties</h1>
          <p>Handcrafted dumplings, 18-hour broth tonkotsu ramen, and wok-seared Asian fusion.</p>
          <a href="#order" className="btn btn-red btn-lg">Order Online / Reserve</a>
        </div>
      </section>

      <section id="menu" className="section bg-dark text-white">
        <div className="container">
          <div className="section-header text-center">
            <h2>Featured Culinary Dishes</h2>
          </div>
          <div className="menu-grid">
            <div className="menu-item">
              <div className="item-header">
                <h4>Handmade Pork & Chive Dumplings</h4>
                <span className="price">$12.95</span>
              </div>
              <p>Steamed or pan-fried with garlic chili soy dip.</p>
            </div>
            <div className="menu-item">
              <div className="item-header">
                <h4>Tonkotsu Black Garlic Ramen</h4>
                <span className="price">$16.50</span>
              </div>
              <p>Rich pork bone broth, chashu pork belly, bamboo shoots, and soft-boiled egg.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="section bg-light">
        <div className="container max-w-700">
          <div className="section-header text-center">
            <h2>Dine-In & Takeout Orders</h2>
          </div>
          <form className="order-card" onSubmit={handleOrder}>
            <div className="form-grid">
              <div className="form-group">
                <label>Name</label>
                <input type="text" required placeholder="Linh" value={orderForm.name} onChange={e => setOrderForm({...orderForm, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" required placeholder="(555) 019-5821" value={orderForm.phone} onChange={e => setOrderForm({...orderForm, phone: e.target.value})} />
              </div>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Select Specialty Dish</label>
                <select value={orderForm.dish} onChange={e => setOrderForm({...orderForm, dish: e.target.value})}>
                  <option value="Handmade Pork Dumplings">Handmade Pork Dumplings</option>
                  <option value="Tonkotsu Black Garlic Ramen">Tonkotsu Black Garlic Ramen</option>
                </select>
              </div>
              <div className="form-group">
                <label>Order Type</label>
                <select value={orderForm.type} onChange={e => setOrderForm({...orderForm, type: e.target.value})}>
                  <option value="Dine-In">Dine-In Table</option>
                  <option value="Takeout Pickup">Takeout Pickup</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-red btn-block btn-lg">Submit Order Request</button>
          </form>
        </div>
      </section>

      <footer className="footer bg-dark text-white">
        <div className="container text-center">
          <p>&copy; 2026 Tjade's Asian Cuisine. React JS Web Application.</p>
        </div>
      </footer>

      {toastMessage && <div className="toast-banner">{toastMessage}</div>}
    </div>
  );
}
