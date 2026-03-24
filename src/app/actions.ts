"use server";

export async function sendEmailAction(formData: FormData) {
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const division = formData.get("division") as string || "general";

  const targetEmails = {
    general: "info@kynaobras.com",
    suelos: "suelos@kynaobras.com",
    puertas: "puertas@kynaobras.com",
    iluminacion: "iluminacion@kynaobras.com",
    solar: "solar@kynaobras.com",
  };

  const to = targetEmails[division as keyof typeof targetEmails] || targetEmails.general;

  // Validation
  if (!email || !subject || !message) {
    return { success: false, error: "Missing fields" };
  }

  // Simulation: Log to console
  console.log("--- SIMULATED EMAIL SENT ---");
  console.log(`To: ${to}`);
  console.log(`From: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${message}`);
  console.log("----------------------------");

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
