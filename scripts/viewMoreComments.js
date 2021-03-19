function viewMoreComments() {
	var post_info = document.getElementsByClassName("\
													stjgntxs ni8dbmo4 l82x9zwi \
													uo3d90p7 h905i5nu monazrh9"
													)[0];
	if(post_info == undefined) {
		post_info = document;
	}
	// if the container has several classes 'cwj9ozl2 j83agx80 
	//										 cbu4d94t buofh1pr 
	//										 ni8dbmo4 stjgntxs 
	//										 du4w35lb'
	var	post_comments = document.getElementsByClassName("\
														cwj9ozl2 j83agx80 cbu4d94t \
														buofh1pr ni8dbmo4 stjgntxs \
														du4w35lb"
														)[0];

	// if the container has two classes 'cwj9ozl2 tvmbv18p'
	if(post_comments == undefined) {
		
		post_comments = post_info.getElementsByClassName("\
														cwj9ozl2 tvmbv18p"
														)[0];
	}
	// if the container has only one class 'cwj9ozl2'
	if(post_comments == undefined) {
		post_comments = post_info.getElementsByClassName("\
														cwj9ozl2"
														)[1];
	}

	// retrieve the list of comments enclosed in UL liste
	var ul = post_comments.getElementsByTagName("UL");
	if(ul[0].classList.length > 0)
		var view_more = ul[1];
	else
		var view_more = ul[0];

	view_more = view_more.nextElementSibling.
					getElementsByClassName("\
											d2edcug0 hpfvmrgz qv66sw1b c1et5uql \
											oi732d6d ik7dh3pa fgxwclzu a8c37x1j \
											keod5gw0 nxhoafnm aigsh9s9 d9wwppkn \
											fe6kdd0r mau55g9w c8b282yb iv3no6db \
											jq4qci2q a3bd9o3v lrazzd5p m9osqain"
											)[0];
	view_more.click();
}