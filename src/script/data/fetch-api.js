import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vmvstmkzcpsxdvgkhkuu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdnN0bWt6Y3BzeGR2Z2toa3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0MzAxMTMsImV4cCI6MjAwMTAwNjExM30.cL8ncZtT4tsiXq8GN5Xt0YD4E8p8tkpQI3_iOmDsMMU'
const supabase = createClient(supabaseUrl, supabaseKey)

export const getDummy = async () => {
    const { data: dummydata, error } = await supabase
    .from('dummydata')
    .select('*')

    if (error) {
        console.log(error);
        return;
    }

    console.log(dummydata);
}