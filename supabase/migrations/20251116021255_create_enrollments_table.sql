/*
  # Create Enrollments Table for Minhaj Institution

  1. New Tables
    - `enrollments`
      - `id` (uuid, primary key) - Unique identifier for each enrollment
      - `name` (text) - Student's full name
      - `email` (text) - Student's email address
      - `whatsapp` (text) - Student's WhatsApp number
      - `course` (text) - Selected course name
      - `message` (text) - Additional message from student
      - `reviewed` (boolean) - Admin review status
      - `created_at` (timestamptz) - Submission timestamp
      
  2. Security
    - Enable RLS on `enrollments` table
    - Add policy for anonymous users to insert enrollments
    - Add policy for authenticated users (admin) to view and manage all enrollments
    
  3. Notes
    - Anonymous users can only create enrollments (submit forms)
    - Only authenticated admins can read, update, and delete enrollments
    - Default reviewed status is false
*/

CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  whatsapp text NOT NULL,
  course text NOT NULL,
  message text DEFAULT '',
  reviewed boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit enrollments"
  ON enrollments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all enrollments"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update enrollments"
  ON enrollments
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete enrollments"
  ON enrollments
  FOR DELETE
  TO authenticated
  USING (true);