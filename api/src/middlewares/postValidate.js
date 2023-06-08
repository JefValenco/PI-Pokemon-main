const postValidate = (req, res, next) => {
  const { name, life, attack, defense, speed, height, weight, image, types } =
    req.body;
  if (!name) return res.status(400).json({ error: "Missing name!" });
  if (!life) return res.status(400).json({ error: "Missing life!" });
  if (!attack) return res.status(400).json({ error: "Missing attack!" });
  if (!defense) return res.status(400).json({ error: "Missing defense!" });
  if (!speed) return res.status(400).json({ error: "Missing speed!" });
  if (!height) return res.status(400).json({ error: "Missing height!" });
  if (!weight) return res.status(400).json({ error: "Missing weight!" });
  if (!image) return res.status(400).json({ error: "Missing image!" });
  if (!types) return res.status(400).json({ error: "Missing types!" });

  next();
};

module.exports = { postValidate };
