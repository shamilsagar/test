/**
 * imageconfigController
 *
 * @description :: Server-side logic for managing imageconfigs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
 fs=require('fs');
 module.exports = {
 	'new': function(req,res){
 		res.view();

 	},
 	'finddb': function(req,res){
 		res.view();

 	},
	//'searchdb' :function(req,res){
	//	res.view();
	//},
	create: function(req,res,next){
		

		var UPLOAD_PATH = '';
		var im=req.param('pathtoimg');
		var cat=req.param('category');
	//var cat2=cat+','+cat1;
	console.log(req.params.all());
	//console.log("unda"+cat);
	var resu=req.param('category');
	
	
	if(cat[0]==='whiskey' && cat[1]==='beer'){
		var UPLOAD_PATH='/images/beer_whiskey';
		var impath=UPLOAD_PATH+'/'+im;
		var options={
			category:cat,
			imgtopath:impath
		};
		imageconfig.create(options,function beerdbcreated(err,imageconfig){	
			if(err) return next(err);
			res.send("somethings is wrong");
			res.json(imageconfig);
			
			
		});	
	}
	else if(cat==='whiskey'){
		UPLOAD_PATH='/images/whiskey';
		var impath1=UPLOAD_PATH+'/'+im;
		var options={
			category:cat,
			imgtopath:impath1};
			imageconfig.create(options,function whiskeydbcreated(err,imageconfig){	
				if(err) return next(err);
				res.send("somethings is wrong");
				res.json(imageconfig);
				
				
			});	
		}
		
		else if(cat==='beer'){
			UPLOAD_PATH='/images/beer';
			var impath1=UPLOAD_PATH+'/'+im;
			var options={
				category:cat,
				imgtopath:impath1};
				imageconfig.create(options,function whiskeydbcreated(err,imageconfig){	
					if(err) return next(err);
					res.send("somethings is wrong");
					res.json(imageconfig);
					
					
				});	
			}

		},

		searchdb: function(req,res,next){
			var str2=req.param('searchstr');

			if(str2!==undefined){
				result = str2.split(",");
			}
			console.log(result);
			
			var options={category:{$all:result}};
			

			imageconfig.find(options,function searchingdb(err,imageconfig){
				if(err){
					
					return next(err);

				}
				else{
					var flag=1;
					res.view({
						imageconfig:imageconfig

					});

				}
				console.log(flag);
				if(flag!==1){
					imageconfig.find({category:result[0]}, function searchingdb(err,imageconfig){
						if(err) return next(err);
						res.view({
							imageconfig:imageconfig

						});

					});


				}
				
				
			});
			

		}

		

	};

