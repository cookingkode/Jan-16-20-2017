function work(job){
	console.log("Working on ");
	console.log(arguments);
}
work("Eating");
work("sleeping","Eating");
work(false);
work();
work("what",'the','hell','is','going','on?');