-- Create table for access requests
CREATE TABLE public.access_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company TEXT NOT NULL,
  use_case TEXT NOT NULL,
  data_type TEXT,
  timeline TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS (public insert, admin-only read)
ALTER TABLE public.access_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a request (no auth required)
CREATE POLICY "Anyone can submit access requests"
ON public.access_requests
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view requests (for admin dashboard later)
CREATE POLICY "Authenticated users can view access requests"
ON public.access_requests
FOR SELECT
TO authenticated
USING (true);