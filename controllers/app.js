var fb_parser = require('fb-signed-parser');

exports.home = function(req, res){
    function out(){
        var data = fb_parser.parse(req.param('signed_request'),'cb1518ac31e4a6b8ef846af908fe7b3e');
        data.title = 'Demo app Tab';
        data.facebook = {};
        data.facebook.app = {};
        data.facebook.app.id = '153397084866395';
        data.like = ( data.page.liked ) ? 1 : 0;

        if( data.page.liked ){
            res.render('home',{data:data});
        }
        else{
            res.render('like',{data:data});
        }
    }

    return out();

}