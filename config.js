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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_37_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk3LFxuICAgICAgICA5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0LFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR3pUMUlnaEdtYVlKK0JCdHZDclg2d1lZdEVEOEtaTVBIdFNmd2xrNmdTWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidDlXNVAxcVlSQmF1aXZmS2lXSnlwZ1wiLFxuICBcInBob25lSWRcIjogXCI5Y2FlZjcyNi1lZDFlLTRjZTEtYmU1Ni02NTIwNjgzNjY2YWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMjIxLFxuICAgICAgMTI2LFxuICAgICAgOTMsXG4gICAgICA3LFxuICAgICAgOTUsXG4gICAgICAyNTAsXG4gICAgICAyMDgsXG4gICAgICA5MCxcbiAgICAgIDI0MCxcbiAgICAgIDExNCxcbiAgICAgIDIwOCxcbiAgICAgIDIsXG4gICAgICAyMjQsXG4gICAgICAxNjksXG4gICAgICAxNjUsXG4gICAgICA3NyxcbiAgICAgIDE4MixcbiAgICAgIDIzNSxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgNDAsXG4gICAgICA5NCxcbiAgICAgIDEyMSxcbiAgICAgIDgwLFxuICAgICAgNzcsXG4gICAgICAxMzksXG4gICAgICAyMzMsXG4gICAgICAxOTQsXG4gICAgICAyNDEsXG4gICAgICA4OSxcbiAgICAgIDE4OSxcbiAgICAgIDI0NCxcbiAgICAgIDE3MSxcbiAgICAgIDEzNCxcbiAgICAgIDIzMyxcbiAgICAgIDEyNCxcbiAgICAgIDIwMyxcbiAgICAgIDIyMyxcbiAgICAgIDIyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTSjUxSkpITVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzEzNTcxMDgzOjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2RrvCdkbDwnZGt8J2Ru/CdkazwnZGrIPCdkbTwnZGrXCIsXG4gICAgXCJsaWRcIjogXCIyMjM5MTg1ODk3Njc4MTE6NDFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW1Vd2VVREVNZkpwTFVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGMkJTWXRaL1lVYUhxbk1ZU0Q0U3YyaEpwUlBlSnZJSk16NE5GL0tKdm5FPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBpZWZUZUh3ekM2QUpwUnhseVl3SnZVYitkSmZ5Y043TjV2Ui93bnZoMFhvWTJ4Y2IrTWgvdU1kUFIzejJRMmR5bnRVV2Z6ZHJ5SHU5ZlBVWU1veUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxmZnhSaWRUZGZhUlpkaTEvMDQ3ZlBrM3Blcm9lQUdUUE5NMGhScjdSR2tldysvQnZnSUMxMVlSbmJCN2EweFdNcWljWWRLMUdWdDQ2bjJSR0hmMmh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzU3MTA4Mzo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzYxMDM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnprXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKemsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTTWVTc01VZkJTd0FiZWwrWmFrNEVCQjgyWTZsN0h5UTcwb3R4L2lGbmg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMTgxODYyNDksXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjM2MDc0NzkwOFwifSIKfQ=="  // PUT your SESSION_ID 


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
