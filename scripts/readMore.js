function readMore() {
	// retrieve the post container
	var post_message = document.getElementsByClassName("\
														kvgmc6g5 cxmmr5t8 oygrvhab \
														hcukyx3x c1et5uql ii04i59q"
														)[0];
	if(post_message == undefined) {
		post_message = document.getElementsByClassName("\
														kvgmc6g5 cxmmr5t8 oygrvhab \
														hcukyx3x c1et5uql"
														)[0].innerHTML;
	}
	else {
		post_message = post_message.childNodes[0].innerHTML;
	}
	
	var post_info = document.getElementsByClassName("\
													stjgntxs ni8dbmo4 l82x9zwi \
													uo3d90p7 h905i5nu monazrh9"
													)[0];
	
	if(post_info == undefined) {
		post_info = document;
	}
	
	// get the comments container
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
	// retrieve the list of comments enclosed in UL list
	if(post_comments.getElementsByTagName("UL")[0].parentNode.tagName == "FORM") {
		post_comments = post_comments.getElementsByTagName("UL")[1].childNodes;
	}
	else {
		post_comments = post_comments.getElementsByTagName("UL")[0].childNodes;
	}
	// extract information related to comments (comment text, user, user_profile, 
	// nb_reactions and nb_replies)
	var list_comments = '';
	for(var cmt=0; cmt<post_comments.length; cmt++){
		// each comment is enclosed within a DIV element with a class value (_680y)
		var user_comment = post_comments[cmt].getElementsByClassName("\
																	_680y"
																	)[0];
		// if the post does not have comments
		if(user_comment == undefined) {
			break;
		}
		var comment_node = user_comment.childNodes[0];
		// exatract the comment text
		var comment_text = comment_node.getElementsByClassName("\
																kvgmc6g5 cxmmr5t8 \
																oygrvhab hcukyx3x \
																c1et5uql"
																);
		if(comment_text.length > 0) {
			// retrieve the "see more" button
			if(comment_text[0].lastChild.lastChild.tagName == "DIV" &&
				comment_text[0].lastChild.lastChild.classList == "oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl oo9gr5id gpro0wi8 lrazzd5p"
				) {
				comment_text[0].lastChild.lastChild.click();
			}
		}
	}
}