const feedback = require('../models/feedback');
exports.getsalonfeedback = function( req , res){
    feedback.getfeedbackservice(req.params.id,function(data){
        if(data.length === 0){
            return res.json(
                [
                    {
                        id: 0
                    }
                    ,
                ]);
            }else{
                var dataR = [];
                data.forEach(element => {
                    dataR.push(
                        {   
                            "id":  element.id,
                            "userdeedback":  element.name,
                            "content": element.content,
                            "rating": element.rating,
                        }
                    )
                  });
                return res.json(dataR);
            }
          }
      )
}