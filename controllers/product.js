import Product from '../models/product'

// API list san pham
export const list = async (req, res) => {
    try {
        const products = await Product.find().exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Khong tim duoc san pham"
        })
    }
}

            

// API them san pham
export const create = async (req, res) => {
    try {
        // Dữ liệu từ form client gửi lên
        const product = await new Product(req.body).save();
        res.json(product)    
    } catch (error) {
        res.status(400).json({
            message: "Khong them duoc"
        })
    }
}

// API Lay san pham theo id
export const read = async (req ,res) =>{
    const filter = { _id: req.params.id}
    try {
        const product = await Product.findOne(filter);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Khong lay duoc san pham"
        })
    }
}

// API Xoa san pham
export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const product = await Product.findOneAndDelete(condition);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Khong the xoa"
        })
    }
}

// API Tim san pham
export const search = async (req, res) => {
    const SearchString = req.query.q ? req.query.q : ""
    try {
        const result = await Product.find( { $text: { $search: SearchString } } ).exec()
        res.json(result)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

// API Cap nhat san pham
export const update = async (req, res) => {
    // lấy id sản phẩm được truyền lên
    const condition = { _id: req.params.id};
    // nội dung cập nhật
    const doc = req.body;
    // trả về nội dung đã cập nhật xong
    const option = { new: true};
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Khong the cap nhat"
        })
    }
}
