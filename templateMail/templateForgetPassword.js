module.exports.templateForgetPassword = (username, code) => {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Password Reset</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
            /**
    * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
    */
            @media screen {
                @font-face {
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 400;
                    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
                }
    
                @font-face {
                    font-family: 'Source Sans Pro';
                    font-style: normal;
                    font-weight: 700;
                    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
                }
            }
    
            /**
    * Avoid browser level font resizing.
    * 1. Windows Mobile
    * 2. iOS / OSX
    */
            body,
            table,
            td,
            a {
                -ms-text-size-adjust: 100%;
                /* 1 */
                -webkit-text-size-adjust: 100%;
                /* 2 */
            }
    
            /**
    * Remove extra space added to tables and cells in Outlook.
    */
            table,
            td {
                mso-table-rspace: 0pt;
                mso-table-lspace: 0pt;
            }
    
            /**
    * Better fluid images in Internet Explorer.
    */
            img {
                -ms-interpolation-mode: bicubic;
            }
    
            /**
    * Remove blue links for iOS devices.
    */
            a[x-apple-data-detectors] {
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                color: inherit !important;
                text-decoration: none !important;
            }
    
            /**
    * Fix centering issues in Android 4.4.
    */
            div[style*="margin: 16px 0;"] {
                margin: 0 !important;
            }
    
            body {
                width: 100% !important;
                height: 100% !important;
                padding: 0 !important;
                margin: 0 !important;
            }
    
            /**
    * Collapse table borders to avoid space between cells.
    */
            table {
                border-collapse: collapse !important;
            }
    
            a {
                color: #1a82e2;
            }
    
            img {
                height: auto;
                line-height: 100%;
                text-decoration: none;
                border: 0;
                outline: none;
            }
        </style>
    </head>
    
    <body style="background-color: #e9ecef;">
        <div class="preheader"
            style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
            A preheader is the short summary text that follows the subject line when an email is viewed in the inbox.
        </div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td align="center" bgcolor="#e9ecef">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                        <tr>
                            <td align="center" valign="top" style="padding: 36px 24px;">
    
                                </a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e9ecef">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                        <tr>
                            <td align="left" bgcolor="#ffffff"
                                style="padding: 36px 24px 10px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                                <h1 style="text-align: center; color: chartreuse; margin-bottom: 0px; font-weight: 900;">
                                    KATAZUKESABISU</h1>
                                <p style=" margin: 0; font-size: 16px; text-align: center;
                                    letter-spacing: -1px;">
                                    Reset Password</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="center" bgcolor="#e9ecef">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                        <tr>
                            <td align="left" bgcolor="#ffffff"
                                style="padding: 20px 50px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                                <p style="margin: 0;">Hi <span style="font-weight: bold;">${username}</span>,</p>
                                <p style="margin: 0;">There was a request to change your password!</p>
                                <p style="margin: 0;">If you did not make this request then please ignore this email.</p>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" bgcolor="#ffffff" style="padding: 5px 50px 5px 50px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr style="display: flex; justify-content: space-around;">
                                        <td align="center"
                                            style="margin-right: 10px; display: flex; align-items: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                            <h3>Code:</h3>
                                        </td>
                            </td>
                            <td align="center" bgcolor="#cccccc" style="border-radius: 20px; width: 300px;">
                                <p target="_blank"
                                    style="margin: 15px 0; display: inline-block; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 40px; color: black; text-decoration: none; border-radius: 6px; letter-spacing: 7px;">
                                    ${code}</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td align="left" bgcolor="#ffffff"
                    style="padding: 50px 50px 25px 50px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                    <p style="margin: 0;">Thanks & Best regards</p>
                </td>
            </tr>
        </table>
        </td>
        </tr>
        <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" bgcolor="#e9ecef"
                            style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                            <p style="margin: 0;">You received this email because we received a request for
                                reset password for your account. If you didn't request reset password you can safely
                                delete this email.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" bgcolor="#e9ecef"
                            style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                            <p style="margin: 0;">Ha Noi - Viet Nam</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        </table>
    </body>
    
    </html>
    `;
};
