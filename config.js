const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="dylanmt1200@gmail.com"
global.location="Plumtree,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://test:<test>@cluster0.axdtbzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "DARKNET MODZ" 


global.devs = "263713571083" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263713571083";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_31_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MixcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0LFxuICAgICAgICA3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDc2LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU1LFxuICAgICAgICA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICA3NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxaHBQOHVZRmxRRSs5M2lqVUhxNXVSdTF1bFFYTHVIWlduNjVHd04xT2xjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxMzU3MTA4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkRCQTRBRDYzOUQ5QjY2NjNEM0ZBM0UxREU1RjI3MzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzc3ODU3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzEzNTcxMDgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNEU3ODBDMjRENzZFNEEzODlCMThGMTQzRjcyNzEyQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNzc4NTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTM1NzEwODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNBMDI1MzQ4MUY1RTlEQzY5OTExQjdBNkVDMTBFOTk4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTM3Nzg2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxMzU3MTA4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjQ5NEM0NzkwMkJGQUY3Mzc4MjZFQUQwNDMxM0Q0QkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzc3ODYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNIeDlFVkdEUmUyVVNTVkNlQllvUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWM5NzZhMjEtNTIyZi00N2ZlLWIwM2YtZWM4MDk2YmFjNWVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDIzMixcbiAgICAgIDQzLFxuICAgICAgMTY3LFxuICAgICAgMTM2LFxuICAgICAgMTUwLFxuICAgICAgMTUwLFxuICAgICAgMCxcbiAgICAgIDQ3LFxuICAgICAgMTYwLFxuICAgICAgMTkxLFxuICAgICAgMTk0LFxuICAgICAgMTAzLFxuICAgICAgNDksXG4gICAgICAxODEsXG4gICAgICAxMzcsXG4gICAgICA3MCxcbiAgICAgIDE4OSxcbiAgICAgIDE0MSxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICA2OSxcbiAgICAgIDI0NSxcbiAgICAgIDE3MSxcbiAgICAgIDI1MSxcbiAgICAgIDE0NyxcbiAgICAgIDkwLFxuICAgICAgMjE3LFxuICAgICAgNCxcbiAgICAgIDE0OSxcbiAgICAgIDE3MSxcbiAgICAgIDc0LFxuICAgICAgNTUsXG4gICAgICAyNDAsXG4gICAgICAxMDksXG4gICAgICAyMjgsXG4gICAgICA1MyxcbiAgICAgIDk3LFxuICAgICAgMTY4LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVYNFJUTDlRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTM1NzEwODM6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMzkxODU4OTc2NzgxMToyMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEZWVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNRDc0Nm9HRUx6STZMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlQyeFhhL3pLbWxmN0hvaGpCOUVQOWVFWlE0U0ZLMG1YRzAzTWYrNHRPbFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT3F5ekFEaGpIS2hlczh4a3dKemxZLzVtRHE0eUt0anlxRkdaWW5SQUdmZEdIU1ArTFNKSUtDeFdYWWFKRkwwMi9JK3pJdFgvbGdVN242YUx3L1Z1Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZCtBVTRSc2cxY0tEdTBUT3lnbHMvK3RHaUxpRjMrUlEwN3NCM1RhQU54bVh3Wi8xcXhPRmxpQWpNRUdPQXZUaUxlVUQzQlc2azR3UHpBcTFia0JjRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzEzNTcxMDgzOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM3Nzg1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlaVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVpULmpzb24iOiAie1wia2V5RGF0YVwiOlwiQnlIMytxMUJMZmZ0WnZVWVVBRmRsd205UEVjdytaQ29UV3hnb2tmSW1END1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzAwMzMwOTQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzNzc4NTg5ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".,#,!,$",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "da_rknetzw",
  packname: process.env.PACK_NAME || "Dax2024",
  botname : process.env.BOT_NAME  || "DARKNET MD♧",
  ownername:process.env.OWNER_NAME|| "DYLAN TAP",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
