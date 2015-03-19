var review = new Array(5);
for (var i = 2; i <= 4; i=i+2) {
	review[i] = new Array (3);
}

review[1]="My friends and I had a lunch here. When we looked around campus after class, we found it easily. There was a line out of the door but the line moved quickly. I loved everything on the menu and what I ordered tasted awesome.";
review[3]="This place has a good location. It’s convenient for me to find something to eat near school. I think it’s clean and staffs came by to pick up my tray when I was done. I really enjoyed my meal, though there was a long line. ";


review[2][1]="I have tight class schedules and want to save time, so I love going to this restaurant. Their waiting time is reasonable, food is delicious, and service is friendly. I prefer a quick bite, so this restaurant is my top choice!";
review[2][2]="If you have tight class schedules and want to save time, you will love going to this restaurant. Their waiting time is reasonable, food is delicious, and service is friendly. If you prefer a quick bite, this restaurant will be your top choice!";

review[4][1]="I always care about what goes into my food, so I enjoy dining here for its healthy meals. The menu offers a diverse selection of creative dishes, and the decor is fun and eclectic. It may very well become my new favorite restaurant!";
review[4][2]="If you always care about what goes into your food, you will enjoy dining here for its healthy meals. The menu offers a diverse selection of creative dishes, and the decor is fun and eclectic. It may very well become your new favorite restaurant!";


function printreview(num1, num2, reviewnamenum)
{
	$('reviewnamenum').value = parseInt($('reviewnamenum').value) + 1;
	reviewnamenum++;
	var reviewname=String.fromCharCode(64+reviewnamenum);
	var reviewcontent="";
	if ((num1==2) || (num1==4)) {
		reviewcontent=review[num1][num2];
	} else {
		reviewcontent=review[num1];
	}
	document.write('<div style="text-align: center;"><b>A Review for <u>Restaurant '+reviewname+'</u></b></div><br>');
	document.write('<blockquote>'+reviewcontent+'</blockquote>');
}

function printreview2(num1, num2, reviewnamenum)
{
	var reviewname=String.fromCharCode(64+reviewnamenum);

	var reviewcontent="";
	if ((num1==2) || (num1==4)) {
		reviewcontent=review[num1][num2];
	} else {
		reviewcontent=review[num1];
	}
	document.write('<div style="text-align: center;"><b>A Review for <u>Restaurant '+reviewname+'</u></b>: Continued</div><br>');
	document.write('<blockquote>'+reviewcontent+'</blockquote>');

}