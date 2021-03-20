/*
	Function to extract the comments of a group/page posts. To retrieve the comments,
	you should click on the post link and display all the comments manually or using 
	seeMoreComments.js script. In addition, since some comments are long, it is recommended 
	to execute readMore.js script to unhide the hidden part of the comments.

	Note: copy and paste the function code in the browser console to download the comments
	as Json file (follow the guideline in the Readme).
*/
function cmt_crawl() {	
	var filename;
	// extract the post ID to use it as a filename
	var _url = window.location.pathname.split("/");
	if(_url[_url.length-1] == "") filename = _url[_url.length-2];
	else filename = _url[_url.length-1];
	
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
		post_info = document.getElementsByClassName("\
													sq6gx45u buofh1pr cbu4d94t \
													j83agx80"
													)[0];
	}
	
	if(post_info == undefined) {
		post_info = document;
	}
	// retreive the post reactions tab
	var post_reactions = post_info.getElementsByClassName("\
								l9j0dhe7"
								)[0];
	// retrieve the number of likes/reactions
	var post_nb_likes = post_reactions.getElementsByClassName("\
								gpro0wi8 pcp91wgn\
								")[0].innerText;
	// retrieve the number of shares
	var post_nb_shares = post_reactions.getElementsByClassName("\
								d2edcug0 hpfvmrgz \
								qv66sw1b c1et5uql \
								oi732d6d ik7dh3pa \
								fgxwclzu a8c37x1j \
								keod5gw0 nxhoafnm \
								aigsh9s9 d9wwppkn \
								fe6kdd0r mau55g9w \
								c8b282yb iv3no6db \
								jq4qci2q a3bd9o3v \
								knj5qynh m9osqain"
								);
	// get the number of shares and remove the word "shares" (keep only the number)
	if(post_nb_shares.length > 1)
		post_nb_shares = (post_nb_shares[1].innerText).split(' ')[0];
	else
		post_nb_shares = 0;
	
	// get the comments container
	// if the container has a class list 'cwj9ozl2 j83agx80 
	//				      cbu4d94t buofh1pr 
	//				      ni8dbmo4 stjgntxs 
	//				      du4w35lb'
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
			// create a temporary element to keep the plan text after preprocessing
			var div = document.createElement("div");
			for(var p=0; p<comment_text[0].childNodes.length; p++) {
				if(p > 0) div.innerHTML += "\n";
				// each paragraph of the comment in case of several paragraphes
				var paragraph = comment_text[0].childNodes[p];
				if(paragraph.childNodes.length > 0) {
					// number of sub-elements of the comment
					for(var node=0; node<paragraph.childNodes.length; node++) {
						// if the element a plan text
						if(paragraph.childNodes[node].outerHTML == undefined) {
							div.innerHTML += paragraph.childNodes[node].data;
						}
						else {
							// if the element is an image
							if(paragraph.childNodes[node].firstChild.alt != undefined) {
								div.innerHTML += paragraph.childNodes[node].firstChild.alt;
							}
							// if the element is a hashtag
							else {
								div.innerHTML += paragraph.childNodes[node].firstChild.data;
							}
						}
					}
				}
			}
			comment_text = div.innerHTML;
		
			// extract the user profile link
			var user_profile = comment_node.getElementsByClassName("\
										oajrlxb2 g5ia77u1 qu0x051f \
										esr5mh6w e9989ue4 r7d6kgcz \
										rq0escxv nhd2j8a9 nc684nl6 \
										p7hjln8o kvgmc6g5 cxmmr5t8 \
										oygrvhab hcukyx3x jb3vyjys \
										rz4wbd8a qt6c0cv9 a8nywdso \
										i1ao9s8h esuyzwwr f1sip0of \
										lzcic4wl gmql0nx0 gpro0wi8"
										);
			// if "Top fan" is retrieved
			if(user_profile[0].tagName == "DIV") user_profile = user_profile[1];
			// if the "user name" is retrieved
			else if(user_profile[0].tagName == "A") user_profile = user_profile[0];
			
			user_profile =user_profile.href.split("comment_id")[0]; // page
			user_profile =user_profile.split("__cft__[0]")[0]; //group
			
			// extract the user name
			var user_name = comment_node.getElementsByClassName("pq6dq46d")[0].
										firstChild.innerHTML;
			// extract the number of replies
			var nb_replies = post_comments[cmt].getElementsByClassName("d2edcug0 \
										hpfvmrgz \
										qv66sw1b \
										c1et5uql \
										oi732d6d \
										ik7dh3pa \
										fgxwclzu \
										a8c37x1j \
										keod5gw0 \
										nxhoafnm \
										aigsh9s9 \
										d9wwppkn \
										fe6kdd0r \
										mau55g9w \
										c8b282yb \
										iv3no6db \
										jq4qci2q \
										a3bd9o3v \
										lrazzd5p \
										m9osqain"
										);
			if(nb_replies.length == 0)
				nb_replies = '0';
			else
				// remove the word "replies"
				nb_replies = (nb_replies[0].innerText).split(' ')[0];
			// retrieve the comment date
			var comment_date = post_comments[cmt].getElementsByTagName("UL")[0].
											getElementsByClassName("\
												oajrlxb2 g5ia77u1 \
												qu0x051f esr5mh6w \
												e9989ue4 r7d6kgcz \
												rq0escxv nhd2j8a9 \
												nc684nl6 p7hjln8o \
												kvgmc6g5 cxmmr5t8 \
												oygrvhab hcukyx3x \
												jb3vyjys rz4wbd8a \
												qt6c0cv9 a8nywdso \
												i1ao9s8h esuyzwwr \
												f1sip0of lzcic4wl \
												m9osqain gpro0wi8 \
												knj5qynh"
												)[0].
											firstChild.innerText;
			// retrieve the number of reactions
			var nb_reactions = 0;
			if(user_comment.childNodes.length > 1) {
				var react_node = user_comment.childNodes[1];
				// number of reactions
				var nb_reactions = react_node.getElementsByClassName("\
											m9osqain e9vueds3 \
											knj5qynh j5wam9gi \
											jb3vyjys n8tt0mok \
											qt6c0cv9 hyh9befq \
											g0qnabr5"
											)[0].innerText;
			}
			// format the comment information as JSON
			if(cmt > 0) list_comments += ',';
			list_comments += '\n\t{\n\t\t"user_name":"'
							+user_name
							+'",\n\t\t"user_profile":"'
							+user_profile
							+'",\n\t\t"comment_text":"'
							+(comment_text)
							+'",\n\t\t"nb_reactions":"'
							+nb_reactions
							+'",\n\t\t"comment_date":"'
							+comment_date
							+'",\n\t\t"nb_replies":"'
							+nb_replies
							+'"\n\t}';
		}
	}

	// create JSON file with all information
	var csv_file = '{"post_ID":'
					+filename
					+',"post_nb_reactions":"'
					+post_nb_likes
					+'","post_nb_shares":"'
					+post_nb_shares
					+'","post_nb_comments":"'
					+post_comments.length
					+'","comments":['
					+list_comments
					+']}';
	
	let csvContent = "data:text/json;charset=utf-8," + encodeURIComponent(csv_file);
	var encodedUri = (csvContent);
	//encodedUri = encodedUri.replace('#', '%23');
	//console.log(encodedUri);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", filename+".json");
	document.body.appendChild(link);
	link.click();
}
