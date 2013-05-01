jquery-date
===========

Easy to use Date Formatting for jQuery plugin.

* jQuery plugin to work with dates
* Automatically returns the date in a given format
* Works in all major browsers including IE6 and mobile.

Installation
-------------------------
Download the jquery.date.js and upload it to your server. Include the js file in your html file.

    <script type="text/javascript" src="jquery.date.js"></script>

Options
-------------------------
* <b>day</b>: <i>Optional formatting of day.</i> Default is 'dd'
* <b>month</b>: <i>Optional formatting of month.</i> Default is 'mm'
* <b>year</b>: <i>Optional formatting of year.</i> Default is 'yyyy'
* <b>seperator</b>: <i>Optional seperator used to separate day, month and year.</i> Default is '-'
* <b>format</b>: <i>Optional format string which is combination of day month and year attributes

The following characters are recognized in the format parameter string       
<table width="100%">
  <tr>
    <th>Format</th><th>Description</th><th>Example returned values</th>
  </tr>
  <tr>
    <td><b>Day</b></td><td>-</td><td>-</td>
  </tr>
  <tr>
    <td>d</td><td>Day of the month without leading zeros</td><td>1 to 31</td>
  </tr>
   <tr>
    <td>dd</td><td>Day of the month, 2 digits with leading zeros</td><td>01 to 31</td>
  </tr>
  <tr>
    <td>D</td><td>A textual representation of a day, three letters</td><td>Mon through Sun</td>
  </tr>
  <tr>
    <td><b>Month</b></td><td>-</td><td>-</td>
  </tr>
  <tr>
    <td>m</td><td>Numeric representation of a month, without leading zeros</td><td>1 through 12</td>
  </tr>
   <tr>
    <td>mm</td><td>Numeric representation of a month, with leading zeros</td><td>01 through 12</td>
  </tr>
   <tr>
    <td>M</td><td>A short textual representation of a month, three letters</td><td>Jan through Dec</td>
  </tr>
   <tr>
    <td>MM</td><td>A full textual representation of a month, such as January or March</td><td>January through December</td>
  </tr>
  <tr>
    <td><b>Year</b></td><td>-</td><td>-</td>
  </tr>
  <tr>
    <td>yy</td><td>A two digit representation of a year</td><td>Examples: 99 or 13</td>
  </tr>
   <tr>
    <td>yyyy</td><td>A full numeric representation of a year, 4 digits</td><td>Examples: 1999 or 2013</td>
  </tr>
</table>



Usage
-------------------------
<h3>1. Simple</h3>
    var date = $.Date(); //This returns current date in format 'yyyy-mm-dd' 

<h3>2. Advanced</h3>

    var date = $.Date({
                  day : 'dd',
                  month: 'M',
                  year: 'yy',
                  seperator: ':'
                });

<h4>OR</h4>

    var date = $.Date({
                  format:'dd/mm/yyyy'  //this will return current date of the form 'dd/mm/yyyy'
               });
    
       
