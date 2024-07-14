const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254757106395";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_20_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0LFxuICAgICAgICA2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICA5OCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTExLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDkyLFxuICAgICAgICA3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU2czTEJWeElRYUlYclhjdTdkU2RoZ1BGT1N1TU5tL211VFU0VlZVRDVRZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZWUtRU9VZC1RZHU1Y0RoX2FXaUdYd1wiLFxuICBcInBob25lSWRcIjogXCJhNzNjMzZjMi1kMGIwLTQwMjYtOGNmNC1lNjhiYjRhNzdiN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMjQ1LFxuICAgICAgMTEzLFxuICAgICAgMjUwLFxuICAgICAgMjIzLFxuICAgICAgMTksXG4gICAgICAyMzYsXG4gICAgICAyMCxcbiAgICAgIDExMCxcbiAgICAgIDE1MSxcbiAgICAgIDExOSxcbiAgICAgIDEyOCxcbiAgICAgIDEyOCxcbiAgICAgIDE2NyxcbiAgICAgIDExMCxcbiAgICAgIDE3NCxcbiAgICAgIDE1MixcbiAgICAgIDE4OCxcbiAgICAgIDEzNCxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDY3LFxuICAgICAgMTQxLFxuICAgICAgMzMsXG4gICAgICAyMDIsXG4gICAgICAxMTEsXG4gICAgICAxNTMsXG4gICAgICAyMzksXG4gICAgICA1OCxcbiAgICAgIDIzMyxcbiAgICAgIDEzNixcbiAgICAgIDExLFxuICAgICAgMjM0LFxuICAgICAgMTIsXG4gICAgICAzNSxcbiAgICAgIDYyLFxuICAgICAgNDgsXG4gICAgICAxOTUsXG4gICAgICAxNzYsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSktQQ1pTR0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1NzEwNjM5NTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjAxNTk3MzMxMjExNDI6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPT1NueHdRa0tUTnRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFrM0dLK2lHUGJzeXFQZi9lRDdCODlUUU9McUxWTXpzOWxhZWdnKytvRkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibTUwcEJIUUZ0NkhFS0xoMy9hTDRBTkl2UkQxRlR2UjNyK1ViM1dtMS82dCtVU3VCWjJOTlRUdURrakI3OUhrRnVvSmUraGtXa0IrUkxUYW9XSURxRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibkhKWXlzSlltT01RWEh5bWdGMDZFOW9IVlllWDhYc3FXVEhTa3VaR0RIWE9VZ0dLME83Y3cvczF5VTFPOG9MT3QxODU5MGFKUGM4T1ZHb3BtczRRaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU3MTA2Mzk1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTMwODM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEJJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQQkkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWT2E4ZlVMangvdzByZG90TDFXQ3M5eDJmcW1uVzN3bjNCbXJZbFB1eW1zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5MjMwNTYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwODk2NzIyODcxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
