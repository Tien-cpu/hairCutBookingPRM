const feedback = require('../models/feedback');
exports.getsalonfeedback = function( req , res){
    console.log("salon id: "+req.params.id)
    // return res.json(
    //     [
    //         {   
    //             "id": 1,
    //             "userdeedback": 'Nguyễn Văn A',
    //             "content": 'Salon làm rất đẹp tôi rất hài lòng',
    //             "rating": 5,
    //         },
    //         {   
    //             "id": 1,
    //             "userdeedback": 'Nguyễn Văn B',
    //             "content": 'Salon làm rất đẹp tôi rất hài lòng',
    //             "rating": 4,
    //         },
    //         {   
    //             "id": 1,
    //             "userdeedback": 'Nguyễn Văn C',
    //             "content": 'Salon làm rất đệp nhưng vẫn cần cải thiện thêm',
    //             "rating": 5,
    //         },
    //     ]);
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
                console.log(data)
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