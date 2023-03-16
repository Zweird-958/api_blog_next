import config from "@/api/config";
import log from "@/api/middlewares/log";
import mongoose from "mongoose";
import { productionBrowserSourceMaps } from "../../next.config";

const mw = (handlersByMethod) => async (req, res) => {
  const { method } = req; // POST/GET...
  console.log("MW");
  const handlers = handlersByMethods[method]; // Récupère la fonction par rapport à la méthode

  if (!handlers) {
    res.status(404).send({ error: "not foound" });

    return;
  }

  await mongoose.connect(config.db.uri);

  try {
    let handlerIndex = 0;
    const next = async () => {
      // Récupère chaque fonction de la méthode
      const handler = handlers[handlerIndex];
      handlerIndex += 1;

      // l'éxecute
      await handler(req, res, next);
    };

    await log(req, res, next);
  } finally {
    await mongoose.disconnect();
  }
};

export default mw;
