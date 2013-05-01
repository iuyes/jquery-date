(function($) {

jQuery.Date = function(options) {

  	var date = new Date();
	var year;
	var month;
	var day;
	
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var shortMonths = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

	var settings = $.extend({
		day : 'dd',
		month: 'mm',
		year: 'yyyy',
		seperator: '-',
		format:null
	}, options);
	
	                           
	if(null === settings.format){
		day = getDay();
		month = getMonth();
		year = getYear();
		var finalDate =  year + settings.seperator + month + settings.seperator + day;
		return finalDate;
	}
	else{
		day = extractDay();
		month = extractMonth();				
		year = extractYear();
		if(day === 'invalid' || month === 'invalid' || year === 'invalid')
			return 'Format specified is wrong. Please see documentation on valid date format'
		var finalDate = settings.format;
		finalDate =  finalDate.replace(settings.day, day);
		finalDate =  finalDate.replace(settings.month, month);
		finalDate =  finalDate.replace(settings.year, year);
		return finalDate;			
	}
	
	function extractYear(){
		var yearFormat;
		var str = settings.format;
		str1 = str.toLowerCase();
		lastIndex = str1.lastIndexOf('y');
		firstIndex = str1.indexOf('y');
		length = lastIndex-firstIndex+1;
		if(firstIndex != -1 && lastIndex != -1 && (length === 2 || length === 4))
			yearFormat = str.substr(firstIndex, length);
		else
			return 'invalid';
		settings.year = yearFormat;
		return getYear();
	}

	function extractDay(){
		var dayFormat;
		var str = settings.format;
		str1 = str.toLowerCase();
		lastIndex = str1.lastIndexOf('d');
		firstIndex = str1.indexOf('d');
		length = lastIndex-firstIndex+1;
		if(firstIndex != -1 && lastIndex != -1 && length<=2)
			dayFormat = str.substr(firstIndex, length);
		else
			return 'invalid';
		settings.day = dayFormat;
		return getDay();
	}
	
	function extractMonth(){
		var monthFormat;
		var str = settings.format;
		str1 = str.toLowerCase();
		lastIndex = str1.lastIndexOf('m');
		firstIndex = str1.indexOf('m');
		length = lastIndex-firstIndex+1;
		if(firstIndex != -1 && lastIndex != -1 && length<=2)
			monthFormat = str.substr(firstIndex, length);
		else
			return 'invalid';
		settings.month = monthFormat;
		return getMonth();
	}
	
	
	
	function getDay(){
		//Format Day
		var days = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
		if('d' === settings.day) {
			day = date.getDate().toString();
		}
		else if('dd' === settings.day){
			day = date.getDate().toString();
			day = day[1]?day:"0"+day[0];
		}
		else if('D' === settings.day){
			day = date.getDay();
			day = days[day];
		}
		return day;
	}
	
	function getMonth(){
		//Format Month
		if('m' === settings.month) {
			month  = (date.getMonth()+1).toString(); // getMonth() is zero-based
		}
		else if('mm' === settings.month) {
			month  = (date.getMonth()+1).toString();
			month = month[1]?month:"0"+month[0];
		}
		else if('M' === settings.month){
			month = date.getMonth();
			month = shortMonths[month];
		}
		else if('MM' === settings.month){
			month = date.getMonth();
			month = months[month];
		}
		return month;
	}
	
	function getYear(){
		//Format Year
		if('yy' === settings.year) {
			year = date.getFullYear().toString(); 
			year = year.substr(2,2);
		}
		else if('yyyy' === settings.year) {
			year  = date.getFullYear().toString(); 
		}
		return year;
	}
 	    
}
	
}(jQuery));
