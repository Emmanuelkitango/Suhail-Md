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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_55_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MixcbiAgICAgICAgNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxODAsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDg3LFxuICAgICAgICA3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlQxY1BjWkpyZUE1S00vcmtCNSswVUJNMEtGR0NaRmFQa1BmbHlOSXhRdzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzU3MTA2Mzk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzOTZCNDdBOTc3M0M1MzgxMjJEQjFFOENDODRBMDIxM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4MzkzNDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOU10QVpuVFhUby14V09Rb1ZlbjhpUVwiLFxuICBcInBob25lSWRcIjogXCIyYTUxNjkyYy02YTIyLTRkNWItYjk1ZC0zNjgzZGJkMzkzODJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMTUyLFxuICAgICAgNjEsXG4gICAgICAyMzQsXG4gICAgICAyMTMsXG4gICAgICAxMTAsXG4gICAgICA2MCxcbiAgICAgIDIzMyxcbiAgICAgIDExMyxcbiAgICAgIDIzOCxcbiAgICAgIDk2LFxuICAgICAgMTU3LFxuICAgICAgNDgsXG4gICAgICAxNixcbiAgICAgIDExOCxcbiAgICAgIDExMyxcbiAgICAgIDIwNSxcbiAgICAgIDQ5LFxuICAgICAgMTUwLFxuICAgICAgMjI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgNzQsXG4gICAgICA1NyxcbiAgICAgIDE0MSxcbiAgICAgIDEwMyxcbiAgICAgIDQ3LFxuICAgICAgMTQ4LFxuICAgICAgMTc1LFxuICAgICAgMjE0LFxuICAgICAgMjEsXG4gICAgICA1OCxcbiAgICAgIDUyLFxuICAgICAgMjU0LFxuICAgICAgMTA1LFxuICAgICAgMTgxLFxuICAgICAgNDQsXG4gICAgICA0OCxcbiAgICAgIDEyMSxcbiAgICAgIDU1LFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc2TUtKNTNRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTcxMDYzOTU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYwMTU5NzMzMTIxMTQyOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRW1tYW51ZWwgS29lY2ggS2l0YW5nb1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ042U254d1FwdG5IdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWszR0sraUdQYnN5cVBmL2VEN0I4OVRRT0xxTFZNenM5bGFlZ2crK29GQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWUWorTzBkU3loN0dpeFdLT2RpL1JNZTZCSXBxNUtlbTlWdEhnMzNZM3JGWVRtMGRaYzNxR1I1TFlOUzlmRFBLL3doWTRITWNoL3VsVFBRUUMvUitEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5bi9HNUIxSUNxOGsyZzNhTWJIVFg1OVhXTTM0YkptVmFzMmd5VzZsUTRHckYvdEdSTGFjNWNTaDl3U1NjUHB6Rm10MVNpNTluM2l2WmlnYm9GalpDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTcxMDYzOTU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4MzkzMzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQQkFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBCQS5qc29uIjogIntcImtleURhdGFcIjpcIkN0MFdRQ2Z0Nit0d0FIVU02UGlGcksvaUZURUpuKzIwN1ZqMFhFdGp4WGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTkyMzA1NTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
