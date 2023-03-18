import nodemailer from 'nodemailer'

// create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_TSL,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
})

export function sendMail(toMail: string, verifyUrl: string) {
  const mailOptions = {
    from: process.env.SMTP_USERNAME, // sender address
    to: toMail, // list of receivers
    subject: 'ChatGPT Web 账号验证', // Subject line
    html: `
    <div class="page flex-col">
    <div class="box_3 flex-col" style="
    display: flex;
    position: relative;
    width: 100%;
    height: 206px;
    background: #ef859d2e;
    top: 0;
    left: 0;
    justify-content: center;
  "><div class="section_1 flex-col" style="
    background-image: url(&quot;https://ghproxy.com/https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg&quot;);
    position: absolute;
    width: 152px;
    height: 152px;
    display: flex;
    top: 130px;
    background-size: cover;
    border-radius: 50%;
    margin: 10px;
  "></div></div>
    <div class="box_4 flex-col" style="
    margin-top: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;
  ">
      <div class="text-group_5 flex-col justify-between" style="
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
  ">
        <span class="text_1" style="
    font-size: 26px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #000000;
    line-height: 37px;
    text-align: center;
    "><target="_blank" style="text-decoration: none; color: #0088cc;">ChatGPT Web</a> 账号验证</span>
    
      <div class="box_2 flex-row" style="
    margin: 0 20px;
    min-height: 128px;
    background: #F7F7F7;
    border-radius: 12px;
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 16px;
    width: calc(100% - 40px);
  ">
        
        <div class="text-wrapper_4 flex-col justify-between" style="
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-bottom: 16px;
  ">
  <hr>
  <span class="text_3" style="
  <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
  <h1 style="color: #0088cc;">
    感谢您使用 
    <target="_blank" style="text-decoration: none; color: #0088cc;">ChatGPT Web</a>，
    您的邮箱验证链接为（12小时内有效）：
  </span>
        </div><hr style="
      display: flex;
      position: relative;
      border: 1px dashed #ef859d2e;
      box-sizing: content-box;
      height: 0px;
      overflow: visible;
      width: 100%;
  "><div class="text-wrapper_4 flex-col justify-between" style="
    display: flex;
    flex-direction: column;
    margin-left: 30px;
  ">
  <hr>
  </h1>
  <p style="margin-top: 20px;">
    请点击以下按钮进行验证：
  <span class="text_4" style="
  margin-top: 6px;
  margin-right: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 22px;
  "></span>
        </div>
        
        <a class="text-wrapper_2 flex-col" style="
    min-width: 106px;
    height: 38px;
    background: #ef859d38;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin: auto;
    margin-top: 32px;
  " href="${verifyUrl}">
          <span class="text_5" style="
    color: #DB214B;
  ">点我验证</span>
        </a>
      </div>
      <div class="text-group_6 flex-col justify-between" style="
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 34px;
  ">
        <span class="text_6" style="
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #00000045;
    line-height: 17px;
  ">此邮件由服务器自动发出，直接回复无效。</span>
        <a class="text_7" style="
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #DB214B;
    line-height: 17px;
    margin-top: 6px;
    text-decoration: none;
  " href="https://github.com/Chanzhaoyu/chatgpt-web">项目作者</a>
        <a class="text_8" style="
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #DB214B;
        line-height: 17px;
        margin-top: 6px;
        text-decoration: none;
      " href="https://github.com/Kerwin1202/chatgpt-web">邮箱注册作者</a>
      </div>
    </div>
  </div>
    `, // html body
  }


  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error)
      throw error
    else
      return info.messageId
  })
}
