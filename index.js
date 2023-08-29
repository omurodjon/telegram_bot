const telegramApi = require("node-telegram-bot-api");
const token = "5909896027:AAFD5demBsxBc9A7d3c8s4nH-R6xvYzbe0Y";

const bot = new telegramApi(token, { polling: true });

function start() {
  bot.setMyCommands([
    { command: "/start", description: "Start" },
    { command: "/info", description: "User info" },
    { command: "/clear", description: "Clear" },
  ]);
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.eu/_/stickers/463/343/46334338-7539-4dae-bfb6-29e0bb04dc2d/192/11.webp",
        console.log(msg)
      );
      return bot.sendMessage(
        chatId,
        `Salom Hush Kelibsiz meni Murojon Orifjonov yaratgan  https://www.instagram.com/m__orifjonov/`
      );
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `Telegramdagi nikingiz : '${msg.from.first_name} 
         User: '${msg.from.username}'`
      );
    }
    if (text === "/clear") {
      bot.clearTextListeners(chatId, "/clear");
    }
    if (text.toLowerCase() === "salom") {
      bot.sendMessage(chatId, `Salom ${msg.from.first_name} 😊`);
    } else {
      return bot.sendMessage(chatId, "Ko'p gapirishni yomon ko'raman 😒");
    }

    // ishlamayapti

    if (text.toLowerCase() === "nma gap") {
      bot.sendMessage(chatId, `Nmedi ${msg.from.first_name} 😒`);
    } else {
      return bot.sendMessage(chatId, "Ko'p gapirishni yomon ko'raman 😒");
    }
  });
}
start();

//    ishlamayapti ikkinchi fn ?

// function messsage() {
//   bot.on("message", async (msg) => {
//     const msText = msg.text;
//     const msChatId = msg.chat.id;
//     if (msText.toLowerCase() === "Hello") {
//       bot.sendMessage(msChatId, `Hello ${ms.from.first_name} 😊`);
//       console.log(msChatId);
//     } else {
//       return bot.sendMessage(msChatId, "Men hali gaplashishni bilmiman ");
//     }
//   });
// }
// messsage();
