"use server";

export async function sendEmailAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");
  const division = formData.get("division") as string || "general";

  const targetEmails = {
    general: "administracion@kynaobras.com",
    puertasytarima: "puertasytarima@kynaobras.com",
    carpinteria: "carpinteria@kynaobras.com",
    iluminacion: "iluminacion@kynaobras.com",
    solar: "energia@kynaobras.com",
  };

  const to = targetEmails[division as keyof typeof targetEmails] || targetEmails.general;

  // Validation
  if (!name || !email || !subject || !message) {
    return { success: false, error: "Missing fields" };
  }

  // Simulation: Log to console
  console.log("--- SIMULATED EMAIL SENT ---");
  console.log(`To: ${to}`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${message}`);
  console.log("----------------------------");

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
