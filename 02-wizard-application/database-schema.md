# Suggested Database Schema

Below is a suggested database schema for the wizard application. You can modify this based on your implementation needs.

## Tables

### Users

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Addresses

```sql
CREATE TABLE addresses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  street TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id)
);
```

### QuoteRequests

```sql
CREATE TABLE quote_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  address_id INTEGER NOT NULL,
  ac_units INTEGER,
  system_type TEXT,
  heating_type TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (address_id) REFERENCES addresses (id)
);
```

### WizardSessions

```sql
CREATE TABLE wizard_sessions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL UNIQUE,
  current_step INTEGER NOT NULL,
  data TEXT, -- JSON data of the wizard progress
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Entity Relationships

- A User can have multiple Addresses
- A User can have multiple QuoteRequests
- Each QuoteRequest is associated with one Address
- WizardSessions track the progress of users through the wizard

## Notes

- For simplicity, you can use SQLite as specified in the requirements
- Consider using TypeORM or another ORM to manage these relationships
- The `data` field in WizardSessions can store JSON data of the wizard progress
- Add indexes for fields that will be frequently queried