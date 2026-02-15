import sql from "../configs/db.js";

// get a single users all creations
export const getUserCreations = async (req, res) => {
  try {
    const { userId } = req.auth();

    const creations =
      await sql` SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;

    res.json({ success: true, creations });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// get all published creations
export const getPublishedCreations = async (req, res) => {
  try {
    const creations =
      await sql` SELECT * FROM creations WHERE published = true ORDER BY created_at DESC`;

    res.json({ success: true, creations });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
