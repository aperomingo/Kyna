'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  const name = formData.get('name') as string;
  const userEmail = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;
  const division = (formData.get('division') as string) || 'general';

  const targetEmails = {
    general: 'administracion@kynaobras.com',
    puertasytarima: 'puertasytarima@kynaobras.com',
    carpinteria: 'carpinteria@kynaobras.com',
    iluminacion: 'iluminacion@kynaobras.com',
    solar: 'energia@kynaobras.com',
  };

  const to =
    targetEmails[division as keyof typeof targetEmails] || targetEmails.general;

  const emailSender = 'web@kynaobras.com';

  // Validation
  if (!name || !userEmail || !subject || !message) {
    return { success: false, error: 'Missing fields' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Kyna ${division.toUpperCase()} <${emailSender}>`,
      to: [to],
      subject: `Nuevo contacto [${division.toUpperCase()}]: ${subject}`,
      replyTo: userEmail,
      html: `
        <h2>Nuevo mensaje desde la web de Kyna Grupo</h2>
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
