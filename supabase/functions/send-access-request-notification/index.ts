import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "resend";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface AccessRequestData {
  company: string;
  useCase: string;
  dataType: string;
  timeline: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { company, useCase, dataType, timeline, message }: AccessRequestData = await req.json();

    // Validate required fields
    if (!company || !useCase) {
      throw new Error("Missing required fields: company and useCase are required");
    }

    console.log("Received access request:", { company, useCase, dataType, timeline });

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase.from("access_requests").insert({
      company,
      use_case: useCase,
      data_type: dataType || null,
      timeline: timeline || null,
      message: message || null,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save request to database");
    }

    console.log("Saved to database successfully");

    // Send email notification
    const emailResponse = await resend.emails.send({
      from: "DDH Notifications <onboarding@resend.dev>",
      to: ["contact@digitaldataholdings.com"],
      subject: `New Access Request from ${company}`,
      html: `
        <h1>New Access Request</h1>
        <p>A new access request has been submitted on the DDH website.</p>
        
        <h2>Details:</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Use Case</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${useCase}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Data Type</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${dataType || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Timeline</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${timeline || "Not specified"}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
          </tr>
          ` : ""}
        </table>
        
        <p style="margin-top: 20px; color: #666;">This email was sent automatically from the DDH website.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-access-request-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
