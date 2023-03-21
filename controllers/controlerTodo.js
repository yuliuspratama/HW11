const {HW11_development} = require("../models/")

class ControlerTodo{

    static findAll =  async(req,res,next) => {

        try {
            const data = await HW11_development.findAll({
                where: {
                    status : "active"
                }
            });
            res.status(200).json(data);
            
        } catch (err) {
            next(err)
        }
    }

    static findOne = async (req,res,next) =>{
        const {id} = req.params
        try {
            const data = await HW11_development.findOne({
                where : {
                    id,
                    status : "active"
                }
            });
            if(data){
                res.status(200).json(data);
            } else {
                throw{Error: "Notfound"}
            }
            
            
        } catch (err) {
            next(err)
        }
    }
    static add = async (req,res,next) =>{
        try {
            const {title} = req.body;
            const status = "active";
            const data = await HW11_development.create({
                title,
                status
            })
            res.status(200).json(data)
            
            
        } catch (err) {
            next(err)
        }
    }

    static delete = async (req,res,next) =>{
        try {
            const {id} = req.params;
            const status = "inactive";
            const data = await HW11_development.update({
                status : status
            },{
                where : {
                    id
                }
            })
            console.log(data)
            res.status(200).json(data)
            
            
        } catch (err) {
            next(err)
        }
    }
    static update = async (req,res,next) =>{
        try {
            const {id} = req.params;
            const {title} = req.body;
            const data = await HW11_development.update({
                title : title
            },{
                where : {
                    id
                }
            })
            console.log(data)
            res.status(200).json(data)
            
            
        } catch (err) {
            next(err)
        }
    }

}

module.exports = ControlerTodo;