import express from "express";
import multer from "multer";
import User from "./Models/user"

const router = express.Router();

// Disk Storage
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const uploadDisk = multer({ storage: diskStorage });

router.post("/upload-disk", uploadDisk.single("image"), async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        image: req.file.path
    });
    await newUser.save();
    res.json({
        message: "File saved in disk & MongoDB",
        data: newUser
    });
});

// MemoryStorage
const memoryStorage = multer.memoryStorage();
const uploadMemory = multer({ storage: memoryStorage });

router.post("/upload-memory", uploadMemory.single("image"), async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        memoryImage: req.file.buffer
    });

    await newUser.save();

    res.json({
        message: "File saved in memory & MongoDB",
        data: newUser
    });
});
export default router;