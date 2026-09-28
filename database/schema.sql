CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TYPE user_role AS ENUM ('merchant', 'supplier', 'agent', 'admin');
CREATE TYPE quote_status AS ENUM ('pending', 'reviewing', 'quoted', 'accepted', 'rejected');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(120) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(30),
  password_hash TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'merchant',
  country VARCHAR(80) NOT NULL DEFAULT 'Togo',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_id UUID REFERENCES users(id) ON DELETE SET NULL,
  name VARCHAR(180) NOT NULL,
  description TEXT,
  category VARCHAR(80) NOT NULL,
  image_url TEXT,
  unit_price NUMERIC(12, 2),
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  minimum_order INTEGER NOT NULL DEFAULT 1 CHECK (minimum_order > 0),
  available_quantity INTEGER NOT NULL DEFAULT 0 CHECK (available_quantity >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  merchant_id UUID REFERENCES users(id) ON DELETE SET NULL,
  agent_id UUID REFERENCES users(id) ON DELETE SET NULL,
  status quote_status NOT NULL DEFAULT 'pending',
  destination VARCHAR(100) NOT NULL DEFAULT 'Lomé, Togo',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE quote_items (
  quote_id UUID REFERENCES quote_requests(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE RESTRICT,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  PRIMARY KEY (quote_id, product_id)
);

CREATE INDEX products_category_idx ON products(category);
CREATE INDEX quote_requests_status_idx ON quote_requests(status);
