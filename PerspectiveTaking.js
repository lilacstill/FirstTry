
var review = new Array(5);
for (var i = 2; i <= 4; i=i+2) {
	review[i] = new Array (3);
}

review[1]="My friends and I had a lunch here. When we looked around campus after class, we found it easily. There was a line out of the door but the line moved quickly. I loved everything on the menu and what I ordered tasted awesome.";
review[3]="This place has a good location. It’s convenient for me to find something to eat near school. I think it’s clean and staffs came by to pick up my tray when I was done. I really enjoyed my meal, though there was a long line. ";

review[2][1]="I loved my experience here. I had classes after lunch, so I went to this restaurant for a quick bite. Their waiting time is pretty reasonable, and their service is super friendly. I look forward to going back again after my first visit!";
review[2][2]="You will love your experience here. If you had classes after lunch, you could go to this restaurant for a quick bite. Their waiting time is pretty reasonable, and their service is super friendly. You would look forward to going back again after your first visit!";

review[4][1]="I am disappointed by this restaurant. Although its location close to school is convenient for me, I find it cuts corners on quality. The food is mediocre and the environment is messy. I wouldn’t want to consider going there unless they make significant improvements.";
review[4][2]="You will be disappointed by this restaurant. Although its location close to school could be convenient for you, you will find it cuts corners on quality. The food is mediocre and the environment is messy. You wouldn’t want to consider going there unless they make significant improvements.";



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
