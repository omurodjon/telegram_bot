const { func } = require("assert-plus");
const telegramApi = require("node-telegram-bot-api");
const token = "5909896027:AAFD5demBsxBc9A7d3c8s4nH-R6xvYzbe0Y";

const { gameOptions, againOptions } = require("./options");

const bot = new telegramApi(token, { polling: true });

const chats = {};

async function startGame(chatId) {
  await bot.sendMessage(chatId, "0 dan 10 bolgan son oyleman sen topasan ");
  const randomNumber = Math.floor(Math.random() * 10);
  chats[chatId] = randomNumber;
  await bot.sendMessage(chatId, "Top", gameOptions);
}

function start() {
  bot.setMyCommands([
    { command: "/start", description: "Salomlashuv" },
    { command: "/info", description: "Malumotlaringiz" },
    { command: "/game", description: "Oyincha" },
  ]);
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.eu/_/stickers/463/343/46334338-7539-4dae-bfb6-29e0bb04dc2d/192/11.webp"
      );
      return bot.sendMessage(
        chatId,
        `Salom Hush Kelibsiz meni Murojon Orifjonov yaratgan `
      );
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `Telegramdagi nikingiz : '${msg.from.first_name}'`
      );
    }
    if (text === "/game") {
      return startGame(chatId);
    }
    return bot.sendMessage(
      chatId,
      "Men seni tushunmayappan. Tushuntiribro yoz !"
    );
    //
  });

  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    if (data === "/again") {
      return startGame(chatId);
    }
    if (data === chats[chatId]) {
      return await bot.sendMessage(chatId, "Malades topting", againOptions);
    } else {
      return await bot.sendMessage(chatId, "Ola topomading", againOptions);
    }
  });
}
start();
