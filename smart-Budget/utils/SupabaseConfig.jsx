
import { createClient } from '@supabase/supabase-js'


// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://djecmvpsdmyhsutziwld.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqZWNtdnBzZG15aHN1dHppd2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyOTIyNDgsImV4cCI6MjAzMTg2ODI0OH0.xhWDam8f69SZIL_PsMDvx69l1naDA6gPq22nc_87GC4')