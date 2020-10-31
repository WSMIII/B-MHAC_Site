using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;
    public static class Contact_Form
    {
        public static async Task Submit_Form(string in_name, string in_email, string in_subject, string in_message)
        {
            var apikey = System.Environment.GetEnvironmentVariable("SENDGRID_APIKEY");
            var client = new SendGridClient(apikey);

            var message = new SendGridMessage();
            message.SetFrom(new EmailAddress("productions@b-mhac.com", "Contact Us"));
            message.AddTo(new EmailAddress("productions@b-mhac.com", "Contact Us"));
            message.SetReplyTo(new EmailAddress(in_email, in_name));
            message.SetSubject(in_subject);
            message.AddContent(MimeType.Text, "Dear B-MHAC, \n\n" + in_message + "\n\nFrom, \n" + in_name);

            var response = await client.SendEmailAsync(message);
        }
    }
