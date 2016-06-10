function MailSuggestCtrl(){

	var self = this;
	self.answer_candidate_array = new Array();
	self.current_answer_candidate = null;
	self.current_candidate_num = 0;
	self.current_candidate_sentence_array = new Array();
	self.loading_visible = true;

}



MailSuggestCtrl.prototype.initialize = function(){

	var self = this;
	self.mail_suggest_vm = new MailSuggestVM();
	ko.applyBindings(self.mail_suggest_vm, document.getElementById('suggested_mail') );
	self.mail_suggest_vm.initialize();

}



// function to be used on status: mail_suggestion


MailSuggestCtrl.prototype.set_mail_candidate = function(answer_candidate_array){

	var self = this;
	self.answer_candidate_array = answer_candidate_array;
	self.current_answer_candidate = answer_candidate_array[0];
	self.current_candidate_num = 0;
	self.show_suggested_mail();

}


MailSuggestCtrl.prototype.next = function(){

	var self = this;
	if(self.answer_candidate_array[self.current_candidate_num + 1]){
		self.current_candidate_num  = self.current_candidate_num + 1;
		self.current_answer_candidate = self.answer_candidate_array[self.current_candidate_num];
		self.show_suggested_mail();
		return true;
	}
	return false;
}


MailSuggestCtrl.prototype.show_suggested_mail = function(){

	var self = this;
	var mail_cocntext = self.current_answer_candidate.body[0];
	self.current_candidate_sentence_array = mail_cocntext.split('\n');
	self.mail_suggest_vm.set_context(self.current_candidate_sentence_array);

}


// function to be used on status: row_selection

MailSuggestCtrl.prototype.become_select_status = function(in_num){

	var self = this;
	//var from_line = 0;
	//var to_line = self.current_candidate_sentence_array.length;
	self.mail_suggest_vm.select_all(self.current_candidate_sentence_array);

}



MailSuggestCtrl.prototype.highlight_row_from = function(in_num){

	var self = this;
	self.mail_suggest_vm.set_from(in_num);

}


MailSuggestCtrl.prototype.highlight_row_to = function(in_num){

	var self = this;
	self.mail_suggest_vm.set_to(in_num);

}

