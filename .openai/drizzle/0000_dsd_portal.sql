CREATE TABLE IF NOT EXISTS materials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  area TEXT NOT NULL,
  description TEXT,
  file_key TEXT NOT NULL,
  file_name TEXT NOT NULL,
  content_type TEXT,
  time_minutes INTEGER DEFAULT 60,
  published INTEGER DEFAULT 1,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  course TEXT NOT NULL,
  area TEXT NOT NULL,
  score INTEGER DEFAULT 0,
  total INTEGER DEFAULT 0,
  payload TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS materials_published_idx
  ON materials(published, created_at);

CREATE INDEX IF NOT EXISTS submissions_student_idx
  ON submissions(name, course, created_at);
