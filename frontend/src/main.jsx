@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');

:root {
  font-family: 'DM Sans', sans-serif;
  color: #18352d;
  background: #f8faf7;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

button,
input,
select {
  font: inherit;
}

header {
  height: 76px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #e9efea;
}

.brand {
  font-size: 22px;
  font-weight: 700;
}

.brand span {
  color: #ee8353;
  margin: 0 4px;
}

nav {
  display: flex;
  gap: 20px;
  align-items: center;
}

nav a {
  color: #52655c;
  text-decoration: none;
  font-size: 14px;
}

.cart,
.primary,
.product button,
.auth-submit,
.supplier-submit {
  border: 0;
  border-radius: 5px;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
}

.cart {
  background: #e4f0e6;
  color: #24533c;
}

.basket-button {
  background: #f4efe7;
  color: #4a432f;
}

.page-shell {
  padding: 0 10% 30px;
}

.hero {
  min-height: 460px;
  padding: 75px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e9f3e8;
  border-radius: 0 0 32px 32px;
  margin-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
}

.eyebrow {
  letter-spacing: 2px;
  color: #d96f45;
  font-size: 11px;
  font-weight: 700;
}

.hero h1 {
  font: 600 52px 'Playfair Display', serif;
  line-height: 1.1;
  margin: 16px 0;
}

.hero h1 em {
  color: #db7851;
}

.lead {
  color: #5b6b62;
  max-width: 440px;
  line-height: 1.7;
}

.primary {
  display: inline-block;
  background: #215b3d;
  color: #fff;
  text-decoration: none;
  margin-top: 18px;
}

.hero-card {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: #d4e7d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #215b3d;
  box-shadow: 0 0 0 22px #e0eee0;
}

.flag {
  font-size: 55px;
  margin-bottom: 12px;
}

.hero-card small {
  margin-top: 7px;
  color: #68816e;
}

.auth-panel,
.user-panel,
.supplier-dashboard {
  background: #ffffff;
  border: 1px solid #dfe9e4;
  border-radius: 16px;
  padding: 20px;
  margin: 28px 0 0;
  box-shadow: 0 8px 18px rgba(18, 39, 31, 0.04);
}

.auth-header {
  display: inline-flex;
  background: #edf4ef;
  border-radius: 10px;
  padding: 6px;
  margin-bottom: 16px;
}

.auth-header button {
  border: 0;
  background: transparent;
  color: #446158;
  font-weight: 700;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
}

.auth-header button.active {
  background: #fff;
  color: #1b4d3d;
  box-shadow: 0 2px 10px rgba(24, 53, 45, 0.08);
}

.auth-form,
.supplier-form {
  display: grid;
  gap: 14px;
}

.field-row {
  display: grid;
  gap: 6px;
}

.field-row label {
  font-size: 13px;
  color: #4d645b;
  font-weight: 700;
}

.field-row input,
.field-row select,
.field-row textarea {
  width: 100%;
  border: 1px solid #d9e4db;
  background: #fff;
  border-radius: 8px;
  padding: 12px 14px;
  color: #2c443d;
}

.field-row textarea {
  min-height: 100px;
  resize: vertical;
}

.auth-message,
.supplier-message {
  margin: 0;
  font-size: 14px;
  color: #255d4e;
  font-weight: 600;
}

.auth-submit,
.supplier-submit {
  background: #1a5b3f;
  color: #fff;
  margin-top: 4px;
}

.user-panel {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-badge {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #dfeee4;
  color: #204d3d;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.user-panel strong {
  display: block;
  margin-bottom: 2px;
}

.user-panel p {
  margin: 0;
  color: #5b6b62;
  font-size: 13px;
}

.supplier-dashboard {
  margin-top: 22px;
}

.supplier-grid {
  display: grid;
  grid-template-columns: 1.1fr 1.4fr;
  gap: 20px;
}

.product-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.product-list li {
  border: 1px solid #e5ece6;
  border-radius: 12px;
  padding: 14px;
  background: #f7faf7;
}

.product-list strong {
  display: block;
  margin-bottom: 6px;
}

.product-list small {
  color: #5a6e63;
}

.catalogue {
  padding: 75px 0;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 30px;
}

.section-heading h2,
.how h2 {
  font: 600 32px 'Playfair Display', serif;
  margin: 8px 0;
}

.filters {
  display: flex;
  gap: 10px;
}

.filters input,
.filters select {
  border: 1px solid #d9e4db;
  background: #fff;
  border-radius: 5px;
  padding: 12px;
  color: #52655c;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.product {
  background: #fff;
  border: 1px solid #e5ece6;
  border-radius: 7px;
  overflow: hidden;
}

.product img {
  height: 170px;
  width: 100%;
  object-fit: cover;
}

.product-body {
  padding: 17px;
}

.product-body > span {
  color: #d96f45;
  font-size: 11px;
  font-weight: 700;
}

.product h3 {
  margin: 8px 0;
  font-size: 17px;
}

.product p {
  font-size: 13px;
  color: #718078;
  line-height: 1.5;
  min-height: 40px;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
}

.product-footer strong {
  font-size: 14px;
}

.product button {
  background: #edf5ee;
  color: #24533c;
  padding: 9px 10px;
}

.product small {
  display: block;
  color: #89978f;
  margin-top: 12px;
  font-size: 11px;
}

.how {
  padding: 65px 0;
  background: #183f31;
  color: white;
  border-radius: 24px;
  padding-left: 40px;
  padding-right: 40px;
}

.how .eyebrow {
  color: #f2a078;
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 50px;
}

.steps b {
  color: #ee8b61;
}

.steps h3 {
  margin-bottom: 8px;
}

.steps p {
  color: #bad0c1;
  line-height: 1.6;
  font-size: 14px;
}

aside {
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: #fff;
  padding: 18px 20px;
  box-shadow: 0 7px 30px rgba(24, 53, 45, 0.15);
  border-radius: 8px;
  display: flex;
  gap: 20px;
  align-items: center;
}

aside .primary {
  margin: 0;
}

.toast {
  position: fixed;
  top: 95px;
  right: 24px;
  background: #215b3d;
  color: #fff;
  padding: 15px 20px;
  border-radius: 5px;
}

.loading-state {
  color: #4a645b;
  font-weight: 600;
  margin-top: 10px;
}

footer {
  text-align: center;
  padding: 30px 0 40px;
  color: #84948a;
  font-size: 12px;
}

@media (max-width: 900px) {
  .grid,
  .supplier-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section-heading {
    display: block;
  }

  .filters {
    margin-top: 20px;
  }
}

@media (max-width: 600px) {
  nav a {
    display: none;
  }

  .hero {
    display: block;
    padding: 55px 7%;
  }

  .hero-card {
    margin: 50px auto 20px;
    width: 180px;
    height: 180px;
  }

  .hero h1 {
    font-size: 38px;
  }

  .grid,
  .steps,
  .supplier-grid {
    grid-template-columns: 1fr;
  }

  .catalogue,
  .how {
    padding-left: 7%;
    padding-right: 7%;
  }
}
