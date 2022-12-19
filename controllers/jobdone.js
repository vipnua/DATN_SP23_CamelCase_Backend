import JOBDONE from "../models/jobdone";

export const list = async (req, res) => {
    try {
        const jobs = await JOBDONE.find().exec();
        res.json(jobs);
    } catch (error) {
        res.status(400).json({
            message: "Khong hien thi duoc san pham"
        })
    }
}
export const create = async (req, res) => {
    try {
        const job = await new JOBDONE(req.body).save();
        res.json(job)
    } catch (error) {
        res.status(400).json({
            message: "Khong them duoc"
        })
    }
}
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const job = await JOBDONE.findOneAndDelete(condition);
        res.json(job)
    } catch (error) {
        res.status(400).json({
            message: "Khong the xoa"
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const job = await JOBDONE.findOne(filter);
        res.json(job)
    } catch (error) {
        res.status(400).json({
            message: "Khong lay duoc san pham"
        })
    }
}