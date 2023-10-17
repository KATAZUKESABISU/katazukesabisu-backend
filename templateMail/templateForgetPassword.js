module.exports.templateForgetPassword = (username, code) => {
    return `<div style="background-color: #666;">
    <div style="display: flex; justify-content: center;  padding: 100px 0 50px 0">
        <div style="width: 600px; height: fit-content; background-color: white;">
            <div
                style="padding: 36px 24px 10px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
                <h1 style="text-align: center; color: chartreuse; margin-bottom: 0px; font-weight: 900;">
                    KATAZUKESABISU</h1>
                <p style=" margin: 0; font-size: 16px; text-align: center;
                    letter-spacing: -1px;">
                    Reset Password</p>
            </div>
            <div
                style="align-items: start; padding: 20px 50px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
                <div style="margin: 0;">Hi <span style="font-weight: bold;">${username}</span>,</div>
                <div style="margin: 0;">There was a request to change your password!</div>
                <div style="margin: 0;">If you did not make this request then please ignore this email.
                </div>
            </div>
            <div style="display: flex; justify-content: space-around;">
                <div style="padding: 5px 50px 5px 50px;">
                    <div
                        style="align-items: center; margin-right: 10px; display: flex; align-items: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                        <h3>Code:</h3>
                    </div>
                </div>
                <div style="display: flex; justify-content: center; border-radius: 20px; width: 300px; background-color: #cccccc; ">
                    <div target="_blank"
                        style="margin: 15px 0; display: inline-block; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 40px; color: black; text-decoration: none; border-radius: 6px; letter-spacing: 7px;">
                        ${code}</div>
                </div>
            </div>
            <div
                style="align-items: start; padding: 50px 50px 25px 50px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
                <p style="margin: 0;">Thanks & Best regards</p>
            </div>
            <div style="background-color: #e9ecef; display: flex; flex-flow: column;">
                <div
                    style="padding: 30px 100px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
                    <div style="margin: 0;">You received this email because we received a request for
                        reset password for your account. If you didn't request reset password you can safely
                        delete this email.</div>
                </div>
                <div
                    style="padding: 0px 24px 10px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666; background-color: #e9ecef;">
                    <div style="margin: 0; display: flex; justify-content: center;">Ha Noi - Viet Nam</div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
};
