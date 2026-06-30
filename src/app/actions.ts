'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  const name = formData.get('name') as string;
  const userEmail = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;
  const division = (formData.get('division') as string) || 'general';

  const sectionNames: Record<string, string> = {
    puertasytarima: 'Puertas y Tarima',
    carpinteria: 'Carpintería',
    iluminacion: 'Iluminación Ambiental',
    solar: 'Energía Fotovoltaica',
  };

  const isFromSection = division !== 'general';
  const to = 'presupuestos@kynaobras.com';

  const emailSubject = isFromSection
    ? `Presupuesto ${sectionNames[division] || division}: ${subject}`
    : `Nuevo contacto: ${subject}`;

  const emailSender = 'web@kynaobras.com';

  // Validation
  if (!name || !userEmail || !subject || !message) {
    return { success: false, error: 'Missing fields' };
  }

  // SIMULATION for DEV mode
  if (process.env.NODE_ENV === 'development') {
    console.log('--- [DEV MODE] Simulated Email Send ---');
    console.log('To:', to);
    console.log('From:', name, `<${userEmail}>`);
    console.log('Subject:', emailSubject);
    console.log('Message:', message);
    console.log('---------------------------------------');
    
    // Artificial delay to test UI loading states
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    return { success: true, data: { id: 'simulated-id' } };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Kyna ${division.toUpperCase()} <${emailSender}>`,
      to: [to],
      subject: emailSubject,
      replyTo: userEmail,
      html: `
        <h2>Nuevo mensaje desde la web de Grupo Kyna</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>De:</strong> ${userEmail}</p>
        <p><strong>Grupo:</strong> ${division}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <div style="background: #f4f4f4; padding: 20px; border-radius: 8px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      `,
    });

    if (error) {
      console.log('Error de mensaje en Logs de Vercel:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: unknown) {
    const error = (err as Error)?.message;
    console.log('Error de mensaje en Logs de Vercel:', error, err);
    return {
      success: false,
      error: `Error inesperado ${(err as Error)?.message}`,
    };
  }
}
