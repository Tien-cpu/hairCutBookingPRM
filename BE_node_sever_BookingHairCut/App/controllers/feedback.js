exports.getsalonfeedback = function( req , res){
    console.log("salon id: "+req.params.id)
    return res.json(
        [
            {   
                "id": 1,
                "userdeedback": 'Nguyễn Văn A',
                "content": 'Salon làm rất đẹp tôi rất hài lòng',
                "rating": 5,
            },
            {   
                "id": 1,
                "userdeedback": 'Nguyễn Văn B',
                "content": 'Salon làm rất đẹp tôi rất hài lòng',
                "rating": 4,
            },
            {   
                "id": 1,
                "userdeedback": 'Nguyễn Văn C',
                "content": 'Salon làm rất đệp nhưng vẫn cần cải thiện thêm',
                "rating": 5,
            },
        ]);
}