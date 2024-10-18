import { sendMessage } from "../telegraf";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Если это запрос OPTIONS, отвечаем на него сразу
  if (req.method === "OPTIONS") {
    res.status(200).end(); // Останавливаем обработку для preflight
    return;
  }
  const { name, phone, email, message } = req.query;

  const getInfo = await sendMessage(
    `Имя ${name} почта ${email}, phone ${
      "https://wa.me/8" + phone
    }, сообщение= ${message}`
  );
  res.send(getInfo);
};
