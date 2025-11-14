# EmailJS Setup Guide for Faizan Codes Portfolio

This guide will help you set up EmailJS to handle contact form submissions on your portfolio website.

## 📋 Prerequisites

- A Gmail account (mrfaizan726@gmail.com)
- EmailJS account (free tier is sufficient)

## 🚀 Step-by-Step Setup

### Step 1: Create an EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/sign-up)
2. Sign up using your email (mrfaizan726@gmail.com)
3. Verify your email address

### Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail**
4. Click **Connect Account** and authorize with your Gmail (mrfaizan726@gmail.com)
5. Give your service a name (e.g., "Faizan Portfolio Gmail")
6. Click **Create Service**
7. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. In the **Settings** tab:
   - **Template Name**: Portfolio Contact Form
   - **To Email**: mrfaizan726@gmail.com
   - **From Name**: {{from_name}}
   - **Reply To**: {{reply_to}}

5. Click **Save**
6. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Your Public Key

1. Go to **Account** in the sidebar
2. Look for **API Keys** section
3. **Copy your Public Key** (looks like: `xxxxxxxxxxxxx`)

### Step 5: Update Your Code

Open `/components/Contact.tsx` and replace these values:

```typescript
const EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Your Service ID from Step 2
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // Your Template ID from Step 3
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxx'; // Your Public Key from Step 4
```

## 📧 Email Template Variables

The contact form sends these variables to EmailJS:

- `from_name` - Visitor's name from the form
- `from_email` - Visitor's email address
- `to_email` - Your email (mrfaizan726@gmail.com)
- `message` - The message from the visitor
- `reply_to` - Same as from_email for easy replies

## 🧪 Testing

1. Fill out your contact form on the portfolio
2. Submit the form
3. Check mrfaizan726@gmail.com for the email
4. Check the EmailJS dashboard for email logs

## 📊 EmailJS Free Tier Limits

- **200 emails per month**
- **2 email templates**
- **1 email service**
- Perfect for a portfolio website!

## 🔧 Troubleshooting

### Email Not Sending

1. Check browser console for errors
2. Verify all IDs are correct in Contact.tsx
3. Check EmailJS dashboard logs
4. Ensure Gmail service is connected

### Gmail Issues

- Make sure you authorized EmailJS to use your Gmail
- Check Gmail spam folder
- Verify "Less secure app access" is enabled (if needed)

### Template Issues

- Ensure template variable names match exactly
- Check template is active in EmailJS dashboard
- Verify "To Email" is set to mrfaizan726@gmail.com

## 🎯 Customization Options

### Auto-Reply Template

Create a second template to send automatic replies to visitors:

```
Subject: Thanks for reaching out!

Hi {{from_name}},

Thank you for contacting me! I've received your message and will get back to you as soon as possible.

Best regards,
Faizan Ali
Faizan Codes
```

Then update the code to send two emails (one to you, one auto-reply to visitor).

### Spam Protection

Consider adding:
- Google reCAPTCHA v3
- Rate limiting
- Honeypot fields

## 📱 Contact Information

Your contact form now sends to: **mrfaizan726@gmail.com**

## 🔗 Useful Links

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)

---

**Note**: Keep your EmailJS keys secure. While the Public Key is safe to use in frontend code, never commit private keys or service credentials to public repositories.
