import Profile from '../models/profile'

export const list = async (req, res) => {
    try {
        const profiles = await Profile.find().exec();
        res.json(profiles);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được hồ sơ"
        })
    }
}

            
export const read = async (req ,res) =>{
    const filter = { _id: req.params.id}
    try {
        const profile = await Profile.findOne(filter);
        res.json(profile)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy hồ sơ"
        })
    }
}

export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const profile = await Profile.findOneAndDelete(condition);
        res.json(profile)
    } catch (error) {
        res.status(400).json({
            message: "Không thể xoá"
        })
    }
}
