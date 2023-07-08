const searchProductController = async (req, res) =>{
    try {
        const { keyword } = req.params;
        const resutls = await productModel
          .find({
            $or: [
              { name: { $regex: keyword, $options: "i" } },
              { description: { $regex: keyword, $options: "i" } },
            ],
          })
          .select("-photo");
        res.json(resutls);
      } catch (error) {
        console.log(error);
        res.status(400).send({
          success: false,
          message: "Error In Search Product API",
          error,
        });
      }
}





 module.exports= searchProductController