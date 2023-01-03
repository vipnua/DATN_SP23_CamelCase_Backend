import Jobsave from "../models/jobsave";

export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
    try {
        const jobSave = await Jobsave.findOneAndDelete(condition);
        res.json(jobSave)
    } catch (error) {
        res.status(400).json({
            message: "Khong the xoa"
        })
    }
}
export const read = async (req, res) => {
    const filter = { _id: req.params.id }
    try {
        const jobSave = await Jobsave.findOne(filter);
        res.json(jobSave)
    } catch (error) {
        res.status(400).json({
            message: "Khong lay duoc san pham"
        })
    }
}