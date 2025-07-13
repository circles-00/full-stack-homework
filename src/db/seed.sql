INSERT INTO numbers (value) VALUES (3), (5), (7), (2) ON CONFLICT DO NOTHING;
INSERT INTO grades (class, grade) VALUES
    ('Math', 85),
    ('Science', 92),
    ('History', 78)
ON CONFLICT DO NOTHING;

